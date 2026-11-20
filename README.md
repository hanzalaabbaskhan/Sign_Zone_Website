# Sign Zone USA

Commercial business signage platform for the Dallas–Fort Worth Metroplex. Design, municipal permits, custom fabrication, and turnkey installation.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- **UI & State:** [React](https://react.dev) 19, TypeScript
- **Styling:** CSS Variables, Tailwind CSS
- **Design System:** Archivo (display typography) & Inter (body)

## Key Features

- **Interactive Sign Toolkit:** Cost estimator, letter size & visibility calculator, sign ROI payback model, permit requirement checklist, and opening-day timeline planner.
- **Dynamic Quote Wizard:** Multi-step guided quote generator tailored by business stage, property type, and sign specifications.
- **Dedicated Product & Hub Pages:** Full Channel Letters showcase (`/channel-letters`) and city-by-city coverage across North Texas (`/locations/[city]`).

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
# or specify host/port:
npx next dev -H 0.0.0.0 -p 3001
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

### 4. Lint
```bash
npm run lint
```
