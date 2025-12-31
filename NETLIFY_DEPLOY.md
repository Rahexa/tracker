# 🚀 Netlify Deployment Guide

## ⚠️ Important: Manual Deployment Won't Work

Next.js 14 with App Router requires server-side rendering support, which means **you cannot deploy manually** (drag & drop) to Netlify. You need to use Netlify's build process.

## ✅ Correct Way: Deploy via Git (Recommended)

### Step 1: Push to GitHub/GitLab/Bitbucket

```bash
git init
git add .
git commit -m "Initial commit: Learning Tracker"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Netlify will auto-detect Next.js settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (auto-set by plugin)
   - **Node version:** 18 (set in netlify.toml)
6. Click **"Deploy site"**

### Step 3: Wait for Build

Netlify will:
- Install dependencies
- Run the build
- Deploy your site automatically

## 🔧 Manual Configuration (If Auto-Detect Fails)

If Netlify doesn't auto-detect, set these in **Site settings → Build & deploy**:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (or leave empty, plugin handles it)
- **Node version:** 18

## ❌ Why Manual Upload Doesn't Work

- Next.js needs server-side rendering (SSR)
- The `.next` folder alone isn't enough
- Netlify needs to run the build process
- The `@netlify/plugin-nextjs` plugin must run during build

## 🐛 Troubleshooting "Page Not Found" Error

If you still see "Page Not Found":

1. **Check Build Logs:**
   - Go to **Deploys** tab
   - Click on the latest deploy
   - Check for errors in the build log

2. **Verify netlify.toml exists:**
   - The file should be in your root directory
   - It should contain the Next.js plugin configuration

3. **Clear Cache and Redeploy:**
   - Go to **Site settings → Build & deploy → Clear cache and deploy site**

4. **Check Node Version:**
   - Ensure Node 18 is set (in netlify.toml or site settings)

## 📝 Alternative: Static Export (Not Recommended)

If you absolutely must use manual deployment, you'd need to:
1. Change to static export (breaks some features)
2. Export the site
3. Upload the `out` folder

But this will break localStorage and client-side features. **Use Git deployment instead.**

## ✅ Quick Checklist

- [ ] Code pushed to Git repository
- [ ] Connected repository to Netlify
- [ ] `netlify.toml` file exists in root
- [ ] Build completes successfully
- [ ] Site is live and accessible

## 🆘 Still Having Issues?

1. Check Netlify build logs for specific errors
2. Ensure all dependencies are in `package.json`
3. Verify Node version is 18+
4. Make sure you're using Git deployment, not manual upload

