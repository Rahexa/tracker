# 🚀 Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Learning Tracker App"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your app will be live in minutes.

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Features

✅ **Progress Tracking**: Track your progress through all 6 months
✅ **Local Storage**: Your progress is saved automatically
✅ **Responsive Design**: Works on all devices
✅ **Dark Mode**: Automatic dark mode support
✅ **Beautiful UI**: Modern, gradient-based design

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── MonthCard.tsx        # Month progress card
│   ├── WeekCard.tsx         # Week details card
│   └── ProgressOverview.tsx # Overall progress dashboard
├── data/
│   └── learningPlan.ts     # Learning plan data structure
├── lib/
│   └── storage.ts          # Local storage utilities
└── package.json            # Dependencies
```

## Environment Variables

No environment variables required for this application.

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Clear `.next` folder: `rm -rf .next` (or delete it manually)
- Rebuild: `npm run build`

### Local Storage Issues
- Local storage only works in browser (client-side)
- Progress is saved per browser/device
- To reset: Clear browser localStorage

## Support

For issues or questions, check the README.md file.

