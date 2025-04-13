````md
# 🧬 Anime Site

A modern, high-performance anime website built with [Next.js 15](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://www.framer.com/motion/). Includes a sleek component system, animated UI, and comprehensive testing setup.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/docs)
- **Styling**: Tailwind CSS v4 + tailwindcss-animate + tw-animate-css
- **UI Components**: Radix UI primitives
- **Icons**: lucide-react
- **Animations**: Framer Motion
- **Theming**: next-themes
- **State Management**: (Add here if using Redux/Zustand/etc.)
- **Testing**: Jest, React Testing Library, jest-dom
- **Formatter & Linter**: [Biome](https://biomejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📦 Installation

> This project uses [`pnpm`](https://pnpm.io) — make sure it's installed globally:

```bash
npm install -g pnpm
```
````

Then, install dependencies:

```bash
pnpm install
```

---

## 🛠️ Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `pnpm dev`           | Start local dev server with Turbopack    |
| `pnpm build`         | Build the app for production             |
| `pnpm start`         | Start the production server              |
| `pnpm test`          | Run linter + test suite                  |
| `pnpm test:watch`    | Watch mode for Jest                      |
| `pnpm test:coverage` | Run tests with coverage report           |
| `pnpm lint`          | Lint the code using Biome                |
| `pnpm format`        | Format code using Biome                  |
| `pnpm format:check`  | Check formatting without writing changes |

---

## 🧪 Testing

We use [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with `jest-dom` matchers.

```bash
pnpm test
```

---

## 🧩 Library Overview

### Radix UI

We use multiple accessible components from Radix, such as:

- `@radix-ui/react-tabs`
- `@radix-ui/react-dialog`
- `@radix-ui/react-select`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-scroll-area`

These primitives are wrapped in custom UI components that use `data-slot` attributes and utility classes via `clsx` and `cn`.

### Framer Motion

Used for entrance/exit animations and microinteractions. Integrated in components like sliders and transitions.

### TailwindCSS

Enhanced with:

- `tailwindcss-animate`: Keyframe animation support
- `tw-animate-css`: Utility classes for smooth CSS animations
- `tailwind-merge`: Avoids conflicting Tailwind classes

---

## 📁 Folder Structure

```bash
src/
  components/    # UI components (tabs, sheet, etc.)
  app/           # Next.js App Router structure
  lib/           # Utility functions (e.g., cn.ts)
  styles/        # Tailwind + global styles
  tests/         # Testing utilities
```

---

## 🤝 Contributing

1. Fork this repository
2. Create a new branch
3. Make your changes and test them
4. Submit a pull request

---

## 📝 License

MIT

---

> Built by Ryan Yusuf

```

```
