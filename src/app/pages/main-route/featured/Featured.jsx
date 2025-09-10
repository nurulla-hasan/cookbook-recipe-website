import PageLayout from '@/app/layout/PageLayout';
import PageHeader from '@/components/common/page-header/PageHeader';
import FeatureSection from '@/components/featured/feature-section/FeatureSection';
// import { Flame, Zap, Heart, BrainCircuit } from 'lucide-react';

import featured1 from '../../../../assets/featured/featured (1).png';
import featured2 from '../../../../assets/featured/featured (6).png';
import featured3 from '../../../../assets/featured/featured (5).png';
import featured4 from '../../../../assets/featured/featured (4).png';
import featured5 from '../../../../assets/featured/featured (3).png';
import featured6 from '../../../../assets/featured/featured (2).png';


const featureData = [
    {
        id: 1,
        // icon: <Flame />,
        title: '🔥 Lose Weight, Build Muscle, Stay Healthy',
        description: 'With 7,500+ curated recipes, the Koumanis Diet makes eating well simple, sustainable, and satisfying. Every meal is designed to support your health and fitness goals:',
        features: [
            'Burn fat while staying full and energized',
            'Build lean muscle with protein-rich recipes and exercise pairing',
            'Support heart and gut health with fiber-focused meals',
            'Maintain a balanced, nutrient-dense lifestyle'
        ],
        conclusion: 'Our nutrition system works hand in hand with exercise to accelerate results when you want them most.',
        image: featured1,
        imagePosition: 'left'
    },
    {
        id: 2,
        // icon: <Zap />,
        title: '🍽️ Meal Planning Made Easy',
        description: 'Your week of healthy eating is just a few taps away. After signing up, you’ll have access to a personalized dashboard where you can:',
        features: [
            'Select daily meals — from breakfast to desserts',
            'Customize weekly meal schedules for convenience and variety',
            'Swap recipes instantly to match cravings or goals',
            'Rate meals by taste and satisfaction',
            'Save favorites for quick access anytime'
        ],
        conclusion: 'Whether you’re new to meal prep or a seasoned pro, the app adapts to your lifestyle.',
        image: featured2,
        imagePosition: 'right'
    },
    {
        id: 3,
        // icon: <Heart />,
        title: '🌿 Recipes for Every Lifestyle',
        description: 'Eating healthy should be enjoyable, not restrictive. Explore a variety of cuisines and dietary styles, including:',
        features: [
            'Vegan and plant-based',
            'Paleo, Mediterranean, and low-carb',
            'High-protein, meat-based meals',
            'Global flavors — Asian, Latin, Middle Eastern, and more',
            'Holiday-friendly recipes to celebrate without losing progress'
        ],
        conclusion: 'Our nutrition system works hand in hand with exercise to accelerate results when you want them most.',
        image: featured3,
        imagePosition: 'left'
    },
    {
        id: 4,
        // icon: <BrainCircuit />,
        title: '📊 Meal Planning Made Easy',
        description: 'Access a library of articles and guides from nutritionists and fitness coaches. Empower yourself with knowledge to make lasting changes.',
        features: [
            'Evidence-based articles on nutrition and fitness',
            'Cooking tips and healthy kitchen hacks',
            'Guides to understanding food labels and ingredients',
            'Community support and expert Q&A sessions'
        ],
        conclusion: 'Our nutrition system works hand in hand with exercise to accelerate results when you want them most.',
        image: featured4,
        imagePosition: 'right'
    },
    {
        id: 5,
        // icon: <BrainCircuit />,
        title: '🛒 Automated Grocery Support',
        description: 'Turn your weekly plan into a ready-to-use shopping list:',
        features: [
            'Evidence-based articles on nutrition and fitness',
            'Automatically generate a shopping list based on your meal plan',
            'Cooking tips and healthy kitchen hacks',
            'Guides to understanding food labels and ingredients',
            'Community support and expert Q&A sessions'
        ],
        conclusion: 'Our nutrition system works hand in hand with exercise to accelerate results when you want them most.',
        image: featured5,
        imagePosition: 'left'
    },
    {
        id: 6,
        // icon: <BrainCircuit />,
        title: '💪 Your Pocket-Sized Coach',
        description: 'The Koumanis Diet is more than a meal planner- it’s your personal wellness companion, built on:',
        features: [
            'Evidence-based articles on nutrition and fitness',
            'Automatically generate a shopping list based on your meal plan',
            'Cooking tips and healthy kitchen hacks',
            'Guides to understanding food labels and ingredients',
            'Community support and expert Q&A sessions'
        ],
        conclusion: 'Our nutrition system works hand in hand with exercise to accelerate results when you want them most.',
        image: featured6,
        imagePosition: 'right'
    }
];

const IntroSection = () => (
    <PageLayout>
        <div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground/90 mb-4">Your Personalized Nutrition & Fitness Companion</h2>
            <p className="max-w-7xl text-muted-foreground leading-8">
                Welcome to the Koumanis Diet Meal Planner – now available on iPhone and Android. Achieving your goals – whether that’s weight loss, muscle building, or simply feeling your best—has never been easier. This all-in-one app simplifies healthy eating, supports your fitness journey, and helps you take full control of your nutrition, all from the palm of your hand.
            </p>
        </div>
    </PageLayout>
);

const Featured = () => {
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Featured' },
    ];

    return (
        <div>
            <PageHeader title="Featured" breadcrumbs={breadcrumbs} />
            <IntroSection />
            <div>
                {featureData.map(feature => (
                    <FeatureSection key={feature.id} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Featured;
