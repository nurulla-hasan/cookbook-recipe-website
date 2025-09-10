import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Star, ShoppingCart, Heart } from 'lucide-react';
import PageLayout from '@/app/layout/PageLayout';
import NutritionalInfo from '@/components/recipe-details/nutritional-info/NutritionalInfo';
import DetailsTabs from '@/components/recipe-details/details-tabs/DetailsTabs';
import { Separator } from '@/components/ui/separator';
import CustomBreadcrumb from '@/components/common/custom-breadcrumb/CustomBreadcrumb';

// Mock data - in a real app, you would fetch this from an API
const mockRecipe = {
    id: 1,
    title: 'Potato Salad with Cilantro Dressing',
    images: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1470&auto=format&fit=crop',
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
    }
};

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // In a real app, you would fetch the recipe by ID from an API
        // For now, we'll use the mock data
        setRecipe(mockRecipe);
    }, [id]);

    if (!recipe) {
        return <div className="container mx-auto p-8">Loading recipe...</div>;
    }

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Recipes', href: '/recipes' },
        { name: recipe.title, href: `/recipes/${recipe.id}` },
    ];
    return (
        <>
            <PageLayout>
                <CustomBreadcrumb links={breadcrumbs} />
                <>
                    {/* Top Image */}
                    <div className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${recipe.images[0]})` }} />

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        {/* Left Column (Description, Ingredients, Instructions) */}
                        <div className="md:col-span-2">
                            {/* Recipe Header */}
                            <div className="flex flex-col md:flex-row justify-between md:items-start mb-6">
                                <div className="mb-4 md:mb-0 space-y-3">
                                    <h1 className="text-xl md:text-2xl font-semibold ">{recipe.title}</h1>
                                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            <span className="font-semibold">{recipe.rating}</span>
                                            <span className="text-sm">({recipe.reviews})</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-5 h-5" />
                                            <span>{recipe.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setIsLiked(!isLiked)}
                                    >
                                        <Heart className={` ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                                    </Button>
                                    <Button>
                                        <ShoppingCart />
                                        Add To Cart
                                    </Button>
                                </div>
                            </div>
                            <Separator />

                            {/* Tabs */}
                            <DetailsTabs recipe={recipe} />
                        </div>

                        {/* Right Column (Nutritional Information) */}
                        <div className="mt-8 md:mt-0">
                            <NutritionalInfo nutritionalData={recipe.nutritionalInfo} otherInfo={recipe.otherInfo} />
                        </div>
                    </div>
                </>
            </PageLayout>
        </>
    );
};

export default RecipeDetails;
