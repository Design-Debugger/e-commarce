# How to Integrate Hero Carousel with API

**Problem:** You need to replace the static carousel data with dynamic content from your backend API.

**Solution:** This guide shows you how to modify the data layer to work with real API endpoints while maintaining the component's functionality.

**Time:** 30 minutes  
**Difficulty:** Intermediate

## Overview

The HeroCarousel component is designed with an API-ready architecture. You'll modify the data layer functions to call your real API endpoints instead of returning static data.

## Prerequisites

- Existing HeroCarousel implementation
- Backend API endpoints for carousel data
- Understanding of async/await and error handling

## Step 1: Identify Your API Endpoints

First, determine what API endpoints you'll need:

```typescript
// Common API structure for carousel data
GET /api/stores/{storeId}/carousel        // Get carousel slides
GET /api/stores/{storeId}/config          // Get carousel configuration  
GET /api/user/preferences                 // Get user language/currency preferences
```

## Step 2: Update Data Fetching Functions

Replace the simulation functions in `src/data/hero-carousel-data.ts`:

### Before (Simulation)
```typescript
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))
  return heroCarouselData
}
```

### After (Real API)
```typescript
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  try {
    const url = storeId 
      ? `/api/stores/${storeId}/carousel`
      : '/api/carousel'
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add authentication if needed
      // headers: { 'Authorization': `Bearer ${token}` }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch carousel data: ${response.status}`)
    }

    const data = await response.json()
    
    // Validate the data structure
    if (!Array.isArray(data)) {
      throw new Error('Invalid carousel data format')
    }

    return data
  } catch (error) {
    console.error('Error fetching carousel data:', error)
    // Return fallback data or empty array
    return []
  }
}
```

## Step 3: Handle Authentication

If your API requires authentication:

```typescript
// Option 1: Using cookies (automatic)
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  const response = await fetch('/api/carousel', {
    credentials: 'include', // Include cookies
  })
  // ... rest of the function
}

// Option 2: Using tokens
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  const token = localStorage.getItem('authToken') // or from context
  
  const response = await fetch('/api/carousel', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  // ... rest of the function
}

// Option 3: Using Next.js API routes with session
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  const response = await fetch('/api/carousel', {
    method: 'GET',
    // Next.js will handle session automatically
  })
  // ... rest of the function
}
```

## Step 4: Update Configuration Fetching

```typescript
export async function fetchCarouselConfig(storeId?: string): Promise<CarouselConfig> {
  try {
    const url = storeId 
      ? `/api/stores/${storeId}/config`
      : '/api/carousel/config'
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch config: ${response.status}`)
    }

    const config = await response.json()
    
    // Merge with defaults to ensure all required fields exist
    return {
      autoPlay: true,
      autoPlayDelay: 5000,
      defaultLanguage: 'en',
      defaultCurrency: 'BDT',
      supportedLanguages: ['en', 'bn'],
      supportedCurrencies: ['BDT', 'USD'],
      ...config // Override with API data
    }
  } catch (error) {
    console.error('Error fetching carousel config:', error)
    // Return sensible defaults
    return {
      autoPlay: true,
      autoPlayDelay: 5000,
      defaultLanguage: 'en',
      defaultCurrency: 'BDT',
      supportedLanguages: ['en', 'bn'],
      supportedCurrencies: ['BDT', 'USD']
    }
  }
}
```

## Step 5: Handle User Preferences

```typescript
export async function fetchUserPreferences(): Promise<{ language: string; currency: string }> {
  try {
    const response = await fetch('/api/user/preferences')
    
    if (!response.ok) {
      throw new Error(`Failed to fetch preferences: ${response.status}`)
    }

    const preferences = await response.json()
    
    return {
      language: preferences.language || 'en',
      currency: preferences.currency || 'BDT'
    }
  } catch (error) {
    console.error('Error fetching user preferences:', error)
    
    // Fallback to browser/system preferences
    const browserLanguage = navigator.language.split('-')[0]
    const supportedLanguage = ['en', 'bn'].includes(browserLanguage) 
      ? browserLanguage 
      : 'en'
    
    return {
      language: supportedLanguage,
      currency: 'BDT'
    }
  }
}
```

## Step 6: Add Caching (Optional)

For better performance, add caching:

```typescript
// Simple in-memory cache
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  const cacheKey = `carousel-${storeId || 'default'}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  try {
    const data = await fetchFromAPI(storeId)
    cache.set(cacheKey, { data, timestamp: Date.now() })
    return data
  } catch (error) {
    // Return cached data if available, even if expired
    if (cached) {
      console.warn('Using stale cache data due to API error')
      return cached.data
    }
    throw error
  }
}
```

## Step 7: Handle Different API Response Formats

Your API might return data in a different format. Add transformation:

```typescript
interface APICarouselResponse {
  slides: {
    id: string
    title_en: string
    title_bn?: string
    subtitle_en: string
    subtitle_bn?: string
    // ... other fields
  }[]
}

function transformAPIResponse(apiData: APICarouselResponse): HeroSlide[] {
  return apiData.slides.map(slide => ({
    id: slide.id,
    title: {
      en: slide.title_en,
      bn: slide.title_bn || slide.title_en
    },
    subtitle: {
      en: slide.subtitle_en,
      bn: slide.subtitle_bn || slide.subtitle_en
    },
    // ... transform other fields
  }))
}

export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  try {
    const response = await fetch('/api/carousel')
    const apiData: APICarouselResponse = await response.json()
    
    return transformAPIResponse(apiData)
  } catch (error) {
    console.error('Error fetching carousel data:', error)
    return []
  }
}
```

## Step 8: Test Your Integration

Create a test component to verify the integration:

```tsx
'use client'

import { HeroCarousel } from '@/components/features/hero-carousel'
import { useState, useEffect } from 'react'

export function APICarouselTest() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    // Test online/offline behavior
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div>
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <p>API Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
      </div>
      <HeroCarousel storeId="test-store" />
    </div>
  )
}
```

## Step 9: Error Monitoring

Add error tracking for production:

```typescript
// Add to your error tracking service (Sentry, LogRocket, etc.)
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
  try {
    const data = await fetchFromAPI(storeId)
    return data
  } catch (error) {
    // Log to error tracking service
    if (typeof window !== 'undefined' && window.Sentry) {
      window.Sentry.captureException(error, {
        tags: { component: 'hero-carousel', storeId },
        extra: { endpoint: '/api/carousel' }
      })
    }
    
    console.error('Carousel API error:', error)
    return [] // Return empty array as fallback
  }
}
```

## Common Issues and Solutions

### Issue: CORS Errors
```typescript
// Solution: Add proper CORS headers to your API or use a proxy
const response = await fetch('/api/proxy/carousel', {
  headers: {
    'Content-Type': 'application/json',
  }
})
```

### Issue: Rate Limiting
```typescript
// Solution: Add retry logic with exponential backoff
async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url)
      if (response.status === 429) {
        // Rate limited, wait and retry
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000))
        continue
      }
      return response
    } catch (error) {
      if (i === retries - 1) throw error
    }
  }
  throw new Error('Max retries exceeded')
}
```

### Issue: Slow API Response
```typescript
// Solution: Add timeout and loading states
async function fetchWithTimeout(url: string, timeout = 10000): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)
  
  try {
    const response = await fetch(url, { signal: controller.signal })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}
```

## Verification Checklist

✅ API endpoints return correct data format  
✅ Error handling works for network failures  
✅ Loading states display properly  
✅ Caching improves performance  
✅ Authentication works correctly  
✅ Fallback data loads when API fails  
✅ CORS issues resolved  
✅ Rate limiting handled  
✅ Error monitoring in place  

## Next Steps

- [Add real-time updates with WebSockets](./add-realtime-carousel-updates.md)
- [Implement carousel content management](./manage-carousel-content.md)
- [Add A/B testing for carousel variants](./ab-test-carousel-content.md)

## Related Documentation

- [Component API Reference](../ui/components/hero-carousel.md)
- [Data Architecture ADR](../adrs/ADR-0001-hero-carousel-data-architecture.md)
- [Error Handling Patterns](../reference/error-handling.md)
