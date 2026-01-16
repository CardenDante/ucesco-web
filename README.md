# UCESCO Africa Website

A modern, full-featured NGO website built with Next.js 16, TailwindCSS 4, and Strapi CMS.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, TailwindCSS 4
- **Headless CMS**: Self-hosted Strapi for dynamic content management
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Metadata, semantic HTML, and performance optimized
- **Component Library**: 20+ shadcn/ui components pre-configured
- **Type-Safe**: Full TypeScript coverage with strict mode
- **Production Ready**: Clean architecture, reusable components

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Pages Overview](#pages-overview)
- [Development](#development)
- [Deployment](#deployment)

## 🛠 Tech Stack

- **Framework**: [Next.js 16.1.2](https://nextjs.org/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **CMS**: [Strapi](https://strapi.io/)
- **Database**: PostgreSQL (for Strapi)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for Strapi)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ucesco-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local`:
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   STRAPI_API_TOKEN=your_api_token_here
   ```

4. **Start Strapi CMS (optional)**
   ```bash
   docker-compose up -d
   ```

   Strapi will be available at: http://localhost:1337/admin

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ucesco-web/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── programs/           # Program pages
│   ├── sponsor/            # Child sponsorship
│   ├── volunteer/          # Volunteer opportunities
│   ├── meaningful-travel/  # Travel experiences
│   ├── apply-medic/        # Medical volunteer application
│   ├── impact/             # Impact & reports
│   ├── blog/               # Blog listing
│   ├── donate/             # Donation page
│   └── contact/            # Contact page
├── components/
│   ├── home/               # Homepage components
│   ├── layout/             # Layout components
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── strapi/             # Strapi integration
│   └── utils.ts
├── public/
│   └── UCESCO_WEBSITE_CONTENT_2026-01-01/  # Content assets
├── docker-compose.yml      # Docker configuration
├── strapi-schema.md        # Strapi collections schema
└── README.md
```

## 📝 Content Management

### Setting up Strapi Collections

Refer to `strapi-schema.md` for detailed collection structures.

**Quick Start:**

1. Access Strapi admin: http://localhost:1337/admin
2. Navigate to Content-Type Builder
3. Create collections as defined in `strapi-schema.md`
4. Set API permissions (Settings > Roles > Public)
5. Generate API token and add to `.env.local`

## 📄 Pages Overview

### Main Pages

- **Home** (`/`) - Hero video, stats, programs, stories, CTAs
- **About** (`/about`) - Mission, vision, values, team
- **Programs** (`/programs`) - 5 program detail pages
- **Sponsor a Child** (`/sponsor`) - Compassion-style child sponsorship
- **Volunteer** (`/volunteer`) - VolunteerWorld-style opportunities
- **Meaningful Travel** (`/meaningful-travel`) - Travel experiences
- **Apply as Medic** (`/apply-medic`) - Medical volunteer application
- **Impact** (`/impact`) - Impact metrics & reports
- **Blog** (`/blog`) - News and updates
- **Donate** (`/donate`) - Donation options
- **Contact** (`/contact`) - Contact form

## 🔧 Development

### Building for Production

```bash
npm run build
```

### Adding New Components

```bash
npx shadcn@latest add <component-name>
```

## 🚀 Deployment

### Next.js (Vercel)

1. Push code to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy

### Strapi (Docker)

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🎨 Design System

- **Primary Color**: #62C3D9 (Cyan)
- **Secondary Color**: #38A654 (Green)
- **Font**: Sora (Google Fonts)

## 📞 Support

- Email: info@ucesco.org
- Website: https://ucesco.org

---

Built with ❤️ by UCESCO Africa
