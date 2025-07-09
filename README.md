# HostelLandingTemplateV1 🏠

A modern, JSON-driven website template for small hostels targeting backpackers. Clean design, responsive layout, and easy customization.

## 🚀 Quick Start

## ✨ Features

- **JSON-Driven Content**: Update all text without touching code
- **Responsive Design**: Mobile-first, works on all devices  
- **Modern Animations**: Smooth transitions and hover effects
- **WhatsApp Integration**: Direct booking through WhatsApp
- **SEO Optimized**: Fast loading, proper meta tags
- **Easy Customization**: Change colors via CSS variables

## 📁 Key Files to Customize

### Content (JSON Files)
- `src/data/home.json` - Hero section, highlights, gallery
- `src/data/rooms.json` - Room types and pricing  
- `src/data/services.json` - All hostel services
- `src/data/location.json` - Address, map, directions
- `src/data/contact.json` - Contact info, social media

### Design System
- `src/index.css` - Colors, fonts, animations
- `src/assets/` - Replace with your hostel photos

## 🛠️ Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Customization Guide

### 1. Update Your Content
Edit the JSON files in `src/data/` with your hostel information:

```json
// src/data/home.json
{
  "hero": {
    "title": "Your Hostel Name",
    "subtitle": "Your unique selling proposition",
    "cta": {
      "link": "https://wa.me/YOUR_WHATSAPP_NUMBER"
    }
  }
}
```

### 2. Replace Images
Add your hostel photos to `src/assets/` and update image paths in JSON files.

### 3. Customize Colors
Edit the design system in `src/index.css`:

```css
:root {
  --primary: YOUR_BRAND_COLOR;
  --secondary: YOUR_SECONDARY_COLOR;
  /* ... more variables */
}
```

### 4. Update Contact Information
- WhatsApp numbers
- Email addresses  
- Social media links
- Physical address

## 🏗️ Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS** for styling
- **Radix UI** components
- **Lucide React** icons
- **Vite** build tool

## 🚀 Deployment

### GitHub Pages
1. Build: `npm run build`
2. Deploy `dist` folder to GitHub Pages

### Netlify/Vercel
1. Connect your GitHub repository
2. Auto-deploy on every push

## 📚 Documentation

See `HOSTEL_TEMPLATE_DOCS.md` for detailed customization instructions.

## 🎯 Perfect For

- Small hostels and backpacker accommodations
- Budget hotels targeting young travelers
- Student housing websites
- Temporary accommodation services

## 📱 Mobile-First Design

Optimized for the mobile-heavy backpacker demographic with:
- Touch-friendly navigation
- Fast loading on slow connections
- Easy WhatsApp booking integration
- Swipe-friendly image galleries
