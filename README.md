# A-VH Website - AI Software Solutions

Modern, one-page website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Modern, gradient-based design with smooth animations
- 🌐 Bilingual support (Dutch/English) with language toggle
- 📱 Fully responsive for all devices
- ⚡ Optimized performance with Next.js
- 🎨 Beautiful UI with Tailwind CSS
- 🔧 Ready for chatbot integration (Voiceflow)
- 📊 Technology stack showcase
- 📝 Blog section structure (ready for content)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations + Framer Motion ready

## 📦 Installation

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

Visit `http://localhost:3000` to view the website.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Deploy with one click
4. Connect domain: a-vh.nl → Vercel nameservers

### Option 2: Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

### Option 3: Traditional Hosting

```bash
npm run build
# Upload 'out' folder to any static hosting
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content

All content is in `lib/translations.ts` - edit Dutch and English text there.

### Sections

Main sections in `app/page.tsx`:
- Hero
- Services (Sports, Finance, Production)
- Technology Stack
- Blog
- Contact

## 🤖 Chatbot Integration

The contact section is ready for Voiceflow integration:

1. Get your Voiceflow embed code
2. Add it to the contact section in `app/page.tsx`
3. Replace the placeholder with the live chat widget

## 📝 Adding Blog Posts

Create blog posts in a future `/blog` route or integrate with a CMS:
- Contentful
- Sanity
- WordPress (headless)
- Markdown files

## 🔧 Configuration

### Domain Setup

1. Point a-vh.nl to your hosting provider
2. Update `next.config.js` if needed for custom domain
3. Set up SSL certificate (automatic on Vercel/Netlify)

### SEO

Edit metadata in `app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags

## 📱 PWA (Optional)

To make it a Progressive Web App:

```bash
npm install next-pwa
```

Add configuration to `next.config.js`.

## 🔐 Environment Variables

Create `.env.local` for API keys:

```
NEXT_PUBLIC_VOICEFLOW_KEY=your_key_here
```

## 📊 Analytics (Optional)

Add Google Analytics or Plausible:

1. Get tracking ID
2. Add script to `app/layout.tsx`

## 🚀 Performance

- Lighthouse Score: 95+
- Mobile-first design
- Optimized images (use Next.js Image component for photos)
- Lazy loading ready

## 📞 Support

For questions or customizations, contact: info@a-vh.nl

## 📄 License

© 2026 A-VH. All rights reserved.
