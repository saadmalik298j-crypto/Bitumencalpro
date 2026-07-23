"use client";

import { useState } from "react";
import { Calculator as CalcIcon, Database, Settings2, Box, Weight } from "lucide-react";

type Results = {
  volume: number;
  mixWeight: number;
  bitumenRequired: number;
  totalCost: number | null;
  volUnit: string;
  weightUnit: string;
  currency: string;
};

const LENGTH_UNITS = [
  { value: "m", label: "m" },
  { value: "cm", label: "cm" },
  { value: "mm", label: "mm" },
  { value: "ft", label: "ft" },
  { value: "in", label: "in" },
  { value: "yd", label: "yd" },
];

const DENSITY_UNITS = [
  { value: "kg/m³", label: "kg/m³" },
  { value: "lb/yd³", label: "lb/yd³" },
  { value: "lb/ft³", label: "lb/ft³" },
];

const VOL_OUT_UNITS = [
  { value: "m³", label: "Cubic Meters (m³)" },
  { value: "yd³", label: "Cubic Yards (yd³)" },
  { value: "ft³", label: "Cubic Feet (ft³)" },
];

const WEIGHT_OUT_UNITS = [
  { value: "tonnes", label: "Metric Tonnes (t)" },
  { value: "tons", label: "Short Tons (ton)" },
  { value: "kg", label: "Kilograms (kg)" },
  { value: "lbs", label: "Pounds (lbs)" },
];

// Conversion helpers
const toMeters = (val: number, unit: string) => {
  switch (unit) {
    case "m": return val;
    case "cm": return val / 100;
    case "mm": return val / 1000;
    case "ft": return val * 0.3048;
    case "in": return val * 0.0254;
    case "yd": return val * 0.9144;
    default: return val;
  }
};

const toKgPerM3 = (val: number, unit: string) => {
  switch (unit) {
    case "kg/m³": return val;
    case "lb/yd³": return val * 0.593276;
    case "lb/ft³": return val * 16.0185;
    default: return val;
  }
};

export default function Calculator() {
  // Inputs
  const [length, setLength] = useState<string>("1000");
  const [lengthUnit, setLengthUnit] = useState<string>("m");

  const [width, setWidth] = useState<string>("3.5");
  const [widthUnit, setWidthUnit] = useState<string>("m");

  const [thickness, setThickness] = useState<string>("50");
  const [thicknessUnit, setThicknessUnit] = useState<string>("mm");

  const [bitumenContent, setBitumenContent] = useState<string>("5.5");

  const [density, setDensity] = useState<string>("2350");
  const [densityUnit, setDensityUnit] = useState<string>("kg/m³");

  const [price, setPrice] = useState<string>("");

  // Outputs
  const [outVolUnit, setOutVolUnit] = useState<string>("m³");
  const [outWeightUnit, setOutWeightUnit] = useState<string>("tonnes");
  const [currency, setCurrency] = useState<string>("$");

  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const t = parseFloat(thickness);
    const b = parseFloat(bitumenContent);
    const d = parseFloat(density);
    const p = parseFloat(price);

    if ([l, w, t, b, d].some((n) => isNaN(n))) {
      setError("Please fill in all required dimensions and mix properties.");
      setResults(null);
      return;
    }
    if ([l, w, t, b, d].some((n) => n <= 0)) {
      setError("Dimensions and mix values must be greater than zero.");
      setResults(null);
      return;
    }

    setError(null);

    // 1. All dimensions to meters
    const l_m = toMeters(l, lengthUnit);
    const w_m = toMeters(w, widthUnit);
    const t_m = toMeters(t, thicknessUnit);

    // 2. Volume in m³
    const volM3 = l_m * w_m * t_m;

    // 3. Density to kg/m³
    const d_kgm3 = toKgPerM3(d, densityUnit);

    // 4. Mix weight in kg
    const weightKg = volM3 * d_kgm3;

    // 5. Convert to chosen output units
    let outVol = volM3;
    if (outVolUnit === "yd³") outVol = volM3 * 1.30795;
    else if (outVolUnit === "ft³") outVol = volM3 * 35.3147;

    let outWeight = weightKg;
    if (outWeightUnit === "tonnes") outWeight = weightKg / 1000;
    else if (outWeightUnit === "tons") outWeight = weightKg * 0.00110231;
    else if (outWeightUnit === "lbs") outWeight = weightKg * 2.20462;

    // 6. Bitumen required
    const bitumenRequired = outWeight * (b / 100);

    // 7. Cost
    const totalCost = !isNaN(p) && p > 0 ? bitumenRequired * p : null;

    setResults({
      volume: outVol,
      mixWeight: outWeight,
      bitumenRequired,
      totalCost,
      volUnit: outVolUnit,
      weightUnit: outWeightUnit,
      currency,
    });
  };

  const reset = () => {
    setLength(""); setWidth(""); setThickness("");
    setBitumenContent(""); setDensity("2350"); setDensityUnit("kg/m³");
    setPrice(""); setResults(null); setError(null);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") calculate();
  };

  const fmt = (n: number, digits = 2) =>
    n.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits });

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* ── Left Panel: Inputs ── */}
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] relative overflow-hidden z-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white p-2.5 rounded-xl shadow-md shadow-orange-500/20">
              <CalcIcon size={22} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-0.5">Parameters</h2>
              <p className="text-sm text-slate-500 font-medium">Configure all dimensions & units individually</p>
            </div>
          </div>
        </div>

        {/* Output Unit Configuration */}
        <div className="mb-6 bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-sm mb-1">
            <Settings2 size={16} className="text-violet-500" /> Output Preferences
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Volume Result Unit</label>
              <select
                value={outVolUnit}
                onChange={(e) => setOutVolUnit(e.target.value)}
                className="bg-white border border-slate-200 text-slate-800 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-violet-200 outline-none"
              >
                {VOL_OUT_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Weight Result Unit</label>
              <select
                value={outWeightUnit}
                onChange={(e) => setOutWeightUnit(e.target.value)}
                className="bg-white border border-slate-200 text-slate-800 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-violet-200 outline-none"
              >
                {WEIGHT_OUT_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-orange-500 tracking-wider uppercase mb-4">Dimensions</h3>
          <div className="space-y-4">
            {[
              { id: "length", label: "Length", value: length, set: setLength, unit: lengthUnit, setUnit: setLengthUnit },
              { id: "width", label: "Width", value: width, set: setWidth, unit: widthUnit, setUnit: setWidthUnit },
              { id: "thickness", label: "Thickness", value: thickness, set: setThickness, unit: thicknessUnit, setUnit: setThicknessUnit },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label htmlFor={field.id} className="text-sm font-semibold text-slate-700">{field.label}</label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100 transition-all bg-white shadow-sm">
                  <input
                    id={field.id}
                    type="number"
                    min={0}
                    step="any"
                    value={field.value}
                    onChange={(e) => field.set(e.target.value)}
                    onKeyDown={handleEnter}
                    className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium"
                    placeholder="0"
                  />
                  <div className="bg-slate-50 border-l border-slate-200 flex items-center">
                    <select
                      value={field.unit}
                      onChange={(e) => field.setUnit(e.target.value)}
                      className="bg-transparent text-slate-600 font-bold px-3 py-3 outline-none cursor-pointer appearance-none text-sm text-center min-w-[60px]"
                    >
                      {LENGTH_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mix Properties */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-cyan-600 tracking-wider uppercase mb-4">Mix Properties</h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="bitumenContent" className="text-sm font-semibold text-slate-700">Bitumen Content</label>
              <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-100 transition-all bg-white shadow-sm">
                <input
                  id="bitumenContent"
                  type="number"
                  min={0}
                  step="any"
                  value={bitumenContent}
                  onChange={(e) => setBitumenContent(e.target.value)}
                  onKeyDown={handleEnter}
                  className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium"
                  placeholder="0"
                />
                <div className="bg-cyan-50 border-l border-slate-200 px-4 py-3 text-cyan-600 font-bold flex items-center justify-center min-w-[60px] text-sm">
                  %
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="density" className="text-sm font-semibold text-slate-700">Mix Density</label>
              <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-100 transition-all bg-white shadow-sm">
                <input
                  id="density"
                  type="number"
                  min={0}
                  step="any"
                  value={density}
                  onChange={(e) => setDensity(e.target.value)}
                  onKeyDown={handleEnter}
                  className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium"
                  placeholder="0"
                />
                <div className="bg-slate-50 border-l border-slate-200 flex items-center">
                  <select
                    value={densityUnit}
                    onChange={(e) => setDensityUnit(e.target.value)}
                    className="bg-transparent text-slate-600 font-bold px-3 py-3 outline-none cursor-pointer appearance-none text-sm text-center min-w-[80px]"
                  >
                    {DENSITY_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Estimation */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-green-600 tracking-wider uppercase mb-4">Cost Estimation <span className="font-normal text-slate-400">(Optional)</span></h3>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="price" className="text-sm font-semibold text-slate-700">Price per unit of bitumen</label>
            <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-100 transition-all bg-white shadow-sm">
              <div className="bg-slate-50 border-r border-slate-200 flex items-center">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent text-slate-600 font-bold px-3 py-3 outline-none cursor-pointer appearance-none text-sm text-center min-w-[40px]"
                >
                  <option value="$">$</option>
                  <option value="€">€</option>
                  <option value="£">£</option>
                  <option value="₹">₹</option>
                </select>
              </div>
              <input
                id="price"
                type="number"
                min={0}
                step="any"
                placeholder={`e.g. 500 per ${outWeightUnit}`}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onKeyDown={handleEnter}
                className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium placeholder:text-slate-300"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
            {error}
          </div>
        )}

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button onClick={calculate}
            className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-violet-200 hover:-translate-y-0.5 transition-all text-lg tracking-wide">
            <CalcIcon size={20} /> Calculate Now
          </button>
          <button onClick={reset}
            className="flex-[0.3] bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-xl transition-colors text-sm">
            Reset
          </button>
        </div>
      </div>

      {/* ── Right Panel: Results ── */}
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] min-h-[580px] relative overflow-hidden z-10">
        {!results ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mb-6 text-slate-300 shadow-inner">
              <Database size={32} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-3">Ready to Calculate</h3>
            <p className="text-base text-slate-500 max-w-sm mx-auto leading-relaxed">
              Mix and match any units you want on the left. We'll automatically convert everything and present your results here.
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-slate-100">
              <div className="bg-green-500 text-white p-2.5 rounded-xl shadow-md shadow-green-500/20">
                <Database size={22} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Final Results</h3>
            </div>

            <div className="space-y-4 flex-1 flex flex-col">
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Total Volume</div>
                  <div className="text-3xl font-black text-slate-800 flex items-baseline gap-2">
                    {fmt(results.volume)} <span className="text-lg font-bold text-slate-400">{results.volUnit}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
                  <Box size={24} strokeWidth={2} />
                </div>
              </div>

              <div className="bg-cyan-50/70 border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-cyan-50 transition-all flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-2">Total Mix Weight</div>
                  <div className="text-3xl font-black text-slate-800 flex items-baseline gap-2">
                    {fmt(results.mixWeight)} <span className="text-lg font-bold text-slate-400">{results.weightUnit}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
                  <Weight size={24} strokeWidth={2} />
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 border border-violet-500 rounded-3xl p-8 shadow-xl shadow-violet-200 flex-1 flex flex-col justify-center text-white relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-sm font-bold text-violet-200 uppercase tracking-wider mb-3 relative z-10">Bitumen Required</div>
                <div className="text-5xl md:text-6xl font-black flex items-baseline gap-3 relative z-10">
                  {fmt(results.bitumenRequired, 3)} <span className="text-2xl font-bold text-violet-300">{results.weightUnit}</span>
                </div>
              </div>

              {results.totalCost !== null && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm flex justify-between items-center mt-4">
                  <div className="text-sm font-bold text-green-700 uppercase tracking-wider">Estimated Cost</div>
                  <div className="text-3xl font-black text-green-700">
                    {results.currency}{fmt(results.totalCost)}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}