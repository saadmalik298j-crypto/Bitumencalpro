"use client";

import { useState } from "react";
import {
  Calculator as CalcIcon,
  Database,
  Settings2,
  Box,
  Weight,
  ChevronDown,
  FlaskConical,
  Droplets,
  ShoppingCart,
  Layers,
  SlidersHorizontal,
} from "lucide-react";

type Results = {
  volume: number;
  looseVolume: number;
  mixWeight: number;
  bitumenRequired: number;
  orderBitumen: number;
  bitumenLitres: number;
  orderBitumenLitres: number;
  aggregateRequired: number;
  baseAggregateRequired: number | null;
  baseWeightUnit: string | null;
  totalCost: number | null;
  volUnit: string;
  weightUnit: string;
  currency: string;
  wastage: number;
  compactionFactor: number;
  breadcrumb: string;
};

const LENGTH_UNITS = [
  { value: "m",  label: "m"  },
  { value: "cm", label: "cm" },
  { value: "mm", label: "mm" },
  { value: "ft", label: "ft" },
  { value: "in", label: "in" },
  { value: "yd", label: "yd" },
];

const DENSITY_UNITS = [
  { value: "kg/m³",  label: "kg/m³"  },
  { value: "lb/yd³", label: "lb/yd³" },
  { value: "lb/ft³", label: "lb/ft³" },
];

const VOL_OUT_UNITS = [
  { value: "m³",  label: "Cubic Meters (m³)"  },
  { value: "yd³", label: "Cubic Yards (yd³)"  },
  { value: "ft³", label: "Cubic Feet (ft³)"   },
];

const WEIGHT_OUT_UNITS = [
  { value: "tonnes", label: "Metric Tonnes (t)" },
  { value: "tons",   label: "Short Tons (ton)"  },
  { value: "kg",     label: "Kilograms (kg)"    },
  { value: "lbs",    label: "Pounds (lbs)"      },
];

const toMeters = (val: number, unit: string) => {
  switch (unit) {
    case "m":  return val;
    case "cm": return val / 100;
    case "mm": return val / 1000;
    case "ft": return val * 0.3048;
    case "in": return val * 0.0254;
    case "yd": return val * 0.9144;
    default:   return val;
  }
};

const toKgPerM3 = (val: number, unit: string) => {
  switch (unit) {
    case "kg/m³":  return val;
    case "lb/yd³": return val * 0.593276;
    case "lb/ft³": return val * 16.0185;
    default:       return val;
  }
};

const convertVol = (m3: number, unit: string) => {
  if (unit === "yd³") return m3 * 1.30795;
  if (unit === "ft³") return m3 * 35.3147;
  return m3;
};

const convertWeight = (kg: number, unit: string) => {
  if (unit === "tonnes") return kg / 1000;
  if (unit === "tons")   return kg * 0.00110231;
  if (unit === "lbs")    return kg * 2.20462;
  return kg;
};

export default function Calculator() {
  const [length,        setLength]        = useState<string>("1000");
  const [lengthUnit,    setLengthUnit]    = useState<string>("m");
  const [width,         setWidth]         = useState<string>("3.5");
  const [widthUnit,     setWidthUnit]     = useState<string>("m");
  const [thickness,     setThickness]     = useState<string>("50");
  const [thicknessUnit, setThicknessUnit] = useState<string>("mm");

  const [bitumenContent, setBitumenContent] = useState<string>("5.5");
  const [density,        setDensity]        = useState<string>("2350");
  const [densityUnit,    setDensityUnit]    = useState<string>("kg/m³");

  const [price,    setPrice]    = useState<string>("");
  const [currency, setCurrency] = useState<string>("$");

  const [showAdvanced,     setShowAdvanced]     = useState<boolean>(false);
  const [wastage,          setWastage]          = useState<string>("0");
  const [compactionFactor, setCompactionFactor] = useState<string>("1.00");
  const [binderDensity,    setBinderDensity]    = useState<string>("1.03");

  const [outVolUnit,    setOutVolUnit]    = useState<string>("m³");
  const [outWeightUnit, setOutWeightUnit] = useState<string>("tonnes");

  const [results, setResults] = useState<Results | null>(null);
  const [error,   setError]   = useState<string | null>(null);

  const fmt = (n: number, digits = 2) =>
    n.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits });

  const calculate = () => {
    const l  = parseFloat(length);
    const w  = parseFloat(width);
    const t  = parseFloat(thickness);
    const b  = parseFloat(bitumenContent);
    const d  = parseFloat(density);
    const p  = parseFloat(price);
    const wa = parseFloat(wastage)          || 0;
    const cf = parseFloat(compactionFactor) || 1.0;
    const bd = parseFloat(binderDensity)    || 1.03;

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

    const l_m = toMeters(l, lengthUnit);
    const w_m = toMeters(w, widthUnit);
    const t_m = toMeters(t, thicknessUnit);

    const compactedM3 = l_m * w_m * t_m;
    const looseM3     = compactedM3 * cf;
    const d_kgm3      = toKgPerM3(d, densityUnit);
    const weightKg    = compactedM3 * d_kgm3;

    const outVol      = convertVol(compactedM3, outVolUnit);
    const outLooseVol = convertVol(looseM3,     outVolUnit);
    const outWeight   = convertWeight(weightKg, outWeightUnit);

    const bitumenRequired = outWeight * (b / 100);
    const bitumenKg       = weightKg  * (b / 100);

    const orderBitumenKg     = bitumenKg * (1 + wa / 100);
    const orderBitumen       = convertWeight(orderBitumenKg, outWeightUnit);
    const bitumenLitres      = bitumenKg      / bd;
    const orderBitumenLitres = orderBitumenKg / bd;

    const aggregateRequired = outWeight - bitumenRequired;

    let baseAggregateRequired: number | null = null;
    let baseWeightUnit: string | null = null;
    if (outWeightUnit === "tonnes") { baseAggregateRequired = aggregateRequired * 1000; baseWeightUnit = "kg"; }
    else if (outWeightUnit === "tons") { baseAggregateRequired = aggregateRequired * 2000; baseWeightUnit = "lbs"; }

    const totalCost = !isNaN(p) && p > 0 ? bitumenRequired * p : null;

    const areM2 = l_m * w_m;
    const wLabel = outWeightUnit === "kg" ? `${fmt(weightKg, 0)} kg`
      : outWeightUnit === "lbs" ? `${fmt(weightKg * 2.20462, 0)} lbs`
      : outWeightUnit === "tons" ? `${fmt(weightKg * 0.00110231, 2)} ton`
      : `${fmt(weightKg / 1000, 2)} t`;
    const bLabel = outWeightUnit === "kg" ? `${fmt(bitumenKg, 0)} kg`
      : outWeightUnit === "lbs" ? `${fmt(bitumenKg * 2.20462, 0)} lbs`
      : outWeightUnit === "tons" ? `${fmt(bitumenKg * 0.00110231, 2)} ton`
      : `${fmt(bitumenKg / 1000, 2)} t`;

    const breadcrumb = `Area: ${fmt(areM2, 0)} m²  ·  Vol: ${fmt(compactedM3, 2)} m³  ·  Mix: ${wLabel}  ·  Bitumen: ${bLabel}`;

    setResults({
      volume: outVol, looseVolume: outLooseVol, mixWeight: outWeight,
      bitumenRequired, orderBitumen, bitumenLitres, orderBitumenLitres,
      aggregateRequired, baseAggregateRequired, baseWeightUnit,
      totalCost, volUnit: outVolUnit, weightUnit: outWeightUnit,
      currency, wastage: wa, compactionFactor: cf, breadcrumb,
    });
  };

  const reset = () => {
    setLength(""); setWidth(""); setThickness("");
    setBitumenContent(""); setDensity("2350"); setDensityUnit("kg/m³");
    setPrice(""); setWastage("0"); setCompactionFactor("1.00");
    setBinderDensity("1.03"); setResults(null); setError(null);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") calculate();
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* LEFT PANEL */}
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-8 flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] relative overflow-hidden z-10">

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white p-2.5 rounded-xl shadow-md shadow-orange-500/20">
              <CalcIcon size={22} />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 mb-0.5">Parameters</div>
              <p className="text-sm text-slate-500 font-medium">Configure all dimensions &amp; units individually</p>
            </div>
          </div>
        </div>

        {/* Output Preferences */}
        <div className="mb-6 bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-sm mb-1">
            <Settings2 size={16} className="text-violet-500" /> Output Preferences
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="outVolUnit" className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Volume Result Unit</label>
              <select id="outVolUnit" value={outVolUnit} onChange={(e) => setOutVolUnit(e.target.value)}
                className="bg-white border border-slate-200 text-slate-800 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-violet-200 outline-none" aria-label="Volume result unit">
                {VOL_OUT_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="outWeightUnit" className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Weight Result Unit</label>
              <select id="outWeightUnit" value={outWeightUnit} onChange={(e) => setOutWeightUnit(e.target.value)}
                className="bg-white border border-slate-200 text-slate-800 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-violet-200 outline-none" aria-label="Weight result unit">
                {WEIGHT_OUT_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="mb-6">
          <div className="font-bold text-orange-500 tracking-wider uppercase mb-4">Dimensions</div>
          <div className="space-y-4">
            {[
              { id: "length",    label: "Length",    value: length,    set: setLength,    unit: lengthUnit,    setUnit: setLengthUnit    },
              { id: "width",     label: "Width",     value: width,     set: setWidth,     unit: widthUnit,     setUnit: setWidthUnit     },
              { id: "thickness", label: "Thickness", value: thickness, set: setThickness, unit: thicknessUnit, setUnit: setThicknessUnit },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label htmlFor={field.id} className="text-sm font-semibold text-slate-700">{field.label}</label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100 transition-all bg-white shadow-sm">
                  <input id={field.id} type="number" min={0} step="any" value={field.value}
                    onChange={(e) => field.set(e.target.value)} onKeyDown={handleEnter}
                    className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium" placeholder="0" />
                  <div className="bg-slate-50 border-l border-slate-200 flex items-center relative">
                    <select value={field.unit} onChange={(e) => field.setUnit(e.target.value)}
                      className="bg-transparent text-slate-600 font-bold pl-3 pr-8 py-3 outline-none cursor-pointer appearance-none text-sm text-center min-w-[60px]"
                      aria-label={`${field.label} unit`}>
                      {LENGTH_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mix Properties */}
        <div className="mb-6">
          <div className="font-bold text-cyan-600 tracking-wider uppercase mb-4">Mix Properties</div>
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="bitumenContent" className="text-sm font-semibold text-slate-700">Bitumen Content</label>
              <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-100 transition-all bg-white shadow-sm">
                <input id="bitumenContent" type="number" min={0} step="any" value={bitumenContent}
                  onChange={(e) => setBitumenContent(e.target.value)} onKeyDown={handleEnter}
                  className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium" placeholder="0" />
                <div className="bg-cyan-50 border-l border-slate-200 px-4 py-3 text-cyan-600 font-bold flex items-center justify-center min-w-[60px] text-sm">%</div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="density" className="text-sm font-semibold text-slate-700">Mix Density</label>
              <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-100 transition-all bg-white shadow-sm">
                <input id="density" type="number" min={0} step="any" value={density}
                  onChange={(e) => setDensity(e.target.value)} onKeyDown={handleEnter}
                  className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium" placeholder="0" />
                <div className="bg-slate-50 border-l border-slate-200 flex items-center relative">
                  <select value={densityUnit} onChange={(e) => setDensityUnit(e.target.value)}
                    className="bg-transparent text-slate-600 font-bold pl-3 pr-8 py-3 outline-none cursor-pointer appearance-none text-sm text-center min-w-[80px]"
                    aria-label="Mix density unit">
                    {DENSITY_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Estimation */}
        <div className="mb-6">
          <div className="font-bold text-green-600 tracking-wider uppercase mb-4">
            Cost Estimation <span className="font-normal text-slate-400">(Optional)</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="price" className="text-sm font-semibold text-slate-700">Price per unit of bitumen</label>
            <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-100 transition-all bg-white shadow-sm">
              <div className="bg-slate-50 border-r border-slate-200 flex items-center relative">
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent text-slate-600 font-bold pl-3 pr-7 py-3 outline-none cursor-pointer appearance-none text-sm text-center min-w-[50px]"
                  aria-label="Currency">
                  <option value="$">$</option>
                  <option value="€">€</option>
                  <option value="£">£</option>
                  <option value="₹">₹</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 text-slate-400 pointer-events-none" />
              </div>
              <input id="price" type="number" min={0} step="any" placeholder={`e.g. 500 per ${outWeightUnit}`}
                value={price} onChange={(e) => setPrice(e.target.value)} onKeyDown={handleEnter}
                className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium placeholder:text-slate-300" />
            </div>
          </div>
        </div>

        {/* Advanced Options */}
        <div className="mb-6 border border-slate-200 rounded-2xl overflow-hidden">
          <button type="button" onClick={() => setShowAdvanced((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
            aria-expanded={showAdvanced} aria-controls="advanced-options-panel">
            <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
              <SlidersHorizontal size={16} className="text-violet-500" />
              Advanced Options
              <span className="text-slate-400 font-normal text-xs ml-1">Wastage · Compaction · Binder Density</span>
            </div>
            <div className={`transition-transform duration-200 ${showAdvanced ? "rotate-180" : "rotate-0"}`}>
              <ChevronDown size={18} className="text-slate-400" />
            </div>
          </button>

          <div id="advanced-options-panel"
            className={`transition-all duration-300 ease-in-out overflow-hidden ${showAdvanced ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="p-5 space-y-4 bg-white">

              {/* Wastage */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="wastage" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <ShoppingCart size={14} className="text-amber-500" />
                  Wastage Allowance
                  <span className="text-slate-400 font-normal text-xs">— adds to Order Quantity</span>
                </label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-100 transition-all bg-white shadow-sm">
                  <input id="wastage" type="number" min={0} max={15} step={0.5} value={wastage}
                    onChange={(e) => setWastage(e.target.value)} onKeyDown={handleEnter}
                    className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium" placeholder="0" />
                  <div className="bg-amber-50 border-l border-slate-200 px-4 py-3 text-amber-600 font-bold flex items-center justify-center min-w-[60px] text-sm">%</div>
                </div>
              </div>

              {/* Compaction Factor */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="compactionFactor" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Layers size={14} className="text-sky-500" />
                  Compaction Factor
                  <span className="text-slate-400 font-normal text-xs">— Loose &divide; Compacted. 1.00 to skip</span>
                </label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100 transition-all bg-white shadow-sm">
                  <input id="compactionFactor" type="number" min={1.00} max={1.20} step={0.01} value={compactionFactor}
                    onChange={(e) => setCompactionFactor(e.target.value)} onKeyDown={handleEnter}
                    className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium" placeholder="1.00" />
                  <div className="bg-sky-50 border-l border-slate-200 px-4 py-3 text-sky-600 font-bold flex items-center justify-center min-w-[60px] text-xs">ratio</div>
                </div>
              </div>

              {/* Binder Density */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="binderDensity" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <FlaskConical size={14} className="text-teal-500" />
                  Binder Density
                  <span className="text-slate-400 font-normal text-xs">— for Litres output</span>
                </label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-teal-400 focus-within:ring-4 focus-within:ring-teal-100 transition-all bg-white shadow-sm">
                  <input id="binderDensity" type="number" min={0.90} max={1.10} step={0.01} value={binderDensity}
                    onChange={(e) => setBinderDensity(e.target.value)} onKeyDown={handleEnter}
                    className="flex-1 bg-transparent text-slate-900 px-4 py-3 outline-none w-full font-medium" placeholder="1.03" />
                  <div className="bg-teal-50 border-l border-slate-200 px-4 py-3 text-teal-600 font-bold flex items-center justify-center min-w-[60px] text-sm">kg/L</div>
                </div>
              </div>

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

      {/* RIGHT PANEL */}
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-8 flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] min-h-[580px] relative overflow-hidden z-10">
        {!results ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mb-6 text-slate-300 shadow-inner">
              <Database size={32} strokeWidth={2} />
            </div>
            <div className="text-2xl font-black text-slate-800 mb-3">Ready to Calculate</div>
            <p className="text-base text-slate-500 max-w-sm mx-auto leading-relaxed">
              Mix and match any units on the left. Results — including litres, loose volume, and order quantity — appear here instantly.
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">

            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <div className="bg-green-500 text-white p-2.5 rounded-xl shadow-md shadow-green-500/20">
                <Database size={22} />
              </div>
              <div className="text-2xl font-black text-slate-900">Results</div>
            </div>

            {/* Breadcrumb */}
            <div className="mb-5 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs font-mono text-slate-500 leading-relaxed break-all">
              <span className="text-slate-400 font-sans font-semibold text-[10px] uppercase tracking-widest block mb-1">Formula trace</span>
              {results.breadcrumb}
            </div>

            <div className="space-y-3 flex-1 flex flex-col">

              {/* Compacted Volume */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1.5">Compacted Volume</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-800 flex flex-wrap items-baseline gap-x-2 break-all">
                    {fmt(results.volume)} <span className="text-base font-bold text-slate-400">{results.volUnit}</span>
                  </div>
                </div>
                <div className="w-11 h-11 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center shrink-0 ml-3">
                  <Box size={22} strokeWidth={2} />
                </div>
              </div>

              {/* Loose Volume — conditional */}
              {results.compactionFactor !== 1.0 && (
                <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:bg-sky-50 transition-all flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1.5">
                      Loose Volume <span className="font-normal text-sky-400 normal-case">(&times;{results.compactionFactor})</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-800 flex flex-wrap items-baseline gap-x-2 break-all">
                      {fmt(results.looseVolume)} <span className="text-base font-bold text-slate-400">{results.volUnit}</span>
                    </div>
                  </div>
                  <div className="w-11 h-11 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center shrink-0 ml-3">
                    <Layers size={22} strokeWidth={2} />
                  </div>
                </div>
              )}

              {/* Total Mix Weight */}
              <div className="bg-cyan-50/70 border border-cyan-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:bg-cyan-50 transition-all flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1.5">Total Mix Weight</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-800 flex flex-wrap items-baseline gap-x-2 break-all">
                    {fmt(results.mixWeight)} <span className="text-base font-bold text-slate-400">{results.weightUnit}</span>
                  </div>
                </div>
                <div className="w-11 h-11 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center shrink-0 ml-3">
                  <Weight size={22} strokeWidth={2} />
                </div>
              </div>

              {/* Aggregate */}
              <div className="bg-orange-50/70 border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1.5">Aggregate Weight</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-800 flex flex-wrap items-baseline gap-x-2 break-all">
                    {fmt(results.aggregateRequired)} <span className="text-base font-bold text-slate-400">{results.weightUnit}</span>
                  </div>
                  {results.baseAggregateRequired !== null && (
                    <div className="text-sm font-semibold text-slate-500 mt-1">
                      ({fmt(results.baseAggregateRequired)} {results.baseWeightUnit})
                    </div>
                  )}
                </div>
                <div className="w-11 h-11 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0 ml-3">
                  <Database size={22} strokeWidth={2} />
                </div>
              </div>

              {/* Bitumen Required — hero card with Litres embedded */}
              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 border border-violet-500 rounded-3xl p-7 shadow-xl shadow-violet-200 flex-1 flex flex-col justify-center text-white relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="text-sm font-bold text-violet-200 uppercase tracking-wider mb-2 relative z-10">Bitumen Required</div>
                <div className="text-4xl sm:text-5xl font-black flex flex-wrap items-baseline gap-x-3 relative z-10 break-all">
                  {fmt(results.bitumenRequired, 3)} <span className="text-xl font-bold text-violet-300">{results.weightUnit}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-violet-400/40 relative z-10">
                  <div className="flex items-center gap-2 text-violet-200 text-xs font-semibold uppercase tracking-widest mb-1">
                    <Droplets size={12} /> Bitumen in Litres
                  </div>
                  <div className="text-2xl font-black text-white flex items-baseline gap-2">
                    {Math.round(results.bitumenLitres).toLocaleString()}
                    <span className="text-base font-bold text-violet-300">L</span>
                  </div>
                </div>
              </div>

              {/* Order Quantity — conditional */}
              {results.wastage > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1.5">
                      Order Quantity <span className="font-normal text-amber-500 normal-case">(+{results.wastage}% wastage)</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-800 flex flex-wrap items-baseline gap-x-2 break-all">
                      {fmt(results.orderBitumen, 3)} <span className="text-base font-bold text-slate-400">{results.weightUnit}</span>
                    </div>
                    <div className="text-sm font-semibold text-amber-600 mt-1 flex items-center gap-1">
                      <Droplets size={12} /> {Math.round(results.orderBitumenLitres).toLocaleString()} L
                    </div>
                  </div>
                  <div className="w-11 h-11 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0 ml-3">
                    <ShoppingCart size={22} strokeWidth={2} />
                  </div>
                </div>
              )}

              {/* Cost */}
              {results.totalCost !== null && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-1">
                  <div className="text-sm font-bold text-green-700 uppercase tracking-wider shrink-0">Estimated Cost</div>
                  <div className="text-2xl sm:text-3xl font-black text-green-700 break-all sm:text-right">
                    {results.currency}{fmt(results.totalCost)}
                  </div>
                </div>
              )}

              {/* Disclaimer Note */}
              <div className="text-xs text-slate-500 mt-4 text-center px-4 font-medium">
                * Note: Consider adding a 3–5% margin to these results to account for site-specific material waste during transport and laying.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}