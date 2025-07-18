# Standalone React + Tailwind Setup

This guide will help you create a local React + Tailwind development environment without Docker, maintaining all current functionalities.

## Prerequisites

Make sure you have Node.js (v16+) and npm installed on your system.

## Step 1: Create New React Project

```bash
# Create new Vite React project
npm create vite@latest anansi-ai-standalone -- --template react-ts
cd anansi-ai-standalone

# Install base dependencies
npm install
```

## Step 2: Install Required Dependencies

```bash
# Core dependencies
npm install react-router-dom @tanstack/react-query

# UI Components (Radix UI)
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip

# Styling and utilities
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge

# Icons and UI utilities
npm install lucide-react sonner cmdk next-themes

# Form handling
npm install react-hook-form @hookform/resolvers zod

# Additional UI components
npm install embla-carousel-react react-day-picker input-otp react-resizable-panels vaul recharts date-fns

# Development dependencies
npm install -D tailwindcss postcss autoprefixer @types/node
```

## Step 3: Setup Tailwind CSS

```bash
# Initialize Tailwind CSS
npx tailwindcss init -p
```

## Step 4: Project Structure

Your project should have this structure:

```
anansi-ai-standalone/
├── public/
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/           # All UI components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── StudentTwin.tsx
│   │   ├── AdultTwin.tsx
│   │   ├── EnterpriseTwin.tsx
│   │   ├── TwinWorkbench.tsx
│   │   ├── EducationSystem.tsx
│   │   ├── StudentProgram.tsx
│   │   ├── AdultFastTrack.tsx
│   │   ├── ContactUs.tsx
│   │   ├── AboutUs.tsx
│   │   ├── TrainYourTwin.tsx
│   │   ├── VisionMission.tsx
│   │   ├── PlaceholderPage.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── components.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── package.json
```

## Step 5: Run the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features Maintained

✅ **Complete UI Component Library** - All Radix UI components with custom styling
✅ **React Router Navigation** - All routing functionality preserved  
✅ **Responsive Design** - Mobile and desktop layouts
✅ **Toast Notifications** - User feedback system
✅ **Form Handling** - Contact forms and file uploads
✅ **Dark/Light Theme Support** - Theme switching capability
✅ **TypeScript Support** - Full type safety
✅ **Modern Build System** - Vite for fast development and optimized builds

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run typecheck    # Run TypeScript checking
```

## Deployment

The built application (in `dist/` folder) can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

No Docker required! 🎉
