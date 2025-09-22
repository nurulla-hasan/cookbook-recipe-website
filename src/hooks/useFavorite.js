import { useToggleFavoriteRecipeMutation } from "@/redux/feature/recipe/recipeApi";
import { useState } from "react";

const useFavorite = (initialState) => {
    const [isFavorite, setIsFavorite] = useState(initialState);
    const [toggleFavoriteRecipe] = useToggleFavoriteRecipeMutation(isFavorite);

    const onFavoriteToggle = async (id) => {
        setIsFavorite(!isFavorite)
        try {
            await toggleFavoriteRecipe(id)
        } catch (error) {
            console.log(error)
        }
    }

    return { isFavorite, onFavoriteToggle }
}

export default useFavorite;