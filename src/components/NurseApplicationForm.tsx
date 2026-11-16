"use client";

import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Stethoscope,
  Clock,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Upload,
  ArrowRight,
  ArrowLeft,
  FileCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface FormData {
  // Step 1
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  gender: string;
  dob: string;
  otpVerified: boolean;

  // Step 2
  qualification: string;
  council: string;
  registrationNumber: string;
  registrationYear: string;
  documentName: string;

  // Step 3
  experience: string;
  specialties: string[];
  certifications: string[];
  employmentStatus: string;

  // Step 4
  preferredShifts: string[];
  preferredRadius: string;
  shiftsPerWeek: string;
  preferredHospitalTypes: string[];

  // Step 5
  accountHolder: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  consentAgreed: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  mobile: "",
  email: "",
  city: "Bengaluru",
  state: "Karnataka",
  pincode: "",
  gender: "Female",
  dob: "",
  otpVerified: true,

  qualification: "B.Sc Nursing",
  council: "Karnataka Nursing Council (KNC)",
  registrationNumber: "",
  registrationYear: "2021",
  documentName: "",

  experience: "1-3 Years",
  specialties: ["ICU / CCU Critical Care"],
  certifications: ["BLS (Basic Life Support)"],
  employmentStatus: "Available Immediately (Contract Nurse)",

  preferredShifts: ["12-Hour Night Shift (8 PM – 8 AM)"],
  preferredRadius: "Within 5 km",
  shiftsPerWeek: "3–4 Shifts",
  preferredHospitalTypes: ["NABH Accredited Multi-specialty Hospitals"],

  accountHolder: "",
  bankName: "",
  accountNumber: "",
  ifscCode: "",
  consentAgreed: true,
};

const specialtyOptions = [
  "ICU / CCU Critical Care",
  "Operation Theatre (OT)",
  "Emergency & Trauma Triage",
  "General Medical & Surgical Ward",
  "Pediatric & NICU / PICU",
  "Hemodialysis Unit",
  "Labor & Delivery (OBG)",
  "Oncology & Chemotherapy",
];

const certificationOptions = [
  "BLS (Basic Life Support)",
  "ACLS (Advanced Cardiac Life Support)",
  "IV Cannulation & Infusion Certified",
  "Infection Prevention & Control",
  "Neonatal Resuscitation (NRP)",
];

const shiftTimingOptions = [
  "Morning Shift (8 AM – 4 PM)",
  "Evening Shift (2 PM – 10 PM)",
  "12-Hour Night Shift (8 PM – 8 AM)",
  "12-Hour Day Shift (8 AM – 8 PM)",
];

interface NurseApplicationFormProps {
  isStandalonePage?: boolean;
}

export default function NurseApplicationForm({
  isStandalonePage = false,
}: NurseApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  const toggleSpecialty = (item: string) => {
    setFormData((prev) => {
      const exists = prev.specialties.includes(item);
      const updated = exists
        ? prev.specialties.filter((s) => s !== item)
        : [...prev.specialties, item];
      return { ...prev, specialties: updated };
    });
  };

  const toggleCertification = (item: string) => {
    setFormData((prev) => {
      const exists = prev.certifications.includes(item);
      const updated = exists
        ? prev.certifications.filter((c) => c !== item)
        : [...prev.certifications, item];
      return { ...prev, certifications: updated };
    });
  };

  const toggleShift = (item: string) => {
    setFormData((prev) => {
      const exists = prev.preferredShifts.includes(item);
      const updated = exists
        ? prev.preferredShifts.filter((s) => s !== item)
        : [...prev.preferredShifts, item];
      return { ...prev, preferredShifts: updated };
    });
  };

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadProgress(20);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            updateField("documentName", file.name);
            return 100;
          }
          return prev + 30;
        });
      }, 150);
    }
  };

  const validateStep = (step: number) => {
    if (step === 1) {
      if (!formData.fullName.trim()) return "Please enter your full name as per your nursing certificate.";
      if (!formData.mobile.trim() || formData.mobile.length < 10) return "Please enter a valid 10-digit mobile number.";
      if (!formData.pincode.trim() || formData.pincode.length < 6) return "Please enter a valid 6-digit pin code.";
    }
    if (step === 2) {
      if (!formData.registrationNumber.trim()) return "Please enter your State Nursing Council Registration Number.";
    }
    if (step === 3) {
      if (formData.specialties.length === 0) return "Please select at least one clinical specialty.";
    }
    if (step === 4) {
      if (formData.preferredShifts.length === 0) return "Please select at least one preferred shift timing.";
    }
    if (step === 5) {
      if (!formData.consentAgreed) return "Please accept the verification declaration to proceed.";
    }
    return null;
  };

  const nextStep = () => {
    const error = validateStep(currentStep);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage("");
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateStep(5);
    if (error) {
      setErrorMessage(error);
      return;
    }
    const generatedId = `NN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(generatedId);
    setIsSubmitted(true);
  };

  // Steps indicator configuration
  const stepsMeta = [
    { num: 1, label: "Personal Details", icon: User },
    { num: 2, label: "Council Registration", icon: GraduationCap },
    { num: 3, label: "Clinical Specialties", icon: Stethoscope },
    { num: 4, label: "Shift Preferences", icon: Clock },
    { num: 5, label: "Payout & Review", icon: CreditCard },
  ];

  const formBody = (
    <div className={isStandalonePage ? "w-full" : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"}>
      {/* Header (only shown if not standalone or formatted as header) */}
      {!isStandalonePage ? (
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Nurse Partner Registration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D3A] tracking-tight">
            Register as a Nurse Partner
          </h2>
          <p className="text-base text-[#64748B] mt-2 max-w-xl mx-auto">
            Take 5 minutes to complete your contract profile. Once verified, you will receive shift notifications matching your exact ward preferences.
          </p>
        </div>
      ) : (
        <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                Application Form
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#142D3A]">
                Candidate Registration Portal
              </h2>
            </div>
            <span className="text-xs text-[#64748B] bg-slate-100 px-2.5 py-1 rounded-md font-semibold">
              Step {currentStep} of 5
            </span>
          </div>
        </div>
      )}

        {/* Step Progress Tracker */}
        {!isSubmitted && (
          <div className="mb-8">
            <div className="grid grid-cols-5 gap-2 sm:gap-4">
              {stepsMeta.map((s) => {
                const Icon = s.icon;
                const isPassed = currentStep > s.num;
                const isCurrent = currentStep === s.num;
                return (
                  <div key={s.num} className="text-center">
                    <div
                      className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                        isPassed
                          ? "bg-[#0D9488] text-white shadow-xs"
                          : isCurrent
                          ? "bg-[#142D3A] text-white shadow-md ring-2 ring-[#0D9488] ring-offset-2"
                          : "bg-white text-slate-400 border border-[#E2E8F0]"
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <span
                      className={`hidden sm:block text-[11px] font-semibold mt-2 truncate ${
                        isCurrent ? "text-[#142D3A]" : "text-[#64748B]"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Progress bar line */}
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-4 overflow-hidden">
              <div
                className="bg-[#0D9488] h-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-6 sm:p-10">
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success State */}
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#E8F5F1] text-[#0D9488] flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-[#E8F5F1] px-3 py-1 rounded-full border border-[#C6E7DE]">
                  Application Received Successfully
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142D3A] mt-3">
                  Welcome to NurseNow, Sister / Brother {formData.fullName}!
                </h3>
                <p className="text-sm text-[#64748B] mt-2 max-w-lg mx-auto">
                  Your contract nursing registration has been submitted for State Council verification.
                </p>
              </div>

              {/* Application Details Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#FAFCFB] border border-[#E2E8F0] text-left space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#64748B]">Application ID:</span>
                  <span className="font-extrabold text-sm text-[#142D3A]">{applicationId}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#64748B]">Registration Number:</span>
                  <span className="font-semibold text-[#142D3A]">{formData.registrationNumber}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#64748B]">Primary Specialty:</span>
                  <span className="font-semibold text-[#0D9488]">{formData.specialties[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Verification SLA:</span>
                  <span className="font-bold text-emerald-700">Within 24 Hours</span>
                </div>
              </div>

              {/* What happens next */}
              <div className="max-w-md mx-auto text-left space-y-2 pt-2">
                <h4 className="text-xs font-bold text-[#142D3A] uppercase tracking-wider">
                  What Happens Next?
                </h4>
                <div className="space-y-2 text-xs text-[#64748B]">
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#E8F5F1] text-[#0D9488] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      Our clinical officer will verify your council certificate with the{" "}
                      <strong>{formData.council}</strong> database.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#E8F5F1] text-[#0D9488] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      You will receive an SMS and WhatsApp activation link at{" "}
                      <strong>+91 {formData.mobile}</strong>.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#E8F5F1] text-[#0D9488] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      Log in to the NurseNow mobile portal to view and accept shifts starting this week.
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData(initialFormData);
                  }}
                  className="text-xs text-[#0D9488] font-bold hover:underline"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Personal & Contact Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#142D3A]">
                      Step 1: Personal &amp; Contact Information
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      Enter your legal details as printed on your official Nursing Council ID card.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Full Name (as per Nursing Council Registration) *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sister Priya Mary Mathew"
                        value={formData.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Mobile Number (WhatsApp Enabled) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-xs font-bold text-slate-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="98765 43210"
                          value={formData.mobile}
                          onChange={(e) => updateField("mobile", e.target.value.replace(/\D/g, ""))}
                          className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="priya.nurse@gmail.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Current City *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm bg-white"
                      >
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Area Pin Code *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="560001"
                        value={formData.pincode}
                        onChange={(e) => updateField("pincode", e.target.value.replace(/\D/g, ""))}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => updateField("gender", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm bg-white"
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => updateField("dob", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Qualification & Council Registration */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#142D3A]">
                      Step 2: Nursing Qualification &amp; Council Registration
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      NurseNow strictly connects credential-verified nurses. We cross-verify every license number.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Highest Nursing Qualification *
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => updateField("qualification", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm bg-white"
                      >
                        <option value="B.Sc Nursing">B.Sc Nursing (4-Year Degree)</option>
                        <option value="GNM">GNM (General Nursing &amp; Midwifery - 3 Yrs)</option>
                        <option value="Post-Basic B.Sc">Post-Basic B.Sc Nursing</option>
                        <option value="M.Sc Nursing">M.Sc Nursing / Clinical Specialist</option>
                        <option value="ANM">ANM (Auxiliary Nurse Midwife)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        State Nursing Council *
                      </label>
                      <select
                        value={formData.council}
                        onChange={(e) => updateField("council", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm bg-white"
                      >
                        <option value="Karnataka Nursing Council (KNC)">Karnataka Nursing Council (KNC)</option>
                        <option value="Delhi Nursing Council (DNC)">Delhi Nursing Council (DNC)</option>
                        <option value="Maharashtra Nursing Council (MNC)">Maharashtra Nursing Council (MNC)</option>
                        <option value="Tamil Nadu Nurses and Midwives Council (TNC)">Tamil Nadu Council (TNC)</option>
                        <option value="Kerala Nurses and Midwives Council (KNMC)">Kerala Council (KNMC)</option>
                        <option value="Telangana Nursing Council">Telangana Nursing Council</option>
                        <option value="Uttar Pradesh Nurses & Midwives Council">UP Nurses Council</option>
                        <option value="Indian Nursing Council (INC)">Indian Nursing Council (INC)</option>
                        <option value="Other State Council">Other State Council</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Council Registration / License Number *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. KNC-2019-84920"
                        value={formData.registrationNumber}
                        onChange={(e) => updateField("registrationNumber", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Year of Registration *
                      </label>
                      <input
                        type="number"
                        min="1990"
                        max="2026"
                        placeholder="2020"
                        value={formData.registrationYear}
                        onChange={(e) => updateField("registrationYear", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                      />
                    </div>

                    {/* Document Upload Simulator */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Upload Nursing Registration Certificate / ID (PDF / JPG)
                      </label>
                      <div className="border-2 border-dashed border-[#E2E8F0] hover:border-[#0D9488] rounded-2xl p-6 text-center bg-[#FAFCFB] transition-all">
                        <Upload className="w-8 h-8 text-[#0D9488] mx-auto mb-2" />
                        <label className="cursor-pointer">
                          <span className="text-xs font-bold text-[#0D9488] hover:underline">
                            Click to upload registration document
                          </span>
                          <span className="text-xs text-[#64748B]"> or drag and drop</span>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleSimulatedUpload}
                            className="hidden"
                          />
                        </label>
                        <p className="text-[11px] text-[#64748B] mt-1">
                          Clear photo or PDF of State Nursing Council card (Max 10 MB)
                        </p>

                        {uploadProgress > 0 && uploadProgress < 100 && (
                          <div className="mt-3 max-w-xs mx-auto">
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-[#0D9488] h-full transition-all"
                                style={{ width: `${uploadProgress}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-slate-500 mt-1 block">Uploading...</span>
                          </div>
                        )}

                        {formData.documentName && (
                          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E8F5F1] text-[#0D9488] text-xs font-semibold border border-[#C6E7DE]">
                            <FileCheck className="w-4 h-4" />
                            <span>{formData.documentName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Clinical Specialties & Experience */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#142D3A]">
                      Step 3: Clinical Specialties &amp; Experience
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      Tell us your clinical comfort zone so hospitals request you for relevant shifts.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Total Clinical Ward / Hospital Experience *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["< 1 Year (Fresher)", "1–3 Years", "3–5 Years", "5+ Years"].map((exp) => (
                          <button
                            key={exp}
                            type="button"
                            onClick={() => updateField("experience", exp)}
                            className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all ${
                              formData.experience === exp
                                ? "border-[#0D9488] bg-[#E8F5F1] text-[#0D9488] shadow-xs"
                                : "border-[#E2E8F0] bg-white text-[#142D3A] hover:bg-slate-50"
                            }`}
                          >
                            {exp}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Primary Clinical Specialties (Select all that apply) *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {specialtyOptions.map((spec) => {
                          const isSelected = formData.specialties.includes(spec);
                          return (
                            <button
                              key={spec}
                              type="button"
                              onClick={() => toggleSpecialty(spec)}
                              className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                                isSelected
                                  ? "border-[#0D9488] bg-[#E8F5F1] text-[#0D9488]"
                                  : "border-[#E2E8F0] bg-white text-[#142D3A] hover:border-slate-300"
                              }`}
                            >
                              <span>{spec}</span>
                              {isSelected ? (
                                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                              ) : (
                                <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Clinical Certifications (Helps you earn higher shift rates)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {certificationOptions.map((cert) => {
                          const isSelected = formData.certifications.includes(cert);
                          return (
                            <button
                              key={cert}
                              type="button"
                              onClick={() => toggleCertification(cert)}
                              className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                                isSelected
                                  ? "border-[#0D9488] bg-[#0D9488] text-white"
                                  : "border-[#E2E8F0] bg-white text-[#142D3A] hover:bg-slate-50"
                              }`}
                            >
                              {cert}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Current Employment Status
                      </label>
                      <select
                        value={formData.employmentStatus}
                        onChange={(e) => updateField("employmentStatus", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm bg-white"
                      >
                        <option value="Available Immediately (Contract Nurse)">
                          Available Immediately (Full-Time Partner)
                        </option>
                        <option value="Working Full-Time (Looking for Off-Day Shifts)">
                          Currently Working (Looking for extra off-day &amp; night shifts)
                        </option>
                        <option value="Freelance / Private Duty Nurse">
                          Freelance / Home Healthcare Nurse
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Shift & Location Preferences */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#142D3A]">
                      Step 4: Shift &amp; Working Preferences
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      You are in full control. Choose the shifts, distances, and volumes that match your lifestyle.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Preferred Shift Timings (Select all you are open to) *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {shiftTimingOptions.map((timing) => {
                          const isSelected = formData.preferredShifts.includes(timing);
                          return (
                            <button
                              key={timing}
                              type="button"
                              onClick={() => toggleShift(timing)}
                              className={`text-left p-3.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                                isSelected
                                  ? "border-[#0D9488] bg-[#E8F5F1] text-[#0D9488]"
                                  : "border-[#E2E8F0] bg-white text-[#142D3A] hover:border-slate-300"
                              }`}
                            >
                              <span>{timing}</span>
                              {isSelected ? (
                                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                              ) : (
                                <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                          Maximum Travel Distance from Home
                        </label>
                        <select
                          value={formData.preferredRadius}
                          onChange={(e) => updateField("preferredRadius", e.target.value)}
                          className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm bg-white"
                        >
                          <option value="Within 5 km">Within 5 km (Walking / Short commute)</option>
                          <option value="5–10 km">5 to 10 km</option>
                          <option value="10–15 km">10 to 15 km</option>
                          <option value="Anywhere in the City">Anywhere in the city (Higher shift options)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                          How many shifts do you plan to take per week?
                        </label>
                        <select
                          value={formData.shiftsPerWeek}
                          onChange={(e) => updateField("shiftsPerWeek", e.target.value)}
                          className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm bg-white"
                        >
                          <option value="1–2 Shifts">1 to 2 Shifts (Weekend / Extra income)</option>
                          <option value="3–4 Shifts">3 to 4 Shifts (Ideal balance)</option>
                          <option value="5–6 Shifts">5 to 6 Shifts (Maximum earnings)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Payout Information & Final Review */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#142D3A]">
                      Step 5: Bank Payout Details &amp; Verification Consent
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      Your earnings are transferred directly every Tuesday. Ensure bank details match your registered name.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Bank Account Holder Name (Must match certificate) *
                      </label>
                      <input
                        type="text"
                        placeholder="Sister Priya Mathew"
                        value={formData.accountHolder}
                        onChange={(e) => updateField("accountHolder", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Bank Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. State Bank of India / HDFC"
                        value={formData.bankName}
                        onChange={(e) => updateField("bankName", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        Bank Account Number *
                      </label>
                      <input
                        type="password"
                        placeholder="Enter account number"
                        value={formData.accountNumber}
                        onChange={(e) => updateField("accountNumber", e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#142D3A] mb-1.5">
                        IFSC Code *
                      </label>
                      <input
                        type="text"
                        placeholder="SBIN0001234"
                        value={formData.ifscCode}
                        onChange={(e) => updateField("ifscCode", e.target.value.toUpperCase())}
                        className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none text-sm uppercase transition-all"
                      />
                    </div>
                  </div>

                  {/* Summary Review Card */}
                  <div className="p-4 rounded-2xl bg-[#FAFCFB] border border-[#E2E8F0] space-y-2 text-xs">
                    <h4 className="font-bold text-[#142D3A] text-sm mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                      Application Summary Review:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-600">
                      <div>
                        <span className="block text-[11px] text-slate-400">Nurse:</span>
                        <span className="font-semibold text-slate-900">{formData.fullName || "Not provided"}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-400">Council Reg:</span>
                        <span className="font-semibold text-slate-900">{formData.registrationNumber || "Pending"}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-400">Specialty:</span>
                        <span className="font-semibold text-[#0D9488]">{formData.specialties.join(", ")}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-400">City / Radius:</span>
                        <span className="font-semibold text-slate-900">{formData.city} ({formData.preferredRadius})</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-400">Target Volume:</span>
                        <span className="font-semibold text-slate-900">{formData.shiftsPerWeek}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-400">Payout Day:</span>
                        <span className="font-semibold text-emerald-700">Every Tuesday</span>
                      </div>
                    </div>
                  </div>

                  {/* Legal & Consent Checkbox */}
                  <label className="flex items-start gap-3 p-3.5 rounded-xl bg-[#E8F5F1]/60 border border-[#C6E7DE] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentAgreed}
                      onChange={(e) => updateField("consentAgreed", e.target.checked)}
                      className="mt-1 w-4 h-4 accent-[#0D9488] rounded"
                      required
                    />
                    <div className="text-xs text-[#142D3A] leading-relaxed">
                      <strong>Verification &amp; Compliance Consent:</strong> I declare that all information, clinical qualifications, and State Nursing Council registration details provided above are true and valid. I authorize NurseNow to verify my license status directly with the respective State Nursing Council.
                    </div>
                  </label>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#E2E8F0] text-sm font-semibold text-[#142D3A] hover:bg-slate-50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white text-sm font-bold shadow-sm transition-all"
                  >
                    <span>Continue to Step {currentStep + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white text-base font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Submit Application &amp; Get Verified</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    );

  if (isStandalonePage) {
    return formBody;
  }

  return (
    <section id="application-form" className="py-16 sm:py-24 bg-[#FAFCFB]">
      {formBody}
    </section>
  );
}
