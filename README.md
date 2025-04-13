# 🧬 Anime Site

A modern anime discovery platform built with **Next.js 15**, **Tailwind CSS**, **Radix UI**, and organized using the **Atomic Design** methodology.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/docs)
- **Styling**: Tailwind CSS v4 + tailwindcss-animate + tw-animate-css
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Theming**: next-themes
- **Testing**: Jest, React Testing Library, jest-dom
- **Linter & Formatter**: Biome
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Architecture**: [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

---

## 📦 Installation

> This project uses [`pnpm`](https://pnpm.io)

```bash
npm install -g pnpm
pnpm install
```

### 📄 Create `.env` File

Create a `.env` file at the root of the project with the following content:

```env
NEXT_PUBLIC_API_URL=https://api.jikan.moe/v4
```

This variable is used to configure the public API base URL for Jikan (MyAnimeList API).

---

## 🛠️ Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `pnpm dev`           | Start development server with Turbopack  |
| `pnpm build`         | Build the app for production             |
| `pnpm start`         | Start production server                  |
| `pnpm test`          | Lint and run test suite                  |
| `pnpm test:watch`    | Run tests in watch mode                  |
| `pnpm test:coverage` | Generate test coverage report            |
| `pnpm lint`          | Lint the project using Biome             |
| `pnpm format`        | Format code using Biome                  |
| `pnpm format:check`  | Check formatting without modifying files |

---

## 🧩 Folder Structure (Atomic Design)

```bash
src/
├── components/
│   ├── atoms/
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── ScrollArea/
│   │   ├── Select/
│   │   ├── Separator/
│   │   ├── Skeleton/
│   │   └── ThemeProvider/
│   ├── molecules/
│   │   ├── Card/
│   │   ├── DropdownMenu/
│   │   ├── ModeToggle/
│   │   ├── SearchInput/
│   │   ├── Sheet/
│   │   └── Tabs/
│   └── organisms/
│       ├── AnimeCard/
│       ├── AnimeSlider/
│       ├── Footer/
│       ├── Header/
│       ├── Pagination/
│       ├── RecommendationSection/
│       └── ReviewSection/
```

### 🧱 Atoms

> Reusable, minimal components like buttons, inputs, avatars, skeletons.

### 🧬 Molecules

> Group of atoms forming UI patterns like cards, dropdowns, toggles.

### 🧪 Organisms

> Complex components composed of multiple molecules (e.g., AnimeSlider, Header).

---

## 🧪 Testing

We use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/):

```bash
pnpm test
```

### File Naming Convention

- Each component has its test colocated:
  ```
  component-name/
    component-name.tsx
    component-name.test.tsx
  ```

---

## 📘 Usage

To create a new component (e.g., molecule):

```bash
src/components/molecules/YourComponent/
├── your-component.tsx
├── your-component.test.tsx
└── index.ts
```

### Example Usage

```tsx
// src/app/page.tsx
import { Tabs } from "@/components/molecules/Tabs";

<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>;
```

---

## 🧰 Utilities

- `@/lib/utils`: Utility helpers (e.g., `cn` className combiner)

---
