"use client";
import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

type UnitMode = "metric" | "imperial";

export default function TackCoatCalculator() {
  const [mode, setMode] = useState<UnitMode>("metric");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");
  const [useArea, setUseArea] = useState(false);
  const [rate, setRate] = useState("0.30");
  const [dilution, setDilution] = useState("50");
  const [density, setDensity] = useState("1.01");
  const [result, setResult] = useState<null | { bitumenKg: number; totalKg: number; litres: number; totalLitres: number }>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    let areaSqM = 0;
    let rateKgM2 = 0;
    if (mode === "metric") {
      areaSqM = useArea ? parseFloat(area) : parseFloat(length) * parseFloat(width);
      rateKgM2 = parseFloat(rate);
    } else {
      const areaSqYd = useArea ? parseFloat(area) : parseFloat(length) * parseFloat(width);
      areaSqM = areaSqYd * 0.836127;
      rateKgM2 = parseFloat(rate) * 0.542492;
    }
    const d = parseFloat(density);
    if (!areaSqM || !rateKgM2 || !d) { setError("Please fill all required fields."); return; }
    const bitumenKg = areaSqM * rateKgM2;
    const dilutionFactor = 1 + (parseFloat(dilution || "0") / 100);
    const totalKg = bitumenKg * dilutionFactor;
    const litres = bitumenKg / d;
    const totalLitres = totalKg / d;
    setResult({ bitumenKg, totalKg, litres, totalLitres });
  }

  function reset() {
    setLength(""); setWidth(""); setArea("");
    setRate("0.30"); setDilution("50"); setDensity("1.01");
    setResult(null); setError("");
  }

  const inp = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20 transition-all text-sm";
  const lbl = "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <div id="tack-coat-calculator" className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-[2rem] p-6 md:p-8 shadow-2xl max-w-3xl">
      {/* Unit toggle */}
      <div className="flex gap-2 mb-6 bg-black/30 p-1 rounded-xl w-fit">
        {(["metric", "imperial"] as UnitMode[]).map((u) => (
          <button key={u} onClick={() => { setMode(u); setRate(u === "metric" ? "0.30" : "0.055"); setResult(null); }}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all capitalize ${mode === u ? "bg-teal-500 text-white shadow-md" : "text-white/60 hover:text-white"}`}>
            {u === "metric" ? "Metric (m\u00b2 / kg/m\u00b2)" : "Imperial (yd\u00b2 / gal/yd\u00b2)"}
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
            <label className={lbl}>Area ({mode === "metric" ? "m\u00b2" : "yd\u00b2"})</label>
            <input id="tcc-area" type="number" min="0" placeholder={mode === "metric" ? "e.g. 1000" : "e.g. 1196"} value={area} onChange={(e) => setArea(e.target.value)} className={inp} />
          </div>
        ) : (
          <>
            <div>
              <label className={lbl}>Length ({mode === "metric" ? "m" : "yd"})</label>
              <input id="tcc-length" type="number" min="0" placeholder={mode === "metric" ? "e.g. 100" : "e.g. 110"} value={length} onChange={(e) => setLength(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>Width ({mode === "metric" ? "m" : "yd"})</label>
              <input id="tcc-width" type="number" min="0" placeholder={mode === "metric" ? "e.g. 10" : "e.g. 11"} value={width} onChange={(e) => setWidth(e.target.value)} className={inp} />
            </div>
          </>
        )}
        <div>
          <label className={lbl}>Application Rate ({mode === "metric" ? "kg/m\u00b2" : "gal/yd\u00b2"})</label>
          <input id="tcc-rate" type="number" min="0" step="0.01" value={rate} onChange={(e) => setRate(e.target.value)} className={inp} />
          <p className="text-white/40 text-xs mt-1">Typical: {mode === "metric" ? "0.20\u20130.50 kg/m\u00b2" : "0.04\u20130.10 gal/yd\u00b2"}. Confirm with your spec.</p>
        </div>
        <div>
          <label className={lbl}>Bitumen Density (kg/L)</label>
          <input id="tcc-density" type="number" min="0" step="0.01" value={density} onChange={(e) => setDensity(e.target.value)} className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label className={lbl}>Emulsion Dilution with Water (%)</label>
          <input id="tcc-dilution" type="number" min="0" max="100" value={dilution} onChange={(e) => setDilution(e.target.value)} className={inp} />
          <p className="text-white/40 text-xs mt-1">Enter 0 if applying undiluted neat tack coat. 50 = 1:1 dilution.</p>
        </div>
      </div>
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      <div className="flex gap-3">
        <button id="tcc-calculate" onClick={calculate} className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0">
          <Calculator size={18} /> Calculate Tack Coat
        </button>
        <button id="tcc-reset" onClick={reset} className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all" aria-label="Reset"><RefreshCw size={18} /></button>
      </div>
      {result && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-2xl p-5">
            <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Bitumen (net)</p>
            <p className="text-3xl font-black text-white">{result.bitumenKg.toFixed(1)} <span className="text-lg text-white/60">kg</span></p>
            <p className="text-white/50 text-sm mt-1">{result.litres.toFixed(1)} litres</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-5">
            <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-1">Total Emulsion (incl. dilution)</p>
            <p className="text-3xl font-black text-white">{result.totalKg.toFixed(1)} <span className="text-lg text-white/60">kg</span></p>
            <p className="text-white/50 text-sm mt-1">{result.totalLitres.toFixed(1)} litres</p>
          </div>
        </div>
      )}
    </div>
  );
}
