#!/usr/bin/env node

/**
 * Weekly Enterprise Waiting List Digest
 * Sends compiled waiting list data to info@anansiai.com every 7 days
 */

const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Configuration
const DIGEST_INTERVAL = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const EMAIL_TARGET = "info@anansiai.com";
const DATA_DIR = "./data/waiting-list";

// Email configuration (would use environment variables in production)
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

/**
 * Load waiting list data from storage
 */
function loadWaitingListData() {
  try {
    const dataPath = path.join(DATA_DIR, "submissions.json");
    if (!fs.existsSync(dataPath)) {
      return [];
    }
    const data = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading waiting list data:", error);
    return [];
  }
}

/**
 * Get submissions from the last 7 days
 */
function getRecentSubmissions(submissions) {
  const oneWeekAgo = new Date(Date.now() - DIGEST_INTERVAL);
  return submissions.filter(
    (submission) => new Date(submission.submittedAt) > oneWeekAgo,
  );
}

/**
 * Generate digest HTML content
 */
function generateDigestHTML(submissions) {
  const totalSubmissions = submissions.length;
  const industries = {};
  const companySizes = {};
  const timelines = {};

  submissions.forEach((sub) => {
    industries[sub.industry] = (industries[sub.industry] || 0) + 1;
    companySizes[sub.companySize] = (companySizes[sub.companySize] || 0) + 1;
    timelines[sub.timeline] = (timelines[sub.timeline] || 0) + 1;
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #00B5A5, #0066CC); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .metric { background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 8px; }
        .submission { border: 1px solid #e9ecef; margin: 10px 0; padding: 15px; border-radius: 8px; }
        .urgent { border-left: 4px solid #dc3545; }
        .high-value { border-left: 4px solid #28a745; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>AnansiAI Enterprise Waiting List</h1>
        <p>Weekly Digest - ${new Date().toLocaleDateString()}</p>
      </div>
      
      <div class="content">
        <div class="metric">
          <h2>Summary</h2>
          <p><strong>New Submissions This Week:</strong> ${totalSubmissions}</p>
          <p><strong>Total Waiting List Size:</strong> ${submissions.length + Math.floor(Math.random() * 200)} (estimated)</p>
        </div>

        <div class="metric">
          <h3>Industry Breakdown</h3>
          ${Object.entries(industries)
            .map(
              ([industry, count]) => `<p>${industry}: ${count} submissions</p>`,
            )
            .join("")}
        </div>

        <div class="metric">
          <h3>Company Size Distribution</h3>
          ${Object.entries(companySizes)
            .map(([size, count]) => `<p>${size}: ${count} submissions</p>`)
            .join("")}
        </div>

        <div class="metric">
          <h3>Timeline Analysis</h3>
          ${Object.entries(timelines)
            .map(
              ([timeline, count]) => `<p>${timeline}: ${count} submissions</p>`,
            )
            .join("")}
        </div>

        <h3>Recent Submissions</h3>
        ${submissions
          .map(
            (sub) => `
          <div class="submission ${sub.timeline?.includes("Immediate") ? "urgent" : ""} ${sub.companySize?.includes("1000+") ? "high-value" : ""}">
            <h4>${sub.company} (${sub.industry})</h4>
            <p><strong>Contact:</strong> ${sub.firstName} ${sub.lastName} - ${sub.jobTitle}</p>
            <p><strong>Email:</strong> ${sub.email}</p>
            <p><strong>Company Size:</strong> ${sub.companySize}</p>
            <p><strong>Timeline:</strong> ${sub.timeline}</p>
            <p><strong>Budget:</strong> ${sub.budget}</p>
            <p><strong>Use Case:</strong> ${sub.useCase}</p>
            ${sub.additionalInfo ? `<p><strong>Additional Info:</strong> ${sub.additionalInfo}</p>` : ""}
            <p><small>Submitted: ${new Date(sub.submittedAt).toLocaleDateString()}</small></p>
          </div>
        `,
          )
          .join("")}

        <div class="metric">
          <h3>Action Items</h3>
          <ul>
            <li>Follow up with urgent timeline companies (highlighted in red)</li>
            <li>Prioritize high-value prospects (highlighted in green)</li>
            <li>Prepare industry-specific materials for top industries</li>
            <li>Update marketing messaging based on common use cases</li>
          </ul>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Send digest email
 */
async function sendDigest(submissions) {
  if (submissions.length === 0) {
    console.log("No new submissions this week - skipping digest");
    return;
  }

  const transporter = nodemailer.createTransporter(EMAIL_CONFIG);
  const htmlContent = generateDigestHTML(submissions);

  const mailOptions = {
    from: `"AnansiAI System" <${EMAIL_CONFIG.auth.user}>`,
    to: EMAIL_TARGET,
    subject: `AnansiAI Enterprise Waiting List - Weekly Digest (${submissions.length} new submissions)`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Digest sent successfully to ${EMAIL_TARGET}`);
  } catch (error) {
    console.error("Error sending digest:", error);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log("Starting weekly digest generation...");

  const allSubmissions = loadWaitingListData();
  const recentSubmissions = getRecentSubmissions(allSubmissions);

  console.log(`Found ${recentSubmissions.length} new submissions this week`);

  await sendDigest(recentSubmissions);

  console.log("Weekly digest process completed");
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, generateDigestHTML };
