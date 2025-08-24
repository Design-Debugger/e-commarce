# MicroBiz E-commerce Platform

## Overview
- **Purpose**: A comprehensive e-commerce platform designed specifically for micro businesses, featuring a link tree-like single-page shop that can evolve into a full-fledged e-commerce store
- **Stack**: Next.js 15, TypeScript, Tailwind CSS, Shadcn UI, React 19
- **Architecture**: Component-based architecture with modern React patterns, Server-Side Rendering (SSR), and responsive design

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

## Features

### 🎠 Hero Carousel
- **Multilingual Support**: Bengali-English with automatic fallbacks
- **Mobile-First Design**: Optimized for 70%+ mobile traffic
- **Auto-Play & Navigation**: Touch-friendly controls with accessibility
- **API-Ready**: Easy integration with backend services

### 🌍 Localization
- **Bengali (বাংলা)**: Native language support for Bangladesh market
- **Currency**: BDT (৳) formatting with multi-currency support
- **Cultural Design**: Colors and patterns appropriate for local market

### 📱 Mobile-Optimized
- **Touch Targets**: 44px minimum for accessibility
- **Responsive Design**: Breakpoints optimized for common devices
- **Progressive Web App**: App-like experience with offline capabilities
- **Performance**: Optimized for slower networks

## Architecture

```
src/
├── components/
│   ├── features/         # Business components (HeroCarousel, etc.)
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # Base UI components (Button, Card, etc.)
├── data/                 # Data layer with API simulation
└── lib/                  # Utility functions
```

### Data Architecture

Components follow a separated data pattern:

```typescript
// Data layer (src/data/hero-carousel-data.ts)
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]>

// Component (src/components/features/hero-carousel.tsx)
export function HeroCarousel({ storeId }: HeroCarouselProps)
```

This enables easy API integration and testing.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Shadcn UI
- **Components**: React 19 with Server Components
- **Carousel**: Embla Carousel + Shadcn UI
- **Icons**: Lucide React

## Documentation

Comprehensive documentation following the Diátaxis framework:

### 📚 [Tutorials](./docs/tutorials/)
- [Getting Started with Hero Carousel](./docs/tutorials/getting-started-with-hero-carousel.md)

### 🛠️ [How-To Guides](./docs/how-to/)
- [Use React Dev Inspector](./docs/how-to/use-react-dev-inspector.md)
- [Integrate Carousel with API](./docs/how-to/integrate-carousel-with-api.md)

### 📖 [Reference](./docs/reference/)
- [Carousel API Reference](./docs/reference/carousel-api.md)

### 💡 [Explanations](./docs/explanations/)
- [Carousel Design Decisions](./docs/explanations/carousel-design-decisions.md)

### 🏗️ [Architecture](./docs/architecture/)
- [Repository Structure](./docs/architecture/repo-structure.md)
- [ADR-0001: Carousel Data Architecture](./docs/adrs/ADR-0001-hero-carousel-data-architecture.md)

## Component Usage

### Basic Implementation
```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export default function HomePage() {
  return <HeroCarousel />
}
```

### With Customization
```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export default function HomePage() {
  return (
    <HeroCarousel 
      language="bn"
      currency="BDT"
      storeId="your-store-id"
      config={{ autoPlayDelay: 8000 }}
    />
  )
}
```

### API Integration
```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export default function APIPage() {
  return (
    <HeroCarousel 
      storeId="store-123"
      // Component will automatically fetch data from API
    />
  )
}
```

## Development

### Requirements
- Node.js 18+ 
- npm or yarn

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### 🔍 React Dev Inspector

Click-to-source functionality for faster debugging and development:

**Quick Start:**
1. Start development server: `npm run dev`
2. Activate inspector: `Ctrl + Shift + Cmd + C` (Mac) or `Ctrl + Shift + C` (Windows/Linux)
3. Click any component in browser → Opens source code in your IDE

**Features:**
- ✅ Zero production impact (development only)
- ✅ Works with VS Code, WebStorm, Atom, Sublime Text
- ✅ Instant navigation from browser to source code
- ✅ Automatic IDE file opening

📖 **[Complete React Dev Inspector Guide](./docs/how-to/use-react-dev-inspector.md)**

### Adding New Components

1. Create component in appropriate directory
2. Follow data separation pattern
3. Add TypeScript interfaces
4. Create documentation in `/docs/ui/components/`
5. Update changelog

## Contributing

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines
2. Follow [conventional commits](https://conventionalcommits.org/)
3. Update documentation for any user-facing changes
4. Add changelog entry

### Documentation Requirements

Every component must have:
- Purpose & usage guidelines
- Props/parameters with types
- Code examples
- Accessibility notes
- Do/Don't patterns

## Browser Support

- **Modern Browsers**: Chrome 91+, Firefox 90+, Safari 14+, Edge 91+
- **Mobile**: iOS Safari 14+, Android Chrome 91+
- **Progressive Enhancement**: Graceful degradation for older browsers

## Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Bundle Size**: ~200KB initial load, ~50KB additional chunks
- **Image Optimization**: WebP with JPEG fallback
- **Network Resilience**: Works on slow connections

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Support

- 📖 [Documentation](./docs/)
- 🐛 [Report Issues](https://github.com/your-org/e-commerce/issues)
- 💬 [Discussions](https://github.com/your-org/e-commerce/discussions)

## Roadmap

### v1.1.0 (Q1 2025)
- Real-time inventory updates
- Advanced analytics dashboard
- A/B testing framework

### v1.2.0 (Q2 2025)
- Multi-vendor support
- WhatsApp Commerce integrations
- Voice commerce capabilities

### v2.0.0 (Q3 2025)
- AI-powered personalization
- AR product visualization
- Advanced mobile app

---

**Built with ❤️ by Shihab Shaharia for micro businesses in Bangladesh and emerging markets.**