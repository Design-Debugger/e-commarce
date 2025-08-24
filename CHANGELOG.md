# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **React Dev Inspector**: Click-to-source development tool for faster debugging
  - Hotkey activation (`Ctrl + Shift + Cmd + C` for Mac, `Ctrl + Shift + C` for Windows/Linux)
  - Click any component in browser to open source code in IDE
  - Support for VS Code, WebStorm, Atom, Sublime Text, and more
  - Zero impact on production builds (development only)
  - Automatic IDE file opening with cursor positioning
  - DevInspectorWrapper component for clean integration
  - [Complete usage guide](./docs/how-to/use-react-dev-inspector.md)
- **Configurable Carousel Slides**: New configuration options for controlling slide display
  - `maxSlides` parameter to limit number of slides shown
  - `showOnlyCategories` to filter slides by category
  - `showPagination` and `showNavigation` to control UI elements
  - `enableInfiniteLoop` for controlling loop behavior
- **Design Consistency Improvements**: Unified styling across all carousel slides
  - Consistent responsive typography scaling
  - Improved mobile-first button sizing (44px minimum touch targets)
  - Better spacing and padding consistency
  - Enhanced image loading with lazy loading
  - Responsive trust indicators layout
- **Enhanced API Architecture**: Extended data filtering capabilities
  - `filterSlides()` utility function for dynamic slide filtering
  - Configurable slide limits based on store preferences
  - Category-based slide filtering for targeted displays
- Comprehensive documentation structure following Diátaxis framework
- Repository structure documentation
- Component documentation standards
- [How-to guide for configuring carousel slides](./docs/how-to/configure-carousel-slides.md)

### Improved
- **Mobile Responsiveness**: Better scaling across all device sizes
- **Accessibility**: Enhanced keyboard navigation and screen reader support
- **Performance**: Lazy loading for carousel images
- **Design Consistency**: Unified styling patterns across all slides

## [1.0.0] - 2024-12-19

### Added
- **HeroCarousel Component**: New responsive carousel component for hero sections
  - Auto-play functionality with 5-second intervals
  - Navigation arrows and pagination dots
  - Mobile-first responsive design
  - Loading and error states
  - WCAG AA accessibility compliance
- **Multilingual Support**: Bengali-English dual language support
  - Flexible language fallback system
  - Currency formatting utilities (BDT, USD, etc.)
  - Localized text interface for easy translation
- **API-Ready Architecture**: Separated data layer for easy API integration
  - Data abstraction in `/src/data/hero-carousel-data.ts`
  - Async simulation functions ready for replacement
  - TypeScript interfaces for type safety
- **Shadcn UI Integration**: Carousel component from Shadcn UI library
  - Embla Carousel API for smooth animations
  - Customizable styling with Tailwind CSS
  - Touch/swipe support for mobile devices

### Enhanced
- Homepage with new hero carousel replacing static hero section
- Component architecture following industry best practices
- Mobile-optimized touch targets (44px minimum)
- Performance optimization with lazy loading

### Technical
- TypeScript strict mode compliance
- Error boundaries and proper error handling
- Production-ready code with comprehensive testing
- Documentation following established guidelines

### Design
- Medical/healthcare themed carousel slides
- Bangladesh market-specific design considerations
- Trust indicators and credibility elements
- Bengali typography and cultural color considerations

## [0.1.0] - 2024-12-18

### Added
- Initial project setup with Next.js 15
- Basic component structure
- Tailwind CSS configuration
- Shadcn UI base components

---

## Contributing

When making changes that affect users, please update this changelog following these guidelines:

### Categories
- **Added** for new features
- **Changed** for changes in existing functionality  
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes

### Format
- Use semantic versioning (MAJOR.MINOR.PATCH)
- Include breaking changes with migration notes
- Reference issue numbers when applicable
- Write for end users, not developers
- Group related changes together

### Breaking Changes
Mark breaking changes with `!` in commit messages and include migration guide in changelog entry.
