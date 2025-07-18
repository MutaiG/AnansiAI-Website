#!/bin/bash

# Setup script for weekly enterprise waiting list digest
# This script configures a cron job to run every Sunday at 9 AM

echo "Setting up AnansiAI weekly digest automation..."

# Create data directory if it doesn't exist
mkdir -p ./data/waiting-list

# Create cron job file
CRON_JOB="0 9 * * 0 cd $(pwd) && node scripts/weekly-digest.js >> logs/digest.log 2>&1"

# Add cron job to user's crontab
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

echo "✅ Cron job configured: Weekly digest every Sunday at 9 AM"
echo "📧 Digest will be sent to: info@anansiai.com"
echo "📁 Logs will be saved to: logs/digest.log"

# Create logs directory
mkdir -p ./logs

# Set up environment variables template
cat > .env.digest << EOF
# Email configuration for weekly digest
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@anansiai.com
SMTP_PASS=your-app-password

# Digest configuration
DIGEST_EMAIL=info@anansiai.com
EOF

echo "📝 Environment template created: .env.digest"
echo "   Please configure your email credentials"

# Make the digest script executable
chmod +x scripts/weekly-digest.js

echo "🚀 Setup complete! Weekly digest automation is now active."
echo ""
echo "To test the digest manually, run:"
echo "   node scripts/weekly-digest.js"
echo ""
echo "To view scheduled cron jobs:"
echo "   crontab -l"
echo ""
echo "To remove the cron job:"
echo "   crontab -e  # and delete the AnansiAI line"
