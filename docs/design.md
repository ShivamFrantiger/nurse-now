# Brand & Design Direction: NurseNow (On-Demand Healthcare Staffing)

## 1. Brand Identity & Name

- **Brand Name:** **NurseNow**
- **Category:** On-Demand Healthcare Staffing (The "Pronto" for Healthcare)
- **Tagline:** *The right nurse. Right when you need one.*
- **Core Value Proposition:** Immediate, reliable, credential-verified healthcare staffing connecting hospitals facing unexpected or planned staffing shortages with qualified nurses in real time.
- **Brand Feel:** Clear, functional, fast, and trustworthy. Designed to feel like a modern, responsive technology platform rather than a traditional recruitment agency or rigid hospital ERP.

---

## 2. Color Palette

A premium **Teal + Warm White + Deep Navy** palette that blends clinical credibility with the responsiveness and speed of a modern consumer technology platform.

### Primary Palette Table

| Role | Color Name | Hex Code | Where to Use It |
| :--- | :--- | :--- | :--- |
| **Primary Action** | Deep Teal | `#0D9488` | Primary CTA buttons, key actions, active/selected states |
| **Visual Authority** | Dark Navy | `#142D3A` | Primary headings, navigation bar items, high-emphasis text |
| **Canvas Background** | Warm White | `#FAFCFB` | Main page background (soft, warm, non-sterile) |
| **Surface** | Pure White | `#FFFFFF` | Cards, modals, dashboard sheets, dropdowns |
| **Subtle Accent** | Pale Mint | `#E8F5F1` | Credential badges, verified indicators, highlighted sections |
| **Secondary Text** | Slate Gray | `#64748B` | Subheadings, secondary descriptions, helper labels |
| **Borders & Dividers**| Border Gray | `#E2E8F0` | Card borders, table dividers, input field outlines |
| **Success State** | Success Green | `#15803D` | Verified nursing credentials, confirmed shifts, payouts |
| **Warning / Pending** | Amber | `#D97706` | Shifts awaiting confirmation, expiring licenses, alerts |
| **Destructive / Error**| Error Red | `#DC2626` | Shift cancellations, validation errors, critical alerts |

### Color Usage Guidelines
- **Teal as an Action Driver:** Reserve Teal primarily for interactive and focal elements (booking a nurse, accepting a shift, confirming requests). Avoid overuse to maintain punchy visual hierarchy.
- **Deep Navy for Structure:** Delivers professional trust and readability without harsh pure black.
- **Warm White over Cold White:** Prevents the interface from looking like sterile, legacy hospital software; creates an approachable, modern feel.
- **Pale Mint for Reassurance:** Distinguishes trust factors such as verified medical council registration and background checks.

---

## 3. Typography

A modern, highly readable pairing balancing human warmth with high-density operational utility:
- **Headings:** `Manrope` (distinctive, modern startup feel, strong geometry)
- **Body & Data:** `Inter` (neutral, crisp, readable at dense UI scales)
- **Source:** [Google Fonts](https://fonts.google.com/)

### Typography Scale

| Element | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Heading** | `52–60 px` (Desktop)<br>`36–42 px` (Mobile) | 700 (Bold) | 1.15 | Main hero title |
| **Section Heading** | `32–40 px` | 650–700 (SemiBold/Bold) | 1.25 | Landing page sections |
| **Card Heading** | `20–24 px` | 600 (SemiBold) | 1.3 | Modal titles, shift card titles |
| **Body Text** | `16–18 px` | 400 (Regular) | 1.5–1.6 | Paragraphs, marketing copy |
| **UI & Button Text** | `14–16 px` | 600 (SemiBold) | 1.4 | Buttons, navigation links, tabs |
| **Metadata & Badges**| `12–14 px` | 400–500 (Regular/Medium)| 1.4 | Timestamps, tags, distance, rates |
| **Dashboard Metrics**| `28–36 px` | 650–700 (Bold) | 1.2 | Numerical stats, earnings, count |

---

## 4. Website Layout & Visual Language

Combines the polish of an on-demand marketplace with the operational precision of modern healthcare SaaS.

### Navigation
- **Structure:**
  - **Left / Brand:** `NurseNow` (clean wordmark with subtle shift/pulse motif)
  - **Center:** `For Hospitals` · `For Nurses` · `How It Works` · `About`
  - **Right:** `Log in` · `Get Nurses` (Primary Teal CTA)
- **Style:** Sticky white bar (`#FFFFFF`), subtle bottom border (`#E2E8F0`), backdrop blur if scrolling.

### Hero Section
- **Kicker / Label:** `ON-DEMAND HEALTHCARE STAFFING` (Navy/Teal, uppercase, tracked)
- **Main Heading:**
  > The right nurse.  
  > Right when you need one.
- **Supporting Copy:** Connect with qualified healthcare professionals for urgent shifts, planned coverage, and unexpected staffing gaps.
- **CTAs:**
  - Primary: `Find Nurses` (Teal filled)
  - Secondary: `Join as a Nurse` (Outline / Neutral)
- **Trust Strip:** Verified Council Registration · 15-Minute Avg Matching · Transparent Shift Rates · Zero Hidden Platform Fees.
- **Hero Visual:** Interactive/animated product UI preview showing a live staffing match:
  - Hospital requests 2 ICU nurses for a night shift.
  - Live nurse cards showing verified credentials, clinical specialty (ICU/CCU), proximity (e.g., 3.8 km), and immediate shift confirmation.
  - *Avoid generic stock photos of doctors with folded arms.*

---

## 5. Dual User Experiences

The platform serves two core audiences sharing the same design language but tailored to distinct operational contexts.

```
                  ┌───────────────────────────────┐
                  │           NurseNow            │
                  │    Unified Design System      │
                  └──────────────┬────────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       Hospital Experience                Nurse Experience
      [Desktop-First SaaS]              [Mobile-First PWA/App]
   - Speed & Compliance               - Clarity & Earnings
   - Rapid Shift Requisition          - Instant Shift Discovery
   - Credential Verification          - 1-Tap Shift Acceptance
   - Multi-Ward Overview              - Seamless Payout Tracker
```

### A. Hospital Experience (Desktop-First, Operational Speed)
Hospitals need to fill critical ward shortages within hours without regulatory or compliance friction.

- **Dashboard Header:** Hospital Name & Branch · Notification Center · Department Switcher · Admin Profile
- **Metric Cards:**
  - Active Requests
  - Awaiting Confirmation
  - Confirmed Shifts
  - Upcoming Roster
- **Primary Action:** `+ Request a Nurse`
- **Shift Requisition Form Fields:**
  1. Hospital & Department (e.g., Apollo Bannerghatta — ICU)
  2. Qualification & Specialization (e.g., B.Sc Nursing, Critical Care, Emergency)
  3. Number of Nurses Required
  4. Date, Shift Timing (e.g., Day: 8 AM–8 PM / Night: 8 PM–8 AM)
  5. Ward Location & Floor
  6. Minimum Experience & Specialized Equipment Competencies
- **Nurse Match Cards:**
  - Professional headshot & full name
  - State Nursing Council verification badge (`#15803D`)
  - Experience & clinical specialties (e.g., 4 yrs ICU, BLS/ACLS certified)
  - Distance & ETA (e.g., 4.2 km · ~20 mins away)
  - Shift rate / platform rate
  - Action: `Request Nurse` / `Instant Confirm`

### B. Nurse Experience (Mobile-First, Streamlined Gig Platform)
Designed for nurses to discover shifts, view clear pay rates, and accept work with zero friction between duties.

- **Home Header:**  
  *Good evening, Priya.*  
  *Your next shift starts tomorrow at 8:00 PM.*
- **Quick Views:**
  - Available Shifts Nearby
  - Weekly / Monthly Projected Earnings
  - Active & Confirmed Shifts
  - Real-Time Payout Status
  - Council Registration & Document Verification Status
- **Available Shift Card Specification:**
  - **Hospital:** CityCare Super Specialty
  - **Department:** General Ward / ICU
  - **Timing:** 8:00 PM – 8:00 AM (Night Shift)
  - **Date:** Today, 16 Oct
  - **Distance:** 3.2 km away
  - **Compensation:** ₹2,400 per shift (clear take-home figure)
  - **Status:** Available (Instant Bookable)
  - **CTAs:** `View Shift Details` / `Accept Shift`
- **Mobile Bottom Navigation Bar:**
  - `Home` · `Find Shifts` · `My Schedule` · `Earnings` · `Profile`

---

## 6. Component Design System

| Component | Specification | Details |
| :--- | :--- | :--- |
| **Buttons** | `border-radius: 10px–12px` | Primary: `#0D9488` text `#FFFFFF`<br>Secondary: `#FFFFFF` border `#E2E8F0` text `#142D3A`<br>Focus ring: Teal `2px` |
| **Cards** | `border-radius: 14px–16px` | Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow `0 1px 3px rgba(0,0,0,0.05)` |
| **Input Fields** | `height: 48px–52px` | Border `1px solid #E2E8F0`, radius `10px`, active focus ring `#0D9488` |
| **Grid System** | `8px` Base Grid | Spacers: 8px, 16px, 24px, 32px, 48px, 64px |
| **Max Container**| `1200px` | Centered layout with generous mobile gutters (`16px–24px`) |
| **Icons** | Lucide Icons (`lucide-react`) | 1.75px–2px stroke, minimal and crisp outline |
| **Transitions** | `150ms–200ms ease-out` | Subtle hover lifts (`translate-y: -1px`), button press scales |

> [!NOTE]
> Avoid heavy glassmorphism, aggressive gradients, decorative 3D shapes, or excessive blur effects. The aesthetic should be clean, dependable, and precision-engineered.

---

## 7. Photography & Illustration Guidelines

- **Real Healthcare Context:** Genuine, authentic photography of Indian healthcare professionals in appropriate clinical attire (scrubs, clean badges, proper wards).
- **Natural Lighting & Authentic Environments:** Candid, working stances; diverse ages, roles, and specialties.
- **Product Interfaces as Visuals:** Replace decorative illustrations with realistic, scannable UI mockups showing active shift requests and nurse credentials.
- **What to Avoid:**
  - Staged stock photos of models with crossed arms and artificial smiles.
  - Generic Western hospital imagery.
  - Cartoon medical caricatures or decorative red medical crosses.
  - Misleading hospital logo badges or unverified claims.

---

## 8. Core Workflow: Booking a Nurse

The central transaction follows a 5-step operational pipeline designed for rapid turnaround:

```
[ 1. Request ] ───► [ 2. Match ] ───► [ 3. Verify ] ───► [ 4. Confirm ] ───► [ 5. Complete ]
Hospital posts      Algorithm filters    Hospital audits    Instant lock;      Attendance logged;
shift criteria      nearby nurses        credentials        notifications      payout released
```

### Status Indicator Mapping

| Status | Color Token | Hex | Badge Presentation |
| :--- | :--- | :--- | :--- |
| **Open / Matching** | Deep Teal | `#0D9488` | `bg-teal-50 text-teal-700 border-teal-200` |
| **Awaiting Confirmation** | Amber | `#D97706` | `bg-amber-50 text-amber-700 border-amber-200` |
| **Confirmed** | Success Green | `#15803D` | `bg-emerald-50 text-emerald-700 border-emerald-200` |
| **Completed** | Slate Gray | `#64748B` | `bg-slate-100 text-slate-700 border-slate-200` |
| **Cancelled** | Error Red | `#DC2626` | `bg-red-50 text-red-700 border-red-200` |

---

## 9. Brand Personality

| Quality | Implementation Principle |
| :--- | :--- |
| **Fast** | Rapid form entry, 1-click filters, instantaneous shift confirmations, zero bloat. |
| **Trustworthy** | Visible council registration badges, transparent fixed hourly/shift rates, verifiable attendance. |
| **Human** | Respectful, nurse-first copy, empathetic communications, acknowledging clinical rigor. |
| **Modern** | Crisp typography, responsive layouts, intuitive mobile-first shift acceptance. |

---

## 10. Summary Design Specifications

| Dimension | Specification |
| :--- | :--- |
| **Brand Name** | **NurseNow** |
| **Positioning** | On-Demand Healthcare Staffing Marketplace |
| **Tagline** | *The right nurse. Right when you need one.* |
| **Design Style** | Clean, minimal, premium, operational ("Pronto for Healthcare") |
| **Primary Color** | Teal `#0D9488` |
| **Secondary Color** | Deep Navy `#142D3A` |
| **Background Color** | Warm White `#FAFCFB` |
| **Surface Color** | Pure White `#FFFFFF` |
| **Accent Color** | Pale Mint `#E8F5F1` |
| **Heading Font** | Manrope |
| **Body Font** | Inter |
| **Icon Library** | Lucide (`lucide-react`) |
| **Core Architecture** | Next.js App Router + TypeScript + Tailwind CSS |
