# Carousel API Reference

**Owner:** Development Team  
**Last Updated:** December 19, 2024

## HeroCarousel Component

### Component Signature

```typescript
function HeroCarousel(props: HeroCarouselProps): JSX.Element
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `storeId` | `string \| undefined` | `undefined` | Optional store identifier for API calls |
| `language` | `string \| undefined` | `'en'` | Language preference ('en', 'bn', etc.) |
| `currency` | `string \| undefined` | `'BDT'` | Currency preference ('BDT', 'USD', etc.) |
| `className` | `string \| undefined` | `''` | Additional CSS classes |
| `slides` | `HeroSlide[] \| undefined` | `undefined` | Override default slides data |
| `config` | `Partial<CarouselConfig> \| undefined` | `undefined` | Override default configuration |

### Type Definitions

#### HeroSlide

```typescript
interface HeroSlide {
  id: string
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  price: number
  originalPrice?: number
  currency: string
  features: LocalizedText[]
  ctaText: LocalizedText
  badge: LocalizedText
  image: {
    src: string
    alt: string
  }
  bgGradient: string
  category?: string
}
```

#### LocalizedText

```typescript
interface LocalizedText {
  en: string
  bn?: string
  [key: string]: string | undefined
}
```

#### CarouselConfig

```typescript
interface CarouselConfig {
  autoPlay: boolean
  autoPlayDelay: number
  defaultLanguage: string
  defaultCurrency: string
  supportedLanguages: string[]
  supportedCurrencies: string[]
}
```

### Utility Functions

#### getLocalizedText

```typescript
function getLocalizedText(
  text: LocalizedText, 
  language: string, 
  fallback: string = 'en'
): string
```

Returns localized text for the specified language, with fallback support.

**Parameters:**
- `text`: The localized text object
- `language`: Target language code
- `fallback`: Fallback language code (default: 'en')

**Returns:** Localized string

#### formatPrice

```typescript
function formatPrice(price: number, currency: string = 'BDT'): string
```

Formats price with appropriate currency symbol.

**Parameters:**
- `price`: Numeric price value
- `currency`: Currency code (default: 'BDT')

**Returns:** Formatted price string (e.g., "৳1,000")

### Data Functions

#### fetchCarouselData

```typescript
async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]>
```

Fetches carousel slide data from API or returns default data.

**Parameters:**
- `storeId`: Optional store identifier

**Returns:** Promise resolving to array of HeroSlide objects

**Throws:** Error if API request fails and no fallback data available

#### fetchCarouselConfig

```typescript
async function fetchCarouselConfig(storeId?: string): Promise<CarouselConfig>
```

Fetches carousel configuration from API or returns default config.

**Parameters:**
- `storeId`: Optional store identifier

**Returns:** Promise resolving to CarouselConfig object

#### fetchUserPreferences

```typescript
async function fetchUserPreferences(): Promise<{ language: string; currency: string }>
```

Fetches user language and currency preferences.

**Returns:** Promise resolving to user preferences object

## Constants

### Default Configuration

```typescript
export const carouselConfig: CarouselConfig = {
  autoPlay: true,
  autoPlayDelay: 5000,
  defaultLanguage: 'en',
  defaultCurrency: 'BDT',
  supportedLanguages: ['en', 'bn'],
  supportedCurrencies: ['BDT', 'USD']
}
```

### Currency Symbols

```typescript
const currencySymbols: Record<string, string> = {
  BDT: '৳',
  USD: '$',
  EUR: '€',
  GBP: '£'
}
```

## Error Handling

The component handles various error states:

### Loading State
- Displays skeleton loader while fetching data
- Maintains layout structure during loading

### Error State  
- Shows error message when data fails to load
- Provides retry functionality
- Gracefully degrades to fallback content

### Empty State
- Handles cases where no slides are available
- Shows appropriate messaging
- Maintains component structure

## Browser Events

The component responds to these browser events:

### Window Events
- `resize`: Adjusts layout for viewport changes
- `online/offline`: Handles network status changes

### Keyboard Events
- `ArrowLeft/ArrowRight`: Navigate slides
- `Tab`: Focus navigation controls
- `Enter/Space`: Activate focused controls

### Touch Events
- `touchstart/touchmove/touchend`: Swipe navigation on mobile
- `gesturestart/gesturechange/gestureend`: Pinch-to-zoom handling

## Performance Considerations

### Bundle Size
- Component: ~8KB gzipped
- Dependencies: ~15KB gzipped (Embla Carousel)
- Total impact: ~23KB gzipped

### Runtime Performance
- Efficient re-rendering with React.memo
- Optimized image loading with Next.js Image
- Debounced resize handling
- Minimal DOM manipulations

### Network Optimization
- Lazy loading of non-critical assets
- Efficient API caching
- Progressive image enhancement
- Preloading of next slide images

## Accessibility Features

### ARIA Attributes
- `role="region"`: Carousel container
- `aria-label`: Descriptive labels for controls
- `aria-live`: Announces slide changes
- `aria-current`: Indicates active slide

### Keyboard Support
- Full keyboard navigation
- Logical tab order
- Escape key handling
- Focus management

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- Image alt text
- Status announcements
