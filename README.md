# Library Management System with QR Code for Attendance (Calauan Community Campus)

> **Public Portfolio UI Showcase (Frontend Only)**
> This repository showcases the complete **Desktop Web** (React + Vite + Tailwind CSS) and **Mobile App** (React Native + Expo) user interfaces for the **Calauan Community Campus Library (CCC LIB APP)** system.
> To protect institutional data and infrastructure, all backend services, database schemas, and private API endpoints are intentionally omitted and replaced with an **in-memory client-side mock data layer** so every screen, chart, and workflow can be explored interactively.

---

## Project Overview

The **CCC LIB APP** is a dual-platform library management and attendance tracking system built for **Calauan Community Campus**. It replaces manual paper logbooks and spreadsheet circulation tracking with QR-assisted check-in/check-out, real-time occupancy monitoring, automated overdue/penalty tracking, and digital patron passes.

### Key Highlights
- **QR-Based Patron Attendance**: Instant camera QR scanning for check-in/check-out with automatic duration calculation, real-time inside-library roster, and hourly/weekly occupancy heatmaps.
- **Anti-Forgery QR Pass Design**: Mobile passes render cryptographic `QR-...` tokens rather than plain student IDs, preventing duplication from generic QR generators.
- **Circulation & Read-in-Library Rules**: Supports standard take-out borrowing, **Circulation / Special Books** (`Read in Library` only with per-book daily penalty rates), and **Visitor Guest Passes** restricted to in-library reading.
- **Automated Penalty & Official Receipt System**: Groups unpaid penalties by patron, supports settlement confirmation modals, and generates printable Official Receipts (`CCC-OR-...`).
- **Role-Aware Onboarding & Access**: Separate **Student** (program + year level) and **Visitor** (guest pass, read-only profile) workflows across both Desktop and Mobile.

---

## Included Modules

### 1. Desktop Web UI (`/desktop`)
Built for librarians and library administrators:
- **Dashboard**: Real-time KPI cards (inside now, active borrows, overdue items, total collection), occupancy trend chart, top visitors leaderboard, and full activity log modal.
- **Attendance**: Live camera QR scanner UI with audio/visual feedback (`1.5s` toast with ease-out exit), manual desk ID lookup fallback, currently-inside patron cards, and attendance heatmap.
- **Borrowing & Distribution**:
  - **Borrow & Return**: Two-step Book + Patron scan flow enforcing library-use-only and Visitor restrictions.
  - **Records**: Searchable, paginated circulation ledger.
  - **Penalties**: Tabbed **Unpaid Penalties** (grouped by student with expandable line items) and **Paid Receipts** with printable Official Receipt modals.
- **Literatures Catalog**:
  - Tabs for **Active Collection**, **Circulation Books**, **Author Catalog**, **Genre Catalog**, **QR Codes** (batch selection & print), and **Archived**.
  - Add/Edit book modals, Excel import UI, and downloadable book QR badges.
- **Student Activities**: Searchable patron directory with individual activity dossiers (borrows, visits, penalties) and CSV export.
- **Reports**: Executive analytics across **Overview**, **Circulation**, **Attendance**, **Financial**, and **Export** tabs with date presets, Recharts visualizations, and CSV/PDF report generation UI.
- **Settings & Control Panel**: Configure borrowing limits, daily/damage/lost penalty fees, suspension thresholds, campus announcements, academic programs, user role assignments, and Light/Dark theme.

### 2. Mobile App UI (`/mobile`)
Built with React Native, Expo Router, and Tamagui for students and visitors:
- **Home Dashboard**: Patron greeting, visit streak pill, announcements, quick actions, and recent borrows/penalties summary.
- **Digital QR Pass (`Scan` tab)**: Displays the patron's persistent library QR pass and recent attendance logs.
- **Catalog Search (`Search` tab)**: Browse books by title/author/genre, view shelf availability, and bookmark favorites.
- **Borrowed Books (`Borrowed` tab)**: Track active borrows, due dates, overdue alerts, and past borrow history.
- **History Timeline (`History` tab)**: Filterable activity feed (`All`, `Attendance`, `Borrows`, `Penalties`) with keyword search and date-range pills (`All Time`, `Today`, `7 Days`, `30 Days`).
- **Profile & Settings**: View Digital QR Modal, Favorites, Light/Dark/System appearance, English/Filipino localization, and role-aware profile editing (disabled for Visitor accounts).
- **Multi-Step Sign-Up**: Guided onboarding with role selection (**Student** vs. **Visitor**), password strength checklist, and OTP verification UI.

---

## Repository Structure

```text
├── desktop/
│   ├── public/                  # Static icons and campus backdrop assets
│   └── src/
│       ├── demo/mockFetch.js    # In-memory /api/* interceptor for portfolio demo mode
│       ├── components/          # Reusable modals, scanner UI, charts, pagination, dropdowns
│       ├── context/             # Scanner & borrowing workflow state providers
│       └── pages/               # Dashboard, Attendance, Borrowing, Literatures, Reports, Settings
└── mobile/
    ├── api/index.ts             # In-memory mock API adapter for UI showcase
    ├── app/
    │   ├── (auth)/              # Sign-in, multi-step sign-up, forgot-password screens
    │   └── (tabs)/              # Home, Search, Scan, Borrowed, History, Profile tabs
    ├── components/              # BookDetailModal, DynamicQrCode, EditProfileModal, FloatingLabelInput
    └── context/                 # Auth, Favorites, Language (EN/FIL), and Theme providers
```

---

## Running Locally

### Desktop Web Showcase
```bash
cd desktop
npm install
npm run dev
```
Open the local Vite URL in your browser and click **Enter Interactive Portfolio Demo** on the sign-in screen to explore all pages with live mock data.

### Mobile App Showcase
```bash
cd mobile
npm install
npx expo start
```
Scan the Expo QR code with **Expo Go** or press `w` to preview in web mode.

---

## Tech Stack
- **Desktop**: React 19, Vite, Tailwind CSS v4, Recharts, Lucide React, jsPDF, SheetJS (`xlsx`)
- **Mobile**: React Native, Expo Router, Tamagui, Lucide React Native, React Native QRCode SVG
