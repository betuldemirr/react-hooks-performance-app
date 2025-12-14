# 🚀 React Hooks Performance App

This project is a **performance-focused React / Next.js application** created to explore **advanced hook usage, rendering optimizations, and scalable frontend architecture**.

---

## ⚛️ React Hooks & Performance Techniques

### Hooks Used

- **`useMemo`**
  - Prevents expensive recalculations
  - Used for derived data such as filtered user lists

- **`useCallback`**
  - Stabilizes function references
  - Prevents unnecessary re-renders in memoized child components

- **`React.memo`**
  - Used for presentational components (`UserList`, `UserDetail`)
  - Ensures components re-render only when props actually change

- **`useDeferredValue`**
  - Defers heavy filtering during search input
  - Keeps UI responsive when working with large datasets

- **Custom Render Tracking**
  - `useRenderCount` hook added to observe real render counts
  - Ensures optimizations are measurable, not assumed

---

## ⚡ Performance-Oriented UI Patterns

- Optimized search with **deferred input**
- Deterministic UI states:
  - loading
  - empty
  - no-results
  - selected
- Reduced unnecessary re-renders through memoization
- Clear separation between container logic and UI components

---

## ⚡ Performance - UI Patterns

- Optimized search with **deferred input**
- Deterministic UI states:
  - loading
  - empty
  - no-results
  - selected
- Reduced unnecessary re-renders through memoization
- Clear separation between container logic and UI components

---

## 🧩 Skeleton UI Strategy

- Skeletons are used as **transition states**, not fake loading indicators
- Focus is on **layout stability** and **perceived performance**
- No shimmer animations to avoid visual noise
- Implemented as a **generic, reusable Skeleton component**
- Easily extensible for future features

---

## 🌐 Data Source

- API: **DummyJSON**
- Dataset size intentionally large (`limit=1000`)
- Enables realistic performance testing and optimization scenarios

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Axios**
- **Tailwind CSS**

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
