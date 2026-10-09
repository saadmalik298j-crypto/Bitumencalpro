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
  const [result, setResult] = useState<null | { tons: number; tonnes: number; cubicYards: number; cubicMetres: number }>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    let areaSqM = 0, depthM = 0;
    const d = parseFloat(density);
    if (unit === "imperial") {
      const areaSqFt = useArea ? parseFloat(area) : parseFloat(length) * parseFloat(width);
      areaSqM = areaSqFt * 0.092903;
      depthM = parseFloat(depth) / 12 * 0.3048;
    } else {
      areaSqM = useArea ? parseFloat(area) : parseFloat(length) * parseFloat(width);
      depthM = parseFloat(depth) / 1000;
    }
    if (!areaSqM || !depthM || !d) { setError("Please fill all required fields."); return; }
    const volM3 = areaSqM * depthM;
    const tonnes = (volM3 * d) / 1000;
    const tons = tonnes * 1.10231;
    const cubicYards = volM3 * 1.30795;
    setResult({ tons, tonnes, cubicYards, cubicMetres: volM3 });
  }

  function reset() {
    setLength(""); setWidth(""); setArea(""); setDepth("");
    setDensity("1800"); setResult(null); setError("");
  }

  const inp = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20 transition-all text-sm";
  const lbl = "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <div id="millings-calculator" className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-[2rem] p-6 md:p-8 shadow-2xl max-w-3xl">
      <div className="flex gap-2 mb-6 bg-black/30 p-1 rounded-xl w-fit">
        {(["imperial", "metric"] as const).map((u) => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); setError(""); }}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all capitalize ${unit === u ? "bg-violet-500 text-white shadow-md" : "text-white/60 hover:text-white"}`}>
            {u === "imperial" ? "Imperial (ft / in)" : "Metric (m / mm)"}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => setUseArea(false)} className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${!useArea ? "bg-white/15 text-white" : "text-white/50 hover:text-white"}`}>Length x Width</button>
        <button onClick={() => setUseArea(true)} className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${useArea ? "bg-white/15 text-white" : "text-white/50 hover:text-white"}`}>Enter Area Directly</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {useArea ? (
          <div className="sm:col-span-2">
            <label className={lbl}>Area ({unit === "imperial" ? "ft\u00b2" : "m\u00b2"})</label>
            <input id="mc-area" type="number" min="0" placeholder={unit === "imperial" ? "e.g. 1000" : "e.g. 93"} value={area} onChange={(e) => setArea(e.target.value)} className={inp} />
          </div>
        ) : (
          <>
            <div>
              <label className={lbl}>Length ({unit === "imperial" ? "ft" : "m"})</label>
              <input id="mc-length" type="number" min="0" placeholder={unit === "imperial" ? "e.g. 50" : "e.g. 15"} value={length} onChange={(e) => setLength(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>Width ({unit === "imperial" ? "ft" : "m"})</label>
              <input id="mc-width" type="number" min="0" placeholder={unit === "imperial" ? "e.g. 20" : "e.g. 6"} value={width} onChange={(e) => setWidth(e.target.value)} className={inp} />
            </div>
          </>
        )}
        <div>
          <label className={lbl}>Depth ({unit === "imperial" ? "inches" : "mm"})</label>
          <input id="mc-depth" type="number" min="0" step="0.5" placeholder={unit === "imperial" ? "e.g. 4" : "e.g. 100"} value={depth} onChange={(e) => setDepth(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>RAP Density (kg/m\u00b3)</label>
          <input id="mc-density" type="number" min="0" value={density} onChange={(e) => setDensity(e.target.value)} className={inp} />
          <p className="text-white/40 text-xs mt-1">Typical loose RAP: 1,600\u20132,000 kg/m\u00b3. Default: 1,800.</p>
        </div>
      </div>
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      <div className="flex gap-3">
        <button id="mc-calculate" onClick={calculate} className="flex-1 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 active:translate-y-0">
          <Calculator size={18} /> Calculate Millings
        </button>
        <button id="mc-reset" onClick={reset} className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all" aria-label="Reset"><RefreshCw size={18} /></button>
      </div>
      {result && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 rounded-2xl p-5">
            <p className="text-violet-300 text-xs font-bold uppercase tracking-wider mb-1">Weight (US tons)</p>
            <p className="text-3xl font-black text-white">{result.tons.toFixed(2)} <span className="text-lg text-white/60">tons</span></p>
            <p className="text-white/50 text-sm mt-1">{result.tonnes.toFixed(2)} metric tonnes</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-2xl p-5">
            <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Volume</p>
            <p className="text-3xl font-black text-white">{result.cubicYards.toFixed(2)} <span className="text-lg text-white/60">yd\u00b3</span></p>
            <p className="text-white/50 text-sm mt-1">{result.cubicMetres.toFixed(2)} m\u00b3</p>
          </div>
        </div>
      )}
    </div>
  );
}
