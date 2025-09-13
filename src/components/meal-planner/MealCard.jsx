import { Plus } from "lucide-react";

const MealCard = ({ meal }) => {
    if (meal) {
        return (
            <div className="border rounded-lg p-4">
                <img src={meal.image} alt={meal.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <h3 className="font-semibold">{meal.title}</h3>
                <p className="text-sm text-muted-foreground">{meal.category}</p>
            </div>
        );
    }

    return (
        <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center space-y-2">
            <button className="border-2 border-dashed rounded-md p-4">
                <Plus />
            </button>
            <p className="text-muted-foreground text-center">
                Drag and drop a recipe here, or click to add.
            </p>
            <p className="font-medium">
                Add Recipe
            </p>
        </div>
    );
}

export default MealCard;