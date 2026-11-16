"use client";

import React from "react";
import { Check, X, Scale } from "lucide-react";

const comparisonRows = [
  {
    parameter: "Shift Scheduling",
    traditional: "Rigid rosters assigned by hospital management with zero input.",
    nurseNow: "100% self-selected via mobile app. Pick only shifts that suit your life.",
  },
  {
    parameter: "Overtime & Emergency Calls",
    traditional: "Forced overtime, unexpected call-ins on your scheduled rest days.",
    nurseNow: "Zero forced overtime or emergency calls. Work only when you choose.",
  },
  {
    parameter: "Payout Schedule",
    traditional: "Delayed monthly payouts, unexpected deductions, delayed allowances.",
    nurseNow: "Guaranteed weekly payouts every Tuesday directly into your bank account.",
  },
  {
    parameter: "Take-Home Earnings",
    traditional: "Fixed ₹22,000 – ₹28,000/month for 26 grueling 12-hour shifts.",
    nurseNow: "Earn ₹45,000 – ₹75,000/month working only 16 to 22 shifts.",
  },
  {
    parameter: "Ward & Specialty Choice",
    traditional: "Assigned arbitrarily to overburdened wards regardless of comfort.",
    nurseNow: "Select ICUs, Emergency, or Wards that match your clinical competency.",
  },
  {
    parameter: "Leave & Rest Flexibility",
    traditional: "Need multiple approvals; leaves frequently rejected during staff crunches.",
    nurseNow: "Take 3 days or 3 weeks off whenever you need. No approvals required.",
  },
];

export default function ComparisonMatrix() {
  return (
    <section id="comparison" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Honest Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D3A] tracking-tight">
            Traditional Hospital Job vs. NurseNow Partner
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-2">
            Why thousands of Indian nursing professionals are switching to flexible on-demand shift work.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#142D3A] text-white">
                <th className="p-4 sm:p-5 text-sm font-semibold w-1/3">Key Working Condition</th>
                <th className="p-4 sm:p-5 text-sm font-semibold w-1/3 text-slate-300">
                  Traditional Hospital Staff Job
                </th>
                <th className="p-4 sm:p-5 text-sm font-semibold w-1/3 bg-[#0D9488] text-white">
                  NurseNow Contract Partner
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] bg-white text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#142D3A] bg-[#FAFCFB]/60">
                    {row.parameter}
                  </td>
                  <td className="p-4 sm:p-5 text-[#64748B]">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3" />
                      </div>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#142D3A] bg-[#E8F5F1]/30">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#0D9488] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{row.nurseNow}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
