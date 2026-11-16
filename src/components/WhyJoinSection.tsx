"use client";

import React from "react";
import {
  CalendarCheck,
  Coins,
  HeartHandshake,
  CheckCircle,
  FileBadge2,
  Clock,
} from "lucide-react";

const perks = [
  {
    icon: Clock,
    title: "100% Shift Autonomy",
    subtitle: "Apne time pe kaam karo",
    description:
      "Choose morning, evening, or 12-hour night shifts based on your personal schedule. Accept or decline any shift directly on your phone with zero penalty or administrative pressure.",
    highlights: ["No forced duty", "Weekend-only options", "Flexible leave anytime"],
  },
  {
    icon: Coins,
    title: "Transparent & Weekly Payouts",
    subtitle: "Tuesdays direct into your bank account",
    description:
      "Say goodbye to delayed hospital payrolls and unexplained salary cuts. See your exact net take-home pay before you ever accept a shift. What you see is 100% what you receive.",
    highlights: ["Direct NEFT/UPI transfer", "Weekly pay slips", "Zero agency cut"],
  },
  {
    icon: FileBadge2,
    title: "Pre-Screened, Dignified Hospitals",
    subtitle: "Safe nurse-to-patient ratios",
    description:
      "We strictly partner with NABH and accredited healthcare institutions that respect nursing professionals. Work in clean, well-equipped ICUs and wards with verified supervisor support.",
    highlights: ["NABH accredited facilities", "Zero ward overcrowding", "Clear role guidelines"],
  },
  {
    icon: HeartHandshake,
    title: "Free Insurance & Clinical Support",
    subtitle: "We've got your back on duty",
    description:
      "Every NurseNow partner receives complimentary ₹5,00,000 accidental insurance coverage and access to a 24/7 Nurse Safety Helpline for on-shift assistance or clinical escalations.",
    highlights: ["₹5 Lakh insurance cover", "24/7 dedicated helpline", "Legal & dispute defense"],
  },
];

export default function WhyJoinSection() {
  return (
    <section id="why-join" className="py-16 sm:py-24 bg-[#FAFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>The NurseNow Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D3A] tracking-tight">
            Designed to Put Healthcare Workers First
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-3">
            Traditional hospital staffing treats nurses like numbers. NurseNow empowers you as an independent, respected healthcare professional.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-7 sm:p-8 shadow-xs hover:shadow-md transition-all hover:border-[#0D9488]/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5F1] text-[#0D9488] flex items-center justify-center shrink-0 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                      {perk.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[#142D3A] mt-0.5">
                      {perk.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed mt-4">
                  {perk.description}
                </p>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-2">
                  {perk.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#142D3A] bg-[#FAFCFB] border border-[#E2E8F0] px-3 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#0D9488]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
