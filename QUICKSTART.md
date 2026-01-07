# ⚡ Quick Start Guide - A-VH Website

## 🎯 What You Got

A complete, production-ready website for A-VH with:
- ✅ Modern Next.js 14 + TypeScript + Tailwind CSS
- ✅ Bilingual (Dutch/English) with toggle button
- ✅ Fully responsive design
- ✅ Smooth animations
- ✅ Ready for Voiceflow chatbot integration
- ✅ All your tech stack highlighted (n8n, Voiceflow, React, etc.)
- ✅ Services for sports, finance, and production

## 🚀 Getting Started (5 Minutes)

### 1. Install Dependencies
```bash
cd avh-website
npm install
```

### 2. Run Locally
```bash
npm run dev
```

Open http://localhost:3000 - your site is running!

### 3. Deploy to Vercel (Easiest - 2 Minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, then your site is live!
```

OR use the Vercel website:
1. Push to GitHub
2. Import at vercel.com
3. Deploy with one click
4. Connect a-vh.nl domain in settings

## 📁 Project Structure

```
avh-website/
├── app/
│   ├── page.tsx          # Main website (ALL sections here)
│   ├── layout.tsx        # Root layout & metadata
│   └── globals.css       # Global styles
├── lib/
│   └── translations.ts   # Dutch/English content
├── components/           # (Future components)
├── public/              # (Add images/assets here)
├── README.md            # Full documentation
└── DEPLOYMENT.md        # Detailed deployment guide
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` - change the purple/blue gradients to your brand colors.

### Update Content
Edit `lib/translations.ts` - all text is there in Dutch and English.

### Add Logo
1. Add image to `/public/logo.png`
2. In `app/page.tsx`, replace the Brain icon with your logo

### Add Images/Photos
Put images in `/public/` folder and use Next.js Image component:
```typescript
import Image from 'next/image';
<Image src="/photo.jpg" alt="Description" width={600} height={400} />
```

## 🤖 Adding Your Voiceflow Chatbot

When ready:
1. Get Voiceflow embed code from your project
2. Open `app/page.tsx`
3. Find the Contact section (line ~500)
4. Replace placeholder with Voiceflow script
5. Redeploy

## 📧 Email Setup

To handle form submissions or contact:
1. Set up info@a-vh.nl email at your domain registrar
2. Or use a service like EmailJS, SendGrid, or Resend
3. Add API integration to contact form

## 🔥 What's Next?

### Immediate:
- [ ] Run locally and review
- [ ] Deploy to Vercel
- [ ] Connect a-vh.nl domain

### Soon:
- [ ] Add company logo
- [ ] Integrate Voiceflow chatbot
- [ ] Add blog posts
- [ ] Add case studies/portfolio
- [ ] Set up email (info@a-vh.nl)
- [ ] Add Google Analytics

### Later:
- [ ] SEO optimization
- [ ] Portfolio/case study pages
- [ ] Client testimonials
- [ ] Contact form with email backend

## 💡 Tech Stack Explanation

**Next.js 14**: Modern React framework with app router, perfect for SEO and performance
**TypeScript**: Type safety, better developer experience
**Tailwind CSS**: Utility-first CSS, fast development, small bundle size
**Vercel**: Best hosting for Next.js, auto-deploys, free SSL

## 🆘 Need Help?

### Common Issues:

**"npm install" fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
rm -rf .next
npm run build
```

**Port 3000 in use:**
```bash
npm run dev -- -p 3001
```

### Resources:
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs
- Deployment Guide: See DEPLOYMENT.md

## 📞 Questions?

Built for A-VH by Claude
Contact: info@a-vh.nl

Enjoy your new website! 🎉
