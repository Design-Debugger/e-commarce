# How to Configure Carousel Slides

**Problem:** You need to control how many slides are displayed in the carousel and filter them by categories.

**Solution:** Use the new configuration options to limit slides, filter by categories, and control display features.

**Time:** 10 minutes  
**Difficulty:** Beginner

## Configuration Options

The HeroCarousel component now supports flexible slide configuration:

```typescript
interface CarouselConfig {
  autoPlay: boolean
  autoPlayDelay: number
  defaultLanguage: string
  defaultCurrency: string
  supportedLanguages: string[]
  supportedCurrencies: string[]
  maxSlides?: number                // NEW: Limit number of slides
  showOnlyCategories?: string[]     // NEW: Filter by categories
  enableInfiniteLoop: boolean       // NEW: Control infinite loop
  showPagination: boolean          // NEW: Show/hide pagination dots
  showNavigation: boolean          // NEW: Show/hide navigation arrows
}
```

## Limiting Number of Slides

### Show Only 2 Slides
```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export default function HomePage() {
  return (
    <HeroCarousel 
      config={{
        maxSlides: 2,  // Show only first 2 slides
        autoPlayDelay: 6000
      }}
    />
  )
}
```

### Show Single Slide (No Carousel)
```tsx
export default function SingleSlideHero() {
  return (
    <HeroCarousel 
      config={{
        maxSlides: 1,
        showPagination: false,    // Hide dots for single slide
        showNavigation: false,    // Hide arrows for single slide
        enableInfiniteLoop: false, // Disable loop for single slide
        autoPlay: false          // Disable auto-play for single slide
      }}
    />
  )
}
```

## Filtering by Categories

### Show Only Healthcare Slides
```tsx
export default function HealthcarePage() {
  return (
    <HeroCarousel 
      config={{
        showOnlyCategories: ['healthcare', 'consultation'],
        maxSlides: 3
      }}
    />
  )
}
```

### Show Only Pharmacy Services
```tsx
export default function PharmacyPage() {
  return (
    <HeroCarousel 
      config={{
        showOnlyCategories: ['pharmacy'],
        maxSlides: 1,
        showPagination: false,
        showNavigation: false
      }}
    />
  )
}
```

## Custom Slide Data with Configuration

You can also provide your own slides and configure how many to show:

```tsx
import { HeroCarousel } from '@/components/features/hero-carousel'
import type { HeroSlide } from '@/data/hero-carousel-data'

const customSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: { en: 'Electronics Sale', bn: 'ইলেক্ট্রনিক্স সেল' },
    subtitle: { en: 'Up to 70% off', bn: '৭০% পর্যন্ত ছাড়' },
    description: { en: 'Best deals on electronics', bn: 'ইলেক্ট্রনিক্সে সেরা অফার' },
    price: 5000,
    originalPrice: 8000,
    currency: 'BDT',
    features: [
      { en: 'Free Delivery', bn: 'ফ্রি ডেলিভারি' },
      { en: '1 Year Warranty', bn: '১ বছর ওয়ারেন্টি' }
    ],
    ctaText: { en: 'Shop Now', bn: 'এখনই কিনুন' },
    badge: { en: 'Hot Deal', bn: 'হট ডিল' },
    image: { src: '/images/electronics.jpg', alt: 'Electronics' },
    bgGradient: 'from-blue-50 to-blue-100',
    category: 'electronics'
  },
  {
    id: 'slide-2',
    title: { en: 'Fashion Week', bn: 'ফ্যাশন সপ্তাহ' },
    subtitle: { en: 'Latest trends', bn: 'সর্বশেষ ট্রেন্ড' },
    description: { en: 'Discover fashion trends', bn: 'ফ্যাশন ট্রেন্ড আবিষ্কার করুন' },
    price: 1500,
    currency: 'BDT',
    features: [
      { en: 'Designer Collection', bn: 'ডিজাইনার কালেকশন' },
      { en: 'Premium Quality', bn: 'প্রিমিয়াম মান' }
    ],
    ctaText: { en: 'Explore', bn: 'দেখুন' },
    badge: { en: 'New Arrival', bn: 'নতুন আগমন' },
    image: { src: '/images/fashion.jpg', alt: 'Fashion' },
    bgGradient: 'from-pink-50 to-pink-100',
    category: 'fashion'
  },
  {
    id: 'slide-3',
    title: { en: 'Home Decor', bn: 'বাড়ির সাজসজ্জা' },
    subtitle: { en: 'Transform your space', bn: 'আপনার স্থান পরিবর্তন করুন' },
    description: { en: 'Beautiful home decorations', bn: 'সুন্দর বাড়ির সাজসজ্জা' },
    price: 2500,
    currency: 'BDT',
    features: [
      { en: 'Handcrafted', bn: 'হস্তনির্মিত' },
      { en: 'Eco-Friendly', bn: 'পরিবেশ বান্ধব' }
    ],
    ctaText: { en: 'Decorate', bn: 'সাজান' },
    badge: { en: 'Artisan Made', bn: 'কারিগর তৈরি' },
    image: { src: '/images/home-decor.jpg', alt: 'Home Decor' },
    bgGradient: 'from-green-50 to-green-100',
    category: 'home'
  }
]

export default function CustomConfiguredCarousel() {
  return (
    <HeroCarousel 
      slides={customSlides}
      config={{
        maxSlides: 2,                    // Show only first 2 slides
        showOnlyCategories: ['electronics', 'fashion'], // Filter categories
        autoPlayDelay: 8000,
        showPagination: true,
        showNavigation: true,
        enableInfiniteLoop: true
      }}
    />
  )
}
```

## Responsive Configuration

You can conditionally configure the carousel based on screen size:

```tsx
'use client'

import { HeroCarousel } from '@/components/features/hero-carousel'
import { useState, useEffect } from 'react'

export default function ResponsiveCarousel() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const mobileConfig = {
    maxSlides: 1,
    showPagination: false,
    showNavigation: false,
    autoPlayDelay: 4000
  }

  const desktopConfig = {
    maxSlides: 3,
    showPagination: true,
    showNavigation: true,
    autoPlayDelay: 6000
  }

  return (
    <HeroCarousel 
      config={isMobile ? mobileConfig : desktopConfig}
    />
  )
}
```

## API-Based Configuration

When working with APIs, you can fetch configuration dynamically:

```tsx
'use client'

import { HeroCarousel } from '@/components/features/hero-carousel'
import { useState, useEffect } from 'react'

export default function APIConfiguredCarousel({ storeId }: { storeId: string }) {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    async function fetchStoreConfig() {
      try {
        const response = await fetch(`/api/stores/${storeId}/carousel-config`)
        const storeConfig = await response.json()
        
        setConfig({
          maxSlides: storeConfig.maxSlides || 3,
          showOnlyCategories: storeConfig.categories || undefined,
          autoPlayDelay: storeConfig.autoPlayDelay || 5000,
          showPagination: storeConfig.showPagination ?? true,
          showNavigation: storeConfig.showNavigation ?? true
        })
      } catch (error) {
        console.error('Failed to fetch store config:', error)
        // Use default config
        setConfig({
          maxSlides: 3,
          showPagination: true,
          showNavigation: true
        })
      }
    }

    fetchStoreConfig()
  }, [storeId])

  if (!config) {
    return <div>Loading carousel...</div>
  }

  return (
    <HeroCarousel 
      storeId={storeId}
      config={config}
    />
  )
}
```

## Configuration Examples

### Minimal Carousel (Single Featured Product)
```tsx
<HeroCarousel 
  config={{
    maxSlides: 1,
    showPagination: false,
    showNavigation: false,
    autoPlay: false,
    enableInfiniteLoop: false
  }}
/>
```

### Category Showcase (Electronics Only)
```tsx
<HeroCarousel 
  config={{
    showOnlyCategories: ['electronics'],
    maxSlides: 2,
    autoPlayDelay: 8000
  }}
/>
```

### Fast Rotating Banner
```tsx
<HeroCarousel 
  config={{
    maxSlides: 4,
    autoPlayDelay: 3000,
    enableInfiniteLoop: true,
    showPagination: true,
    showNavigation: false
  }}
/>
```

### Accessibility-First (No Auto-Play)
```tsx
<HeroCarousel 
  config={{
    autoPlay: false,
    maxSlides: 3,
    showPagination: true,
    showNavigation: true,
    enableInfiniteLoop: false
  }}
/>
```

## Best Practices

### Performance
- Use `maxSlides` to limit DOM elements for large slide collections
- Filter categories at the data level for better performance
- Disable auto-play for accessibility when appropriate

### UX Considerations
- Show pagination dots only when you have multiple slides
- Hide navigation arrows for single slides
- Use appropriate auto-play delays (5-8 seconds)
- Consider disabling infinite loop for small slide counts

### Accessibility
- Provide meaningful alt text for images
- Use appropriate ARIA labels
- Consider user preferences for motion (auto-play)
- Ensure keyboard navigation works properly

## Troubleshooting

### No Slides Showing
- Check if `maxSlides` is set to 0
- Verify `showOnlyCategories` matches your slide categories
- Ensure slide data is not empty

### Pagination Not Appearing
- Verify `showPagination: true` in config
- Check if you have multiple slides (pagination hidden for single slides)
- Ensure slides array has more than one item

### Navigation Arrows Missing
- Check `showNavigation: true` in config
- Verify the carousel has multiple slides to navigate

## Related Documentation

- [Carousel API Reference](../reference/carousel-api.md)
- [Getting Started Tutorial](../tutorials/getting-started-with-hero-carousel.md)
- [API Integration Guide](./integrate-carousel-with-api.md)
