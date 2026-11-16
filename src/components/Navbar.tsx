"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, ShieldCheck, Clock, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-all">
      {/* Top micro-bar */}
      <div className="bg-[#142D3A] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#0D9488]/30 text-[#E8F5F1] px-2 py-0.5 rounded text-[11px] font-medium">
              <ShieldCheck className="w-3 h-3 text-[#0D9488]" />
              State Nursing Council Compliant
            </span>
            <span className="hidden sm:inline text-slate-300">
              Contract & Flexible Nursing Positions Open across Bengaluru, Delhi NCR, Mumbai & Hyderabad
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <span className="flex items-center gap-1 text-[#E8F5F1]">
              <Clock className="w-3 h-3 text-[#0D9488]" />
              Weekly Direct Payouts Every Tuesday
            </span>
            <a
              href="tel:+918001234567"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#0D9488]" />
              <span className="font-semibold text-white">Helpline: +91 80 4567 8900</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0D9488] to-[#142D3A] flex items-center justify-center shadow-sm text-white font-bold text-xl tracking-tight transition-transform group-hover:scale-105">
              <span className="relative flex items-center justify-center">
                N
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-[#142D3A] font-heading">
                  Nurse<span className="text-[#0D9488]">Now</span>
                </span>
                <span className="bg-[#E8F5F1] text-[#0D9488] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-[#C6E7DE]">
                  Partner Portal
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] font-medium leading-none mt-0.5">
                Care can&apos;t wait. Neither should staffing.
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#142D3A]">
            <a
              href="#why-join"
              className="hover:text-[#0D9488] transition-colors py-2"
            >
              Why NurseNow
            </a>
            <a
              href="#earnings"
              className="hover:text-[#0D9488] transition-colors py-2"
            >
              Earnings Calculator
            </a>
            <a
              href="#comparison"
              className="hover:text-[#0D9488] transition-colors py-2"
            >
              Hospital vs. NurseNow
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#0D9488] transition-colors py-2"
            >
              How It Works
            </a>
            <a
              href="#faqs"
              className="hover:text-[#0D9488] transition-colors py-2"
            >
              FAQs
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>Apply for Shifts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#142D3A] hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#why-join"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#142D3A] hover:bg-slate-50 rounded-lg"
          >
            Why NurseNow
          </a>
          <a
            href="#earnings"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#142D3A] hover:bg-slate-50 rounded-lg"
          >
            Earnings Calculator
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#142D3A] hover:bg-slate-50 rounded-lg"
          >
            Hospital vs. NurseNow
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#142D3A] hover:bg-slate-50 rounded-lg"
          >
            How It Works
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#142D3A] hover:bg-slate-50 rounded-lg"
          >
            FAQs
          </a>
          <div className="pt-2">
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D9488] text-white font-semibold text-center shadow"
            >
              <span>Apply for Contract Shifts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
