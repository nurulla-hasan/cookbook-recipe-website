import { Plus } from "lucide-react";

const MealSlot = ({ meal }) => {
    if (meal) {
        // Using a simplified card-like structure for now.
        // This can be replaced with a more specific component if needed.
        return (
            <div className="border rounded-lg p-4">
                <img src={meal.image} alt={meal.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <h3 className="font-semibold">{meal.title}</h3>
                <p className="text-sm text-muted-foreground">{meal.category}</p>
            </div>
        );
    }

    return (
        <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center space-y-2 h-full">
            <button className="border-2 border-dashed border-gray-300 rounded-md p-4">
                <Plus />
            </button>
            <p className="text-gray-500 text-center">
                Drag and drop a recipe here, or click to add.
            </p>
            <p className="font-medium">
                Add Recipe
            </p>
        </div>
    );
}


const DayView = ({ day, meals }) => {
    return (
        <div>
            <h2 className="font-medium mb-4">
                {day}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="font-semibold mb-2 text-center">Breakfast</h3>
                    <MealSlot meal={meals.breakfast} />
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-center">Lunch</h3>
                    <MealSlot meal={meals.lunch} />
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-center">Dinner</h3>
                    <MealSlot meal={meals.dinner} />
                </div>
            </div>
        </div>
    );
};

export default DayView;