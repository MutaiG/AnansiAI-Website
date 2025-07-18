# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts - it will auto-detect Vite configuration
```

### 2. Netlify

```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to netlify.com
# Or use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

### 3. GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Upload dist/ folder to S3 bucket
# Configure S3 for static website hosting
# Set up CloudFront distribution
```

### 5. Any Web Server

```bash
# Build the project
npm run build

# Upload contents of 'dist' folder to your web server
# Make sure server is configured for SPA routing
```

## Environment Configuration

### For Production Builds

Create `.env.production`:

```
VITE_API_URL=https://your-api-domain.com
VITE_APP_NAME="Anansi AI"
```

### Build Optimization

The Vite configuration includes:

- Code splitting
- Tree shaking
- Asset optimization
- Sourcemaps for debugging

## Server Configuration

### Apache (.htaccess)

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Nginx

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Node.js/Express

```javascript
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
```

## Performance Optimizations

✅ **Automatic Code Splitting** - Vite handles this
✅ **Tree Shaking** - Removes unused code  
✅ **Asset Optimization** - Images and CSS minification
✅ **Gzip Compression** - Configure on your server
✅ **CDN Ready** - All assets have hashed filenames

## Monitoring

Consider adding:

- Google Analytics
- Error tracking (Sentry)
- Performance monitoring
- SEO optimization

The standalone build is production-ready and optimized for performance! 🚀
