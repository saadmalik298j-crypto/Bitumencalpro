"use client";
import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

type FillMode = "full" | "percent" | "dipstick";
type HeadType = "flat" | "elliptical" | "hemispherical";

export default function TankVolumeCalculator() {
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
  const [headType, setHeadType] = useState<HeadType>("flat");

  // Temperature & Density
  const [tempC, setTempC] = useState("160");
  const [baseDensity, setBaseDensity] = useState("1030"); // density at 15°C

  // Fill Inputs
  const [fillMode, setFillMode] = useState<FillMode>("full");
  const [fillPercent, setFillPercent] = useState("100");
  const [dipDepth, setDipDepth] = useState("");

  const [result, setResult] = useState<null | {
    fullShellM3: number;
    headVolM3: number;
    totalCapacityM3: number;
    liquidM3: number;
    liquidLitres: number;
    liquidGallons: number;
    effectiveDensity: number;
    weightTonnes: number;
    weightTons: number;
    fillPercentShare: number;
  }>(null);

  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const d = parseFloat(diameter);
    const l = parseFloat(length);
    const t = parseFloat(tempC || "160");
    const rho15 = parseFloat(baseDensity || "1030");

    if (!d || d <= 0 || !l || l <= 0) {
      setError("Please enter valid positive inside diameter and length.");
      return;
    }

    if (!rho15 || rho15 <= 0) {
      setError("Please enter a valid bitumen density.");
      return;
    }

    // 1. Calculate Temperature Corrected Density: ρ(T) = ρ(15°C) / (1 + 0.00063 * (T - 15))
    const rhoT = rho15 / (1 + 0.00063 * (t - 15));

    // 2. Geometry calculations (Straight Cylinder)
    const r = d / 2;
    const shellVolM3 = Math.PI * r * r * l;

    // 3. Dished Ends volume (both heads combined)
    let headVolM3 = 0;
    if (headType === "elliptical") {
      // 2:1 Elliptical heads = 2 * (π * D³ / 24) = π * D³ / 12
      headVolM3 = (Math.PI * Math.pow(d, 3)) / 12;
    } else if (headType === "hemispherical") {
      // Hemispherical heads = 2 * (π * D³ / 12) = π * D³ / 6
      headVolM3 = (Math.PI * Math.pow(d, 3)) / 6;
    }

    const totalCapacityM3 = shellVolM3 + headVolM3;

    // 4. Determine Liquid Volume & Fill Share
    let liquidM3 = 0;
    let fillShare = 1.0;

    if (fillMode === "full") {
      liquidM3 = totalCapacityM3;
      fillShare = 1.0;
    } else if (fillMode === "percent") {
      const pct = parseFloat(fillPercent || "100") / 100;
      fillShare = Math.min(1.0, Math.max(0, pct));
      liquidM3 = totalCapacityM3 * fillShare;
    } else if (fillMode === "dipstick") {
      const h = parseFloat(dipDepth);
      if (isNaN(h) || h < 0) {
        setError("Please enter a valid liquid dip depth.");
        return;
      }

      if (h >= d) {
        liquidM3 = totalCapacityM3;
        fillShare = 1.0;
      } else if (h === 0) {
        liquidM3 = 0;
        fillShare = 0;
      } else {
        // Circular Segment Formula for horizontal shell:
        // Area = r² * arccos((r - h) / r) - (r - h) * sqrt(2*r*h - h²)
        const cosVal = Math.max(-1, Math.min(1, (r - h) / r));
        const segmentArea = r * r * Math.acos(cosVal) - (r - h) * Math.sqrt(2 * r * h - h * h);
        const liquidShellM3 = segmentArea * l;

        // Approximate head fill proportional to depth ratio
        const headFillFactor = h / d;
        const liquidHeadM3 = headVolM3 * headFillFactor;

        liquidM3 = liquidShellM3 + liquidHeadM3;
        fillShare = liquidM3 / totalCapacityM3;
      }
    }

    const liquidLitres = liquidM3 * 1000;
    const liquidGallons = liquidLitres * 0.264172;
    const weightKg = liquidM3 * rhoT;
    const weightTonnes = weightKg / 1000;
    const weightTons = weightTonnes * 1.10231;

    setResult({
      fullShellM3: shellVolM3,
      headVolM3,
      totalCapacityM3,
      liquidM3,
      liquidLitres,
      liquidGallons,
      effectiveDensity: rhoT,
      weightTonnes,
      weightTons,
      fillPercentShare: fillShare * 100,
    });
  }

  function reset() {
    setDiameter("");
    setLength("");
    setHeadType("flat");
    setTempC("160");
    setBaseDensity("1030");
    setFillMode("full");
    setFillPercent("100");
    setDipDepth("");
    setResult(null);
    setError("");
  }

  const inp =
    "w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm";
  const lbl = "block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <div
      id="tank-volume-calculator"
      className="bg-slate-900 border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {/* Inside Diameter */}
        <div>
          <label className={lbl}>Inside Diameter (m)</label>
          <input
            id="tvc-diameter"
            type="number"
            min="0"
            step="0.05"
            placeholder="e.g. 2.0 or 3.0"
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
            className={inp}
          />
          <p className="text-white/40 text-xs mt-1">Inside shell diameter (excluding insulation).</p>
        </div>

        {/* Straight Length */}
        <div>
          <label className={lbl}>Cylinder Length (m)</label>
          <input
            id="tvc-length"
            type="number"
            min="0"
            step="0.1"
            placeholder="e.g. 6.0 or 12.0"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className={inp}
          />
          <p className="text-white/40 text-xs mt-1">Straight shell length (excluding heads).</p>
        </div>

        {/* Tank Ends Type */}
        <div>
          <label className={lbl}>Tank Heads / Ends</label>
          <select
            value={headType}
            onChange={(e) => setHeadType(e.target.value as HeadType)}
            className={inp}
          >
            <option value="flat">Flat Ends (Standard Cylindrical)</option>
            <option value="elliptical">2:1 Elliptical Heads (+Volume)</option>
            <option value="hemispherical">Hemispherical Heads (+Volume)</option>
          </select>
        </div>

        {/* Tank Temperature */}
        <div>
          <label className={lbl}>Storage Temperature (°C)</label>
          <input
            type="number"
            min="0"
            max="250"
            value={tempC}
            onChange={(e) => setTempC(e.target.value)}
            className={inp}
          />
          <p className="text-white/40 text-xs mt-1">Standard hot storage: 150–160°C. Cold: 15°C.</p>
        </div>

        {/* Base Density at 15°C */}
        <div>
          <label className={lbl}>Base Density @ 15°C (kg/m³)</label>
          <input
            id="tvc-density"
            type="number"
            min="800"
            max="1200"
            value={baseDensity}
            onChange={(e) => setBaseDensity(e.target.value)}
            className={inp}
          />
          <p className="text-white/40 text-xs mt-1">Default 1,030 kg/m³ (from supplier datasheet).</p>
        </div>

        {/* Fill Level Mode */}
        <div>
          <label className={lbl}>Fill Level Basis</label>
          <select
            value={fillMode}
            onChange={(e) => setFillMode(e.target.value as FillMode)}
            className={inp}
          >
            <option value="full">100% Full Capacity</option>
            <option value="percent">Percentage of Volume (%)</option>
            <option value="dipstick">Liquid Dip Depth (h in metres)</option>
          </select>
        </div>

        {/* Conditional Fill Field */}
        {fillMode === "percent" && (
          <div className="sm:col-span-2 lg:col-span-3">
            <label className={lbl}>Volume Fill Percentage (%)</label>
            <input
              id="tvc-fill"
              type="number"
              min="1"
              max="100"
              placeholder="e.g. 40"
              value={fillPercent}
              onChange={(e) => setFillPercent(e.target.value)}
              className={inp}
            />
          </div>
        )}

        {fillMode === "dipstick" && (
          <div className="sm:col-span-2 lg:col-span-3">
            <label className={lbl}>Dipstick Liquid Depth (h in metres)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder={diameter ? `e.g. 0.9 (Max: ${diameter} m)` : "e.g. 0.9"}
              value={dipDepth}
              onChange={(e) => setDipDepth(e.target.value)}
              className={inp}
            />
            <p className="text-white/40 text-xs mt-1">
              Measured from bottom of shell. Converts via circular segment geometry.
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm font-semibold mb-4 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <button
          id="tvc-calculate"
          onClick={calculate}
          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30 active:scale-[0.99]"
        >
          <Calculator size={18} /> Calculate
        </button>
        <button
          id="tvc-reset"
          onClick={reset}
          className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all"
          aria-label="Reset"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      {result && (
        <div className="mt-8 space-y-4 animate-fade-in border-t border-white/10 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Liquid Volume */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/40 rounded-2xl p-5 space-y-1">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-wider block">
                Bitumen Volume
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {result.liquidM3.toFixed(2)} <span className="text-lg text-white/60">m³</span>
              </p>
              <p className="text-white/50 text-xs font-mono mt-1">
                {result.liquidLitres.toLocaleString("en-US", { maximumFractionDigits: 0 })} Litres |{" "}
                {result.liquidGallons.toLocaleString("en-US", { maximumFractionDigits: 0 })} US Gal
              </p>
            </div>

            {/* Bitumen Weight */}
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/40 rounded-2xl p-5 space-y-1">
              <span className="text-teal-300 text-xs font-bold uppercase tracking-wider block">
                Bitumen Mass @ {tempC}°C
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {result.weightTonnes.toFixed(2)} <span className="text-lg text-white/60">tonnes</span>
              </p>
              <p className="text-white/50 text-xs font-mono mt-1">
                {result.weightTons.toFixed(2)} US short tons
              </p>
            </div>

            {/* Total Tank Capacity & Headroom */}
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/10 border border-purple-500/40 rounded-2xl p-5 space-y-1 sm:col-span-2 lg:col-span-1">
              <span className="text-purple-300 text-xs font-bold uppercase tracking-wider block">
                Tank Geometric Capacity
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {result.totalCapacityM3.toFixed(2)} <span className="text-lg text-white/60">m³</span>
              </p>
              <p className="text-white/50 text-xs mt-1">
                {result.fillPercentShare.toFixed(1)}% Full | Free: {(result.totalCapacityM3 - result.liquidM3).toFixed(2)} m³
              </p>
            </div>
          </div>

          {/* Density & Temp Correction Summary Bar */}
          <div className="bg-slate-950/80 border border-white/10 p-4 rounded-2xl text-xs text-white/80 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
            <div>
              <span className="text-white/40 block text-[10px] uppercase font-sans">Base Density @ 15°C:</span>
              <span className="text-blue-300 font-bold">{baseDensity} kg/m³</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase font-sans">Hot Density @ {tempC}°C:</span>
              <span className="text-teal-300 font-bold">{result.effectiveDensity.toFixed(1)} kg/m³ (ASTM D4311)</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase font-sans">Thermal Expansion Loss:</span>
              <span className="text-amber-300 font-bold">
                -{((1 - result.effectiveDensity / parseFloat(baseDensity)) * 100).toFixed(1)}% mass/m³
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
