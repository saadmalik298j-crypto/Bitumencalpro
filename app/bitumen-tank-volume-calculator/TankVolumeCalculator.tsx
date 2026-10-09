"use client";
import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

export default function TankVolumeCalculator() {
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
  const [density, setDensity] = useState("1030");
  const [partialFill, setPartialFill] = useState(false);
  const [fillPercent, setFillPercent] = useState("100");
  const [result, setResult] = useState<null | { volumeM3: number; weightTonnes: number; weightTons: number; litres: number }>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const d = parseFloat(diameter);
    const l = parseFloat(length);
    const rho = parseFloat(density);
    const fill = partialFill ? parseFloat(fillPercent) / 100 : 1;
    if (!d || !l || !rho) { setError("Please fill all required fields."); return; }
    const r = d / 2;
    const fullVolume = Math.PI * r * r * l;
    const volumeM3 = fullVolume * fill;
    const litres = volumeM3 * 1000;
    const weightTonnes = (volumeM3 * rho) / 1000;
    const weightTons = weightTonnes * 1.10231;
    setResult({ volumeM3, weightTonnes, weightTons, litres });
  }

  function reset() {
    setDiameter(""); setLength(""); setDensity("1030");
    setFillPercent("100"); setResult(null); setError("");
  }

  const inp = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm";
  const lbl = "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <div id="tank-volume-calculator" className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-[2rem] p-6 md:p-8 shadow-2xl max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={lbl}>Tank Diameter (m)</label>
          <input id="tvc-diameter" type="number" min="0" step="0.1" placeholder="e.g. 2.0" value={diameter} onChange={(e) => setDiameter(e.target.value)} className={inp} />
          <p className="text-white/40 text-xs mt-1">Outer or inner diameter in metres.</p>
        </div>
        <div>
          <label className={lbl}>Tank Length (m)</label>
          <input id="tvc-length" type="number" min="0" step="0.1" placeholder="e.g. 6.0" value={length} onChange={(e) => setLength(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Bitumen Density (kg/m\u00b3)</label>
          <input id="tvc-density" type="number" min="0" value={density} onChange={(e) => setDensity(e.target.value)} className={inp} />
          <p className="text-white/40 text-xs mt-1">Hot bitumen: ~1,030 kg/m\u00b3. Adjust for grade.</p>
        </div>
        <div className="flex flex-col justify-end">
          <label className="flex items-center gap-3 cursor-pointer group mb-3">
            <div className={`relative w-11 h-6 rounded-full transition-colors ${partialFill ? "bg-blue-500" : "bg-white/20"}`} onClick={() => setPartialFill(!partialFill)}>
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${partialFill ? "translate-x-6" : "translate-x-1"}`} />
            </div>
            <span className="text-white/70 text-sm font-semibold">Partial fill level</span>
          </label>
          {partialFill && (
            <div>
              <label className={lbl}>Fill Level (%)</label>
              <input id="tvc-fill" type="number" min="1" max="100" value={fillPercent} onChange={(e) => setFillPercent(e.target.value)} className={inp} />
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      <div className="flex gap-3">
        <button id="tvc-calculate" onClick={calculate} className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0">
          <Calculator size={18} /> Calculate Volume
        </button>
        <button id="tvc-reset" onClick={reset} className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all" aria-label="Reset"><RefreshCw size={18} /></button>
      </div>
      {result && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl p-5">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Tank Volume</p>
            <p className="text-3xl font-black text-white">{result.volumeM3.toFixed(3)} <span className="text-lg text-white/60">m\u00b3</span></p>
            <p className="text-white/50 text-sm mt-1">{result.litres.toFixed(0)} litres</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-2xl p-5">
            <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Bitumen Weight</p>
            <p className="text-3xl font-black text-white">{result.weightTonnes.toFixed(2)} <span className="text-lg text-white/60">tonnes</span></p>
            <p className="text-white/50 text-sm mt-1">{result.weightTons.toFixed(2)} US tons</p>
          </div>
        </div>
      )}
      {!partialFill && (
        <p className="text-white/40 text-xs mt-4 text-center">Full tank calculation. Toggle partial fill above to enter a percentage.</p>
      )}
    </div>
  );
}
