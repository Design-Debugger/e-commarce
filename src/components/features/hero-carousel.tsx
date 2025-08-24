'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ShoppingCart, Phone, Star, Award, Clock, Shield } from 'lucide-react'
import type { CarouselApi } from '@/components/ui/carousel'
import { 
	type HeroSlide,
	type CarouselConfig,
	type LocalizedText,
	type CarouselSlideType,
	fetchCarouselData,
	fetchCarouselConfig,
	fetchUserPreferences,
	getLocalizedText,
	formatPrice,
	filterSlides
} from '@/data/hero-carousel-data'

interface HeroCarouselProps {
	storeId?: string
	language?: string
	currency?: string
	className?: string
	slides?: HeroSlide[]
	config?: Partial<CarouselConfig>
}

export function HeroCarousel({ 
	storeId,
	language,
	currency,
	className,
	slides: propSlides,
	config: propConfig
}: HeroCarouselProps) {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)
	const [slides, setSlides] = useState<HeroSlide[]>([])
	const [config, setConfig] = useState<CarouselConfig | null>(null)
	const [userPrefs, setUserPrefs] = useState<{ language: string; currency: string } | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	// Initialize data
	useEffect(() => {
		async function initializeData() {
			try {
				setIsLoading(true)
				setError(null)

				// Fetch data in parallel for better performance
				const [slidesData, configData, userPreferences] = await Promise.all([
					propSlides ? Promise.resolve(propSlides) : fetchCarouselData(storeId),
					propConfig ? Promise.resolve({ ...await fetchCarouselConfig(storeId), ...propConfig }) : fetchCarouselConfig(storeId),
					fetchUserPreferences()
				])

				// Filter slides based on configuration
				const filteredSlides = filterSlides(slidesData, configData)
				
				setSlides(filteredSlides)
				setConfig(configData)
				setUserPrefs(userPreferences)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to load carousel data')
				console.error('Error loading carousel data:', err)
			} finally {
				setIsLoading(false)
			}
		}

		initializeData()
	}, [storeId, propSlides, propConfig])

	// Carousel API setup
	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	// Auto-play functionality
	useEffect(() => {
		if (!api || !config?.autoPlay) {
			return
		}

		const interval = setInterval(() => {
			api.scrollNext()
		}, config.autoPlayDelay)

		return () => clearInterval(interval)
	}, [api, config])

	// Get current language and currency with fallbacks
	const currentLanguage = language || userPrefs?.language || config?.defaultLanguage || 'en'
	const currentCurrency = currency || userPrefs?.currency || config?.defaultCurrency || 'BDT'

	// Helper functions for layout classes
	const getSlideLayoutClasses = (type: CarouselSlideType): string => {
		switch (type) {
			case 'image-only':
				return 'grid grid-cols-1'
			case 'text-only':
				return 'grid grid-cols-1'
			case 'combined':
			default:
				return 'grid grid-cols-1 lg:grid-cols-2'
		}
	}

	const getSlideHeightClasses = (slide: HeroSlide, config: CarouselConfig | null): string => {
		const height = slide.height || config?.fixedHeight
		if (!height) return 'min-h-[300px] lg:h-[400px]'
		
		if (height.mobile === 'auto') {
			return `min-h-[300px] lg:h-[${height.desktop}]`
		}
		
		return `h-[${height.mobile}] lg:h-[${height.desktop}]`
	}

	const getContentPaddingClasses = (type: CarouselSlideType): string => {
		switch (type) {
			case 'text-only':
				return 'p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center'
			case 'combined':
			default:
				return 'p-6 sm:p-8 lg:p-12'
		}
	}

	const getImageContainerClasses = (type: CarouselSlideType): string => {
		switch (type) {
			case 'image-only':
				return 'w-full h-full min-h-[400px]'
			case 'combined':
			default:
				return 'min-h-[250px] lg:min-h-[400px]'
		}
	}

	// Loading state
	if (isLoading) {
		return (
			<section className={`relative bg-gradient-to-br from-background to-muted/20 ${className}`}>
				<div className="container mx-auto px-4 py-8 lg:py-12">
					<div className="w-full h-[400px] bg-muted/20 rounded-lg animate-pulse flex items-center justify-center">
						<div className="text-center space-y-4">
							<div className="h-8 w-48 bg-muted rounded mx-auto" />
							<div className="h-4 w-32 bg-muted rounded mx-auto" />
						</div>
					</div>
				</div>
			</section>
		)
	}

	// Error state
	if (error || slides.length === 0) {
		return (
			<section className={`relative bg-gradient-to-br from-background to-muted/20 ${className}`}>
				<div className="container mx-auto px-4 py-8 lg:py-12">
					<div className="w-full h-[400px] bg-muted/10 rounded-lg flex items-center justify-center">
						<div className="text-center space-y-4">
							<h3 className="text-lg font-semibold text-muted-foreground">
								{error || 'No carousel slides available'}
							</h3>
							<Button 
								variant="outline" 
								onClick={() => window.location.reload()}
							>
								Try Again
							</Button>
						</div>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className={`relative bg-gradient-to-br from-background to-muted/20 ${className}`}>
			<div className="container mx-auto px-4 py-8 lg:py-12">
				<Carousel
					setApi={setApi}
					className="w-full"
					opts={{
						align: 'start',
						loop: config?.enableInfiniteLoop ?? true,
					}}
				>
					<CarouselContent>
						{slides.map((slide: HeroSlide) => (
							<CarouselItem key={slide.id}>
								<Card className="border-0 shadow-xl overflow-hidden">
									<CardContent className="p-0">
										<div className={`bg-gradient-to-r ${slide.bgGradient} relative`}>
											<div className={`${getSlideLayoutClasses(slide.type)} ${getSlideHeightClasses(slide, config)}`}>
												
												{/* Text Content Side */}
												{(slide.type === 'text-only' || slide.type === 'combined') && (
													<div className={`flex flex-col justify-center ${getContentPaddingClasses(slide.type)} space-y-4 lg:space-y-6`}>
														{/* Badge */}
														<div className="flex items-center gap-2">
															<Badge variant="secondary" className="gap-1 bg-white/90 text-primary">
																<Shield className="h-3 w-3" />
																{getLocalizedText(slide.badge, currentLanguage)}
															</Badge>
														</div>

														{/* Title */}
														<div className="space-y-2">
															<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
																{getLocalizedText(slide.title, currentLanguage)}
															</h1>
															<p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium">
																{getLocalizedText(slide.subtitle, currentLanguage)}
															</p>
														</div>

														{/* Description */}
														<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
															{getLocalizedText(slide.description, currentLanguage)}
														</p>

														{/* Features */}
														<div className="space-y-2">
															{slide.features.map((feature: LocalizedText, index: number) => (
																<div key={index} className="flex items-center gap-2">
																	<div className="h-2 w-2 bg-primary rounded-full" />
																	<span className="text-sm font-medium">
																		{getLocalizedText(feature, currentLanguage)}
																	</span>
																</div>
															))}
														</div>

														{/* Price */}
														<div className="flex items-baseline gap-3 py-2">
															<span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
																{formatPrice(slide.price, slide.currency || currentCurrency)}
															</span>
															{slide.originalPrice && (
																<span className="text-base sm:text-lg text-muted-foreground line-through">
																	{formatPrice(slide.originalPrice, slide.currency || currentCurrency)}
																</span>
															)}
														</div>

														{/* CTA Buttons */}
														<div className="flex flex-col sm:flex-row gap-3 pt-2">
															<Button 
																size="lg" 
																className="gap-2 bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base min-h-[44px]"
															>
																<ShoppingCart className="h-4 w-4 flex-shrink-0" />
																{getLocalizedText(slide.ctaText, currentLanguage)}
															</Button>
															<Button 
																variant="outline" 
																size="lg" 
																className="gap-2 border-primary text-primary hover:bg-primary/10 px-4 sm:px-6 py-3 rounded-full text-sm sm:text-base min-h-[44px]"
															>
																<Phone className="h-4 w-4 flex-shrink-0" />
																{currentLanguage === 'bn' ? 'কল করুন' : 'Call Now'}
															</Button>
														</div>

														{/* Trust Indicators */}
														{slide.type !== 'text-only' && (
															<div className="flex flex-wrap items-center gap-4 lg:gap-6 pt-3 text-xs sm:text-sm text-muted-foreground">
																<div className="flex items-center gap-1">
																	<Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
																	<span className="font-medium">4.9/5</span>
																</div>
																<div className="flex items-center gap-1">
																	<Award className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
																	<span className="whitespace-nowrap">{currentLanguage === 'bn' ? 'সার্টিফাইড' : 'Certified'}</span>
																</div>
																<div className="flex items-center gap-1">
																	<Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
																	<span className="whitespace-nowrap">{currentLanguage === 'bn' ? '২৪/৭ সেবা' : '24/7 Service'}</span>
																</div>
															</div>
														)}
													</div>
												)}

												{/* Image Side */}
												{(slide.type === 'image-only' || slide.type === 'combined') && slide.image && (
													<div className={`relative overflow-hidden ${getImageContainerClasses(slide.type)}`}>
														{/* Background overlay */}
														<div className={`absolute inset-0 ${slide.type === 'image-only' ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'} z-10`} />
														
														{/* Image */}
														<img
															src={slide.image?.src || ''}
															alt={slide.image?.alt || 'Carousel image'}
															className="w-full h-full object-cover"
															loading="lazy"
														/>
														
														{/* Image-only overlay content */}
														{slide.type === 'image-only' && (
															<div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
																<div className="space-y-4 text-white">
																	{/* Badge for image-only */}
																	<div className="flex items-center gap-2">
																		<Badge className="gap-1 bg-white/90 text-primary border-0">
																			<Shield className="h-3 w-3" />
																			{getLocalizedText(slide.badge, currentLanguage)}
																		</Badge>
																	</div>
																	
																	{/* Title and subtitle for image-only */}
																	<div className="space-y-2">
																		<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
																			{getLocalizedText(slide.title, currentLanguage)}
																		</h1>
																		<p className="text-base sm:text-lg text-white/90 font-medium drop-shadow">
																			{getLocalizedText(slide.subtitle, currentLanguage)}
																		</p>
																	</div>
																	
																	{/* Price for image-only */}
																	<div className="flex items-baseline gap-3">
																		<span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
																			{formatPrice(slide.price, slide.currency || currentCurrency)}
																		</span>
																		{slide.originalPrice && (
																			<span className="text-base sm:text-lg text-white/70 line-through drop-shadow">
																				{formatPrice(slide.originalPrice, slide.currency || currentCurrency)}
																			</span>
																		)}
																	</div>
																	
																	{/* CTA Buttons for image-only */}
																	<div className="flex flex-col sm:flex-row gap-3">
																		<Button 
																			size="lg" 
																			className="gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold min-h-[44px] shadow-lg"
																		>
																			<ShoppingCart className="h-4 w-4 flex-shrink-0" />
																			{getLocalizedText(slide.ctaText, currentLanguage)}
																		</Button>
																		<Button 
																			variant="outline" 
																			size="lg" 
																			className="gap-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full min-h-[44px] shadow-lg"
																		>
																			<Phone className="h-4 w-4 flex-shrink-0" />
																			{currentLanguage === 'bn' ? 'কল করুন' : 'Call Now'}
																		</Button>
																	</div>
																</div>
															</div>
														)}
														
														{/* Floating Special Offer Badge */}
														{slide.originalPrice && (
															<div className="absolute top-4 right-4 z-30">
																<Badge variant="destructive" className="animate-pulse font-bold text-xs sm:text-sm shadow-lg">
																	{currentLanguage === 'bn' ? 'বিশেষ ছাড়!' : 'Special Offer!'}
																</Badge>
															</div>
														)}
													</div>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Navigation Arrows */}
					{config?.showNavigation && (
						<>
							<CarouselPrevious className="left-4 bg-white/90 hover:bg-white" />
							<CarouselNext className="right-4 bg-white/90 hover:bg-white" />
						</>
					)}
				</Carousel>

				{/* Pagination Dots */}
				{config?.showPagination && count > 1 && (
					<div className="flex justify-center gap-2 mt-6">
						{Array.from({ length: count }).map((_, index) => (
							<button
								key={index}
								className={`h-2 w-8 rounded-full transition-all duration-300 ${
									index + 1 === current
										? 'bg-primary scale-110'
										: 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
								}`}
								onClick={() => api?.scrollTo(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	)
}