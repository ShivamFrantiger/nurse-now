"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, PhoneCall, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#142D3A] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0D9488] flex items-center justify-center font-black text-white text-lg">
                N
              </div>
              <span className="text-2xl font-black tracking-tight font-heading">
                Nurse<span className="text-[#0D9488]">Now</span>
              </span>
            </Link>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              India&apos;s leading on-demand healthcare staffing marketplace. Empowering nursing professionals with shift freedom, dignified compensation, and zero administrative friction.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E8F5F1] bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/60 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>Compliant with Indian Nursing Council &amp; State Regulations</span>
            </div>
          </div>

          {/* Quick links: For Nurses */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
              For Nurse Partners
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/apply" className="hover:text-white transition-colors">
                  Register as Contract Nurse
                </Link>
              </li>
              <li>
                <a href="#earnings" className="hover:text-white transition-colors">
                  Earnings Calculator
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Hospital vs. NurseNow
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  3-Step Onboarding
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Partner FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links: For Healthcare Facilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
              For Hospitals &amp; Clinics
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Request Shift Coverage
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Credential Verification Process
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  ICU &amp; Emergency Nurse Roster
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Hospital Partner Agreement
                </span>
              </li>
            </ul>
          </div>

          {/* Contact and Cities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
              Nurse Partner Helpline
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <PhoneCall className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">+91 80 4567 8900</span>
                  <span className="text-[11px] text-slate-400">8:00 AM – 9:00 PM (All 7 Days)</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>nurses@nursenow.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-400">
                  Bengaluru · Delhi NCR · Mumbai · Hyderabad · Pune
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 NurseNow Healthcare Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Clinical Standards &amp; Safety</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
