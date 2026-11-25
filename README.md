# Library Management System with QR Code for Attendance (Calauan Community Campus)

> **Portfolio UI Showcase (Frontend Only)**
> This public repository showcases the **Desktop** (React + Vite + Tailwind CSS) and **Mobile** (React Native + Expo) user interfaces using an in-memory client-side mock data layer. All backend services, database schemas, and private API endpoints are intentionally excluded.

## Included Modules

### 1. Desktop Web UI (`/desktop`)
- **Dashboard**: Real-time occupancy overview, KPI summary cards, active patrons, and activity feed.
- **QR Attendance**: Camera QR scanner UI, manual desk entry, active inside-library roster, and occupancy heatmap.
- **Borrowing & Penalties**: Book checkout/return workflow, Circulation/Read-in-Library rules, unpaid penalty tracking, and printable Official Receipts.
- **Literature Catalog**: Active collection, Circulation Books, Author & Genre catalogs, archived books, and printable QR code badges.
- **Student Activities & Reports**: Patron activity dossiers, date-filtered analytics charts (Recharts), and CSV/PDF export views.
- **Settings & Control Panel**: Library rules, announcements, academic programs, user role management, and Dark/Light theme support.

### 2. Mobile App UI (`/mobile`)
- **Digital QR Pass**: Student and Visitor passes with instant QR display.
- **Catalog Search & Book Details**: Browse availability, shelf locations, and favorites.
- **Borrowed & History**: Active borrows, overdue indicators, and date-filtered activity timeline.
- **Multi-Step Sign-Up & Profile**: Role-aware onboarding (Student vs. Visitor), Dark/Light appearance, and English/Filipino language toggle.

## Running Locally

### Desktop UI Showcase
```bash
cd desktop
npm install
npm run dev
```
Click **Enter Interactive Portfolio Demo** on the sign-in screen to explore all pages with mock data.

### Mobile UI Showcase
```bash
cd mobile
npm install
npx expo start
```

## Tech Stack
- **Desktop**: React 19, Vite, Tailwind CSS v4, Recharts, Lucide React
- **Mobile**: React Native, Expo Router, Tamagui, Lucide React Native
