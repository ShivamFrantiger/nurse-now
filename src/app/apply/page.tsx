import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Clock,
  Coins,
  Building2,
  PhoneCall,
  Sparkles,
  Lock,
} from "lucide-react";
import NurseApplicationForm from "@/components/NurseApplicationForm";

export const metadata = {
  title: "Apply as a Nurse Partner | NurseNow Healthcare Staffing",
  description:
    "Official contract job application for nurses. Join NurseNow's on-demand healthcare network. Earn up to ₹75,000/month with direct weekly payouts.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#FAFCFB] flex flex-col text-[#142D3A]">
      {/* Dedicated Application Portal Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Left: Brand + Job Title Tag */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0D9488] to-[#142D3A] flex items-center justify-center text-white font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                  N
                </div>
                <div>
                  <span className="text-xl font-extrabold tracking-tight text-[#142D3A] font-heading">
                    Nurse<span className="text-[#0D9488]">Now</span>
                  </span>
                  <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E8F5F1] text-[#0D9488] border border-[#C6E7DE]">
                    Careers &amp; Partner Hiring
                  </span>
                </div>
              </Link>
            </div>

            {/* Center/Right: Helpline & Back button */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-xs text-[#64748B]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Onboarding Support Desk:</span>
                <a
                  href="tel:+918001234567"
                  className="font-bold text-[#142D3A] hover:text-[#0D9488] flex items-center gap-1 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>+91 80 4567 8900</span>
                </a>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#142D3A] hover:bg-slate-100 border border-[#E2E8F0] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Overview</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area: Split 2-Column Job Application Experience */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sticky Sidebar: Job Details, Pay Structure, and Perks */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              {/* Job Card Overview */}
              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#E8F5F1] px-2.5 py-1 rounded-md border border-[#C6E7DE]">
                    <Sparkles className="w-3 h-3 text-[#0D9488]" />
                    Job ID: NN-CONTRACT-2026
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Active Hiring
                  </span>
                </div>

                <h1 className="text-2xl font-extrabold text-[#142D3A] tracking-tight">
                  Staff Nurse — Independent Contract Partner
                </h1>
                <p className="text-xs text-[#64748B] mt-1">
                  Department: Critical Care, Emergency, Operation Theatre &amp; General Wards
                </p>

                {/* Compensation Banner */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-[#142D3A] to-[#1C3E4F] text-white">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-slate-300 font-medium block">
                        Estimated Pay Rate:
                      </span>
                      <span className="text-2xl font-extrabold tracking-tight text-white">
                        ₹2,000 – ₹3,600
                        <span className="text-xs font-normal text-slate-300"> / shift</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-emerald-400 font-bold block uppercase">
                        Weekly Payout
                      </span>
                      <span className="text-xs font-semibold text-slate-200">Every Tuesday</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-700 text-xs text-[#E8F5F1] flex items-center justify-between">
                    <span>Monthly Potential:</span>
                    <strong className="text-white">Up to ₹75,000 / month</strong>
                  </div>
                </div>

                {/* Role Highlights Checklist */}
                <div className="mt-6 space-y-3 text-xs">
                  <h3 className="font-bold text-[#142D3A] uppercase tracking-wider text-[11px]">
                    Role Highlights &amp; Partner Benefits:
                  </h3>
                  <div className="space-y-2.5 text-[#64748B]">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#142D3A]">Work on Your Terms:</strong> Pick day, night, or weekend shifts via mobile app. Reject any shift without penalty.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Coins className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#142D3A]">Zero Agency Cuts:</strong> 100% of the displayed shift rate goes straight into your bank account.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#142D3A]">NABH Accredited Hospitals:</strong> Safe nurse-to-patient ratios in accredited hospitals and ICU centers.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#142D3A]">Free ₹5L Incident Insurance:</strong> Accidental and duty malpractice protection coverage included.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eligibility requirements */}
                <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                  <h3 className="font-bold text-[#142D3A] text-xs uppercase tracking-wider mb-2">
                    Minimum Eligibility:
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc list-inside">
                    <li>GNM Diploma, B.Sc Nursing, or Post-Basic B.Sc.</li>
                    <li>Active State Nursing Council Registration (KNC, DNC, MNC, etc.).</li>
                    <li>Basic Life Support (BLS) awareness preferred.</li>
                    <li>Zero prior clinical negligence record.</li>
                  </ul>
                </div>
              </div>

              {/* Verified Trust Card */}
              <div className="bg-[#E8F5F1] rounded-2xl p-4 border border-[#C6E7DE] flex items-center gap-3 text-xs text-[#142D3A]">
                <ShieldCheck className="w-6 h-6 text-[#0D9488] shrink-0" />
                <p>
                  <strong>100% Verified Clinical Network:</strong> Your credentials are kept confidential and verified directly against State Nursing Council registries.
                </p>
              </div>

              {/* Need Assistance Card */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 text-xs text-[#64748B] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#142D3A] block">Need help filling this form?</span>
                  <span>Our nurse recruiters can assist over phone.</span>
                </div>
                <a
                  href="tel:+918001234567"
                  className="px-3 py-1.5 rounded-lg bg-[#0D9488] text-white font-bold text-xs hover:bg-[#0F766E] transition-colors"
                >
                  Call Recruiter
                </a>
              </div>
            </div>

            {/* Right Column: The 5-Step Application Form Engine */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-4 sm:p-6">
                <NurseApplicationForm isStandalonePage={true} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Dedicated Application Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] py-6 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>256-Bit SSL Encrypted Healthcare Application Portal</span>
          </div>
          <p>© 2026 NurseNow Healthcare Technologies Pvt. Ltd. Indian Nursing Council Compliant.</p>
        </div>
      </footer>
    </div>
  );
}
