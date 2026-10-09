"use client";
import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

export default function MillingsCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");
  const [useArea, setUseArea] = useState(false);
  const [depth, setDepth] = useState("");
  const [density, setDensity] = useState("1800");
  const [unit, setUnit] = useState<"metric" | "imperial">("imperial");
  const [result, setResult] = useState<null | {
    tons: number;
    tonnes: number;
    cubicYards: number;
    cubicMetres: number;
    looseYardsMin: number;
    looseYardsMax: number;
  }>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    let areaSqM = 0;
    let depthM = 0;
    let rawDensity = parseFloat(density);

    if (!rawDensity || rawDensity <= 0) {
      setError("Please enter a valid positive RAP density.");
      return;
    }

    // Auto-detect if user entered lb/ft³ (e.g. 112) instead of kg/m³ (e.g. 1800)
    let densityKgM3 = rawDensity;
    if (rawDensity < 300) {
      // 1 lb/ft³ = 16.0185 kg/m³
      densityKgM3 = rawDensity * 16.0185;
    }

    if (unit === "imperial") {
      const areaSqFt = useArea ? parseFloat(area) : parseFloat(length) * parseFloat(width);
      areaSqM = areaSqFt * 0.092903;
      depthM = (parseFloat(depth) / 12) * 0.3048;
    } else {
      areaSqM = useArea ? parseFloat(area) : parseFloat(length) * parseFloat(width);
      depthM = parseFloat(depth) / 1000;
    }

    if (!areaSqM || areaSqM <= 0 || !depthM || depthM <= 0) {
      setError("Please fill all required dimensions with valid positive numbers.");
      return;
    }

    const volM3 = areaSqM * depthM;
    const tonnes = (volM3 * densityKgM3) / 1000;
    const tons = tonnes * 1.10231;
    const cubicYards = volM3 * 1.30795;
    const looseYardsMin = cubicYards * 1.3;
    const looseYardsMax = cubicYards * 1.5;

    setResult({ tons, tonnes, cubicYards, cubicMetres: volM3, looseYardsMin, looseYardsMax });
  }

  function reset() {
    setLength("");
    setWidth("");
    setArea("");
    setDepth("");
    setDensity("1800");
    setResult(null);
    setError("");
  }

  const inp =
    "w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all text-sm";
  const lbl = "block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2";

  // Calculate lb/ft³ equivalent for display
  const currentDensNum = parseFloat(density) || 0;
  const lbFt3Equiv = currentDensNum < 300 ? currentDensNum : (currentDensNum / 16.0185).toFixed(1);

  return (
    <div
      id="millings-calculator"
      className="bg-slate-900 border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl max-w-3xl mx-auto"
    >
      {/* Unit switch */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div className="flex gap-2 bg-black/50 p-1.5 rounded-xl">
          {(["imperial", "metric"] as const).map((u) => (
            <button
              key={u}
              onClick={() => {
                setUnit(u);
                setResult(null);
                setError("");
              }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all capitalize ${
                unit === u
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {u === "imperial" ? "Imperial (ft / in)" : "Metric (m / mm)"}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {useArea ? (
          <div className="sm:col-span-2">
            <label className={lbl}>Area ({unit === "imperial" ? "ft²" : "m²"})</label>
            <input
              id="mc-area"
              type="number"
              min="0"
              placeholder={unit === "imperial" ? "e.g. 600" : "e.g. 55"}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className={inp}
            />
          </div>
        ) : (
          <>
            <div>
              <label className={lbl}>Length ({unit === "imperial" ? "ft" : "m"})</label>
              <input
                id="mc-length"
                type="number"
                min="0"
                placeholder={unit === "imperial" ? "e.g. 50" : "e.g. 15"}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className={inp}
              />
            </div>
            <div>
              <label className={lbl}>Width ({unit === "imperial" ? "ft" : "m"})</label>
              <input
                id="mc-width"
                type="number"
                min="0"
                placeholder={unit === "imperial" ? "e.g. 12" : "e.g. 4"}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className={inp}
              />
            </div>
          </>
        )}

        <div>
          <label className={lbl}>Compacted Depth ({unit === "imperial" ? "inches" : "mm"})</label>
          <input
            id="mc-depth"
            type="number"
            min="0"
            step="0.25"
            placeholder={unit === "imperial" ? "e.g. 4" : "e.g. 100"}
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className={inp}
          />
        </div>

        <div>
          <label className={lbl}>
            RAP Density (kg/m³) {unit === "imperial" && <span className="text-violet-300 font-mono">({lbFt3Equiv} lb/ft³)</span>}
          </label>
          <input
            id="mc-density"
            type="number"
            min="0"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            className={inp}
          />
          <p className="text-white/40 text-xs mt-1">
            Typical compacted RAP: 1,600–2,000 kg/m³ (100–125 lb/ft³). Default: 1,800.
          </p>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm font-semibold mb-4 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <button
          id="mc-calculate"
          onClick={calculate}
          className="flex-1 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-violet-500/30 active:scale-[0.99]"
        >
          <Calculator size={18} /> Calculate Millings
        </button>
        <button
          id="mc-reset"
          onClick={reset}
          className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all"
          aria-label="Reset"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      {result && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in border-t border-white/10 pt-6">
          <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/40 rounded-2xl p-5 space-y-1">
            <span className="text-violet-300 text-xs font-bold uppercase tracking-wider block">Weight</span>
            <p className="text-3xl font-black text-white">
              {result.tons.toFixed(2)} <span className="text-lg text-white/60">US tons</span>
            </p>
            <p className="text-white/50 text-sm mt-1">{result.tonnes.toFixed(2)} metric tonnes</p>
          </div>

          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/40 rounded-2xl p-5 space-y-1">
            <span className="text-teal-300 text-xs font-bold uppercase tracking-wider block">Compacted Volume</span>
            <p className="text-3xl font-black text-white">
              {result.cubicYards.toFixed(2)} <span className="text-lg text-white/60">yd³</span>
            </p>
            <p className="text-white/50 text-sm mt-1">{result.cubicMetres.toFixed(2)} m³ compacted</p>
          </div>

          <div className="sm:col-span-2 bg-slate-950/80 border border-white/10 p-4 rounded-2xl text-xs sm:text-sm text-white/80 flex flex-wrap justify-between items-center gap-2">
            <span>Estimated Loose Truck Delivery Volume (1.3× to 1.5×):</span>
            <span className="font-mono text-violet-300 font-bold">
              {result.looseYardsMin.toFixed(1)} – {result.looseYardsMax.toFixed(1)} yd³ loose
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
