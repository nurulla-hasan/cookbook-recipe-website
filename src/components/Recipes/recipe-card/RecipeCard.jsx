import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Heart, Clock, Star, ShoppingCart, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <Link 
            to={`/recipes/recipe-details/${recipe.id}`}
            className="h-full group transition-all duration-300 hover:-translate-y-1 block"
        >
            <Card className="h-full flex flex-col md:flex-row overflow-hidden border-0 shadow-sm transition-all duration-300 bg-secondary hover:shadow-md">
                {/* Image with Overlay - Left Side */}
                <div className="w-full md:w-40 h-40 relative flex-shrink-0 overflow-hidden group">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform duration-500"
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
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            <Heart 
                                className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} 
                            />
                        </Button>
                    </div>

                    <h3 className="font-semibold  dark:text-white mb-2 line-clamp-2">
                        {recipe.title}
                    </h3>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t ">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground dark:text-gray-300">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{recipe.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="font-medium">{recipe.rating}</span>
                            </div>
                        </div>
                        
                        <Button 
                            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                            size="sm"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                // Add to cart logic here
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default RecipeCard;