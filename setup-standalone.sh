#!/bin/bash

# Anansi AI Standalone Setup Script
echo "🚀 Setting up Anansi AI Standalone (React + Tailwind)"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v16+) first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Create project directory
PROJECT_NAME="anansi-ai-standalone"
echo "📁 Creating project directory: $PROJECT_NAME"

# Create Vite React TypeScript project
npm create vite@latest $PROJECT_NAME -- --template react-ts
cd $PROJECT_NAME

echo "📦 Installing dependencies..."

# Install all required dependencies
npm install react-router-dom @tanstack/react-query

# Install UI dependencies
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip

# Install styling and utilities
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react sonner cmdk next-themes

# Install form handling
npm install react-hook-form @hookform/resolvers zod

# Install additional components
npm install embla-carousel-react react-day-picker input-otp react-resizable-panels vaul recharts date-fns

# Install dev dependencies
npm install -D @types/node

# Initialize Tailwind CSS
npx tailwindcss init -p

echo "⚙️ Configuring project files..."

# Copy configuration files (you'll need to copy these manually)
echo "📋 Next steps:"
echo "1. Copy all your src/ files to the new project"
echo "2. Replace the generated config files with the standalone versions"
echo "3. Copy public/ assets"
echo "4. Run 'npm run dev' to start development server"

echo "✅ Base setup complete!"
echo "🌐 After copying files, run: npm run dev"
echo "🏗️  To build for production: npm run build"
