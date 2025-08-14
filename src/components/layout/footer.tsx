import React from 'react'
import { 
	Facebook, 
	Instagram, 
	Twitter, 
	Youtube,
	Mail,
	Phone,
	MapPin,
	CreditCard,
	Smartphone,
	Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

interface FooterProps {
	className?: string
}

export function Footer({ className }: FooterProps) {
	return (
		<footer className={`bg-background border-t ${className}`}>
			{/* Main Footer */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
								<span className="text-primary-foreground font-bold text-sm">MB</span>
							</div>
							<div className="flex flex-col">
								<span className="font-bold text-lg leading-none">MicroBiz</span>
								<span className="text-xs text-muted-foreground">Easy Shop, Easy Manage</span>
							</div>
						</div>
						<p className="text-sm text-muted-foreground">
							Empowering micro businesses across Bangladesh with easy-to-use e-commerce solutions. 
							Start with a simple link tree shop and grow into a full store.
						</p>
						<div className="flex items-center gap-2">
							<Button variant="outline" size="icon">
								<Facebook className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="icon">
								<Instagram className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="icon">
								<Twitter className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="icon">
								<Youtube className="h-4 w-4" />
							</Button>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="font-semibold">Quick Links</h3>
						<nav className="flex flex-col gap-2">
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								About Us
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Contact
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								FAQ
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Shipping Info
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Return Policy
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Terms of Service
							</Button>
						</nav>
					</div>

					{/* Categories */}
					<div className="space-y-4">
						<h3 className="font-semibold">Categories</h3>
						<nav className="flex flex-col gap-2">
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Electronics
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Fashion
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Home & Garden
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Books
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Sports
							</Button>
							<Button variant="link" className="justify-start h-auto p-0 text-muted-foreground">
								Beauty
							</Button>
						</nav>
					</div>

					{/* Contact & Newsletter */}
					<div className="space-y-4">
						<h3 className="font-semibold">Stay Connected</h3>
						<div className="space-y-3">
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Phone className="h-4 w-4" />
								<span>+880 1234 567890</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Mail className="h-4 w-4" />
								<span>support@microbiz.com</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<MapPin className="h-4 w-4" />
								<span>Dhaka, Bangladesh</span>
							</div>
						</div>
						
						<div className="space-y-2">
							<p className="text-sm font-medium">Subscribe to our newsletter</p>
							<div className="flex gap-2">
								<Input placeholder="Enter your email" className="text-sm" />
								<Button size="sm">Subscribe</Button>
							</div>
							<p className="text-xs text-muted-foreground">
								Get updates on new products and special offers.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Payment & Features Section */}
			<div className="border-t bg-muted/30">
				<div className="container mx-auto px-4 py-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Payment Methods */}
						<div className="text-center">
							<h4 className="font-medium text-sm mb-3">Payment Methods</h4>
							<div className="flex items-center justify-center gap-2 flex-wrap">
								<Badge variant="outline" className="gap-1">
									<CreditCard className="h-3 w-3" />
									Card
								</Badge>
								<Badge variant="outline" className="gap-1">
									<Smartphone className="h-3 w-3" />
									bKash
								</Badge>
								<Badge variant="outline" className="gap-1">
									<Smartphone className="h-3 w-3" />
									Pathao Pay
								</Badge>
								<Badge variant="outline">COD</Badge>
							</div>
						</div>

						{/* Features */}
						<div className="text-center">
							<h4 className="font-medium text-sm mb-3">Why Choose Us</h4>
							<div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
								<div className="flex items-center gap-1">
									<Truck className="h-3 w-3" />
									Free Delivery
								</div>
								<div className="flex items-center gap-1">
									<CreditCard className="h-3 w-3" />
									Secure Payment
								</div>
								<div className="flex items-center gap-1">
									<Phone className="h-3 w-3" />
									24/7 Support
								</div>
							</div>
						</div>

						{/* Languages */}
						<div className="text-center">
							<h4 className="font-medium text-sm mb-3">Languages</h4>
							<div className="flex items-center justify-center gap-2">
								<Button variant="outline" size="sm" className="text-xs">
									English
								</Button>
								<Button variant="outline" size="sm" className="text-xs">
									বাংলা
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="border-t">
				<div className="container mx-auto px-4 py-4">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
						<p>© 2024 MicroBiz. All rights reserved.</p>
						<div className="flex items-center gap-4">
							<Button variant="link" className="h-auto p-0 text-xs text-muted-foreground">
								Privacy Policy
							</Button>
							<Button variant="link" className="h-auto p-0 text-xs text-muted-foreground">
								Cookie Policy
							</Button>
							<Button variant="link" className="h-auto p-0 text-xs text-muted-foreground">
								Accessibility
							</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
