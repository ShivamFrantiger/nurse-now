"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sister Sunita Mahapatra",
    role: "Senior ICU Nurse (7 Years Exp)",
    location: "Bengaluru, Karnataka",
    quote:
      "I was completely burnt out from mandatory 14-hour ward shifts and having my rest days canceled. With NurseNow, I do 4 night shifts a week in ICU, earn ₹56,000 every month, and have 3 full days to spend with my children. Payouts arrive every single Tuesday without fail.",
    earnings: "₹56,000 / mo",
    shiftsPerWeek: "4 shifts/week",
  },
  {
    name: "Brother Rahul Sharma",
    role: "OT & Emergency Nurse (4 Years Exp)",
    location: "Delhi NCR",
    quote:
      "I work at a local clinic on weekdays. On Friday and Saturday nights, I pick up OT shifts through NurseNow. It gives me an extra ₹28,000 a month with zero hospital politics. The app is so smooth—just like booking a cab, but for shifts.",
    earnings: "₹28,000 / mo (Part-Time)",
    shiftsPerWeek: "2 weekend shifts",
  },
  {
    name: "Sister Kavita Nair",
    role: "General Ward & Dialysis Specialist",
    location: "Mumbai, Maharashtra",
    quote:
      "Whenever I need to travel to my hometown in Kerala for a week, I just don't take any shifts. No leaves to apply for, no supervisor scolding me. NurseNow has brought dignity and freedom back to our nursing profession.",
    earnings: "₹48,500 / mo",
    shiftsPerWeek: "3–4 shifts/week",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#0D9488]" />
            <span>Nurse Partner Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D3A] tracking-tight">
            Loved by 2,500+ Nurses Across India
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-2">
            Hear from registered nurses who took control of their time and income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FAFCFB] rounded-2xl border border-[#E2E8F0] p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-sm text-[#142D3A] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#E2E8F0] pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#142D3A]">{t.name}</h4>
                    <p className="text-xs text-[#0D9488] font-medium">{t.role}</p>
                    <p className="text-[11px] text-[#64748B]">{t.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-[#142D3A] bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0] block">
                      {t.earnings}
                    </span>
                    <span className="text-[10px] text-[#64748B]">{t.shiftsPerWeek}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
