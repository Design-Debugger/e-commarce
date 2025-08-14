import React from 'react'
import { ArrowRight, Smartphone, Shirt, Home, BookOpen, Dumbbell, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CategoryGridProps {
	className?: string
}

interface Category {
	id: string
	name: string
	icon: React.ReactNode
	productCount: number
	gradient: string
	isPopular?: boolean
}

const categories: Category[] = [
	{
		id: 'electronics',
		name: 'Electronics',
		icon: <Smartphone className="h-6 w-6" />,
		productCount: 1250,
		gradient: 'from-blue-500/20 to-blue-600/20',
		isPopular: true
	},
	{
		id: 'fashion',
		name: 'Fashion',
		icon: <Shirt className="h-6 w-6" />,
		productCount: 890,
		gradient: 'from-pink-500/20 to-rose-600/20',
		isPopular: true
	},
	{
		id: 'home-garden',
		name: 'Home & Garden',
		icon: <Home className="h-6 w-6" />,
		productCount: 650,
		gradient: 'from-green-500/20 to-emerald-600/20'
	},
	{
		id: 'books',
		name: 'Books',
		icon: <BookOpen className="h-6 w-6" />,
		productCount: 430,
		gradient: 'from-amber-500/20 to-orange-600/20'
	},
	{
		id: 'sports',
		name: 'Sports & Fitness',
		icon: <Dumbbell className="h-6 w-6" />,
		productCount: 320,
		gradient: 'from-red-500/20 to-red-600/20'
	},
	{
		id: 'beauty',
		name: 'Beauty & Care',
		icon: <Sparkles className="h-6 w-6" />,
		productCount: 280,
		gradient: 'from-purple-500/20 to-violet-600/20'
	}
]

export function CategoryGrid({ className }: CategoryGridProps) {
	return (
		<section className={`py-16 ${className}`}>
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4">
						Shop by Category
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Discover products across all categories. From electronics to fashion, 
						find everything you need in one place.
					</p>
				</div>

				{/* Category Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
					{categories.map((category) => (
						<Card 
							key={category.id}
							className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
						>
							<CardContent className="p-6 text-center relative">
								{category.isPopular && (
									<Badge 
										variant="destructive" 
										className="absolute -top-2 -right-2 text-xs px-2 py-1"
									>
										Popular
									</Badge>
								)}
								
								<div className={`h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
									<div className="text-primary">
										{category.icon}
									</div>
								</div>
								
								<h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
									{category.name}
								</h3>
								
								<p className="text-sm text-muted-foreground">
									{category.productCount.toLocaleString()} items
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* View All Categories */}
				<div className="text-center">
					<Button variant="outline" size="lg" className="gap-2">
						View All Categories
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	)
}
