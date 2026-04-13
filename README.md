# Murran's Portfolio 2026

A modern, minimalist portfolio built with Next.js, React, and TailwindCSS.

## 🚀 Quick Start

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Design System

- **Color System**: Minimalist black-white-gray palette with light/dark theme support
- **Typography**: Responsive fluid fonts (1024px - 1920px range)
- **Spacing**: 8px baseline spacing system
- **Transitions**: Smooth 300ms transitions with Material Design easing

## 🌓 Theme Management

- Cookie-based theme persistence (7 days)
- System preference detection
- Smooth color transitions with no flash on load
- Accessibility support (prefers-reduced-motion)

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout with theme script
│   ├── globals.css   # Global styles & design tokens
│   └── page.tsx      # Home page
├── components/       # React components
│   ├── Header.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageToggle.tsx
│   └── providers/    # Context providers
└── constants/        # Static data
```

## 🛠 Technology Stack

- **Framework**: Next.js 16.1.4
- **UI**: React 19.2.3
- **Styling**: TailwindCSS 4
- **Theme**: next-themes
- **Icons**: Lucide React
- **Language**: TypeScript 5

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

See `package.json` for the complete list of dependencies.

## 🔗 Repository

GitHub: [murranli/Murran-portfolio](https://github.com/murranli/Murran-portfolio)
