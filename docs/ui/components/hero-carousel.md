# HeroCarousel Component

**Owner:** Development Team  
**Last Updated:** December 19, 2024  
**Status:** Production Ready  
**Version:** 1.0.0

## Overview

The HeroCarousel component is a fully-featured, responsive carousel designed for showcasing hero content on e-commerce platforms. Built specifically for micro businesses in Bangladesh and emerging markets, it supports multilingual content, flexible currency display, and mobile-first design principles.

## Purpose & Usage

### Primary Use Cases
- **Homepage Hero Sections**: Showcase featured products, services, or promotions
- **Medical/Healthcare Services**: Display health packages, consultations, and medical services
- **Product Highlights**: Feature special offers, new arrivals, or bestsellers
- **Multi-language Stores**: Support Bengali-English bilingual content

### When to Use
✅ **Use HeroCarousel when:**
- You need an auto-playing image carousel with navigation
- Content needs multilingual support (Bengali/English)
- Mobile-first responsive design is required
- API-ready data architecture is needed
- You want flexible currency and language options

❌ **Don't use HeroCarousel when:**
- You only need a single static hero image
- Content doesn't require carousel functionality
- You need complex interactive elements within slides

## Props & Configuration

### Component Props

```typescript
interface HeroCarouselProps {
  storeId?: string           // Optional store identifier for API calls
  language?: string          // Language preference ('en', 'bn', etc.)
  currency?: string          // Currency preference ('BDT', 'USD', etc.)
  className?: string         // Additional CSS classes
  slides?: HeroSlide[]       // Override default slides data
  config?: Partial<CarouselConfig>  // Override default configuration
}
```

### Data Interfaces

```typescript
interface HeroSlide {
  id: string                 // Unique slide identifier
  title: LocalizedText       // Slide title in multiple languages
  subtitle: LocalizedText    // Slide subtitle
  description: LocalizedText // Slide description
  price: number             // Product/service price
  originalPrice?: number    // Optional original price for discounts
  currency: string          // Currency code (BDT, USD, etc.)
  features: LocalizedText[] // List of features/benefits
  ctaText: LocalizedText    // Call-to-action button text
  badge: LocalizedText      // Badge/label text
  image: {
    src: string            // Image URL
    alt: string            // Alt text for accessibility
  }
  bgGradient: string       // CSS gradient class
  category?: string        // Optional category identifier
}

interface LocalizedText {
  en: string               // English text (required)
  bn?: string             // Bengali text (optional)
  [key: string]: string | undefined  // Other languages
}

interface CarouselConfig {
  autoPlay: boolean        // Enable auto-play
  autoPlayDelay: number    // Auto-play interval in milliseconds
  defaultLanguage: string  // Default language fallback
  defaultCurrency: string  // Default currency
  supportedLanguages: string[]  // Array of supported languages
  supportedCurrencies: string[] // Array of supported currencies
}
```

## States & Variants

### Loading State
- Displays skeleton loading animation
- Shows placeholder content while data fetches
- Maintains layout structure during loading

### Error State
- Shows error message when data fails to load
- Provides "Try Again" button for retry functionality
- Maintains accessible error messaging

### Empty State
- Displays when no slides are available
- Shows appropriate messaging
- Maintains component structure

### Interactive States
- **Navigation arrows**: Hover and active states
- **Pagination dots**: Active slide indicator
- **Auto-play**: Pauses on hover interaction
- **Touch/Swipe**: Mobile gesture support

## Code Examples

### Basic Usage

```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export function HomePage() {
  return (
    <div>
      <HeroCarousel />
    </div>
  )
}
```

### Advanced Configuration

```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export function CustomizedCarousel() {
  const customConfig = {
    autoPlay: true,
    autoPlayDelay: 8000,
    defaultLanguage: 'bn'
  }

  return (
    <HeroCarousel
      storeId="store-123"
      language="bn"
      currency="BDT"
      config={customConfig}
      className="my-custom-carousel"
    />
  )
}
```

### API Integration Example

```tsx
'use client'

import { HeroCarousel } from '@/components/features/hero-carousel'
import { useEffect, useState } from 'react'

export function APICarousel({ storeId }: { storeId: string }) {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Replace with actual API call
    fetch(`/api/stores/${storeId}/carousel`)
      .then(res => res.json())
      .then(data => {
        setSlides(data)
        setLoading(false)
      })
  }, [storeId])

  if (loading) return <div>Loading...</div>

  return (
    <HeroCarousel
      storeId={storeId}
      slides={slides}
    />
  )
}
```

### Custom Slide Data

```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'
import type { HeroSlide } from '@/data/hero-carousel-data'

const customSlides: HeroSlide[] = [
  {
    id: 'custom-slide-1',
    title: {
      en: 'Special Offer',
      bn: 'বিশেষ অফার'
    },
    subtitle: {
      en: 'Limited Time Deal',
      bn: 'সীমিত সময়ের জন্য'
    },
    description: {
      en: 'Get amazing discounts',
      bn: 'অবিশ্বাস্য ছাড় পান'
    },
    price: 999,
    originalPrice: 1499,
    currency: 'BDT',
    features: [
      { en: 'Free Shipping', bn: 'বিনামূল্যে ডেলিভারি' },
      { en: '24/7 Support', bn: '২৪/৭ সাপোর্ট' }
    ],
    ctaText: {
      en: 'Shop Now',
      bn: 'এখনই কিনুন'
    },
    badge: {
      en: 'Best Seller',
      bn: 'সর্বাধিক বিক্রিত'
    },
    image: {
      src: '/images/special-offer.jpg',
      alt: 'Special offer product'
    },
    bgGradient: 'from-blue-50 to-blue-100',
    category: 'electronics'
  }
]

export function CustomCarousel() {
  return <HeroCarousel slides={customSlides} />
}
```

## Accessibility

### Keyboard Navigation
- **Arrow Keys**: Navigate between slides
- **Tab**: Focus navigation controls
- **Enter/Space**: Activate focused controls
- **Escape**: Stop auto-play (if implemented)

### Screen Reader Support
- Proper ARIA labels for navigation controls
- Slide content announced when changed
- Loading and error states announced
- Image alt text provided for all images

### Focus Management
- Visible focus indicators on all interactive elements
- Logical tab order through navigation controls
- Focus trapped within carousel during keyboard navigation

### Color Contrast
- All text meets WCAG AA contrast requirements (4.5:1)
- Interactive elements have sufficient contrast
- Badge and button colors accessible

## Do's & Don'ts

### ✅ Do's

- **Use meaningful alt text** for all carousel images
- **Provide fallback content** for when JavaScript is disabled
- **Test with screen readers** to ensure content is accessible
- **Optimize images** for different screen sizes and resolutions
- **Use appropriate heading hierarchy** in slide content
- **Provide clear CTAs** with descriptive button text

### ❌ Don'ts

- **Don't auto-play videos** without user consent
- **Don't use carousel for critical navigation** or essential content
- **Don't make slides change too quickly** (minimum 5 seconds)
- **Don't rely solely on color** to convey information
- **Don't use low-contrast text** on background images
- **Don't nest interactive elements** within slide content inappropriately

## Design Tokens

### Colors
```scss
// Primary colors from design system
--primary: #16A34A          // Green (trust, money, growth)
--primary-foreground: #FFFFFF

// Semantic colors
--success: #22C55E          // Order confirmed, payment successful
--error: #EF4444           // Payment failed, out of stock
--warning: #F59E0B         // Low stock, pending verification
--info: #3B82F6            // New features, tips

// Bangladesh-specific
--bkash-pink: #E2136E      // bKash payment integration
--pathao-orange: #FF6B35   // Pathao Pay integration
```

### Typography
```scss
// Bengali-English optimized fonts
--font-primary: 'Inter', 'Noto Sans Bengali', sans-serif
--font-bengali: 'Noto Sans Bengali', sans-serif

// Scale (mobile-optimized)
--text-h1: 32px            // Slide titles
--text-h2: 24px            // Section headings
--text-h3: 20px            // Slide subtitles
--text-body: 16px          // Descriptions
--text-small: 14px         // Features, badges

// Line heights
--line-height-tight: 1.2   // Headlines
--line-height-normal: 1.6  // Body text
--line-height-loose: 1.8   // Bengali text
```

### Spacing
```scss
// Touch-friendly spacing (4px base unit)
--space-1: 4px             // Fine adjustments
--space-2: 8px             // Small gaps
--space-3: 12px            // Medium gaps
--space-4: 16px            // Standard spacing
--space-6: 24px            // Large spacing
--space-8: 32px            // Extra large spacing
--space-12: 48px           // Section spacing

// Minimum touch targets
--touch-target-min: 44px   // Minimum button/interactive size
```

### Border Radius
```scss
--radius-sm: 6px           // Small elements
--radius-md: 12px          // Cards, buttons
--radius-lg: 16px          // Large containers
--radius-full: 9999px      // Pills, badges
```

## Data Architecture

### File Structure
```
src/
├── components/features/
│   └── hero-carousel.tsx           // Main component
├── data/
│   └── hero-carousel-data.ts       // Data layer
└── docs/ui/components/
    └── hero-carousel.md            // This documentation
```

### API Integration Pattern

The component is designed for easy API integration:

```typescript
// Current simulation functions in hero-carousel-data.ts
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]>
export async function fetchCarouselConfig(storeId?: string): Promise<CarouselConfig>
export async function fetchUserPreferences(): Promise<{ language: string; currency: string }>

// Replace with actual API calls:
// const response = await fetch(`/api/stores/${storeId}/carousel`)
// return response.json()
```

## Migration Guide

### From Static Hero to Carousel

```typescript
// Before: Static hero
<HeroSection />

// After: Dynamic carousel
<HeroCarousel />
```

### API Migration

When ready to connect to real APIs:

1. Replace simulation functions in `hero-carousel-data.ts`
2. Update component to handle real loading states
3. Add error boundary for API failures
4. Test with real data structure

## Performance Considerations

- **Lazy Loading**: Images loaded progressively
- **Code Splitting**: Component loaded on demand
- **Optimization**: WebP images with JPEG fallback
- **Caching**: API responses cached appropriately
- **Bundle Size**: ~15KB gzipped (including dependencies)

## Browser Support

- **Modern Browsers**: Chrome 91+, Firefox 90+, Safari 14+, Edge 91+
- **Mobile**: iOS Safari 14+, Android Chrome 91+
- **Progressive Enhancement**: Graceful degradation for older browsers

## Changelog

### v1.0.0 (2024-12-19)
- ✨ Initial release with full feature set
- ✨ Multilingual support (Bengali-English)
- ✨ API-ready data architecture
- ✨ Mobile-first responsive design
- ✨ Auto-play with navigation controls
- ✨ Loading and error states
- ✨ Accessibility compliance (WCAG AA)

## Related Components

- [Button](./button.md) - Used for CTA buttons within slides
- [Badge](./badge.md) - Used for slide badges and indicators
- [Card](./card.md) - Slide layout structure
- [Navigation Menu](./navigation-menu.md) - Header navigation

## Troubleshooting

### Common Issues

**Carousel not auto-playing:**
- Check `autoPlay` configuration
- Verify `autoPlayDelay` is set correctly
- Ensure component is visible in viewport

**Images not loading:**
- Verify image URLs are accessible
- Check network requests in dev tools
- Ensure proper alt text is provided

**Language not switching:**
- Verify language prop is passed correctly
- Check if translations exist in data
- Ensure fallback language is available

**Navigation not working:**
- Check if slides array has multiple items
- Verify click handlers are not blocked
- Test keyboard navigation

### Debug Mode

Enable debug logging:

```typescript
// Add to your component
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('HeroCarousel Debug:', { slides, config, currentLanguage })
  }
}, [slides, config, currentLanguage])
```

## Support

For issues, feature requests, or questions:
- Create an issue in the project repository
- Tag issues with `component:hero-carousel`
- Include browser, device, and reproduction steps
