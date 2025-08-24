# Repository Structure

**Owner:** Development Team  
**Last Updated:** December 19, 2024

## Overview

This document describes the structure and organization of the MicroBiz e-commerce platform codebase.

## Directory Structure

```
e-commerce/
├── .cursor/                    # Cursor IDE configuration
│   └── rules/                 # Development rules and guidelines
├── docs/                      # Documentation (Diátaxis framework)
│   ├── ui/components/         # UI component documentation
│   ├── tutorials/             # Step-by-step learning guides
│   ├── how-to/               # Problem-solving guides
│   ├── reference/            # Technical reference material
│   ├── explanations/         # Background and context
│   └── architecture/         # System architecture docs
├── public/                    # Static assets
├── src/                      # Source code
│   ├── app/                  # Next.js App Router
│   ├── components/           # React components
│   │   ├── features/         # Feature-specific components
│   │   ├── layout/           # Layout components
│   │   └── ui/               # Base UI components (Shadcn)
│   ├── data/                 # Data layer and API simulation
│   └── lib/                  # Utility functions
└── node_modules/             # Dependencies
```

## Component Organization

### `/src/components/ui/`
Base UI components from Shadcn UI library:
- `button.tsx` - Base button component
- `card.tsx` - Container component
- `badge.tsx` - Label/status component
- `carousel.tsx` - Carousel base component
- etc.

### `/src/components/features/`
Feature-specific business components:
- `hero-carousel.tsx` - Homepage hero carousel
- `category-grid.tsx` - Product category display
- `product-grid.tsx` - Product listing
- `special-offers.tsx` - Promotional content

### `/src/components/layout/`
Layout and navigation components:
- `header.tsx` - Site header with navigation
- `footer.tsx` - Site footer
- Navigation and menu components

### `/src/data/`
Data layer with API-ready structure:
- Component-specific data files
- API simulation functions
- TypeScript interfaces
- Utility functions for data transformation

## Documentation Standards

All components must have corresponding documentation in `/docs/ui/components/` following the established template and including all required sections as per documentation guidelines.
