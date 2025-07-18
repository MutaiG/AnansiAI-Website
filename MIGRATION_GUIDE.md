# Migration Guide: From Docker to Standalone

## Quick Migration Steps

### 1. Create New Project Structure

```bash
# Run the setup script
bash setup-standalone.sh

# Or manually create with Vite
npm create vite@latest anansi-ai-standalone -- --template react-ts
cd anansi-ai-standalone
```

### 2. Copy Your Current Files

Copy these files/folders from your current project to the new standalone project:

```
# Source code
src/components/     → src/components/
src/hooks/         → src/hooks/
src/pages/         → src/pages/
src/lib/           → src/lib/

# Current App files
src/App.tsx        → src/App.tsx
src/index.css      → Replace with index-standalone.css

# Public assets
public/            → public/

# Configuration (replace with standalone versions)
package.json       → Replace with package-standalone.json
vite.config.ts     → Replace with vite.config-standalone.ts
tailwind.config.ts → Replace with tailwind.config-standalone.ts
tsconfig.json      → Replace with tsconfig-standalone.json
components.json    → Replace with components-standalone.json
index.html         → Replace with index-standalone.html
```

### 3. Install Dependencies

```bash
# Install all dependencies
npm install

# Verify TypeScript
npm run typecheck

# Start development server
npm run dev
```

## File-by-File Checklist

### ✅ Configuration Files

- [ ] `package.json` - Replace with standalone version
- [ ] `vite.config.ts` - Update with standalone config
- [ ] `tailwind.config.ts` - Use standalone Tailwind config
- [ ] `tsconfig.json` - Replace with standalone TypeScript config
- [ ] `postcss.config.js` - Add PostCSS configuration
- [ ] `components.json` - Add components configuration

### ✅ Entry Points

- [ ] `index.html` - Replace with standalone version
- [ ] `src/main.tsx` - Replace with standalone version
- [ ] `src/index.css` - Replace with standalone CSS (includes all design tokens)

### ✅ Source Code (Copy As-Is)

- [ ] `src/App.tsx` ✅ (No changes needed)
- [ ] `src/components/` ✅ (All UI components work as-is)
- [ ] `src/hooks/` ✅ (All hooks work as-is)
- [ ] `src/pages/` ✅ (All pages work as-is)
- [ ] `src/lib/utils.ts` ✅ (Utils work as-is)

### ✅ Public Assets

- [ ] `public/placeholder.svg` ✅
- [ ] `public/robots.txt` ✅
- [ ] Any other public assets ✅

## Key Changes Made

### 1. **Simplified Build Process**

- ❌ Docker container removed
- ✅ Direct Vite development server
- ✅ Standard npm scripts

### 2. **Dependencies**

- ✅ All current functionality preserved
- ✅ Same UI component library (Radix UI)
- ✅ Same routing (React Router)
- ✅ Same styling (Tailwind CSS)
- ✅ Same icons (Lucide React)

### 3. **Development Workflow**

```bash
# Before (Docker)
docker-compose up

# After (Standalone)
npm run dev
```

### 4. **Build & Deploy**

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to any static hosting
# (Vercel, Netlify, GitHub Pages, etc.)
```

## Verification Steps

After migration, verify these features work:

### ✅ Core Functionality

- [ ] Navigation between pages
- [ ] Responsive design (mobile/desktop)
- [ ] Train Twin demo interface
- [ ] File upload functionality
- [ ] Contact forms
- [ ] Toast notifications

### ✅ Styling

- [ ] Logo colors (teal/blue gradients)
- [ ] Dark/light theme support
- [ ] Component styling
- [ ] Animations and transitions

### ✅ Performance

- [ ] Fast page loads
- [ ] Code splitting working
- [ ] Asset optimization

## Troubleshooting

### Common Issues

**1. Import Path Errors**

```bash
# If you see "@/" import errors
npm install -D @types/node
# Make sure tsconfig.json includes path mapping
```

**2. Tailwind Not Working**

```bash
# Verify Tailwind is configured
npx tailwindcss init -p
# Check tailwind.config.ts content paths
```

**3. UI Components Not Styling**

```bash
# Make sure all Radix UI packages are installed
npm install @radix-ui/react-*
```

**4. Build Errors**

```bash
# Run TypeScript check
npm run typecheck
# Fix any type errors before building
```

## Success! 🎉

Your Anansi AI application is now running standalone with:

✅ **No Docker dependency**
✅ **All functionality preserved**  
✅ **Same beautiful design**
✅ **Ready for deployment anywhere**
✅ **Faster development experience**

Run `npm run dev` and your app will be available at `http://localhost:3000`!
