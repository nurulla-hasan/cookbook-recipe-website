import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Heart, Clock, Star, ShoppingCart, ChefHat, Trash2, SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@/lib/utils';
import { useToggleFavoriteRecipeMutation } from "@/redux/feature/recipe/recipeApi";
import { useSelector } from "react-redux";
import { useGetUserFavoriteRecipesQuery } from "@/redux/feature/profile/profileApi";

const RecipeCard = (
    {
        recipe,
        from = 'Recipes',
        fromPath = '/recipes',
        showCartButton = false,
        isMyRecipe = false,
        onDelete,
        onEdit
    }) => {

        useGetUserFavoriteRecipesQuery()
        const [toggleFavoriteRecipe] = useToggleFavoriteRecipeMutation();
        const { favoriteRecipes: favoriteIds } = useSelector((state) => state.profile);

    const onFavoriteToggle = async (id) => {
        await toggleFavoriteRecipe(id)
    }

    return (
        <Link
            to={`/recipes/recipe-details/${recipe._id}`}
            state={{ from, fromPath }}
            className="h-full group transition-all duration-300 hover:-translate-y-1 block"
        >
            <Card className="h-full flex flex-col md:flex-row overflow-hidden border-0 shadow-sm transition-all duration-300 bg-secondary hover:shadow-md">
                {/* Image with Overlay - Left Side */}
                <div className="w-full md:w-40 h-40 relative flex-shrink-0 overflow-hidden group">
                    <img
                        src={getImageUrl(recipe.image)}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                        onError={(e) => e.target.src = "https://placehold.co/400"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex items-center gap-2 text-white text-sm">
                            <ChefHat className="w-4 h-4" />
                            <span>{recipe.author || 'Chef Special'}</span>
                        </div>
                    </div>
                </div>

                {/* Content - Right Side */}
                <div className="p-5 flex-grow flex flex-col md:w-2/3">
                    <div className="flex justify-between items-start mb-3">
                        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/30 text-foreground">
                            {recipe.category}
                        </span>
                        
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-primary/20"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onFavoriteToggle(recipe._id)
                            }}
                        >
                            <Heart
                                className={`${favoriteIds?.includes(recipe?._id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                            />
                        </Button>

                        {isMyRecipe && (
                            <div className='grid grid-cols-2 gap-2'>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        onEdit(recipe._id)
                                    }}
                                    variant="outline">
                                    <SquarePen />
                                </Button>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        onDelete(recipe._id)
                                    }}
                                    variant="outline">
                                    <Trash2 />
                                </Button>
                            </div>
                        )}
                    </div>

                    <h3 className="font-semibold  dark:text-white mb-2 line-clamp-2">
                        {recipe.name}
                    </h3>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t ">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground dark:text-gray-300">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{recipe.prep_time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="font-medium">{recipe.ratting.toFixed(1)}</span>
                            </div>
                        </div>

                        {showCartButton && <Button
                            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                            size="sm"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                // Add to cart logic here
                            }}
                        >
                            <ShoppingCart />
                            Add to Cart
                        </Button>}
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default RecipeCard;