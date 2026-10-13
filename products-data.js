const NEXORA_PRODUCTS = [

    {
        id: "NXR001",
        name: "NexoraBook Pro 15 Laptop",
        category: "Electronics",
        price: 59999,
        oldPrice: 67999,
        badge: "Bestseller",
        rating: 4.6,
        reviews: 428,
        stock: 24,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
        description: "A powerful everyday laptop designed for students, professionals and productivity-focused users.",
        highlights: [
            "15.6-inch Full HD display",
            "16 GB RAM",
            "512 GB SSD",
            "Fast performance for everyday work",
            "Backlit keyboard"
        ],
        specifications: {
            "Display": "15.6-inch Full HD",
            "RAM": "16 GB",
            "Storage": "512 GB SSD",
            "Processor": "Intel Core i5",
            "Operating System": "Windows 11",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR002",
        name: "NexoraBook Air 14 Laptop",
        category: "Electronics",
        price: 52999,
        oldPrice: 59999,
        badge: "New",
        rating: 4.5,
        reviews: 216,
        stock: 18,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
        description: "A slim and lightweight laptop built for study, office work and everyday productivity.",
        highlights: [
            "14-inch Full HD display",
            "16 GB RAM",
            "512 GB SSD",
            "Slim lightweight design",
            "Long battery life"
        ],
        specifications: {
            "Display": "14-inch Full HD",
            "RAM": "16 GB",
            "Storage": "512 GB SSD",
            "Processor": "Intel Core i5",
            "Operating System": "Windows 11",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR003",
        name: "Nexora Wireless Headphones X1",
        category: "Electronics",
        price: 2499,
        oldPrice: 3499,
        badge: "20% Off",
        rating: 4.4,
        reviews: 389,
        stock: 42,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
        description: "Wireless over-ear headphones with comfortable cushions and immersive audio.",
        highlights: [
            "Wireless Bluetooth connectivity",
            "Deep bass audio",
            "Comfortable ear cushions",
            "Built-in microphone",
            "Long playback time"
        ],
        specifications: {
            "Connectivity": "Bluetooth",
            "Type": "Over-ear",
            "Microphone": "Yes",
            "Battery": "Up to 30 hours",
            "Charging": "USB Type-C",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR004",
        name: "Nexora Bluetooth Speaker S5",
        category: "Electronics",
        price: 1899,
        oldPrice: 2499,
        badge: "Popular",
        rating: 4.3,
        reviews: 274,
        stock: 35,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
        description: "Compact wireless speaker delivering clear sound for home, travel and outdoor use.",
        highlights: [
            "Portable design",
            "Bluetooth connectivity",
            "Powerful audio",
            "Rechargeable battery",
            "Easy controls"
        ],
        specifications: {
            "Connectivity": "Bluetooth 5.0",
            "Battery": "Up to 12 hours",
            "Power": "20W",
            "Charging": "USB Type-C",
            "Water Resistance": "IPX5",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR005",
        name: "Nexora Mechanical Keyboard K2",
        category: "Electronics",
        price: 2999,
        oldPrice: 3999,
        badge: "Trending",
        rating: 4.5,
        reviews: 152,
        stock: 29,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
        description: "Mechanical keyboard designed for comfortable typing, coding and gaming.",
        highlights: [
            "Mechanical switches",
            "RGB backlighting",
            "Compact layout",
            "Durable keycaps",
            "USB connectivity"
        ],
        specifications: {
            "Switch Type": "Mechanical",
            "Connection": "USB",
            "Backlight": "RGB",
            "Layout": "Compact",
            "Compatibility": "Windows / Mac",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR006",
        name: "Nexora One 5G Smartphone",
        category: "Mobiles",
        price: 21999,
        oldPrice: 24999,
        badge: "Bestseller",
        rating: 4.6,
        reviews: 612,
        stock: 31,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
        description: "A modern 5G smartphone with a vibrant display, capable camera and reliable everyday performance.",
        highlights: [
            "5G connectivity",
            "6.6-inch display",
            "50 MP camera",
            "5000 mAh battery",
            "Fast charging"
        ],
        specifications: {
            "Display": "6.6-inch Full HD+",
            "RAM": "8 GB",
            "Storage": "128 GB",
            "Camera": "50 MP",
            "Battery": "5000 mAh",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR007",
        name: "Nexora One Pro 5G",
        category: "Mobiles",
        price: 28999,
        oldPrice: 32999,
        badge: "New",
        rating: 4.7,
        reviews: 341,
        stock: 22,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
        description: "Premium 5G smartphone combining a high-resolution display, advanced camera and powerful performance.",
        highlights: [
            "120 Hz display",
            "12 GB RAM",
            "256 GB storage",
            "Advanced camera system",
            "Fast charging"
        ],
        specifications: {
            "Display": "6.7-inch AMOLED",
            "RAM": "12 GB",
            "Storage": "256 GB",
            "Camera": "50 MP Triple Camera",
            "Battery": "5000 mAh",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR008",
        name: "Nexora Lite 5G",
        category: "Mobiles",
        price: 16999,
        oldPrice: 19999,
        badge: "18% Off",
        rating: 4.3,
        reviews: 289,
        stock: 37,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
        description: "An affordable 5G smartphone designed for everyday communication, entertainment and social media.",
        highlights: [
            "5G ready",
            "Large display",
            "Good battery life",
            "Dual camera",
            "Fast processor"
        ],
        specifications: {
            "Display": "6.5-inch Full HD+",
            "RAM": "6 GB",
            "Storage": "128 GB",
            "Camera": "50 MP",
            "Battery": "5000 mAh",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR009",
        name: "Nexora Max Smartphone",
        category: "Mobiles",
        price: 32999,
        oldPrice: 36999,
        badge: "Popular",
        rating: 4.6,
        reviews: 198,
        stock: 16,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
        description: "Large-screen smartphone built for entertainment, photography and multitasking.",
        highlights: [
            "Large AMOLED display",
            "12 GB RAM",
            "256 GB storage",
            "High-resolution camera",
            "Fast charging"
        ],
        specifications: {
            "Display": "6.8-inch AMOLED",
            "RAM": "12 GB",
            "Storage": "256 GB",
            "Camera": "108 MP",
            "Battery": "5200 mAh",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR010",
        name: "Nexora Mini 5G",
        category: "Mobiles",
        price: 14999,
        oldPrice: 17999,
        badge: "Deal",
        rating: 4.2,
        reviews: 167,
        stock: 44,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
        description: "Compact 5G smartphone offering smooth everyday performance in a comfortable size.",
        highlights: [
            "Compact design",
            "5G connectivity",
            "6 GB RAM",
            "128 GB storage",
            "All-day battery"
        ],
        specifications: {
            "Display": "6.1-inch Full HD+",
            "RAM": "6 GB",
            "Storage": "128 GB",
            "Camera": "48 MP",
            "Battery": "4500 mAh",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR011",
        name: "Nexora Smartwatch S2",
        category: "Watches",
        price: 2799,
        oldPrice: 3499,
        badge: "Bestseller",
        rating: 4.5,
        reviews: 521,
        stock: 28,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
        description: "Smartwatch with fitness tracking, notifications and a modern display.",
        highlights: [
            "Fitness tracking",
            "Heart rate monitoring",
            "Call notifications",
            "Multiple watch faces",
            "Water resistant"
        ],
        specifications: {
            "Display": "1.8-inch HD",
            "Battery": "Up to 7 days",
            "Connectivity": "Bluetooth",
            "Water Resistance": "IP68",
            "Compatibility": "Android / iOS",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR012",
        name: "Nexora Smartwatch Active",
        category: "Watches",
        price: 2299,
        oldPrice: 2999,
        badge: "New",
        rating: 4.4,
        reviews: 318,
        stock: 34,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
        description: "Fitness-focused smartwatch for daily activity monitoring and notifications.",
        highlights: [
            "Activity tracking",
            "Sleep monitoring",
            "Heart rate sensor",
            "Sports modes",
            "Long battery life"
        ],
        specifications: {
            "Display": "1.7-inch",
            "Battery": "Up to 8 days",
            "Sports Modes": "20+",
            "Connectivity": "Bluetooth",
            "Water Resistance": "IP67",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR013",
        name: "Nexora Fit Watch Pro",
        category: "Watches",
        price: 3499,
        oldPrice: 4499,
        badge: "20% Off",
        rating: 4.5,
        reviews: 241,
        stock: 19,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=85",
        description: "Advanced fitness smartwatch with health monitoring and multiple workout modes.",
        highlights: [
            "Advanced fitness tracking",
            "Health monitoring",
            "GPS support",
            "Workout modes",
            "AMOLED display"
        ],
        specifications: {
            "Display": "1.9-inch AMOLED",
            "GPS": "Built-in",
            "Battery": "Up to 10 days",
            "Sports Modes": "100+",
            "Water Resistance": "5 ATM",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR014",
        name: "Nexora Classic Analog Watch",
        category: "Watches",
        price: 1999,
        oldPrice: 2699,
        badge: "Popular",
        rating: 4.3,
        reviews: 186,
        stock: 25,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",
        description: "Classic analog watch with a clean dial and versatile everyday design.",
        highlights: [
            "Classic analog dial",
            "Stainless steel case",
            "Comfortable strap",
            "Scratch-resistant glass",
            "Everyday design"
        ],
        specifications: {
            "Movement": "Quartz",
            "Case": "Stainless Steel",
            "Strap": "Leather",
            "Water Resistance": "3 ATM",
            "Dial": "Analog",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR015",
        name: "Nexora Chrono Steel Watch",
        category: "Watches",
        price: 3999,
        oldPrice: 4999,
        badge: "Trending",
        rating: 4.4,
        reviews: 129,
        stock: 17,
        image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=900&q=85",
        description: "Premium chronograph-style watch with a stainless steel finish.",
        highlights: [
            "Chronograph design",
            "Steel bracelet",
            "Quartz movement",
            "Premium dial",
            "Water resistant"
        ],
        specifications: {
            "Movement": "Quartz",
            "Case": "Stainless Steel",
            "Strap": "Steel",
            "Water Resistance": "5 ATM",
            "Dial": "Chronograph",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR016",
        name: "Urban Fit Men's Jacket",
        category: "Men's Wear",
        price: 2799,
        oldPrice: 3499,
        badge: "Bestseller",
        rating: 4.5,
        reviews: 392,
        stock: 26,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
        description: "Modern men's jacket designed for casual outings and everyday winter wear.",
        highlights: [
            "Regular fit",
            "Warm fabric",
            "Full sleeves",
            "Zip closure",
            "Multiple pockets"
        ],
        specifications: {
            "Material": "Polyester blend",
            "Fit": "Regular",
            "Sleeves": "Full",
            "Closure": "Zip",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR017",
        name: "Classic Men's Casual Shirt",
        category: "Men's Wear",
        price: 999,
        oldPrice: 1499,
        badge: "33% Off",
        rating: 4.4,
        reviews: 447,
        stock: 48,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
        description: "Versatile casual shirt suitable for college, office and everyday wear.",
        highlights: [
            "Comfortable fabric",
            "Regular fit",
            "Button closure",
            "Breathable material",
            "Easy maintenance"
        ],
        specifications: {
            "Material": "Cotton blend",
            "Fit": "Regular",
            "Pattern": "Solid",
            "Sleeves": "Full",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR018",
        name: "Men's Slim Fit T-Shirt",
        category: "Men's Wear",
        price: 699,
        oldPrice: 999,
        badge: "Popular",
        rating: 4.3,
        reviews: 512,
        stock: 62,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
        description: "Comfortable slim-fit T-shirt designed for casual everyday styling.",
        highlights: [
            "Soft cotton fabric",
            "Slim fit",
            "Round neck",
            "Lightweight design",
            "Breathable material"
        ],
        specifications: {
            "Material": "100% Cotton",
            "Fit": "Slim",
            "Neck": "Round",
            "Sleeves": "Half",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR019",
        name: "Men's Regular Fit Jeans",
        category: "Men's Wear",
        price: 1599,
        oldPrice: 2199,
        badge: "Deal",
        rating: 4.4,
        reviews: 278,
        stock: 39,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
        description: "Regular-fit denim jeans built for everyday comfort and durability.",
        highlights: [
            "Regular fit",
            "Durable denim",
            "Classic five-pocket design",
            "Comfortable waistband",
            "Everyday styling"
        ],
        specifications: {
            "Material": "Denim",
            "Fit": "Regular",
            "Waist": "Mid Rise",
            "Pockets": "5",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR020",
        name: "Men's Cotton Hoodie",
        category: "Men's Wear",
        price: 1899,
        oldPrice: 2499,
        badge: "New",
        rating: 4.4,
        reviews: 193,
        stock: 33,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
        description: "Soft cotton-blend hoodie offering warmth and comfort for casual days.",
        highlights: [
            "Soft cotton blend",
            "Hooded design",
            "Kangaroo pocket",
            "Ribbed cuffs",
            "Comfortable fit"
        ],
        specifications: {
            "Material": "Cotton blend",
            "Fit": "Regular",
            "Sleeves": "Full",
            "Pocket": "Kangaroo",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR021",
        name: "Women's Everyday Dress",
        category: "Women's Wear",
        price: 1999,
        oldPrice: 2499,
        badge: "Bestseller",
        rating: 4.5,
        reviews: 486,
        stock: 32,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
        description: "Comfortable everyday dress designed with a simple modern silhouette.",
        highlights: [
            "Comfortable fabric",
            "Regular fit",
            "Modern design",
            "Easy styling",
            "Suitable for everyday wear"
        ],
        specifications: {
            "Material": "Rayon blend",
            "Fit": "Regular",
            "Length": "Knee length",
            "Sleeves": "Short",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR022",
        name: "Women's Printed Kurti",
        category: "Women's Wear",
        price: 1299,
        oldPrice: 1799,
        badge: "28% Off",
        rating: 4.4,
        reviews: 371,
        stock: 45,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
        description: "Printed kurti combining traditional styling with comfortable everyday wear.",
        highlights: [
            "Printed design",
            "Comfortable fabric",
            "Straight fit",
            "Easy to style",
            "Everyday suitable"
        ],
        specifications: {
            "Material": "Cotton blend",
            "Fit": "Straight",
            "Pattern": "Printed",
            "Sleeves": "Three-quarter",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
    id: "NXR023",
    name: "Women's Casual Top",
    category: "Women's Wear",
    price: 899,
    oldPrice: 1299,
    badge: "Popular",
    rating: 4.3,
    reviews: 329,
    stock: 35,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    description: "Comfortable women's casual top designed for everyday wear, college, outings and relaxed occasions.",
    highlights: [
        "Soft and comfortable fabric",
        "Regular casual fit",
        "Lightweight and breathable",
        "Easy to style",
        "Suitable for everyday wear"
    ],
    specifications: {
        "Category": "Women's Wear",
        "Fit": "Regular Fit",
        "Style": "Casual",
        "Material": "Cotton Blend",
        "Sleeve": "Short Sleeve",
        "Occasion": "Casual / Everyday",
        "Care": "Machine Wash"
    }
},

    {
        id: "NXR024",
        name: "Women's Straight Jeans",
        category: "Women's Wear",
        price: 1699,
        oldPrice: 2299,
        badge: "Trending",
        rating: 4.4,
        reviews: 214,
        stock: 37,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
        description: "Classic straight-fit jeans designed for everyday comfort and versatile styling.",
        highlights: [
            "Straight fit",
            "Durable denim",
            "Classic five-pocket design",
            "Comfortable waist",
            "Everyday styling"
        ],
        specifications: {
            "Material": "Denim",
            "Fit": "Straight",
            "Rise": "Mid Rise",
            "Pockets": "5",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR025",
        name: "Women's Winter Coat",
        category: "Women's Wear",
        price: 2999,
        oldPrice: 3999,
        badge: "New",
        rating: 4.5,
        reviews: 178,
        stock: 21,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=85",
        description: "Warm winter coat with a polished design for cold-weather outings.",
        highlights: [
            "Warm material",
            "Full sleeves",
            "Front closure",
            "Modern silhouette",
            "Multiple pockets"
        ],
        specifications: {
            "Material": "Wool blend",
            "Fit": "Regular",
            "Closure": "Button",
            "Sleeves": "Full",
            "Care": "Dry clean",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR026",
        name: "Baby Cotton Comfort Set",
        category: "Baby Wear",
        price: 799,
        oldPrice: 1099,
        badge: "Bestseller",
        rating: 4.5,
        reviews: 284,
        stock: 46,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
        description: "Soft cotton clothing set designed for comfortable everyday baby wear.",
        highlights: [
            "Soft cotton fabric",
            "Gentle on skin",
            "Comfortable fit",
            "Easy changing",
            "Machine washable"
        ],
        specifications: {
            "Material": "100% Cotton",
            "Age Group": "0–2 Years",
            "Fit": "Comfort",
            "Fabric": "Breathable",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR027",
        name: "Baby Printed Romper",
        category: "Baby Wear",
        price: 599,
        oldPrice: 799,
        badge: "25% Off",
        rating: 4.4,
        reviews: 219,
        stock: 54,
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",
        description: "Soft printed romper offering comfort and easy movement for babies.",
        highlights: [
            "Soft fabric",
            "Cute printed design",
            "Easy snap buttons",
            "Comfortable fit",
            "Breathable material"
        ],
        specifications: {
            "Material": "Cotton",
            "Age Group": "0–2 Years",
            "Closure": "Snap buttons",
            "Sleeves": "Short",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR028",
        name: "Baby Hooded Jacket",
        category: "Baby Wear",
        price: 999,
        oldPrice: 1399,
        badge: "New",
        rating: 4.3,
        reviews: 147,
        stock: 29,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
        description: "Warm hooded jacket designed to keep babies comfortable during cooler weather.",
        highlights: [
            "Warm fabric",
            "Hooded design",
            "Full sleeves",
            "Front zip",
            "Soft inner lining"
        ],
        specifications: {
            "Material": "Fleece blend",
            "Age Group": "1–4 Years",
            "Closure": "Zip",
            "Hood": "Yes",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR029",
        name: "Baby Party Frock",
        category: "Baby Wear",
        price: 899,
        oldPrice: 1199,
        badge: "Popular",
        rating: 4.5,
        reviews: 192,
        stock: 27,
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
        description: "Comfortable party frock with a stylish design for special occasions.",
        highlights: [
            "Party design",
            "Soft inner lining",
            "Comfortable fit",
            "Lightweight fabric",
            "Easy closure"
        ],
        specifications: {
            "Material": "Cotton blend",
            "Age Group": "1–5 Years",
            "Fit": "Comfort",
            "Closure": "Back zip",
            "Care": "Gentle wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR030",
        name: "Baby Cotton Sleepsuit",
        category: "Baby Wear",
        price: 699,
        oldPrice: 999,
        badge: "Deal",
        rating: 4.4,
        reviews: 168,
        stock: 41,
        image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=900&q=85",
        description: "Soft cotton sleepsuit designed for comfortable nighttime wear.",
        highlights: [
            "Soft cotton",
            "Full coverage",
            "Comfortable fit",
            "Easy zip opening",
            "Breathable fabric"
        ],
        specifications: {
            "Material": "100% Cotton",
            "Age Group": "0–3 Years",
            "Closure": "Front zip",
            "Sleeves": "Full",
            "Care": "Machine wash",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR031",
        name: "Aura Table Lamp",
        category: "Home & Living",
        price: 699,
        oldPrice: 899,
        badge: "Popular",
        rating: 4.4,
        reviews: 264,
        stock: 38,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
        description: "Minimal table lamp designed to add warm ambient lighting to bedrooms and workspaces.",
        highlights: [
            "Modern design",
            "Warm lighting",
            "Compact size",
            "Easy operation",
            "Suitable for bedrooms"
        ],
        specifications: {
            "Type": "Table Lamp",
            "Light": "Warm LED",
            "Power": "10W",
            "Material": "Metal and fabric",
            "Switch": "On/Off",
            "Warranty": "6 Months"
        }
    },

    {
        id: "NXR032",
        name: "Modern Accent Chair",
        category: "Home & Living",
        price: 3499,
        oldPrice: 4499,
        badge: "New",
        rating: 4.5,
        reviews: 118,
        stock: 12,
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85",
        description: "Modern accent chair designed to bring comfort and style to living spaces.",
        highlights: [
            "Modern design",
            "Comfortable cushioning",
            "Strong frame",
            "Suitable for living rooms",
            "Easy maintenance"
        ],
        specifications: {
            "Material": "Fabric",
            "Frame": "Wood",
            "Seating": "1 Person",
            "Assembly": "Required",
            "Room": "Living Room",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR033",
        name: "Living Room Cushion Set",
        category: "Home & Living",
        price: 899,
        oldPrice: 1299,
        badge: "30% Off",
        rating: 4.3,
        reviews: 206,
        stock: 43,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85",
        description: "Decorative cushion set designed to add comfort and style to sofas and beds.",
        highlights: [
            "Soft filling",
            "Decorative design",
            "Comfortable texture",
            "Easy to clean",
            "Set of 5"
        ],
        specifications: {
            "Set": "5 Cushions",
            "Material": "Cotton blend",
            "Filling": "Polyester",
            "Shape": "Square",
            "Care": "Machine washable",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR034",
        name: "Minimal Wall Clock",
        category: "Home & Living",
        price: 799,
        oldPrice: 1099,
        badge: "Trending",
        rating: 4.4,
        reviews: 155,
        stock: 35,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=85",
        description: "Minimal wall clock with a clean modern design for home and office spaces.",
        highlights: [
            "Minimal design",
            "Silent movement",
            "Easy wall mounting",
            "Clear numbers",
            "Lightweight body"
        ],
        specifications: {
            "Type": "Analog",
            "Diameter": "12 inches",
            "Movement": "Quartz",
            "Power": "1 AA battery",
            "Frame": "ABS",
            "Warranty": "6 Months"
        }
    },

    {
        id: "NXR035",
        name: "Storage Organizer Rack",
        category: "Home & Living",
        price: 1299,
        oldPrice: 1799,
        badge: "Bestseller",
        rating: 4.4,
        reviews: 241,
        stock: 31,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85",
        description: "Multi-purpose storage rack for organizing clothes, accessories and household items.",
        highlights: [
            "Multi-purpose storage",
            "Multiple shelves",
            "Space saving design",
            "Easy assembly",
            "Strong frame"
        ],
        specifications: {
            "Material": "Engineered Wood",
            "Shelves": "4",
            "Assembly": "Required",
            "Usage": "Home / Office",
            "Weight Capacity": "40 kg",
            "Warranty": "1 Year"
        }
    },

        {
    id: "NXR036",
    name: "HomeChef Non-Stick Cookware Set",
    category: "Kitchen",
    price: 2499,
    oldPrice: 3299,
    badge: "Bestseller",
    rating: 4.5,
    reviews: 512,
    stock: 28,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
    description: "Complete non-stick cookware set for everyday cooking, suitable for preparing a variety of meals at home.",
    highlights: [
        "Non-stick cooking surface",
        "Easy food release",
        "Heat-resistant handles",
        "Suitable for everyday cooking",
        "Easy to clean"
    ],
    specifications: {
        "Set Type": "Non-Stick Cookware Set",
        "Material": "Aluminium",
        "Coating": "Non-Stick",
        "Handle": "Heat Resistant",
        "Use": "Home Cooking",
        "Cooktop": "Gas Stove",
        "Cleaning": "Easy Clean"
    }
},

    {
       id: "NXR037",
name: "Electric Kettle 1.5L",
category: "Kitchen",
price: 1199,
oldPrice: 1599,
badge: "25% Off",
rating: 4.4,
reviews: 337,
stock: 40,
image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=85",
description: "Fast electric kettle suitable for boiling water, tea and coffee.",
highlights: [
    "1.5 litre capacity",
    "Fast boiling",
    "Auto shut-off",
    "360-degree base",
    "Easy cleaning"
],
specifications: {
    "Capacity": "1.5 Litres",
    "Power": "1500W",
    "Material": "Stainless Steel",
    "Safety": "Auto shut-off",
    "Base": "360 Degree",
    "Warranty": "1 Year"
}
},

    {
        id: "NXR038",
        name: "Mixer Grinder 750W",
        category: "Kitchen",
        price: 3299,
        oldPrice: 4299,
        badge: "Popular",
        rating: 4.4,
        reviews: 281,
        stock: 18,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
        description: "Powerful mixer grinder designed for grinding, blending and everyday kitchen preparation.",
        highlights: [
            "750W motor",
            "Multiple speed levels",
            "Multiple jars",
            "Strong blades",
            "Overload protection"
        ],
        specifications: {
            "Power": "750W",
            "Speed": "3 Levels",
            "Jars": "3",
            "Motor": "Copper winding",
            "Protection": "Overload",
            "Warranty": "2 Years"
        }
    },

    {
        id: "NXR039",
        name: "Stainless Steel Lunch Box",
        category: "Kitchen",
        price: 799,
        oldPrice: 999,
        badge: "Deal",
        rating: 4.3,
        reviews: 198,
        stock: 56,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
        description: "Durable stainless steel lunch box suitable for school, college and office.",
        highlights: [
            "Food-grade steel",
            "Leak-resistant design",
            "Multiple compartments",
            "Easy to clean",
            "Compact size"
        ],
        specifications: {
            "Material": "Stainless Steel",
            "Capacity": "1000 ml",
            "Compartments": "3",
            "Leak Proof": "Yes",
            "Usage": "Office / College",
            "Warranty": "6 Months"
        }
    },

    {
        id: "NXR040",
        name: "Digital Kitchen Scale",
        category: "Kitchen",
        price: 699,
        oldPrice: 999,
        badge: "New",
        rating: 4.3,
        reviews: 143,
        stock: 47,
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
        description: "Compact digital kitchen scale for accurate ingredient measurement.",
        highlights: [
            "Accurate measurement",
            "Digital display",
            "Tare function",
            "Compact design",
            "Easy operation"
        ],
        specifications: {
            "Capacity": "10 kg",
            "Accuracy": "1 g",
            "Display": "Digital LCD",
            "Power": "2 AAA batteries",
            "Unit": "g / kg / oz",
            "Warranty": "6 Months"
        }
    },

    {
        id: "NXR041",
        name: "Everyday Running Shoes",
        category: "Footwear",
        price: 1899,
        oldPrice: 2499,
        badge: "Bestseller",
        rating: 4.5,
        reviews: 423,
        stock: 38,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        description: "Lightweight running shoes designed for walking, jogging and everyday activity.",
        highlights: [
            "Lightweight construction",
            "Cushioned sole",
            "Breathable upper",
            "Flexible design",
            "Comfortable fit"
        ],
        specifications: {
            "Upper": "Mesh",
            "Sole": "Rubber",
            "Closure": "Lace-up",
            "Usage": "Running / Walking",
            "Fit": "Regular",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR042",
        name: "Men's Casual Sneakers",
        category: "Footwear",
        price: 2199,
        oldPrice: 2999,
        badge: "27% Off",
        rating: 4.4,
        reviews: 311,
        stock: 34,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
        description: "Modern casual sneakers designed for everyday outfits and comfortable walking.",
        highlights: [
            "Modern design",
            "Cushioned sole",
            "Comfortable fit",
            "Durable construction",
            "Everyday use"
        ],
        specifications: {
            "Upper": "Synthetic",
            "Sole": "Rubber",
            "Closure": "Lace-up",
            "Fit": "Regular",
            "Usage": "Casual",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR043",
        name: "Women's Walking Shoes",
        category: "Footwear",
        price: 1999,
        oldPrice: 2699,
        badge: "Popular",
        rating: 4.4,
        reviews: 286,
        stock: 41,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
        description: "Comfort-focused walking shoes designed for daily movement and long walks.",
        highlights: [
            "Lightweight design",
            "Soft cushioning",
            "Breathable upper",
            "Flexible sole",
            "Comfortable fit"
        ],
        specifications: {
            "Upper": "Mesh",
            "Sole": "EVA",
            "Closure": "Lace-up",
            "Usage": "Walking",
            "Fit": "Regular",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR044",
        name: "Women's Casual Sandals",
        category: "Footwear",
        price: 899,
        oldPrice: 1299,
        badge: "Deal",
        rating: 4.3,
        reviews: 174,
        stock: 53,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85",
        description: "Comfortable casual sandals designed for everyday summer styling.",
        highlights: [
            "Lightweight design",
            "Comfortable sole",
            "Easy slip-on",
            "Casual styling",
            "Everyday use"
        ],
        specifications: {
            "Upper": "Synthetic",
            "Sole": "Rubber",
            "Closure": "Slip-on",
            "Usage": "Casual",
            "Fit": "Regular",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR045",
        name: "Kids Sports Shoes",
        category: "Footwear",
        price: 1299,
        oldPrice: 1699,
        badge: "New",
        rating: 4.3,
        reviews: 132,
        stock: 36,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85",
        description: "Lightweight sports shoes designed for children's daily activities and play.",
        highlights: [
            "Lightweight design",
            "Flexible sole",
            "Comfortable fit",
            "Breathable upper",
            "Durable construction"
        ],
        specifications: {
            "Upper": "Mesh",
            "Sole": "Rubber",
            "Closure": "Velcro",
            "Usage": "Sports / Play",
            "Fit": "Regular",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR046",
        name: "TravelPro Everyday Backpack",
        category: "Bags & Travel",
        price: 1499,
        oldPrice: 1999,
        badge: "Bestseller",
        rating: 4.5,
        reviews: 391,
        stock: 45,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        description: "Everyday backpack with organized compartments for college, office and travel.",
        highlights: [
            "Laptop compartment",
            "Multiple pockets",
            "Padded shoulder straps",
            "Water-resistant material",
            "Daily travel friendly"
        ],
        specifications: {
            "Material": "Polyester",
            "Capacity": "25 Litres",
            "Laptop Size": "Up to 15.6 inch",
            "Compartments": "Multiple",
            "Water Resistant": "Yes",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR047",
        name: "Premium Cabin Trolley",
        category: "Bags & Travel",
        price: 3499,
        oldPrice: 4499,
        badge: "New",
        rating: 4.5,
        reviews: 183,
        stock: 15,
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=85",
        description: "Compact cabin trolley designed for short trips and airline-friendly travel.",
        highlights: [
            "Cabin-size design",
            "Smooth wheels",
            "Telescopic handle",
            "Secure combination lock",
            "Durable shell"
        ],
        specifications: {
            "Material": "Polycarbonate",
            "Capacity": "35 Litres",
            "Wheels": "4 Spinner",
            "Lock": "Combination",
            "Handle": "Telescopic",
            "Warranty": "3 Years"
        }
    },

    {
        id: "NXR048",
        name: "Laptop Office Backpack",
        category: "Bags & Travel",
        price: 1799,
        oldPrice: 2299,
        badge: "22% Off",
        rating: 4.4,
        reviews: 257,
        stock: 29,
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=900&q=85",
        description: "Professional laptop backpack designed for office, college and business travel.",
        highlights: [
            "Dedicated laptop section",
            "Padded back support",
            "USB charging port",
            "Multiple compartments",
            "Water-resistant fabric"
        ],
        specifications: {
            "Material": "Polyester",
            "Laptop Size": "Up to 15.6 inch",
            "Capacity": "28 Litres",
            "USB Port": "Yes",
            "Water Resistant": "Yes",
            "Warranty": "1 Year"
        }
    },

    {
        id: "NXR049",
        name: "Weekend Duffel Bag",
        category: "Bags & Travel",
        price: 1299,
        oldPrice: 1699,
        badge: "Popular",
        rating: 4.3,
        reviews: 149,
        stock: 32,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        description: "Spacious duffel bag suitable for weekend trips, gym use and short travel.",
        highlights: [
            "Large main compartment",
            "Adjustable shoulder strap",
            "Strong handles",
            "Lightweight design",
            "Travel friendly"
        ],
        specifications: {
            "Material": "Canvas",
            "Capacity": "35 Litres",
            "Closure": "Zip",
            "Strap": "Adjustable",
            "Usage": "Travel / Gym",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR050",
        name: "Compact Travel Sling Bag",
        category: "Bags & Travel",
        price: 799,
        oldPrice: 1099,
        badge: "Trending",
        rating: 4.3,
        reviews: 121,
        stock: 58,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
        description: "Compact sling bag designed for carrying essential items during travel and everyday outings.",
        highlights: [
            "Compact design",
            "Multiple pockets",
            "Adjustable strap",
            "Lightweight",
            "Travel friendly"
        ],
        specifications: {
            "Material": "Polyester",
            "Capacity": "5 Litres",
            "Pockets": "Multiple",
            "Strap": "Adjustable",
            "Usage": "Travel / Casual",
            "Return": "7 Days"
        }
    }
,

    {
        id: "NXR071",
        name: "Pearl Drop Earrings",
        category: "Jewelry",
        price: 899,
        oldPrice: 1299,
        badge: "30% Off",
        rating: 4.7,
        reviews: 184,
        stock: 36,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
        description: "Elegant pearl drop earrings designed to add a refined finish to everyday and occasion outfits.",
        highlights: [
            "Elegant pearl-drop design",
            "Lightweight for comfortable wear",
            "Polished gold-tone finish",
            "Suitable for casual and festive looks",
            "Gift-ready presentation"
        ],
        specifications: {
            "Material": "Alloy with pearl-style stones",
            "Finish": "Gold tone",
            "Style": "Drop earrings",
            "Closure": "Push back",
            "Occasion": "Casual / Party",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR072",
        name: "Minimal Gold-Tone Pendant Necklace",
        category: "Jewelry",
        price: 1099,
        oldPrice: 1599,
        badge: "31% Off",
        rating: 4.6,
        reviews: 143,
        stock: 28,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
        description: "A minimal pendant necklace with a clean gold-tone finish for effortless everyday styling.",
        highlights: [
            "Minimal pendant design",
            "Gold-tone polished finish",
            "Adjustable chain length",
            "Lightweight and comfortable",
            "Works with casual and formal outfits"
        ],
        specifications: {
            "Material": "Alloy",
            "Finish": "Gold tone",
            "Chain": "Adjustable",
            "Pendant Style": "Minimal",
            "Occasion": "Daily / Occasion wear",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR073",
        name: "Soft Knit Winter Muffler",
        category: "Fashion Accessories",
        price: 699,
        oldPrice: 999,
        badge: "30% Off",
        rating: 4.5,
        reviews: 221,
        stock: 44,
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=85",
        description: "A soft knitted winter muffler made for warmth, comfort and easy everyday layering.",
        highlights: [
            "Soft knitted fabric",
            "Comfortable winter warmth",
            "Easy to style",
            "Lightweight and travel friendly",
            "Suitable for daily wear"
        ],
        specifications: {
            "Material": "Acrylic knit",
            "Pattern": "Solid",
            "Length": "Approx. 180 cm",
            "Season": "Winter",
            "Care": "Hand wash recommended",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR074",
        name: "Aesthetic Ceramic Candle Holder Set",
        category: "Home Decor",
        price: 799,
        oldPrice: 1199,
        badge: "33% Off",
        rating: 4.8,
        reviews: 167,
        stock: 22,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
        description: "A stylish ceramic candle holder set created to bring a warm and aesthetic touch to your home.",
        highlights: [
            "Aesthetic ceramic finish",
            "Set of decorative holders",
            "Stable tabletop base",
            "Suitable for living rooms and bedrooms",
            "Easy to clean"
        ],
        specifications: {
            "Material": "Ceramic",
            "Finish": "Matte glazed",
            "Set Contains": "3 candle holders",
            "Usage": "Home decor",
            "Placement": "Tabletop / Shelf",
            "Return": "7 Days"
        }
    },

    {
        id: "NXR075",
        name: "Premium Sports Gym Duffel Bag",
        category: "Sports & Fitness",
        price: 1499,
        oldPrice: 2199,
        badge: "32% Off",
        rating: 4.7,
        reviews: 196,
        stock: 19,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        description: "A spacious sports duffel bag designed for gym sessions, short trips and organized everyday carry.",
        highlights: [
            "Spacious main compartment",
            "Separate shoe compartment",
            "Adjustable shoulder strap",
            "Durable lightweight construction",
            "Suitable for gym and travel"
        ],
        specifications: {
            "Material": "Polyester",
            "Capacity": "35 Litres",
            "Compartments": "Multiple",
            "Strap": "Adjustable shoulder strap",
            "Usage": "Gym / Travel",
            "Return": "7 Days"
        }
    }

];

console.log("Nexora product database loaded:", NEXORA_PRODUCTS.length, "products");
window.NEXORA_PRODUCTS = NEXORA_PRODUCTS;