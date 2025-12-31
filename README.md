# 📚 Learning Tracker - 6-Month Full Stack Journey

A beautiful, interactive web application to track your progress through a comprehensive 6-month full-stack development learning plan. Track tasks, watch YouTube tutorials, and monitor your journey from JavaScript basics to deploying production applications.

## 🚀 Features

- **📊 Comprehensive Progress Tracking**: Track progress at month, week, topic, and task levels
- **✅ Task-Based Checklists**: Every topic has detailed task checklists (not just week-wise)
- **🎥 YouTube Integration**: Quick access to YouTube tutorials for each topic
- **📈 Visual Progress Indicators**: Beautiful progress bars and statistics
- **💾 Auto-Save**: Your progress is automatically saved in browser localStorage
- **🌙 Dark Mode Support**: Automatic dark mode based on system preferences
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🚀 Production Ready**: Optimized for deployment on Vercel and Netlify

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **Lucide React** - Beautiful icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

**⚠️ Important:** Next.js 14 requires server-side rendering, so you **cannot** deploy manually (drag & drop). You must use Git deployment.

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com) and click "Add new site"
3. Import your Git repository
4. Netlify will auto-detect Next.js (thanks to `netlify.toml`)
5. Click "Deploy site"

See [NETLIFY_DEPLOY.md](./NETLIFY_DEPLOY.md) for detailed instructions and troubleshooting.

## 📅 Learning Plan Overview

The application tracks progress through 6 months with detailed task checklists:

- **Month 1**: Foundations & JavaScript (Web basics, Git, JS Core, Modern JS, DSA)
- **Month 2**: First Backend + TypeScript (Node.js, Express, MongoDB, Auth, TypeScript)
- **Month 3**: SQL & Prisma ORM (PostgreSQL, Prisma, Next.js, Advanced CRUD)
- **Month 4**: Capstone Project 1 – DeshDoor (Service Booking System)
- **Month 5**: Capstone Project 2 – RideShare Backend (Microservices, Redis, Docker)
- **Month 6**: DevOps & Job Hunt (NGINX, PM2, Resume, Interviews, Applications)

### 📋 Task Organization

Each month is organized into:
- **Weeks**: 4 weeks per month
- **Topics**: Multiple topics per week (e.g., "Web Fundamentals", "Git Basics")
- **Tasks**: Detailed checklist items for each topic
- **YouTube Links**: Quick access to relevant tutorials

### ✨ Key Improvements

- ✅ **Task-based tracking** instead of just deliverables
- ✅ **YouTube tutorial links** integrated for easy learning
- ✅ **Better organization** with topics and subtasks
- ✅ **Enhanced UI** with improved visual design
- ✅ **More detailed progress** tracking at all levels

## 📝 License

MIT

