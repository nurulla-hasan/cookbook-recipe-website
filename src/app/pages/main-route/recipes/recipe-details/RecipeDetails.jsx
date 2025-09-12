import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Star, ShoppingCart, Heart } from 'lucide-react';
import PageLayout from '@/app/layout/PageLayout';
import NutritionalInfo from '@/components/recipe-details/nutritional-info/NutritionalInfo';
import DetailsTabs from '@/components/recipe-details/details-tabs/DetailsTabs';
import { Separator } from '@/components/ui/separator';
import CustomBreadcrumb from '@/components/common/custom-breadcrumb/CustomBreadcrumb';
import { mockRecipe } from '@/lib/mockData';

const RecipeDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const { from, fromPath } = location.state || { from: 'Recipes', fromPath: '/recipes' };

    const [recipe, setRecipe] = useState(null);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setRecipe(mockRecipe);
    }, [id]);

    if (!recipe) {
        return <div className="container mx-auto p-8">Loading recipe...</div>;
    }

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: from, href: fromPath },
        { name: recipe.title },
    ];
    return (
        <>
            <PageLayout paddingSize="compact">
                <CustomBreadcrumb links={breadcrumbs} />
                <>
                    {/* Top Image */}
                    <div className="w-full h-64 md:h-[500px] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${recipe.images[0]})` }} />

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
                                            <Star className="text-yellow-400 fill-yellow-400" />
                                            <span className="font-semibold">{recipe.rating}</span>
                                            <span className="text-sm">({recipe.reviews})</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs">
                                            <Clock size={16} />
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