# Khel Setu Foundation Website

A modern, responsive website for Khel Setu Foundation built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm

### Install & Run Locally
```bash
cd khelsetu-website
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
This generates a static site in the `out/` folder (configured with `output: "export"` in `next.config.ts`).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout (Header + Footer on all pages)
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About Us
│   ├── our-work/page.tsx  # Our Work / Programs
│   ├── stories/page.tsx   # Impact Stories
│   ├── contact/page.tsx   # Contact page with form
│   └── privacy/page.tsx   # Privacy Policy
├── components/
│   ├── Header.tsx         # Navigation bar
│   └── Footer.tsx         # Site footer
public/
├── images/
│   └── logo.png           # <-- Place your logo here!
```

---

## Content Placeholders to Replace

Search the codebase for `PLACEHOLDER` to find all spots where real content needs to be added:
- **Logo**: Place your logo as `public/images/logo.png`
- **Hero images**: Add hero/banner images to `public/images/`
- **Story images**: Add story photos
- **Team photos**: Add team member photos
- **Contact details**: Address, phone, email
- **Social media links**: Facebook, Instagram, Twitter, YouTube URLs
- **Impact numbers**: Actual statistics
- **About content**: Real mission, vision, story text
- **Contact form**: Replace `YOUR_FORMSPREE_ID` with actual Formspree ID (free at https://formspree.io)

---

## How to Connect to khelsetu.org (Hostinger Domain)

### Option A: Deploy to Vercel (Recommended — Free)

This is the easiest and cheapest approach. Vercel hosts your site for free and auto-deploys on every git push.

#### Step 1: Push code to GitHub
1. Create a GitHub account (if you don't have one)
2. Create a new repository (e.g., `khelsetu-website`)
3. Push this code:
   ```bash
   cd khelsetu-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/khelsetu-website.git
   git push -u origin main
   ```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project" -> Import your `khelsetu-website` repo
3. Click "Deploy" — Vercel auto-detects Next.js and builds it
4. Your site is now live at `something.vercel.app`

#### Step 3: Connect khelsetu.org domain
1. In Vercel: Go to **Project -> Settings -> Domains**
2. Add `khelsetu.org` and `www.khelsetu.org`
3. Vercel will show you the required DNS records:
   - **A Record**: Point `@` (root) to `76.76.21.21`
   - **CNAME Record**: Point `www` to `cname.vercel-dns.com`

#### Step 4: Update DNS in Hostinger
1. Log in to [Hostinger](https://hpanel.hostinger.com)
2. Go to **Domains -> khelsetu.org -> DNS / Nameservers**
3. Under **DNS Records**:
   - **Delete** any existing A records for `@`
   - **Add** a new A record:
     - Name: `@`
     - Points to: `76.76.21.21`
     - TTL: 14400 (or default)
   - **Delete** any existing CNAME for `www`
   - **Add** a new CNAME record:
     - Name: `www`
     - Points to: `cname.vercel-dns.com`
     - TTL: 14400 (or default)
4. Wait 5-30 minutes for DNS to propagate
5. Back in Vercel, the domain should show as verified with automatic SSL (HTTPS)

### Option B: Upload Static Files to Hostinger Hosting

If you have a Hostinger hosting plan (not just domain), you can upload directly:

1. Build the static site:
   ```bash
   npm run build
   ```
2. This creates an `out/` folder with all static HTML/CSS/JS files
3. Log in to Hostinger -> **File Manager** or use **FTP**
4. Navigate to `public_html/`
5. Delete any existing files (the "Coming Soon" page)
6. Upload all contents of the `out/` folder to `public_html/`
7. Your site is live at khelsetu.org

**Note:** With Option B, you need to manually re-upload files every time you make changes. Option A (Vercel) auto-deploys on git push, which is much more convenient.

---

## Cost Breakdown

| Item | Cost |
|---|---|
| Domain (khelsetu.org) | Already owned — renewal ~800-1200 INR/year via Hostinger |
| Hosting (Vercel free tier) | **FREE** — includes custom domain, HTTPS, CDN |
| Contact form (Formspree) | **FREE** — up to 50 submissions/month |
| Total additional cost | **0 INR** (beyond domain renewal you already pay) |

If you go with **Option B** (Hostinger hosting), you'll need their hosting plan which varies (100-300 INR/month), but if you already have it, it's already paid for.

---

## Future Enhancements
- Animations and scroll effects (GSAP / Framer Motion)
- Blog / news section
- Donation integration
- Multi-language support
- Newsletter signup
