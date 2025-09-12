import RecipeCard from "@/components/Recipes/recipe-card/RecipeCard";
import { mockRecipes } from "@/lib/mockData";
import { useState } from "react";


const MyFavorite = () => {
    const [recipes] = useState(mockRecipes);

    return (
        <>
            <div className="grid gap-6 grid-cols-1">
                {recipes.slice(0, 4).map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} favoritePage={true} />
                ))}
            </div>
        </>
    );
};

export default MyFavorite;