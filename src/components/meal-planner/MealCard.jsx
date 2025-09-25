import { getImageUrl } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowLeftRight, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const MealCard = ({ meal, handleRemoveRecipe }) => {
    if (!meal) return null;

    return (
        <div className="border rounded-lg p-4 relative group">
            {/* Image Block */}
            <div className="relative mb-4">
                <img
                    src={getImageUrl(meal.image)}
                    alt={meal.name}
                    className="w-full h-32 object-cover rounded-md"
                    onError={(e) =>
                        (e.target.src = `https://placehold.co/400?text=${meal.name}&font=roboto`)
                    }
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

                {/* Hover Actions */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 p-2 z-10">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="icon" className="h-8 w-8 bg-primary">
                                <ArrowLeftRight className="h-4 w-4 text-white" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Swap Recipe
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={() => handleRemoveRecipe(meal._id)} size="icon" className="h-8 w-8 bg-red-500 hover:bg-red-600">
                                <Trash2 className="h-4 w-4 text-white" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Remove Recipe
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>

            {/* Title + Category */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="font-semibold">{meal.name}</h3>
                <Badge variant="outline">{meal.category}</Badge>
            </div>
        </div>
    );
};

export default MealCard;