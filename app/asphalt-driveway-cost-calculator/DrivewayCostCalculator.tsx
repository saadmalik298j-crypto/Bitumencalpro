"use client";
import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

export default function DrivewayCostCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");
  const [useArea, setUseArea] = useState(false);
  const [thickness, setThickness] = useState("");
  const [density, setDensity] = useState("145");
  const [pricePerTon, setPricePerTon] = useState("");
  const [basePrep, setBasePrep] = useState("");
  const [delivery, setDelivery] = useState("");
  const [wastage, setWastage] = useState("8");
  const [result, setResult] = useState<null | { tons: number; grossTons: number; materialCost: number; total: number }>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const a = useArea ? parseFloat(area) : parseFloat(length) * parseFloat(width);
    const t = parseFloat(thickness) / 12;
    const d = parseFloat(density);
    const p = parseFloat(pricePerTon);
    if (!a || !t || !d || !p) { setError("Please fill all required fields (including price per ton)."); return; }
    const tons = (a * t * d) / 2000;
    const grossTons = tons * (1 + parseFloat(wastage || "0") / 100);
    const materialCost = grossTons * p;
    const extras = (parseFloat(basePrep || "0") + parseFloat(delivery || "0"));
    setResult({ tons, grossTons, materialCost, total: materialCost + extras });
  }

  function reset() {
    setLength(""); setWidth(""); setArea(""); setThickness("");
    setDensity("145"); setPricePerTon(""); setBasePrep(""); setDelivery("");
    setWastage("8"); setResult(null); setError("");
  }

  const inp = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/20 transition-all text-sm";
  const lbl = "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <div id="driveway-cost-calculator" className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-[2rem] p-6 md:p-8 shadow-2xl max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => setUseArea(false)} className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${!useArea ? "bg-white/15 text-white" : "text-white/50 hover:text-white"}`}>Length x Width</button>
        <button onClick={() => setUseArea(true)} className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${useArea ? "bg-white/15 text-white" : "text-white/50 hover:text-white"}`}>Enter Area Directly</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {useArea ? (
          <div className="sm:col-span-2">
            <label className={lbl}>Area (ft²)</label>
            <input id="dcc-area" type="number" min="0" placeholder="e.g. 1000" value={area} onChange={(e) => setArea(e.target.value)} className={inp} />
          </div>
        ) : (
          <>
            <div>
              <label className={lbl}>Length (ft)</label>
              <input id="dcc-length" type="number" min="0" placeholder="e.g. 50" value={length} onChange={(e) => setLength(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>Width (ft)</label>
              <input id="dcc-width" type="number" min="0" placeholder="e.g. 12" value={width} onChange={(e) => setWidth(e.target.value)} className={inp} />
            </div>
          </>
        )}
        <div>
          <label className={lbl}>Thickness (inches)</label>
          <input id="dcc-thickness" type="number" min="0" step="0.5" placeholder="e.g. 2" value={thickness} onChange={(e) => setThickness(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Mix Density (lb/ft³)</label>
          <input id="dcc-density" type="number" min="0" value={density} onChange={(e) => setDensity(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Price per Ton ($) *</label>
          <input id="dcc-price" type="number" min="0" placeholder="Your local quote" value={pricePerTon} onChange={(e) => setPricePerTon(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Wastage Allowance (%)</label>
          <input id="dcc-wastage" type="number" min="0" max="50" value={wastage} onChange={(e) => setWastage(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Base Prep Cost ($) — optional</label>
          <input id="dcc-base" type="number" min="0" placeholder="0" value={basePrep} onChange={(e) => setBasePrep(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Delivery Cost ($) — optional</label>
          <input id="dcc-delivery" type="number" min="0" placeholder="0" value={delivery} onChange={(e) => setDelivery(e.target.value)} className={inp} />
        </div>
      </div>
      <p className="text-white/40 text-xs mb-5">* Price per ton varies by region and contractor. Enter your local quote for an accurate estimate. Do not rely on any default value.</p>
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      <div className="flex gap-3">
        <button id="dcc-calculate" onClick={calculate} className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0">
          <Calculator size={18} /> Calculate Cost
        </button>
        <button id="dcc-reset" onClick={reset} className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all" aria-label="Reset"><RefreshCw size={18} /></button>
      </div>
      {result && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-5">
            <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-1">Asphalt Required</p>
            <p className="text-3xl font-black text-white">{result.grossTons.toFixed(2)} <span className="text-lg text-white/60">tons</span></p>
            <p className="text-white/50 text-sm mt-1">Net: {result.tons.toFixed(2)} tons</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-2xl p-5">
            <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Material Cost</p>
            <p className="text-3xl font-black text-white">${result.materialCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <div className="sm:col-span-2 bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 rounded-2xl p-5">
            <p className="text-violet-300 text-xs font-bold uppercase tracking-wider mb-1">Estimated Total Cost</p>
            <p className="text-4xl font-black text-white">${result.total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="text-white/40 text-xs mt-2">Includes base prep &amp; delivery if entered. Actual cost varies by region &amp; contractor.</p>
          </div>
        </div>
      )}
    </div>
  );
}
