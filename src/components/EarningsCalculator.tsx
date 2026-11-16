"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle2, Moon, Sun, Sparkles } from "lucide-react";

interface SpecialtyOption {
  id: string;
  name: string;
  baseRate: number;
  description: string;
}

const specialties: SpecialtyOption[] = [
  {
    id: "ward",
    name: "General Ward",
    baseRate: 2000,
    description: "Medical & surgical wards, routine vitals & medications",
  },
  {
    id: "icu",
    name: "ICU / CCU Critical Care",
    baseRate: 2800,
    description: "Ventilators, arterial lines, critical patient monitoring",
  },
  {
    id: "ot",
    name: "Operation Theatre (OT) & Emergency",
    baseRate: 3200,
    description: "Surgical scrubbing, trauma triage, acute resuscitation",
  },
  {
    id: "specialist",
    name: "Pediatric / NICU / Dialysis",
    baseRate: 3500,
    description: "High-acuity neonatal, hemodialysis & specialized care",
  },
];

export default function EarningsCalculator() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("icu");
  const [shiftsPerWeek, setShiftsPerWeek] = useState<number>(4);
  const [isNightShift, setIsNightShift] = useState<boolean>(true);

  const currentSpecialty =
    specialties.find((s) => s.id === selectedSpecialty) || specialties[1];

  const nightIncentive = isNightShift ? 400 : 0;
  const ratePerShift = currentSpecialty.baseRate + nightIncentive;
  const weeklyEarnings = ratePerShift * shiftsPerWeek;
  const monthlyEarnings = weeklyEarnings * 4.33; // average weeks in month

  return (
    <section id="earnings" className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Payout Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D3A] tracking-tight">
            See How Much You Can Earn on Your Own Schedule
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-2">
            No agency middleman. No hidden fees. Complete transparency before you ever accept a shift.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFCFB] rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Choose Specialty */}
            <div>
              <label className="block text-sm font-bold text-[#142D3A] mb-3">
                1. Select Your Clinical Specialty:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((spec) => {
                  const isSelected = selectedSpecialty === spec.id;
                  return (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => setSelectedSpecialty(spec.id)}
                      className={`text-left p-4 rounded-xl border transition-all text-xs ${
                        isSelected
                          ? "border-[#0D9488] bg-[#E8F5F1]/60 shadow-xs ring-1 ring-[#0D9488]"
                          : "border-[#E2E8F0] bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold text-sm text-[#142D3A]">
                        <span>{spec.name}</span>
                        <span className="text-[#0D9488]">₹{spec.baseRate}/sh</span>
                      </div>
                      <p className="text-[11px] text-[#64748B] mt-1 line-clamp-1">
                        {spec.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Shift Format Toggle */}
            <div>
              <label className="block text-sm font-bold text-[#142D3A] mb-3">
                2. Shift Format &amp; Timing:
              </label>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <button
                  type="button"
                  onClick={() => setIsNightShift(false)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-semibold transition-all ${
                    !isNightShift
                      ? "border-[#0D9488] bg-[#0D9488] text-white shadow-xs"
                      : "border-[#E2E8F0] bg-white text-[#142D3A] hover:bg-slate-50"
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  <span>Day Shift (8 Hours)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsNightShift(true)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-semibold transition-all ${
                    isNightShift
                      ? "border-[#0D9488] bg-[#0D9488] text-white shadow-xs"
                      : "border-[#E2E8F0] bg-white text-[#142D3A] hover:bg-slate-50"
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  <span>12h Night (+₹400 Bonus)</span>
                </button>
              </div>
            </div>

            {/* 3. Shifts per week Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-[#142D3A]">
                  3. How many shifts do you want to work per week?
                </label>
                <span className="text-lg font-black text-[#0D9488] bg-[#E8F5F1] px-3 py-0.5 rounded-lg border border-[#C6E7DE]">
                  {shiftsPerWeek} Shifts / week
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={shiftsPerWeek}
                onChange={(e) => setShiftsPerWeek(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-2 font-medium">
                <span>1 shift (Weekend only)</span>
                <span>3 shifts (Part-time)</span>
                <span>5 shifts (Full-time)</span>
                <span>7 shifts (High Earner)</span>
              </div>
            </div>
          </div>

          {/* Result Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#142D3A] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#0D9488]/30 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#0D9488] font-bold">
                    Estimated Net Take-Home
                  </span>
                  <p className="text-xs text-slate-300">Direct weekly bank transfer</p>
                </div>
                <div className="bg-[#0D9488]/20 border border-[#0D9488]/40 px-2.5 py-1 rounded-md text-[11px] text-[#E8F5F1] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#0D9488]" />
                  <span>Zero Deductions</span>
                </div>
              </div>

              {/* Rate per shift */}
              <div className="mb-4">
                <span className="text-xs text-slate-400">Guaranteed Pay Per Shift:</span>
                <div className="text-2xl font-bold text-white">
                  ₹{ratePerShift.toLocaleString("en-IN")}{" "}
                  <span className="text-xs font-normal text-slate-300">
                    / {isNightShift ? "12 hr Night" : "8 hr Day"}
                  </span>
                </div>
              </div>

              {/* Monthly earnings spotlight */}
              <div className="bg-gradient-to-r from-[#0D9488]/30 to-emerald-950/40 p-4 rounded-xl border border-[#0D9488]/30 mb-5">
                <span className="text-xs text-[#E8F5F1] font-medium block">
                  Projected Monthly Earnings:
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ₹{Math.round(monthlyEarnings).toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-slate-300 block mt-1">
                  Working just {shiftsPerWeek * 4} shifts a month (with {30 - shiftsPerWeek * 4} full rest days!)
                </span>
              </div>

              {/* Weekly figure */}
              <div className="flex items-center justify-between text-xs border-t border-slate-700/60 pt-3 mb-6">
                <span className="text-slate-300">Weekly Payout (Every Tuesday):</span>
                <span className="font-bold text-white text-base">
                  ₹{weeklyEarnings.toLocaleString("en-IN")}
                </span>
              </div>

              {/* CTA button */}
              <Link
                href="/apply"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span>Register to Lock in This Rate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rates fixed by contract. Instant dispute protection.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fact banner */}
        <div className="mt-8 p-4 rounded-2xl bg-[#E8F5F1] border border-[#C6E7DE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0D9488] text-white flex items-center justify-center shrink-0 font-bold text-sm">
              ₹
            </div>
            <p className="text-xs sm:text-sm text-[#142D3A]">
              <strong>Did you know?</strong> Traditional private hospital staff nurses in India earn around{" "}
              <strong>₹22,000 – ₹28,000/month</strong> for 26 days of rigid, forced duty. On NurseNow, working just{" "}
              <strong>4 shifts/week</strong> earns you <strong>₹48,000 – ₹60,000/month</strong> with complete peace of mind.
            </p>
          </div>
          <Link
            href="/apply"
            className="shrink-0 text-xs font-bold text-[#0D9488] hover:underline flex items-center gap-1"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
