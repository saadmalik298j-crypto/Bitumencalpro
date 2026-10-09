"use client";
import { useState } from "react";
import { Calculator, RefreshCw, Layers, Droplets } from "lucide-react";

type UnitMode = "metric" | "imperial";
type RateBasis = "residual" | "undiluted" | "diluted";

export default function TackCoatCalculator() {
  const [mode, setMode] = useState<UnitMode>("metric");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");
  const [useArea, setUseArea] = useState(false);
  
  // Rate & Parameters
  const [rate, setRate] = useState("0.25");
  const [rateBasis, setRateBasis] = useState<RateBasis>("undiluted");
  const [residuePercent, setResiduePercent] = useState("60");
  const [dilutionRatio, setDilutionRatio] = useState("0"); // 0 = undiluted, 1 = 1:1, 0.25 = 1:4 water:emulsion
  const [allowance, setAllowance] = useState("5"); // % loss allowance
  const [surfacesCount, setSurfacesCount] = useState("1");
  const [density, setDensity] = useState("1.00"); // kg/L or g/cm3

  const [result, setResult] = useState<null | {
    areaVal: number;
    sprayedVol: number; // L or gal
    sprayedMass: number; // kg or lb
    emulsionVol: number; // L or gal
    emulsionMass: number; // kg or lb
    waterVol: number; // L or gal
    residualMass: number; // kg or lb
    residualVol: number; // L or gal
    drums200L: number;
    drums55Gal: number;
    effectiveSprayRate: number;
    effectiveResidualRate: number;
  }>(null);

  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const l = parseFloat(length);
    const w = parseFloat(width);
    const a = parseFloat(area);
    const r = parseFloat(rate);
    const resPct = parseFloat(residuePercent || "60") / 100;
    const waterParts = parseFloat(dilutionRatio || "0"); // e.g. 1 for 1:1
    const allowPct = 1 + (parseFloat(allowance || "0") / 100);
    const surfaces = Math.max(1, parseInt(surfacesCount || "1", 10));
    const den = parseFloat(density || "1.0");

    let computedArea = 0;
    if (useArea) {
      computedArea = a;
    } else {
      computedArea = l * w;
    }

    if (!computedArea || computedArea <= 0 || !r || r <= 0) {
      setError("Please enter valid positive dimensions and application rate.");
      return;
    }

    const totalTackedArea = computedArea * surfaces;

    // Emulsion share in sprayed liquid = 1 / (1 + waterParts)
    const emulsionShare = 1 / (1 + waterParts);

    let sprayRate = 0; // in input units
    let residualRate = 0;

    if (rateBasis === "residual") {
      residualRate = r;
      // spray rate = residual rate / (residueShare * emulsionShare)
      sprayRate = residualRate / (resPct * emulsionShare);
    } else if (rateBasis === "undiluted") {
      // Input is undiluted emulsion rate
      // spray rate = input rate / emulsionShare
      const undilutedRate = r;
      sprayRate = undilutedRate / emulsionShare;
      residualRate = undilutedRate * resPct;
    } else {
      // Input is total diluted spray rate
      sprayRate = r;
      residualRate = sprayRate * emulsionShare * resPct;
    }

    // Calculations based on unit mode
    if (mode === "metric") {
      // Area in m², rate in kg/m² or L/m² (since density ≈ 1.0 kg/L, 1 kg/m² ≈ 1 L/m²)
      const sprayedMassBase = totalTackedArea * sprayRate; // kg
      const sprayedMass = sprayedMassBase * allowPct;
      const sprayedVol = sprayedMass / den; // Litres

      const emulsionVol = sprayedVol * emulsionShare;
      const emulsionMass = sprayedMass * emulsionShare;
      const waterVol = sprayedVol - emulsionVol;

      const residualMass = emulsionMass * resPct;
      const residualVol = residualMass / den;

      const drums200L = Math.ceil(emulsionVol / 200);
      const drums55Gal = Math.ceil(emulsionVol / 208.198);

      setResult({
        areaVal: totalTackedArea,
        sprayedVol,
        sprayedMass,
        emulsionVol,
        emulsionMass,
        waterVol,
        residualMass,
        residualVol,
        drums200L,
        drums55Gal,
        effectiveSprayRate: sprayRate,
        effectiveResidualRate: residualRate,
      });
    } else {
      // Imperial mode: Area in yd², rate in gal/yd²
      const sprayedVolBase = totalTackedArea * sprayRate; // Gallons
      const sprayedVol = sprayedVolBase * allowPct;
      const sprayedMass = sprayedVol * (den * 8.3454); // lb (1 gal water = 8.345 lb)

      const emulsionVol = sprayedVol * emulsionShare;
      const emulsionMass = sprayedMass * emulsionShare;
      const waterVol = sprayedVol - emulsionVol;

      const residualVol = emulsionVol * resPct;
      const residualMass = emulsionMass * resPct;

      const drums55Gal = Math.ceil(emulsionVol / 55);
      const drums200L = Math.ceil((emulsionVol * 3.78541) / 200);

      setResult({
        areaVal: totalTackedArea,
        sprayedVol,
        sprayedMass,
        emulsionVol,
        emulsionMass,
        waterVol,
        residualMass,
        residualVol,
        drums200L,
        drums55Gal,
        effectiveSprayRate: sprayRate,
        effectiveResidualRate: residualRate,
      });
    }
  }

  function reset() {
    setLength("");
    setWidth("");
    setArea("");
    setRate("0.25");
    setRateBasis("undiluted");
    setResiduePercent("60");
    setDilutionRatio("0");
    setAllowance("5");
    setSurfacesCount("1");
    setDensity("1.00");
    setResult(null);
    setError("");
  }

  const inp =
    "w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all text-sm";
  const lbl = "block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <div
      id="tack-coat-calculator"
      className="bg-slate-900 border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl max-w-4xl mx-auto"
    >
      {/* Mode Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div className="flex gap-2 bg-black/50 p-1.5 rounded-xl">
          {(["metric", "imperial"] as UnitMode[]).map((u) => (
            <button
              key={u}
              onClick={() => {
                setMode(u);
                setRate(u === "metric" ? "0.25" : "0.08");
                setResult(null);
              }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all capitalize ${
                mode === u
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {u === "metric" ? "Metric (m² / kg/m²)" : "Imperial (yd² / gal/yd²)"}
            </button>
          ))}
        </div>

        <div className="flex gap-2 bg-black/50 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setUseArea(false)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              !useArea ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
            }`}
          >
            Length × Width
          </button>
          <button
            onClick={() => setUseArea(true)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              useArea ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
            }`}
          >
            Direct Area
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {/* Area / Dimensions */}
        {useArea ? (
          <div className="sm:col-span-2 lg:col-span-3">
            <label className={lbl}>Total Area ({mode === "metric" ? "m²" : "yd²"})</label>
            <input
              id="tcc-area"
              type="number"
              min="0"
              placeholder={mode === "metric" ? "e.g. 3500" : "e.g. 800"}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className={inp}
            />
          </div>
        ) : (
          <>
            <div>
              <label className={lbl}>Length ({mode === "metric" ? "m" : "ft"})</label>
              <input
                id="tcc-length"
                type="number"
                min="0"
                placeholder={mode === "metric" ? "e.g. 1000" : "e.g. 60"}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className={inp}
              />
            </div>
            <div>
              <label className={lbl}>Width ({mode === "metric" ? "m" : "ft"})</label>
              <input
                id="tcc-width"
                type="number"
                min="0"
                placeholder={mode === "metric" ? "e.g. 3.5" : "e.g. 120"}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className={inp}
              />
              {!mode && null}
              {mode === "imperial" && (
                <p className="text-white/40 text-xs mt-1">Width × Length in feet will convert to yd².</p>
              )}
            </div>
            <div>
              <label className={lbl}>Number of Surfaces</label>
              <input
                type="number"
                min="1"
                value={surfacesCount}
                onChange={(e) => setSurfacesCount(e.target.value)}
                className={inp}
              />
              <p className="text-white/40 text-xs mt-1">e.g. 2 for base + binder lifts</p>
            </div>
          </>
        )}

        {/* Application Rate & Basis */}
        <div>
          <label className={lbl}>Rate Value ({mode === "metric" ? "kg/m²" : "gal/yd²"})</label>
          <input
            id="tcc-rate"
            type="number"
            min="0"
            step="0.005"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className={inp}
          />
        </div>

        <div>
          <label className={lbl}>Rate Basis (Spec Definition)</label>
          <select
            value={rateBasis}
            onChange={(e) => setRateBasis(e.target.value as RateBasis)}
            className={inp}
          >
            <option value="undiluted">Undiluted Emulsion Rate</option>
            <option value="residual">Residual Bitumen Target</option>
            <option value="diluted">Diluted Total Spray Rate</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Emulsion Residue (%)</label>
          <input
            id="tcc-residue"
            type="number"
            min="40"
            max="80"
            step="1"
            value={residuePercent}
            onChange={(e) => setResiduePercent(e.target.value)}
            className={inp}
          />
          <p className="text-white/40 text-xs mt-1">Default 60% (SS-1h/CSS-1h 57–62%)</p>
        </div>

        {/* Dilution & Allowance */}
        <div>
          <label className={lbl}>Water Dilution Ratio</label>
          <select
            value={dilutionRatio}
            onChange={(e) => setDilutionRatio(e.target.value)}
            className={inp}
          >
            <option value="0">No Dilution (Neat / 100% Emulsion)</option>
            <option value="1">1:1 Dilution (50% Water / 50% Emulsion)</option>
            <option value="0.25">1:4 Dilution (20% Water / 80% Emulsion)</option>
            <option value="0.5">1:2 Dilution (33% Water / 67% Emulsion)</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Spray Loss Allowance (%)</label>
          <input
            type="number"
            min="0"
            max="25"
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
            className={inp}
          />
          <p className="text-white/40 text-xs mt-1">5–10% typical for overlaps & waste</p>
        </div>

        <div>
          <label className={lbl}>Emulsion Density ({mode === "metric" ? "kg/L" : "g/cm³"})</label>
          <input
            type="number"
            min="0.9"
            max="1.2"
            step="0.01"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            className={inp}
          />
        </div>
      </div>

      {error && <p className="text-red-400 text-sm font-semibold mb-4 bg-red-500/10 p-3 rounded-xl border border-red-500/20">{error}</p>}

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          id="tcc-calculate"
          onClick={calculate}
          className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-teal-500/30 active:scale-[0.99]"
        >
          <Calculator size={18} /> Calculate 
        </button>
        <button
          id="tcc-reset"
          onClick={reset}
          className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all"
          aria-label="Reset"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      {/* Results Box */}
      {result && (
        <div className="mt-8 space-y-5 animate-fade-in border-t border-white/10 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Net Emulsion */}
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/40 rounded-2xl p-5 space-y-1">
              <span className="text-teal-300 text-xs font-bold uppercase tracking-wider block">
                Bitumen Emulsion
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {mode === "metric" ? (
                  <>{result.emulsionMass.toFixed(1)} <span className="text-sm text-white/60">kg</span></>
                ) : (
                  <>{result.emulsionVol.toFixed(1)} <span className="text-sm text-white/60">gal</span></>
                )}
              </p>
              <p className="text-xs text-white/70">
                {mode === "metric"
                  ? `${result.emulsionVol.toFixed(1)} Litres`
                  : `${result.emulsionMass.toFixed(1)} lb`}
              </p>
            </div>

            {/* Added Water */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/40 rounded-2xl p-5 space-y-1">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-wider block">
                Added Dilution Water
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {mode === "metric" ? (
                  <>{result.waterVol.toFixed(1)} <span className="text-sm text-white/60">L</span></>
                ) : (
                  <>{result.waterVol.toFixed(1)} <span className="text-sm text-white/60">gal</span></>
                )}
              </p>
              <p className="text-xs text-white/70">
                {dilutionRatio === "0" ? "Undiluted application" : "Water to mix on site/plant"}
              </p>
            </div>

            {/* Residual Bitumen */}
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/40 rounded-2xl p-5 space-y-1">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block">
                Residual Bitumen
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {mode === "metric" ? (
                  <>{result.residualMass.toFixed(1)} <span className="text-sm text-white/60">kg</span></>
                ) : (
                  <>{result.residualMass.toFixed(1)} <span className="text-sm text-white/60">lb</span></>
                )}
              </p>
              <p className="text-xs text-white/70">
                Bitumen left after water evaporation
              </p>
            </div>

            {/* Drums Needed */}
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/10 border border-purple-500/40 rounded-2xl p-5 space-y-1">
              <span className="text-purple-300 text-xs font-bold uppercase tracking-wider block">
                Drums Required
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {result.drums200L} <span className="text-sm text-white/60">drums</span>
              </p>
              <p className="text-xs text-white/70">
                Standard 200L / 55-gal drums
              </p>
            </div>
          </div>

          {/* Rates summary bar */}
          <div className="bg-slate-950/80 border border-white/10 p-4 rounded-2xl text-xs sm:text-sm text-white/80 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
            <div>
              <span className="text-white/40 block text-[10px] uppercase font-sans">Total Sprayed Volume:</span>
              <span className="text-teal-300 font-bold">
                {result.sprayedVol.toFixed(1)} {mode === "metric" ? "L" : "gal"} ({result.sprayedMass.toFixed(1)} {mode === "metric" ? "kg" : "lb"})
              </span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase font-sans">Calculated Spray Rate:</span>
              <span className="text-teal-300 font-bold">
                {result.effectiveSprayRate.toFixed(4)} {mode === "metric" ? "kg/m²" : "gal/yd²"}
              </span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase font-sans">Effective Residual Rate:</span>
              <span className="text-teal-300 font-bold">
                {result.effectiveResidualRate.toFixed(4)} {mode === "metric" ? "kg/m²" : "gal/yd²"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
