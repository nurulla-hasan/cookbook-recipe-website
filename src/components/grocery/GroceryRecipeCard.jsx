
import { Input } from "@/components/ui/input";
import { getImageUrl } from "@/lib/utils";

const GroceryRecipeCard = ({ image, title, subtitle, ingredients }) => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
            <div className="flex-shrink-0">
                <img src={getImageUrl(image)} alt={title} className="w-full md:w-96 h-auto object-cover rounded-r-4xl border" />
                <h3 className="font-semibold mt-2 text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            <div className="flex-grow md:flex-grow-0"> 
                <div className="space-y-2"> 
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="flex items-center border p-3 rounded-lg">
                            <Input type="checkbox" className="rounded-full mr-3 w-5 h-5 cursor-pointer" />
                            <label className="text-foreground">{ingredient}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GroceryRecipeCard;