"use client";

import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

type Unit = "imperial" | "metric";

export default function AsphaltTonnageCalculator() {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");
  const [useArea, setUseArea] = useState(false);
  const [thickness, setThickness] = useState("");
  const [density, setDensity] = useState(unit === "imperial" ? "145" : "2320");
  const [wastage, setWastage] = useState("5");
  const [result, setResult] = useState<null | {
    net: number; gross: number; metricNet: number; metricGross: number;
  }>(null);
  const [error, setError] = useState("");

  function switchUnit(u: Unit) {
    setUnit(u);
    setDensity(u === "imperial" ? "145" : "2320");
    setResult(null);
    setError("");
  }

  function calculate() {
    setError("");
    const w = parseFloat(wastage) || 0;
    let tons = 0;

    if (unit === "imperial") {
      const a = useArea
        ? parseFloat(area)
        : parseFloat(length) * parseFloat(width);
      const t = parseFloat(thickness) / 12;
      const d = parseFloat(density);
      if (!a || !t || !d) { setError("Please fill all required fields."); return; }
      tons = (a * t * d) / 2000;
    } else {
      const a = useArea
        ? parseFloat(area)
        : parseFloat(length) * parseFloat(width);
      const t = parseFloat(thickness) / 1000;
      const d = parseFloat(density);
      if (!a || !t || !d) { setError("Please fill all required fields."); return; }
      // metric tonnes
      const tonnes = (a * t * d) / 1000;
      const grossTonnes = tonnes * (1 + w / 100);
      setResult({
        net: tonnes * 1.10231, gross: grossTonnes * 1.10231,
        metricNet: tonnes, metricGross: grossTonnes,
      });
      return;
    }
    const gross = tons * (1 + w / 100);
    setResult({
      net: tons, gross,
      metricNet: tons * 0.907185, metricGross: gross * 0.907185,
    });
  }

  function reset() {
    setLength(""); setWidth(""); setArea(""); setThickness("");
    setDensity(unit === "imperial" ? "145" : "2320");
    setWastage("5"); setResult(null); setError("");
  }

  const inputCls = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/20 transition-all text-sm";
  const labelCls = "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <div id="tonnage-calculator" className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-[2rem] p-6 md:p-8 shadow-2xl max-w-3xl">
      {/* Unit toggle */}
      <div className="flex gap-2 mb-8 bg-black/30 p-1 rounded-xl w-fit">
        {(["imperial", "metric"] as Unit[]).map((u) => (
          <button
            key={u}
            onClick={() => switchUnit(u)}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all capitalize ${
              unit === u ? "bg-orange-500 text-white shadow-md" : "text-white/60 hover:text-white"
            }`}
          >
            {u === "imperial" ? "Imperial (ft / in)" : "Metric (m / mm)"}
          </button>
        ))}
      </div>

      {/* Area mode toggle */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setUseArea(false)}
          className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${!useArea ? "bg-white/15 text-white" : "text-white/50 hover:text-white"}`}
        >
          Length × Width
        </button>
        <button
          onClick={() => setUseArea(true)}
          className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${useArea ? "bg-white/15 text-white" : "text-white/50 hover:text-white"}`}
        >
          Enter Area Directly
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {useArea ? (
          <div className="sm:col-span-2">
            <label className={labelCls}>Area ({unit === "imperial" ? "ft²" : "m²"})</label>
            <input id="atc-area" type="number" min="0" placeholder={unit === "imperial" ? "e.g. 1000" : "e.g. 93"} value={area} onChange={(e) => setArea(e.target.value)} className={inputCls} />
          </div>
        ) : (
          <>
            <div>
              <label className={labelCls}>Length ({unit === "imperial" ? "ft" : "m"})</label>
              <input id="atc-length" type="number" min="0" placeholder={unit === "imperial" ? "e.g. 50" : "e.g. 15"} value={length} onChange={(e) => setLength(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Width ({unit === "imperial" ? "ft" : "m"})</label>
              <input id="atc-width" type="number" min="0" placeholder={unit === "imperial" ? "e.g. 20" : "e.g. 6"} value={width} onChange={(e) => setWidth(e.target.value)} className={inputCls} />
            </div>
          </>
        )}
        <div>
          <label className={labelCls}>Thickness ({unit === "imperial" ? "inches" : "mm"})</label>
          <input id="atc-thickness" type="number" min="0" step="0.5" placeholder={unit === "imperial" ? "e.g. 2" : "e.g. 50"} value={thickness} onChange={(e) => setThickness(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Density ({unit === "imperial" ? "lb/ft³" : "kg/m³"})</label>
          <input id="atc-density" type="number" min="0" value={density} onChange={(e) => setDensity(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Wastage Allowance (%)</label>
          <input id="atc-wastage" type="number" min="0" max="50" value={wastage} onChange={(e) => setWastage(e.target.value)} className={inputCls} />
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      <div className="flex gap-3">
        <button
          id="atc-calculate"
          onClick={calculate}
          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Calculator size={18} /> Calculate Tonnage
        </button>
        <button
          id="atc-reset"
          onClick={reset}
          className="bg-white/10 hover:bg-white/15 text-white px-4 py-3.5 rounded-xl transition-all"
          aria-label="Reset calculator"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      {result && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-5">
            <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-1">Net Quantity</p>
            <p className="text-3xl font-black text-white">{result.net.toFixed(2)} <span className="text-lg text-white/60">US tons</span></p>
            <p className="text-white/50 text-sm mt-1">{result.metricNet.toFixed(2)} metric tonnes</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-2xl p-5">
            <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Order Quantity (incl. {wastage}% wastage)</p>
            <p className="text-3xl font-black text-white">{result.gross.toFixed(2)} <span className="text-lg text-white/60">US tons</span></p>
            <p className="text-white/50 text-sm mt-1">{result.metricGross.toFixed(2)} metric tonnes</p>
          </div>
        </div>
      )}
    </div>
  );
}
