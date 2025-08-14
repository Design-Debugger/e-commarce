import React from 'react'
import { ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface HeroSectionProps {
	className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
	return (
		<section className={`bg-gradient-to-br from-primary/5 via-background to-primary/5 ${className}`}>
			<div className="container mx-auto px-4 py-12 lg:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<div className="space-y-8">
						<div className="space-y-4">
							<Badge variant="secondary" className="gap-1">
								<TrendingUp className="h-3 w-3" />
								#1 Platform for Micro Businesses
							</Badge>
							<h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
								Launch Your
								<span className="text-primary block">Dream Store</span>
								in Minutes
							</h1>
							<p className="text-lg text-muted-foreground max-w-lg">
								Start with a simple link tree shop and grow into a full e-commerce store. 
								Perfect for micro businesses in Bangladesh and beyond.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="gap-2">
								<ShoppingBag className="h-4 w-4" />
								Start Shopping
								<ArrowRight className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="lg">
								Create Your Store
							</Button>
						</div>

						{/* Trust Indicators */}
						<div className="flex items-center gap-8 pt-4">
							<div className="text-center">
								<div className="text-2xl font-bold">10K+</div>
								<div className="text-sm text-muted-foreground">Happy Customers</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold">500+</div>
								<div className="text-sm text-muted-foreground">Active Stores</div>
							</div>
							<div className="text-center">
								<div className="flex items-center gap-1">
									<span className="text-2xl font-bold">4.9</span>
									<Star className="h-4 w-4 fill-primary text-primary" />
								</div>
								<div className="text-sm text-muted-foreground">Rating</div>
							</div>
						</div>
					</div>

					{/* Hero Image/Cards */}
					<div className="relative">
						<div className="grid grid-cols-2 gap-4">
							{/* Main Card */}
							<Card className="col-span-2 relative overflow-hidden">
								<CardContent className="p-0">
									<div className="aspect-[16/9] relative bg-gradient-to-br from-primary/20 to-primary/5">
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="text-center space-y-2">
												<div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto">
													<ShoppingBag className="h-8 w-8 text-primary-foreground" />
												</div>
												<h3 className="font-semibold">Featured Products</h3>
												<p className="text-sm text-muted-foreground">Discover amazing deals</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Feature Cards */}
							<Card className="relative overflow-hidden">
								<CardContent className="p-4">
									<div className="space-y-2">
										<div className="h-8 w-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
											<span className="text-green-600 dark:text-green-400 text-lg">🚚</span>
										</div>
										<h4 className="font-medium text-sm">Free Delivery</h4>
										<p className="text-xs text-muted-foreground">On orders over ৳500</p>
									</div>
								</CardContent>
							</Card>

							<Card className="relative overflow-hidden">
								<CardContent className="p-4">
									<div className="space-y-2">
										<div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 dark:text-blue-400 text-lg">💳</span>
										</div>
										<h4 className="font-medium text-sm">Secure Payment</h4>
										<p className="text-xs text-muted-foreground">bKash, Cards & COD</p>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Floating Badge */}
						<div className="absolute -top-4 -right-4 z-10">
							<Badge variant="destructive" className="animate-pulse">
								Special Offer!
							</Badge>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
