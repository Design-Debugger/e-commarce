"use client"

import React from 'react'
import { 
	Search, 
	ShoppingCart, 
	User, 
	Menu, 
	Heart,
	MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

interface HeaderProps {
	className?: string
}

export function Header({ className }: HeaderProps) {
	return (
		<header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}>
			{/* Top Bar */}
			<div className="bg-primary text-primary-foreground">
				<div className="container mx-auto px-4 py-2">
					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1">
								<MapPin className="h-3 w-3" />
								<span>Deliver to Dhaka, Bangladesh</span>
							</div>
						</div>
						<div className="hidden md:flex items-center gap-4">
							<span>Free delivery on orders over ৳500</span>
							<span>•</span>
							<span>Call: +880 1234 567890</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Header */}
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between gap-4">
					{/* Mobile Menu */}
					<Sheet>
						<SheetTrigger asChild className="md:hidden">
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left">
							<SheetHeader>
								<SheetTitle>MicroBiz Store</SheetTitle>
								<SheetDescription>
									Browse our categories and products
								</SheetDescription>
							</SheetHeader>
							<nav className="flex flex-col gap-2 mt-4">
								<Button variant="ghost" className="justify-start">Home</Button>
								<Button variant="ghost" className="justify-start">Categories</Button>
								<Button variant="ghost" className="justify-start">Best Sellers</Button>
								<Button variant="ghost" className="justify-start">New Arrivals</Button>
								<Button variant="ghost" className="justify-start">Deals</Button>
								<Button variant="ghost" className="justify-start">About</Button>
								<Button variant="ghost" className="justify-start">Contact</Button>
							</nav>
						</SheetContent>
					</Sheet>

					{/* Logo */}
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
							<span className="text-primary-foreground font-bold text-sm">MB</span>
						</div>
						<div className="flex flex-col">
							<span className="font-bold text-lg leading-none">MicroBiz</span>
							<span className="text-xs text-muted-foreground">Easy Shop, Easy Manage</span>
						</div>
					</div>

					{/* Search Bar */}
					<div className="flex-1 max-w-lg mx-4">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input 
								placeholder="Search products..." 
								className="pl-10 pr-4"
							/>
						</div>
					</div>

					{/* Navigation - Desktop */}
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList className="gap-2">
							<NavigationMenuItem>
								<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid gap-3 p-4 w-[400px] grid-cols-2">
										<div className="space-y-2">
											<h4 className="font-medium text-sm">Electronics</h4>
											<div className="space-y-1 text-sm text-muted-foreground">
												<div>Smartphones</div>
												<div>Laptops</div>
												<div>Accessories</div>
											</div>
										</div>
										<div className="space-y-2">
											<h4 className="font-medium text-sm">Fashion</h4>
											<div className="space-y-1 text-sm text-muted-foreground">
												<div>Men's Clothing</div>
												<div>Women's Clothing</div>
												<div>Shoes</div>
											</div>
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					{/* Action Buttons */}
					<div className="flex items-center gap-2">
						{/* Wishlist */}
						<Button variant="ghost" size="icon" className="relative">
							<Heart className="h-5 w-5" />
							<Badge 
								variant="destructive" 
								className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
							>
								2
							</Badge>
							<span className="sr-only">Wishlist</span>
						</Button>

						{/* Cart */}
						<Button variant="ghost" size="icon" className="relative">
							<ShoppingCart className="h-5 w-5" />
							<Badge 
								variant="destructive" 
								className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
							>
								3
							</Badge>
							<span className="sr-only">Shopping cart</span>
						</Button>

						{/* User Profile */}
						<Button variant="ghost" size="icon">
							<Avatar className="h-8 w-8">
								<AvatarImage src="/avatar.jpg" alt="User" />
								<AvatarFallback>
									<User className="h-4 w-4" />
								</AvatarFallback>
							</Avatar>
							<span className="sr-only">User profile</span>
						</Button>
					</div>
				</div>
			</div>

			{/* Categories Bar - Desktop */}
			<div className="hidden md:block border-t">
				<div className="container mx-auto px-4 py-2">
					<div className="flex items-center justify-center gap-8 text-sm">
						<Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground">
							Best Sellers
						</Button>
						<Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground">
							New Arrivals
						</Button>
						<Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground">
							Electronics
						</Button>
						<Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground">
							Fashion
						</Button>
						<Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground">
							Home & Garden
						</Button>
						<Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground">
							Books
						</Button>
						<Button variant="link" className="h-auto p-0 text-destructive hover:text-destructive/80">
							Today's Deals
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}
