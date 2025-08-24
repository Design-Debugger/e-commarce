# ADR-0001: Hero Carousel Data Architecture

**Status:** Accepted  
**Date:** 2024-12-19  
**Deciders:** Development Team  
**Technical Story:** Implementation of Hero Carousel Component

## Context

We needed to implement a hero carousel component for the e-commerce platform homepage. The component needed to support:

1. Multilingual content (Bengali-English)
2. Dynamic pricing with multiple currencies
3. Easy API integration for future development
4. Flexible configuration options
5. Production-ready performance and accessibility

## Decision

We decided to implement a separated data architecture pattern with the following key decisions:

### 1. Data Layer Separation
- **Decision**: Extract all component data into separate files (`src/data/component-name-data.ts`)
- **Rationale**: Enables easy replacement with API calls, better maintainability, and clear separation of concerns

### 2. API Simulation Pattern
- **Decision**: Implement async simulation functions that mirror real API structure
- **Rationale**: Allows development to proceed without backend dependencies while creating production-ready API integration points

### 3. Multilingual Interface Design
- **Decision**: Use `LocalizedText` interface with required English and optional other languages
- **Rationale**: Ensures English fallback while supporting optional translations, making the component flexible for stores that don't need multilingual support

### 4. Utility Function Pattern
- **Decision**: Create reusable utility functions for common operations (getLocalizedText, formatPrice)
- **Rationale**: Promotes code reuse and consistency across components

## Implementation Details

### Data Structure
```typescript
interface LocalizedText {
  en: string               // Required English text
  bn?: string             // Optional Bengali text
  [key: string]: string | undefined  // Other languages
}

interface HeroSlide {
  id: string
  title: LocalizedText
  subtitle: LocalizedText
  // ... other properties
}
```

### API Simulation Functions
```typescript
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]>
export async function fetchCarouselConfig(storeId?: string): Promise<CarouselConfig>
export async function fetchUserPreferences(): Promise<{ language: string; currency: string }>
```

### Utility Functions
```typescript
export function getLocalizedText(text: LocalizedText, language: string, fallback: string = 'en'): string
export function formatPrice(price: number, currency: string = 'BDT'): string
```

## Consequences

### Positive
- **Easy API Migration**: Data functions can be replaced with real API calls without component changes
- **Maintainable Code**: Clear separation between data and presentation logic
- **Flexible Localization**: Components work with or without multilingual content
- **Type Safety**: TypeScript interfaces prevent runtime errors
- **Reusable Patterns**: Utility functions can be used across other components
- **Performance**: Async pattern allows for efficient data loading and caching

### Negative
- **Initial Complexity**: More files and structure than inline data
- **Learning Curve**: Developers need to understand the data architecture pattern
- **Abstraction Overhead**: Additional layer between component and data

### Neutral
- **File Organization**: More files to manage, but better organized
- **Bundle Size**: Slightly larger due to abstraction, but negligible impact

## Compliance

This decision aligns with:
- **Component Documentation Requirements**: Full documentation created in `/docs/ui/components/hero-carousel.md`
- **API-Ready Architecture**: Ready for production API integration
- **Accessibility Standards**: WCAG AA compliance maintained
- **Mobile-First Design**: Bangladesh market requirements met

## Future Considerations

1. **API Integration**: When backend APIs are ready, replace simulation functions with real calls
2. **Performance Monitoring**: Monitor bundle size and loading performance as more components adopt this pattern
3. **Pattern Evolution**: May need to adjust pattern based on complex API requirements
4. **Documentation Updates**: Keep component documentation synchronized with any pattern changes

## References

- [Component Documentation](../ui/components/hero-carousel.md)
- [Repository Structure](../architecture/repo-structure.md)
- [Multilingual Support Requirements](../../.cursor/rules/design-principles.mdc)

## Supersedes

This is the initial ADR for the hero carousel data architecture pattern. Future ADRs may supersede specific aspects of this decision as the system evolves.
