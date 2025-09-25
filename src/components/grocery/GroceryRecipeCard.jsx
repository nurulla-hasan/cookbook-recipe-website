
import { getImageUrl } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const GroceryRecipeCard = ({ image, title, subtitle, ingredients }) => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
            <div className="flex-shrink-0">
                <img src={getImageUrl(image)} alt={title} className="w-full md:w-70 h-70 object-cover rounded-r-4xl border" />
                <h3 className="font-semibold mt-2 text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            <div className="flex-grow md:flex-grow-0"> 
                <div className="space-y-2"> 
                    {ingredients.map((ingredient) => (
                        <div key={ingredient._id} className="flex items-center border p-3 gap-3 rounded-lg bg-sidebar">
                            <Checkbox id={ingredient._id} className="size-6 rounded-full" defaultChecked={ingredient.buy} />
                            <Label htmlFor={ingredient._id} className="text-foreground cursor-pointer">{ingredient.ingredient}</Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GroceryRecipeCard;