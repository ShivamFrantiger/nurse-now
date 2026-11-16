"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building2,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-[#FAFCFB] to-[#F0FDFA]/40">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#0D9488]/10 via-[#E8F5F1]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: The Pitch & Hook */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5F1] border border-[#C6E7DE] text-[#0D9488] text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#0D9488]" />
              <span>Hiring Verified Contract Nurses Across Major Cities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#142D3A] tracking-tight leading-[1.15]">
                Tired of Heavy Hospital Workloads &amp; Emergency Calls?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#142D3A]">
                  Apne Time Pe Kaam Karo.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#64748B] font-normal max-w-2xl leading-relaxed">
                Join <strong className="text-[#142D3A]">NurseNow</strong> as an independent nursing partner.
                Choose your own shifts, select preferred wards, and earn up to{" "}
                <span className="font-semibold text-[#0D9488]">₹45,000 – ₹75,000/month</span> with direct weekly
                payouts. Zero forced overtime. Zero hospital politics.
              </p>
            </div>

            {/* Zomato/Blinkit-style Value Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5F1] text-[#0D9488] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#142D3A]">100% Shift Freedom</h2>
                  <p className="text-xs text-[#64748B]">Work 2 shifts or 6 shifts a week. Total flexibility.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#142D3A]">Weekly Direct Payouts</h2>
                  <p className="text-xs text-[#64748B]">Every Tuesday in your bank account. No delays.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#142D3A]">Top Hospital Networks</h2>
                  <p className="text-xs text-[#64748B]">Accredited NABH hospitals with safe patient-nurse ratios.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#142D3A]">Free ₹5L Insurance Cover</h2>
                  <p className="text-xs text-[#64748B]">Accidental &amp; professional protection while on duty.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Register as a Nurse Partner</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#earnings"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#142D3A] font-semibold text-base border border-[#E2E8F0] shadow-xs transition-all"
              >
                <TrendingUp className="w-4 h-4 text-[#0D9488]" />
                <span>Calculate Your Earnings</span>
              </a>
            </div>

            {/* Micro reassurance checklist */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Zero Registration Fee
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Fast 24h Document Verification
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                No Agency Commission Cuts
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Real-Time Shift Teaser Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative glow badge */}
              <div className="absolute -top-3 -right-3 z-20 bg-[#142D3A] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Shifts Available Right Now</span>
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xl relative overflow-hidden">
                <div className="border-b border-[#E2E8F0] pb-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#E8F5F1] px-2.5 py-0.5 rounded-md">
                        Sample Opportunity
                      </span>
                      <h2 className="text-lg font-bold text-[#142D3A] mt-1">
                        ICU Staff Nurse (Night Shift)
                      </h2>
                      <p className="text-xs text-[#64748B]">Apollo Specialty Hospital, Bengaluru (3.4 km away)</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-[#0D9488]">₹2,800</span>
                      <p className="text-[11px] text-[#64748B]">Single 12h Shift</p>
                    </div>
                  </div>
                </div>

                {/* Shift Details Breakdown */}
                <div className="space-y-3 text-xs mb-5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFCFB] border border-[#E2E8F0]">
                    <span className="text-[#64748B] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0D9488]" /> Shift Timing:
                    </span>
                    <span className="font-semibold text-[#142D3A]">8:00 PM – 8:00 AM (Tonight)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFCFB] border border-[#E2E8F0]">
                    <span className="text-[#64748B] flex items-center gap-1.5">
                      <CalendarCheck className="w-3.5 h-3.5 text-[#0D9488]" /> Payout Schedule:
                    </span>
                    <span className="font-semibold text-emerald-700">Tuesday, 10:00 AM (Direct Bank Transfer)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFCFB] border border-[#E2E8F0]">
                    <span className="text-[#64748B] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" /> Requirements:
                    </span>
                    <span className="font-semibold text-[#142D3A]">B.Sc / GNM + KNC Reg + 1 yr ICU exp</span>
                  </div>
                </div>

                {/* Simulated 1-Tap Accept action */}
                <Link
                  href="/apply"
                  className="p-3.5 rounded-xl bg-[#E8F5F1]/80 hover:bg-[#E8F5F1] border border-[#C6E7DE] flex items-center justify-between mb-4 group transition-all"
                >
                  <div>
                    <p className="text-xs font-bold text-[#142D3A]">Ready to work on your schedule?</p>
                    <p className="text-[11px] text-[#0D9488]">Register once, pick shifts anytime from your phone.</p>
                  </div>
                  <span className="text-xs font-bold text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white bg-white px-3 py-1.5 rounded-lg shadow-2xs border border-[#C6E7DE] transition-colors">
                    1-Tap Accept
                  </span>
                </Link>

                {/* Trust bar at bottom of card */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-[#E2E8F0]">
                  <div>
                    <span className="block text-base font-extrabold text-[#142D3A]">2,800+</span>
                    <span className="text-[10px] text-[#64748B]">Active Nurses</span>
                  </div>
                  <div>
                    <span className="block text-base font-extrabold text-[#0D9488]">₹3.4 Cr+</span>
                    <span className="text-[10px] text-[#64748B]">Paid Out</span>
                  </div>
                  <div>
                    <span className="block text-base font-extrabold text-[#142D3A]">4.9 / 5</span>
                    <span className="text-[10px] text-[#64748B]">Partner Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
