import { HeroCarousel } from '@/components/features/hero-carousel'
import { CategoryGrid } from '@/components/features/category-grid'
import { ProductGrid } from '@/components/features/product-grid'
import { SpecialOffers } from '@/components/features/special-offers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// Homepage - E-commerce platform for micro businesses

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Header */}
			<Header />

			{/* Main Content */}
			<main className="flex-1">
				{/* Hero Carousel */}
				<HeroCarousel />

				{/* Category Grid */}
				<CategoryGrid />

				{/* Featured Products */}
				<ProductGrid 
					title="Featured Products"
					subtitle="Discover our handpicked selection of the best products across all categories"
				/>

				{/* Special Offers */}
				<SpecialOffers />

				{/* Best Sellers */}
				<ProductGrid 
					title="Best Sellers"
					subtitle="Top-rated products loved by our customers"
					className="bg-muted/20"
				/>

				{/* New Arrivals */}
				<ProductGrid 
					title="New Arrivals"
					subtitle="Fresh products just added to our collection"
				/>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
