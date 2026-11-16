"use client";

import React from "react";
import { FileText, ShieldCheck, Smartphone, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Apply Online in 5 Minutes",
    description:
      "Fill out the registration form below with your nursing qualifications (GNM, B.Sc), State Nursing Council registration number, and preferred clinical specialties.",
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Fast 24-48h Verification",
    description:
      "Our clinical compliance panel verifies your credentials directly with your State Nursing Council. We conduct quick background screening so you can start safely.",
  },
  {
    step: "03",
    icon: Smartphone,
    title: "Pick Shifts on the App & Get Paid",
    description:
      "Get access to the NurseNow mobile portal. Browse available morning, evening, or night shifts nearby. Tap to accept and receive direct bank payouts every Tuesday.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#FAFCFB] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Simple Onboarding Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D3A] tracking-tight">
            From Registration to Your First Shift in 3 Steps
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-2">
            No endless hospital interviews or bureaucracy. Start taking shifts within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F5F1] text-[#0D9488] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#142D3A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]/60 flex items-center text-xs font-semibold text-[#0D9488]">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
