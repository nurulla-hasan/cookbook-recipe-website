import { Cake, Leaf, Slice, UtensilsCrossed, Wine } from "lucide-react";

export const mockRecipes = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
        category: 'Lunches',
        title: 'Five-Spice Sweet Potato & Broccoli Stew',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1470&auto=format&fit=crop',
        category: 'Desserts',
        title: 'Pudding',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop',
        category: 'Breakfast',
        title: 'Tropical Protein Smoothie',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
        category: 'Salads',
        title: 'Egg & Vegetable Salad',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
        category: 'Lunches',
        title: 'Spicy Chicken Stir-fry',
        duration: '35 min',
        rating: 4.5,
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1470&auto=format&fit=crop',
        category: 'Desserts',
        title: 'Chocolate Mousse',
        duration: '20 min',
        rating: 4.9,
    },
];

export const categories = [
    {
        name: 'Breakfast',
        icon: <Slice className="w-12 h-12" />
    },
    {
        name: 'Lunches',
        icon: <UtensilsCrossed className="w-12 h-12" />
    },
    {
        name: 'Desserts',
        icon: <Cake className="w-12 h-12" />
    },
    {
        name: 'Appetizer',
        icon: <Wine className="w-12 h-12" />
    },
    {
        name: 'Salads',
        icon: <Leaf className="w-12 h-12" />
    },
];


export const mockRecipe = {
    id: 1,
    title: 'Potato Salad with Cilantro Dressing',
    images: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1470&auto=format&fit=crop',
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1470&auto=format&fit=crop"
    ],
    category: 'Salad',
    rating: 4.8,
    reviews: 56,
    duration: '25 min',
    ingredients: [
        '200g spaghetti (or pasta of choice)',
        '2 tbsp olive oil',
        '3 cloves garlic (minced)',
        '250g mushrooms (sliced, any variety)',
        '150ml heavy cream (or coconut cream for vegan)',
        '50g grated Parmesan cheese (optional, vegan substitute available)',
        '1 tsp dried oregano',
        'Salt & black pepper to taste',
        'Fresh parsley (chopped, for garnish)ore clients.',
    ],
    instructions: [
        '1. Cook pasta: Bring a pot of salted water to a boil. Add spaghetti and cook until al dente (about 8-10 min). Drain, reserving ½ cup of pasta water.',
        '2. Sauté garlic & mushrooms: Heat olive oil in a large pan over medium heat. Add minced garlic and sauté until fragrant (30 sec). Add sliced mushrooms, cook until golden brown (5-6 min).',
        '3. Make the sauce: Lower heat, stir in heavy cream. Add oregano, salt, and black pepper. Simmer for 3-4 min until slightly thickened.',
    ],
    nutritionalInfo: {
        calories: '45',
        fat: '50g',
        protein: '25g',
        carbs: '15g',
        fiber: '5g',
        sodium: '50g',
    },
    otherInfo: {
        oils: 'Oil Free',
        servingTemperature: 'Cold',
        flavor: 'Sweet',
        weightLossMuscleGain: 'Weight Loss',
        wholeFoodType: 'Plant Based',
    },
    reviewsData: [
        {
            id: 1,
            user: 'Dianne Russell',
            avatar: 'https://avatar.iran.liara.run/public/boy',
            date: '05 January, 2025',
            rating: 5,
            comment: 'I bought the Messi Argentina home jersey and was blown away by the fabric quality. The fit is true to size and super comfortable — feels just like the official kit. Definitely worth the price!',
        },
        {
            id: 2,
            user: 'Darlene Robertson',
            avatar: 'https://avatar.iran.liara.run/public/girl',
            date: '03 January, 2025',
            rating: 4,
            comment: 'The material is excellent and the print looks sharp. Only reason I\'m giving 4 stars is because the medium was a bit looser than expected — The fit is true to size and super comfortable and good. I might size down next time.',
        },
        {
            id: 3,
            user: 'Darrell Steward',
            avatar: 'https://avatar.iran.liara.run/public/boy',
            date: '01 January, 2025',
            rating: 4,
            comment: 'I bought the Messi Argentina home jersey and was blown away by the fabric quality. The fit is true to size and super comfortable.',
        },
    ]
};

export const groceryRecipes = [
    {
        image: "/src/assets/featured/featured (1).png",
        title: "Desserts",
        subtitle: "Five-Spice Sweet Pineapples",
        ingredients: [
            "1 scoop pea Protein Powder",
            "1 cup unsweetened coconut water",
            "1 cup frozen mango",
            "1/2 cup frozen pine apple",
        ],
    },
    {
        image: "/src/assets/featured/featured (2).png",
        title: "Lunches",
        subtitle: "Spicy Fry",
        ingredients: [
            "1 scoop pea Protein Powder",
            "1 cup unsweetened coconut water",
            "1 cup frozen mango",
            "1/2 cup frozen pine apple",
        ],
    },
    {
        image: "/src/assets/featured/featured (3).png",
        title: "Appetizer",
        subtitle: "Cucumber & Salmon Stew",
        ingredients: [
            "1 scoop pea Protein Powder",
            "1 cup unsweetened coconut water",
            "1 cup frozen mango",
            "1/2 cup frozen pine apple",
        ],
    },
];

export const mockFAQs = [
    {
        question: "How do I register for an account?",
        answer: "Click the Sign Up button, fill in your name, date of birth, and choose whether you need an invoice. Once registered, you can log in and start exploring courses.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods including credit cards, PayPal, and Apple Pay.",
    },
    {
        question: "How can I track my order?",
        answer: "Click the Sign Up button, fill in your name, date of birth, and choose whether you need an invoice. Once registered, you can log in and start exploring courses.",
    },
    {
        question: "How do I reset my password?",
        answer: "Click the Sign Up button, fill in your name, date of birth, and choose whether you need an invoice. Once registered, you can log in and start exploring courses.",
    },
    {
        question: "How do I reset my password?",
        answer: "Click the Sign Up button, fill in your name, date of birth, and choose whether you need an invoice. Once registered, you can log in and start exploring courses.",
    },
    {
        question: "How do I reset my password?",
        answer: "Click the Sign Up button, fill in your name, date of birth, and choose whether you need an invoice. Once registered, you can log in and start exploring courses.",
    },
    {
        question: "How do I reset my password?",
        answer: "Click the Sign Up button, fill in your name, date of birth, and choose whether you need an invoice. Once registered, you can log in and start exploring courses.",
    }
]

export const contactInfo = {
    address: "123 Main St, Anytown, USA",
    email: "contact@example.com",
    phone: "123-456-7890",
}