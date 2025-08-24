// Hero Carousel Data
// This file contains the carousel slide data that can be easily replaced with API calls

export interface LocalizedText {
	en: string
	bn?: string
	[key: string]: string | undefined
}

export type CarouselSlideType = 'image-only' | 'text-only' | 'combined'

export interface HeroSlide {
	id: string
	type: CarouselSlideType
	title: LocalizedText
	subtitle: LocalizedText
	description: LocalizedText
	price: number
	originalPrice?: number
	currency: string
	features: LocalizedText[]
	ctaText: LocalizedText
	badge: LocalizedText
	image?: {
		src: string
		alt: string
	}
	bgGradient: string
	category?: string
	height?: {
		desktop: string
		mobile: string
	}
}

export interface CarouselConfig {
	autoPlay: boolean
	autoPlayDelay: number
	defaultLanguage: string
	defaultCurrency: string
	supportedLanguages: string[]
	supportedCurrencies: string[]
	maxSlides?: number // Maximum number of slides to display
	showOnlyCategories?: string[] // Filter slides by categories
	showOnlyTypes?: CarouselSlideType[] // Filter slides by type
	enableInfiniteLoop: boolean
	showPagination: boolean
	showNavigation: boolean
	fixedHeight?: {
		desktop: string
		mobile: string
	}
}

// Default configuration
export const carouselConfig: CarouselConfig = {
	autoPlay: true,
	autoPlayDelay: 5000,
	defaultLanguage: 'en',
	defaultCurrency: 'BDT',
	supportedLanguages: ['en', 'bn'],
	supportedCurrencies: ['BDT', 'USD'],
	maxSlides: undefined, // Show all slides by default
	showOnlyCategories: undefined, // Show all categories by default
	showOnlyTypes: undefined, // Show all types by default
	enableInfiniteLoop: true,
	showPagination: true,
	showNavigation: true,
	fixedHeight: {
		desktop: '400px',
		mobile: 'auto'
	}
}

// Sample carousel data - this would typically come from an API
export const heroCarouselData: HeroSlide[] = [
	// Combined type (image + text)
	{
		id: 'medical-tests',
		type: 'combined',
		title: {
			en: 'Complete Health Checkup',
			bn: 'সম্পূর্ণ স্বাস্থ্য পরীক্ষা'
		},
		subtitle: {
			en: 'Government Approved Quality Tests',
			bn: 'সরকার নির্ধারিত মানের ডেঙ্গুর সকল টেস্ট'
		},
		description: {
			en: 'Get accurate results with our certified laboratory tests',
			bn: 'কয়েল একসাথে ঘরে বসেই'
		},
		price: 1000,
		originalPrice: 1500,
		currency: 'BDT',
		features: [
			{ 
				en: 'Dengue NS1 Ag',
				bn: 'Dengue NS1 Ag'
			},
			{ 
				en: 'ICT for Dengue Antibodies (IgG & IgM)',
				bn: 'ICT for Dengue Antibodies (IgG & IgM)'
			},
			{ 
				en: 'Complete Blood Count (CBC)',
				bn: 'Complete Blood Count (CBC)'
			}
		],
		ctaText: {
			en: 'Book Now',
			bn: 'বুক করুন ক্লিক করুন'
		},
		badge: {
			en: 'Quality Assured',
			bn: 'মান নিশ্চিত'
		},
		image: {
			src: 'https://picsum.photos/600/400?random=1&sig=medical',
			alt: 'Medical laboratory tests'
		},
		bgGradient: 'from-blue-50 to-blue-100',
		category: 'healthcare',
		height: {
			desktop: '400px',
			mobile: 'auto'
		}
	},
	// Text-only type
	{
		id: 'pharmacy',
		type: 'text-only',
		title: {
			en: 'Medicine Delivery',
			bn: 'ওষুধ ডেলিভারি'
		},
		subtitle: {
			en: 'Genuine medicines at your doorstep',
			bn: 'আসল ওষুধ ঘরে পৌঁছে দেওয়া'
		},
		description: {
			en: 'Order medicines online with prescription upload. Quick delivery, verified medicines, and professional service.',
			bn: 'প্রেসক্রিপশন আপলোড করে অনলাইনে ওষুধ অর্ডার করুন। দ্রুত ডেলিভারি, যাচাইকৃত ওষুধ এবং পেশাদার সেবা।'
		},
		price: 50,
		currency: 'BDT',
		features: [
			{ 
				en: 'Free Home Delivery',
				bn: 'বিনামূল্যে ঘরে ডেলিভারি'
			},
			{ 
				en: 'Prescription Upload',
				bn: 'প্রেসক্রিপশন আপলোড'
			},
			{ 
				en: '24/7 Pharmacy Service',
				bn: '২৪/৭ ফার্মেসি সেবা'
			},
			{ 
				en: 'Licensed Pharmacists',
				bn: 'লাইসেন্সপ্রাপ্ত ফার্মাসিস্ট'
			}
		],
		ctaText: {
			en: 'Order Medicine',
			bn: 'ওষুধ অর্ডার করুন'
		},
		badge: {
			en: 'Express Delivery',
			bn: 'দ্রুত ডেলিভারি'
		},
		bgGradient: 'from-green-50 to-green-100',
		category: 'pharmacy',
		height: {
			desktop: '400px',
			mobile: 'auto'
		}
	},
	// Image-only type
	{
		id: 'consultation',
		type: 'image-only',
		title: {
			en: 'Doctor Consultation',
			bn: 'ডাক্তারের পরামর্শ'
		},
		subtitle: {
			en: 'Expert medical advice from certified doctors',
			bn: 'সার্টিফাইড ডাক্তারদের থেকে বিশেষজ্ঞ চিকিৎসা পরামর্শ'
		},
		description: {
			en: 'Connect with qualified doctors for online consultation',
			bn: 'অনলাইন পরামর্শের জন্য যোগ্য ডাক্তারদের সাথে যোগাযোগ করুন'
		},
		price: 300,
		originalPrice: 500,
		currency: 'BDT',
		features: [
			{ 
				en: 'Video Consultation',
				bn: 'ভিডিও পরামর্শ'
			},
			{ 
				en: 'Prescription Provided',
				bn: 'প্রেসক্রিপশন প্রদান'
			},
			{ 
				en: 'Follow-up Support',
				bn: 'ফলো-আপ সাহায্য'
			}
		],
		ctaText: {
			en: 'Book Consultation',
			bn: 'পরামর্শ বুক করুন'
		},
		badge: {
			en: 'Expert Doctors',
			bn: 'বিশেষজ্ঞ ডাক্তার'
		},
		image: {
			src: 'https://picsum.photos/800/600?random=2&sig=doctor',
			alt: 'Doctor consultation service'
		},
		bgGradient: 'from-purple-50 to-purple-100',
		category: 'consultation',
		height: {
			desktop: '400px',
			mobile: 'auto'
		}
	},
	// Additional example slides
	{
		id: 'electronics-sale',
		type: 'combined',
		title: {
			en: 'Electronics Mega Sale',
			bn: 'ইলেক্ট্রনিক্স মেগা সেল'
		},
		subtitle: {
			en: 'Up to 70% off on all devices',
			bn: '৭০% পর্যন্ত ছাড় সকল ডিভাইসে'
		},
		description: {
			en: 'Latest smartphones, laptops, and gadgets at unbeatable prices',
			bn: 'সর্বশেষ স্মার্টফোন, ল্যাপটপ এবং গ্যাজেট অপ্রতিরোধ্য দামে'
		},
		price: 25000,
		originalPrice: 50000,
		currency: 'BDT',
		features: [
			{ en: 'Free Delivery', bn: 'বিনামূল্যে ডেলিভারি' },
			{ en: '1 Year Warranty', bn: '১ বছর ওয়ারেন্টি' },
			{ en: 'Easy EMI', bn: 'সহজ কিস্তি' }
		],
		ctaText: {
			en: 'Shop Electronics',
			bn: 'ইলেক্ট্রনিক্স কিনুন'
		},
		badge: {
			en: 'Limited Time',
			bn: 'সীমিত সময়'
		},
		image: {
			src: 'https://picsum.photos/600/400?random=3&sig=electronics',
			alt: 'Electronics sale banner'
		},
		bgGradient: 'from-indigo-50 to-indigo-100',
		category: 'electronics',
		height: {
			desktop: '400px',
			mobile: 'auto'
		}
	},
	{
		id: 'fashion-text',
		type: 'text-only',
		title: {
			en: 'Fashion Week Special',
			bn: 'ফ্যাশন সপ্তাহ বিশেষ'
		},
		subtitle: {
			en: 'Discover the latest fashion trends',
			bn: 'সর্বশেষ ফ্যাশন ট্রেন্ড আবিষ্কার করুন'
		},
		description: {
			en: 'Explore our curated collection of designer clothing, accessories, and footwear. From casual wear to formal attire, find your perfect style with premium quality fabrics and contemporary designs.',
			bn: 'আমাদের ডিজাইনার পোশাক, আনুষাঙ্গিক এবং জুতার সংগ্রহ দেখুন। নৈমিত্তিক পোশাক থেকে আনুষ্ঠানিক পোশাক পর্যন্ত, প্রিমিয়াম মানের কাপড় এবং সমসাময়িক ডিজাইনের সাথে আপনার নিখুঁত স্টাইল খুঁজুন।'
		},
		price: 1500,
		originalPrice: 3000,
		currency: 'BDT',
		features: [
			{ en: 'Designer Collection', bn: 'ডিজাইনার কালেকশন' },
			{ en: 'Premium Quality', bn: 'প্রিমিয়াম মান' },
			{ en: 'Free Alterations', bn: 'বিনামূল্যে পরিবর্তন' },
			{ en: 'Style Consultation', bn: 'স্টাইল পরামর্শ' }
		],
		ctaText: {
			en: 'Explore Fashion',
			bn: 'ফ্যাশন দেখুন'
		},
		badge: {
			en: 'Trending Now',
			bn: 'এখন ট্রেন্ডিং'
		},
		bgGradient: 'from-pink-50 to-rose-100',
		category: 'fashion',
		height: {
			desktop: '400px',
			mobile: 'auto'
		}
	}
]

// Utility function to get localized text with fallback
export function getLocalizedText(
	text: LocalizedText, 
	language: string, 
	fallbackLanguage: string = 'en'
): string {
	return text[language] || text[fallbackLanguage] || text.en || Object.values(text)[0] || ''
}

// Utility function to format price based on currency
export function formatPrice(price: number, currency: string = 'BDT'): string {
	const currencySymbols: Record<string, string> = {
		BDT: '৳',
		USD: '$',
		EUR: '€',
		GBP: '£'
	}
	
	const symbol = currencySymbols[currency] || currency
	return `${symbol}${price.toLocaleString()}`
}

// Utility function to filter and limit slides based on configuration
export function filterSlides(
	slides: HeroSlide[], 
	config: CarouselConfig
): HeroSlide[] {
	let filteredSlides = [...slides]
	
	// Filter by categories if specified
	if (config.showOnlyCategories && config.showOnlyCategories.length > 0) {
		filteredSlides = filteredSlides.filter(slide => 
			slide.category && config.showOnlyCategories!.includes(slide.category)
		)
	}
	
	// Filter by types if specified
	if (config.showOnlyTypes && config.showOnlyTypes.length > 0) {
		filteredSlides = filteredSlides.filter(slide => 
			config.showOnlyTypes!.includes(slide.type)
		)
	}
	
	// Limit number of slides if specified
	if (config.maxSlides && config.maxSlides > 0) {
		filteredSlides = filteredSlides.slice(0, config.maxSlides)
	}
	
	return filteredSlides
}

// API simulation functions - replace these with actual API calls
export async function fetchCarouselData(storeId?: string): Promise<HeroSlide[]> {
	// TODO: Replace with actual API call
	// const response = await fetch(`/api/stores/${storeId}/carousel`)
	// return response.json()
	
	// Simulate API delay
	await new Promise(resolve => setTimeout(resolve, 100))
	return heroCarouselData
}

export async function fetchCarouselConfig(storeId?: string): Promise<CarouselConfig> {
	// TODO: Replace with actual API call
	// const response = await fetch(`/api/stores/${storeId}/config`)
	// return response.json()
	
	// Simulate API delay
	await new Promise(resolve => setTimeout(resolve, 100))
	return carouselConfig
}

export async function fetchUserPreferences(): Promise<{ language: string; currency: string }> {
	// TODO: Replace with actual API call to get user preferences
	// const response = await fetch('/api/user/preferences')
	// return response.json()
	
	// Simulate API delay and return defaults
	await new Promise(resolve => setTimeout(resolve, 50))
	return {
		language: 'en', // This would come from user settings or browser locale
		currency: 'BDT'
	}
}
