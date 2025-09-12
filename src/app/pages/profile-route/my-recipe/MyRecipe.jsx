import RecipeCard from "@/components/Recipes/recipe-card/RecipeCard";
import { mockRecipes } from "@/lib/mockData";
import { useState } from "react";
const MyRecipe = () => {
    const [recipes] = useState(mockRecipes);
    return (
        <>
            <div className="grid gap-6 grid-cols-1">
                {recipes.slice(0, 4).map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} from="My Recipe" fromPath="/profile/my-recipes" isMyRecipe={true} />
                ))}
            </div>
        </>
    );
};

export default MyRecipe;