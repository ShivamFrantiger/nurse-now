"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need to leave my current full-time hospital job to join NurseNow?",
    answer:
      "Not at all! Over 45% of our registered nurse partners currently work full-time at hospitals or clinics and use NurseNow during their weekly off-days or night shifts to comfortably earn an extra ₹20,000 to ₹35,000 per month.",
  },
  {
    question: "How and when do I receive my shift earnings?",
    answer:
      "All shift payouts are processed directly into your registered bank account every Tuesday like clockwork. You receive an itemized electronic pay slip detailing shift dates, hospital departments, hours, and bonus differentials.",
  },
  {
    question: "Are there any registration charges or commissions deducted from my pay?",
    answer:
      "Zero. NurseNow does not charge nurses any registration fee, subscription fee, or agency commission. We charge the partner hospital for fulfillment. 100% of the displayed shift rate goes into your bank account.",
  },
  {
    question: "What documents are required for council verification?",
    answer:
      "You will need a photo or scan of your Nursing Council Registration certificate (e.g., KNC, DNC, MNC, etc.), your degree/diploma certificate (GNM or B.Sc), a government ID (Aadhaar or PAN), and bank account details for direct deposit.",
  },
  {
    question: "What if I fall sick or have an emergency and cannot attend a booked shift?",
    answer:
      "We understand healthcare emergencies happen. You can cancel a shift through the NurseNow mobile portal up to 6 hours before the reporting time without any financial penalty, allowing our automated backup dispatch system to notify another nearby nurse.",
  },
  {
    question: "Am I covered by insurance while on duty at partner hospitals?",
    answer:
      "Yes. Every confirmed NurseNow partner is automatically enrolled in our complimentary ₹5,00,000 on-duty accidental and professional incident protection plan from the moment you report until your shift completion is logged.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D3A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] mt-2">
            Everything you need to know about contract nursing and payouts on NurseNow.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all bg-[#FAFCFB]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#142D3A] text-sm sm:text-base hover:text-[#0D9488] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0D9488]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0]/50 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-10 p-6 rounded-2xl bg-[#E8F5F1]/80 border border-[#C6E7DE] text-center">
          <h4 className="text-sm font-bold text-[#142D3A]">Have more questions or need help applying?</h4>
          <p className="text-xs text-[#64748B] mt-1">
            Our nurse onboarding counselor team is available from 8 AM to 9 PM every day.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <a
              href="tel:+918001234567"
              className="px-4 py-2 rounded-xl bg-[#0D9488] text-white hover:bg-[#0F766E] transition-all"
            >
              Call Us: +91 80 4567 8900
            </a>
            <a
              href="https://wa.me/918001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white text-[#142D3A] border border-[#E2E8F0] hover:bg-slate-50 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
