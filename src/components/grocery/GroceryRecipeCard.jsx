
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToggleIngredientMutation } from "@/redux/feature/grocery/groceryApi";
import { useState } from "react";
import { Badge } from "../ui/badge";

const GroceryRecipeCard = ({ image, title, subtitle, ingredients }) => {
    const [toggleIngredient] = useToggleIngredientMutation();
    const [animatingId, setAnimatingId] = useState(null);

    const handleToggle = (ingredientId) => {
        setAnimatingId(ingredientId);
        setTimeout(() => {
            toggleIngredient(ingredientId);
        }, 500); // Animation duration
    };

    return (
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8 bg-secondary p-6 rounded-xl">
            <div className="shrink-0 w-full md:w-40">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover rounded-r-4xl border"
                    onError={(e) => (e.target.src = `https://placehold.co/400?text=${title}&font=roboto`)}
                />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <h3 className="font-medium uppercase tracking-wide mt-2 text-foreground line-clamp-2">{title}</h3>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-60">
                            <p>{title}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Badge className="rounded uppercase text-[10px] tracking-widest" variant="outline">{subtitle}</Badge>
            </div>
            <div className="grow md:grow-0">
                <div className="space-y-2">
                    {ingredients.map((ingredient) => (
                        <div
                            key={ingredient._id}
                            className={`flex items-center gap-3 rounded-lg transition-all duration-500 ${animatingId === ingredient._id ? 'animate-ingredient-exit' : ''
                                }`}>
                            <Checkbox
                                id={ingredient._id}
                                className="size-6 rounded-full"
                                checked={ingredient.buy}
                                onCheckedChange={() => handleToggle(ingredient._id)}
                            />
                            <Label htmlFor={ingredient._id} className="text-foreground cursor-pointer">{ingredient.ingredient}</Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GroceryRecipeCard;