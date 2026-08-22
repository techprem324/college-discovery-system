# Development & Setup Guide — CampusIQ

## 1. Prerequisites

Ensure your development environment meets the following requirements:
- **Node.js**: v18.17.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

---

## 2. Step-by-Step Installation

```bash
# Clone the repository
git clone https://github.com/your-username/campusiq.git
cd campusiq

# Install project dependencies
npm install

# Run TypeScript type check
npm run type-check

# Start local dev server
npm run dev
```

Open `http://localhost:3000` in your web browser.

---

## 3. Available NPM Scripts

- `npm run dev`: Launches Next.js development server with Fast Refresh.
- `npm run build`: Compiles TypeScript and builds optimized production bundle.
- `npm run start`: Runs the built production server.
- `npm run type-check`: Executes `tsc --noEmit` for strict static type checking.
- `npm run lint`: Runs ESLint for code quality checks.

---

## 4. Verification Checklist

1. **Faceted Search**: Visit `/colleges`, enter "IIT Bombay", change stream filter to "Engineering", verify URL updates to `?q=IIT+Bombay&stream=Engineering`.
2. **Compare Tray**: Click "Add to Compare" on 2 college cards, open `/compare`, verify side-by-side metric highlight badges. Try adding a 4th college to verify max limit guardrail.
3. **Placements Visualizer**: Open `/colleges/iit-bombay/placements` and verify Recharts 3-year CTC bar graph rendering.
4. **Cutoff Predictor**: Open `/predictor`, enter rank `4500`, select `JEE_MAIN` & `OPEN`, submit and verify Safe, Target, Dream match tiers.
