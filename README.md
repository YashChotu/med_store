# MedStore - Online Pharmacy Platform

A modern, full-featured online pharmacy e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. This application provides a comprehensive solution for ordering medicines, uploading prescriptions, and managing health products online.

## Features

### 🏥 Core Features
- **Product Catalog**: Browse medicines, health devices, and wellness products
- **Category Navigation**: Organized product categories (Medicines, Healthcare, Diagnostics, Vaccines, Devices, Wellness)
- **Search Functionality**: Quick search for medicines and health products
- **Shopping Cart**: Add products to cart and manage orders
- **Prescription Upload**: Easy prescription upload feature for medicines
- **User Account**: Personal dashboard for order tracking and management

### 💊 Product Features
- Featured products with discounts
- Product pricing and availability
- Category-wise product organization
- Health articles and blog section

### 🎨 Design Features
- Fully responsive design for mobile, tablet, and desktop
- Modern UI with Tailwind CSS
- Smooth animations and transitions
- Professional color scheme
- Icon library using Lucide React

## Tech Stack

- **Framework**: Next.js 15.5.7 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
pharmacy-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with header and footer
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles and Tailwind imports
│   └── components/
│       ├── Header.tsx           # Navigation header with search
│       ├── Footer.tsx           # Footer with links and contact info
│       ├── Hero.tsx             # Hero section with CTA
│       ├── Categories.tsx       # Product categories grid
│       ├── FeaturedProducts.tsx # Featured products showcase
│       ├── Features.tsx         # Key features section
│       └── HealthArticles.tsx   # Health blog articles
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot instructions
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.ts               # Next.js configuration
└── README.md                    # This file
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at:
- Local: http://localhost:3000
- Network: http://[your-ip]:3000

### Build for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Available Pages

- **Home** (`/`) - Main landing page with hero, categories, and featured products
- **Upload Prescription** (`/upload-prescription`) - Prescription upload feature
- **Cart** (`/cart`) - Shopping cart
- **Account** (`/account`) - User account dashboard

## Key Components

### Header
- Sticky navigation bar
- Search functionality
- Upload prescription button
- Shopping cart with item counter
- User account access
- Mobile-responsive menu

### Hero Section
- Eye-catching banner
- Call-to-action buttons
- Key features highlight
- Gradient background

### Categories
- Six main categories
- Icon-based navigation
- Hover effects

### Featured Products
- Product grid layout
- Pricing with discounts
- Add to cart functionality
- Product images (placeholder emojis)

### Features Section
- Free delivery information
- Authenticity guarantee
- Quick service promise
- 24/7 support details

### Health Articles
- Blog-style article cards
- Category tags
- Read time indicators
- Engaging thumbnails

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    50: '#fff7ed',
    // ... more shades
    900: '#7c2d12',
  },
}
```

### Content
- Update product data in `src/components/FeaturedProducts.tsx`
- Modify categories in `src/components/Categories.tsx`
- Edit articles in `src/components/HealthArticles.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Future Enhancements

- [ ] User authentication (login/signup)
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Backend API integration
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Admin dashboard
- [ ] Real product images
- [ ] Reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] SMS OTP verification
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For support, email support@medstore.com or contact through the website.

---

Built with ❤️ using Next.js and Tailwind CSS
