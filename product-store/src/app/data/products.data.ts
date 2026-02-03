import { Product } from '../models/product.interface';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: 'iPhone 15 Pro',
        description: 'Titanium design with A17 Pro chip and customizable Action button.',
        price: 100000,
        discountPercentage: 10.5,
        rating: 4.8,
        stock: 45,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'iphone15_pro.jpg',
        images: [
           'iphone15_pro.jpg',
            'iphone15_pro_1.jpg'
        ]
    },
    {
        id: 2,
        title: 'iPhone 15',
        description: 'Dynamic Island, 48MP Main camera, and USB-C connectivity.',
        price: 79900,
        discountPercentage: 5.0,
        rating: 4.6,
        stock: 82,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'iphone15.jpg',
        images: [
        'iphone15.jpg',
        'iphone15_1.jpg'
        ]
    },
    {
        id: 3,
        title: 'iPhone 14',
        description: 'Pro-level camera system and Crash Detection for peace of mind.',
        price: 69900,
        discountPercentage: 15.0,
        rating: 4.5,
        stock: 110,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'iphone14_1.jpg',
        images: [
            'iphone14_!.jpg',
            'iphone14.jpg'
        ]
    },
    {
        id: 4,
        title: 'MacBook Pro 14"',
        description: 'Equipped with the M3 chip for extreme speed and power efficiency.',
        price: 150099,
        discountPercentage: 8.0,
        rating: 4.9,
        stock: 30,
        brand: 'Apple',
        category: 'laptops',
        thumbnail: 'macbook14.jpg',
        images: [
             'macbook14.jpg',
            'macbook.jpg'
        ]
    },
    {
        id: 5,
        title: 'MacBook Air 13"',
        description: 'Strikingly thin and fast with the M2 chip and 18 hours of battery life.',
        price: 5000099,
        discountPercentage: 12.0,
        rating: 4.7,
        stock: 55,
        brand: 'Apple',
        category: 'laptops',
        thumbnail: 'macbook13.jpeg',
        images: [
            'macbook13.jpeg',
            'midnight.jpg'
        ]
    },
    {
        id: 6,
        title: 'iPad Pro 12.9"',
        description: 'Liquid Retina XDR display and the powerful M2 chip.',
        price: 100099,
        discountPercentage: 7.5,
        rating: 4.85,
        stock: 20,
        brand: 'Apple',
        category: 'tablets',
        thumbnail: 'ipad.jpeg',
        images: [
            'ipad.jpeg',
            'ipad_1.jpeg'
        ]
    },
    {
        id: 7,
        title: 'Apple Watch Series 9',
        description: 'Smarter, brighter, and more powerful with the S9 SiP.',
        price: 39009,
        discountPercentage: 5.0,
        rating: 4.7,
        stock: 140,
        brand: 'Apple',
        category: 'wearables',
        thumbnail: 'watch.jpeg',
        images: [
            'watch.jpeg',
           'watch_1.webp'
        ]
    },
    {
        id: 8,
        title: 'AirPods Pro (2nd Gen)',
        description: 'Up to 2x more Active Noise Cancellation and Adaptive Audio.',
        price: 250000,
        discountPercentage: 20.0,
        rating: 4.9,
        stock: 200,
        brand: 'Apple',
        category: 'accessories',
        thumbnail: 'airpods.jpg',
        images: [
            'airpods.jpg',
            'airpods_1.jpeg'
        ]
    }
];