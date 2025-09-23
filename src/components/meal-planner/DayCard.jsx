import { Badge } from "../ui/badge";
import MealCard from "./MealCard";
import { Plus } from "lucide-react";

const DayCard = ({ day, meals, nutritionalTotals }) => {
    return (
        <div className="border p-4 rounded-lg">
            <div className="flex flex-col gap-2 sm:flex-row items-center justify-between mb-4">
                <Badge>
                    {day}
                </Badge>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm">
                    <Badge>Calories: {nutritionalTotals?.calories || 0}</Badge>
                    <Badge>Protein: {nutritionalTotals?.protein || 0}g</Badge>
                    <Badge>Carbs: {nutritionalTotals?.carbs || 0}g</Badge>
                    <Badge>Fat: {nutritionalTotals?.fat || 0}g</Badge>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meals.map((meal, index) => (
                    <div key={index}>
                        {/* <p className="font-semibold mb-2">{meal.type}</p> */}
                        <MealCard meal={meal.recipe} />
                    </div>
                ))}
                <div className="flex flex-col gap-2 items-center justify-center border-2 border-dashed rounded-lg min-h-[200px] cursor-pointer">
                    <button className="border-2 border-dashed rounded-md p-4 cursor-pointer">
                        <Plus />
                    </button>
                    <p className="text-muted-foreground text-center">
                        Drag and drop a recipe here, or click to add.
                    </p>
                    <p className="font-medium">
                        Add Recipe
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DayCard;