# 🚀 A-VH Website - Deployment Guide

## Quick Start Deployment (Vercel - Easiest)

### Step 1: Push to GitHub
```bash
cd avh-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/avh-website.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `avh-website` repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)
6. Done! Your site is live at `your-project.vercel.app`

### Step 3: Connect Custom Domain (a-vh.nl)
1. In Vercel dashboard, go to Project Settings → Domains
2. Add `a-vh.nl` and `www.a-vh.nl`
3. Update your domain's DNS settings at your registrar:
   - Type: A Record, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com
4. Wait for DNS propagation (5-60 minutes)
5. SSL certificate is automatically generated

---

## Alternative: Netlify Deployment

### Via Netlify CLI
```bash
npm install -g netlify-cli
cd avh-website
npm run build
netlify deploy --prod
```

### Via Netlify UI
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `out` folder
3. Connect domain in Site Settings

---

## Alternative: Traditional Hosting (cPanel/FTP)

### Step 1: Build the Site
```bash
cd avh-website
npm install
npm run build
```

### Step 2: Upload
- Upload the entire `out` folder to your hosting
- Point your domain to this folder
- Ensure your server supports HTML5 pushState

---

## Domain Configuration

### If you bought a-vh.nl at a registrar:

**At your domain registrar (e.g., TransIP, Versio, Hostnet):**

For Vercel:
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

For Netlify:
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: CNAME
Name: www
Value: your-site.netlify.app
TTL: 3600
```

---

## Adding Voiceflow Chatbot (Later)

### Step 1: Get Voiceflow Embed Code
1. Go to your Voiceflow project
2. Click "Publish" → "Web Chat"
3. Copy the embed code

### Step 2: Add to Website
In `app/page.tsx`, replace the contact section placeholder:

```typescript
// Replace this section:
<div className="bg-slate-900/50 p-8 rounded-xl border border-white/10">
  <div className="text-center">
    <p className="text-gray-300 mb-6">...</p>
  </div>
</div>

// With Voiceflow script:
<div className="bg-slate-900/50 p-8 rounded-xl border border-white/10">
  <div id="voiceflow-chat"></div>
  <Script src="https://cdn.voiceflow.com/widget/bundle.mjs" />
  <Script id="voiceflow-config">
    {`
      window.voiceflow.chat.load({
        verify: { projectID: 'YOUR_PROJECT_ID' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    `}
  </Script>
</div>
```

### Step 3: Redeploy
```bash
git add .
git commit -m "Add Voiceflow chatbot"
git push
```

Vercel/Netlify will auto-deploy.

---

## Performance Optimization Tips

### 1. Add Images
When adding images, use Next.js Image component:

```typescript
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={600}
  height={400}
  loading="lazy"
/>
```

### 2. Add Analytics

**Google Analytics:**
In `app/layout.tsx`, add:

```typescript
import Script from 'next/script'

// In the <body> tag:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. SEO Optimization

Add to each page:
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your description',
  openGraph: {
    title: 'Your Page Title',
    description: 'Your description',
    images: ['/og-image.jpg'],
  },
}
```

---

## Content Management

### Updating Content
1. Edit `lib/translations.ts` for text changes
2. Commit and push to GitHub
3. Auto-deploys on Vercel/Netlify

### Adding Blog Posts (Future)
Consider these options:
- **Contentful** (free tier, easy CMS)
- **Sanity** (developer-friendly)
- **WordPress Headless** (if you prefer WordPress)
- **Markdown files** (simplest, store in `/content` folder)

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours for full propagation
- Verify DNS records match exactly

### Chatbot Not Showing
- Check browser console for errors
- Verify Voiceflow project ID is correct
- Ensure script is loaded after page renders

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Connect a-vh.nl domain
3. ✅ Add contact email (info@a-vh.nl)
4. 🔄 Create Voiceflow chatbot
5. 🔄 Add blog content
6. 🔄 Add portfolio/case studies
7. 🔄 Set up Google Analytics

---

## Support & Updates

**Developer**: Alexander van Hoorn  
**Email**: info@a-vh.nl  
**Website**: www.a-vh.nl

For questions or custom features, get in touch!
