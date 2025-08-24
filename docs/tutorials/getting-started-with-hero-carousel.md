# Getting Started with Hero Carousel

**Difficulty:** Beginner  
**Time:** 15 minutes  
**Prerequisites:** Basic React/Next.js knowledge

## Introduction

In this tutorial, you'll learn how to implement and customize the HeroCarousel component on your e-commerce homepage. By the end, you'll have a working carousel with multilingual content and custom slides.

## What You'll Build

A responsive hero carousel with:
- 3 medical/healthcare themed slides
- Auto-play functionality
- Navigation controls
- Bengali-English bilingual support
- Mobile-responsive design

## Step 1: Basic Implementation

First, let's add the carousel to your homepage:

```tsx
// src/app/page.tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      {/* Your other page content */}
    </div>
  )
}
```

**Result:** You now have a working carousel with default medical slides.

## Step 2: Customize Language and Currency

Let's make the carousel display in Bengali with BDT currency:

```tsx
// src/app/page.tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel 
        language="bn"
        currency="BDT"
      />
    </div>
  )
}
```

**Result:** The carousel now displays Bengali text and shows prices in BDT (৳).

## Step 3: Add Custom Configuration

Let's customize the auto-play settings:

```tsx
// src/app/page.tsx
import { HeroCarousel } from '@/components/features/hero-carousel'

export default function Home() {
  const customConfig = {
    autoPlay: true,
    autoPlayDelay: 8000, // 8 seconds instead of default 5
    defaultLanguage: 'bn'
  }

  return (
    <div className="min-h-screen">
      <HeroCarousel 
        language="bn"
        currency="BDT"
        config={customConfig}
        className="shadow-lg"
      />
    </div>
  )
}
```

**Result:** The carousel now changes slides every 8 seconds and has a shadow effect.

## Step 4: Create Custom Slides

Now let's create your own slide content:

```tsx
// src/app/page.tsx
import { HeroCarousel } from '@/components/features/hero-carousel'
import type { HeroSlide } from '@/data/hero-carousel-data'

const myCustomSlides: HeroSlide[] = [
  {
    id: 'electronics-sale',
    title: {
      en: 'Electronics Mega Sale',
      bn: 'ইলেক্ট্রনিক্স মেগা সেল'
    },
    subtitle: {
      en: 'Up to 50% off on all devices',
      bn: 'সকল ডিভাইসে ৫০% পর্যন্ত ছাড়'
    },
    description: {
      en: 'Latest smartphones, laptops, and gadgets at unbeatable prices',
      bn: 'সর্বশেষ স্মার্টফোন, ল্যাপটপ এবং গ্যাজেট অপ্রতিরোধ্য দামে'
    },
    price: 25000,
    originalPrice: 50000,
    currency: 'BDT',
    features: [
      { en: 'Free Delivery', bn: 'বিনামূল্যে ডেলিভারি' },
      { en: '1 Year Warranty', bn: '১ বছর ওয়ারেন্টি' },
      { en: 'Easy EMI', bn: 'সহজ কিস্তি' }
    ],
    ctaText: {
      en: 'Shop Electronics',
      bn: 'ইলেক্ট্রনিক্স কিনুন'
    },
    badge: {
      en: 'Limited Time',
      bn: 'সীমিত সময়'
    },
    image: {
      src: '/images/electronics-sale.jpg',
      alt: 'Electronics sale banner'
    },
    bgGradient: 'from-purple-50 to-purple-100',
    category: 'electronics'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel 
        slides={myCustomSlides}
        language="bn"
        currency="BDT"
      />
    </div>
  )
}
```

**Result:** Your carousel now displays your custom electronics sale slide.

## Step 5: Test Responsiveness

Let's verify the carousel works on different screen sizes:

1. **Desktop** (1440px+): Full layout with side-by-side content and image
2. **Tablet** (768px-1023px): Stacked layout, smaller text
3. **Mobile** (320px-767px): Compact layout, touch-friendly controls

Test using browser dev tools or actual devices.

## Step 6: Add Loading State Handling

For production, handle loading states properly:

```tsx
'use client'

import { HeroCarousel } from '@/components/features/hero-carousel'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="h-96 bg-gray-100 animate-pulse rounded-lg">
        <div className="flex items-center justify-center h-full">
          <p>Loading carousel...</p>
        </div>
      </div>
    )
  }

  return <HeroCarousel />
}
```

## What You've Learned

✅ How to implement the basic HeroCarousel component  
✅ How to customize language and currency settings  
✅ How to configure auto-play and other options  
✅ How to create custom slide content  
✅ How to test responsive behavior  
✅ How to handle loading states  

## Next Steps

- [Learn about API integration](../how-to/integrate-carousel-with-api.md)
- [Customize carousel styling](../how-to/customize-carousel-styling.md)
- [Add analytics tracking](../how-to/add-carousel-analytics.md)
- [Optimize for performance](../how-to/optimize-carousel-performance.md)

## Need Help?

If you encounter issues:
1. Check the [troubleshooting guide](../ui/components/hero-carousel.md#troubleshooting)
2. Review the [component documentation](../ui/components/hero-carousel.md)
3. Look at the [example implementations](../reference/carousel-examples.md)
