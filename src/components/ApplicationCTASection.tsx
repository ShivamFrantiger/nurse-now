"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Clock, CheckCircle2 } from "lucide-react";

export default function ApplicationCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAFCFB] to-[#E8F5F1]/50 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#142D3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D9488]/30 text-[#E8F5F1] text-xs font-semibold mb-6 border border-[#0D9488]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Immediate Openings across Bengaluru, Delhi NCR, Mumbai &amp; Hyderabad</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Escape Rigid Hospital Rosters?{" "}
              <span className="text-[#0D9488]">Apne Time Pe Kaam Karo.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Join 2,500+ nurses working on their own terms. Submit your application in just 4 minutes, get verified within 24 hours, and start picking up high-paying hospital shifts this week.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Zero registration fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Weekly Tuesday direct payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Free ₹5L Insurance Cover</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <span>Start Nurse Job Application</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#0D9488]" />
                <span>Takes ~4 minutes to complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
