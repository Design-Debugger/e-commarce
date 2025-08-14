import React from 'react'
import { Clock, Zap, Gift, Star, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface SpecialOffersProps {
	className?: string
}

interface Offer {
	id: string
	type: 'flash' | 'daily' | 'weekend' | 'bundle'
	title: string
	description: string
	discount: string
	timeLeft?: string
	image: string
	originalPrice: number
	salePrice: number
	gradient: string
	icon: React.ReactNode
}

const offers: Offer[] = [
	{
		id: '1',
		type: 'flash',
		title: 'Flash Sale',
		description: 'Samsung Galaxy S23 Ultra',
		discount: '40% OFF',
		timeLeft: '2h 15m',
		image: '/offers/phone-flash.jpg',
		originalPrice: 120000,
		salePrice: 72000,
		gradient: 'from-red-500 to-red-600',
		icon: <Zap className="h-5 w-5" />
	},
	{
		id: '2',
		type: 'daily',
		title: 'Deal of the Day',
		description: 'Premium Headphones Bundle',
		discount: '60% OFF',
		timeLeft: '12h 30m',
		image: '/offers/headphones-deal.jpg',
		originalPrice: 8000,
		salePrice: 3200,
		gradient: 'from-orange-500 to-orange-600',
		icon: <Clock className="h-5 w-5" />
	},
	{
		id: '3',
		type: 'weekend',
		title: 'Weekend Special',
		description: 'Fashion Collection',
		discount: '50% OFF',
		timeLeft: '1d 8h',
		image: '/offers/fashion-weekend.jpg',
		originalPrice: 5000,
		salePrice: 2500,
		gradient: 'from-purple-500 to-purple-600',
		icon: <Gift className="h-5 w-5" />
	},
	{
		id: '4',
		type: 'bundle',
		title: 'Bundle Deal',
		description: 'Home Essentials Kit',
		discount: '45% OFF',
		image: '/offers/home-bundle.jpg',
		originalPrice: 12000,
		salePrice: 6600,
		gradient: 'from-green-500 to-green-600',
		icon: <Star className="h-5 w-5" />
	}
]

function OfferCard({ offer }: { offer: Offer }) {
	return (
		<Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20">
			<CardContent className="p-0">
				{/* Header */}
				<div className={`bg-gradient-to-r ${offer.gradient} p-4 text-white`}>
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center gap-2">
							{offer.icon}
							<span className="font-semibold text-sm uppercase tracking-wide">
								{offer.title}
							</span>
						</div>
						<Badge variant="secondary" className="text-xs font-bold">
							{offer.discount}
						</Badge>
					</div>
					{offer.timeLeft && (
						<div className="flex items-center gap-2 text-sm">
							<Clock className="h-4 w-4" />
							<span>Ends in: {offer.timeLeft}</span>
						</div>
					)}
				</div>

				{/* Image Section */}
				<div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
					{/* Placeholder for actual product image */}
					<div className="w-full h-full flex items-center justify-center">
						<div className="text-center">
							<div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
								{offer.icon}
							</div>
							<p className="text-lg font-semibold text-gray-700">
								{offer.description}
							</p>
						</div>
					</div>
					
					{/* Floating Badge */}
					<div className="absolute top-3 right-3">
						<Badge variant="destructive" className="animate-pulse">
							Limited Time
						</Badge>
					</div>
				</div>

				{/* Content */}
				<div className="p-4 space-y-4">
					<div>
						<h3 className="font-bold text-lg mb-1">{offer.description}</h3>
						<div className="flex items-center gap-2">
							<span className="text-2xl font-bold text-primary">
								৳{offer.salePrice.toLocaleString()}
							</span>
							<span className="text-sm text-muted-foreground line-through">
								৳{offer.originalPrice.toLocaleString()}
							</span>
						</div>
					</div>

					<Button className="w-full gap-2 group-hover:gap-3 transition-all">
						Grab Deal Now
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}

export function SpecialOffers({ className }: SpecialOffersProps) {
	return (
		<section className={`py-16 bg-muted/30 ${className}`}>
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4">
						Special Offers & Deals
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Don't miss out on these incredible deals! Limited time offers 
						with amazing discounts on your favorite products.
					</p>
				</div>

				{/* Offers Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{offers.map((offer) => (
						<OfferCard key={offer.id} offer={offer} />
					))}
				</div>

				{/* CTA Section */}
				<div className="text-center">
					<div className="inline-flex items-center gap-4 bg-background p-6 rounded-lg border shadow-sm">
						<div className="text-left">
							<h3 className="font-semibold mb-1">Want More Exclusive Deals?</h3>
							<p className="text-sm text-muted-foreground">
								Subscribe to our newsletter and get notified about flash sales
							</p>
						</div>
						<Button className="gap-2">
							Subscribe Now
							<ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
