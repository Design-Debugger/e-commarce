import React from 'react'
import { Star, Heart, ShoppingCart, Eye, Badge as BadgeIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface ProductGridProps {
	className?: string
	title: string
	subtitle?: string
	products?: Product[] // Optional - uses sample data if not provided
	showViewAll?: boolean
}

interface Product {
	id: string
	name: string
	price: number
	originalPrice?: number
	image: string
	rating: number
	reviews: number
	category: string
	badge?: string
	isNew?: boolean
	isBestSeller?: boolean
}

// Sample product data
const sampleProducts: Product[] = [
	{
		id: '1',
		name: 'Samsung Galaxy A54 5G',
		price: 45000,
		originalPrice: 50000,
		image: '/products/phone1.jpg',
		rating: 4.5,
		reviews: 128,
		category: 'Electronics',
		badge: 'Top Rated',
		isBestSeller: true
	},
	{
		id: '2',
		name: 'Cotton Casual Shirt',
		price: 1200,
		originalPrice: 1800,
		image: '/products/shirt1.jpg',
		rating: 4.2,
		reviews: 89,
		category: 'Fashion',
		isNew: true
	},
	{
		id: '3',
		name: 'Wireless Bluetooth Headphones',
		price: 3500,
		image: '/products/headphones1.jpg',
		rating: 4.7,
		reviews: 203,
		category: 'Electronics',
		badge: 'Editor\'s Choice'
	},
	{
		id: '4',
		name: 'Home Decor Plant Pot',
		price: 800,
		originalPrice: 1200,
		image: '/products/pot1.jpg',
		rating: 4.3,
		reviews: 45,
		category: 'Home & Garden'
	},
	{
		id: '5',
		name: 'Programming Book Bundle',
		price: 2400,
		image: '/products/books1.jpg',
		rating: 4.8,
		reviews: 67,
		category: 'Books',
		isNew: true
	},
	{
		id: '6',
		name: 'Yoga Mat Premium',
		price: 1800,
		originalPrice: 2500,
		image: '/products/yoga1.jpg',
		rating: 4.4,
		reviews: 156,
		category: 'Sports',
		badge: 'Best Value'
	}
]

function ProductCard({ product }: { product: Product }) {
	const discountPercentage = product.originalPrice 
		? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
		: 0

	return (
		<Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
			<CardContent className="p-0">
				{/* Image Container */}
				<div className="relative aspect-square overflow-hidden bg-gray-100">
					{/* Placeholder for actual product image */}
					<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
						<div className="text-center">
							<div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
								<BadgeIcon className="h-8 w-8 text-gray-400" />
							</div>
							<p className="text-sm text-gray-600">{product.category}</p>
						</div>
					</div>
					
					{/* Badges */}
					<div className="absolute top-3 left-3 space-y-1">
						{product.isNew && (
							<Badge className="bg-green-500 hover:bg-green-600">New</Badge>
						)}
						{product.isBestSeller && (
							<Badge className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>
						)}
						{discountPercentage > 0 && (
							<Badge variant="destructive">-{discountPercentage}%</Badge>
						)}
					</div>

					{/* Action Buttons */}
					<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="flex flex-col gap-2">
							<Button size="icon" variant="secondary" className="h-8 w-8">
								<Heart className="h-4 w-4" />
							</Button>
							<Button size="icon" variant="secondary" className="h-8 w-8">
								<Eye className="h-4 w-4" />
							</Button>
						</div>
					</div>

					{/* Quick Add to Cart */}
					<div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
						<Button className="w-full gap-2" size="sm">
							<ShoppingCart className="h-4 w-4" />
							Add to Cart
						</Button>
					</div>
				</div>

				{/* Product Info */}
				<div className="p-4 space-y-3">
					{/* Category & Badge */}
					<div className="flex items-center justify-between">
						<span className="text-xs text-muted-foreground uppercase tracking-wide">
							{product.category}
						</span>
						{product.badge && (
							<Badge variant="outline" className="text-xs">
								{product.badge}
							</Badge>
						)}
					</div>

					{/* Product Name */}
					<h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
						{product.name}
					</h3>

					{/* Rating */}
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1">
							<Star className="h-4 w-4 fill-amber-400 text-amber-400" />
							<span className="text-sm font-medium">{product.rating}</span>
						</div>
						<span className="text-xs text-muted-foreground">
							({product.reviews})
						</span>
					</div>

					{/* Price */}
					<div className="flex items-center gap-2">
						<span className="text-lg font-bold text-primary">
							৳{product.price.toLocaleString()}
						</span>
						{product.originalPrice && (
							<span className="text-sm text-muted-foreground line-through">
								৳{product.originalPrice.toLocaleString()}
							</span>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export function ProductGrid({ 
	className, 
	title, 
	subtitle, 
	products = sampleProducts, 
	showViewAll = true 
}: ProductGridProps) {
	return (
		<section className={`py-16 ${className}`}>
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4">
						{title}
					</h2>
					{subtitle && (
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							{subtitle}
						</p>
					)}
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{/* View All Button */}
				{showViewAll && (
					<div className="text-center">
						<Button variant="outline" size="lg" className="gap-2">
							View All Products
							<Eye className="h-4 w-4" />
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}
