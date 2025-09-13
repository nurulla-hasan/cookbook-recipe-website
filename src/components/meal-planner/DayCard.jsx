import { Badge } from "../ui/badge";
import MealCard from "./MealCard";

const DayCard = ({ day, meals }) => {
    return (
        <div className="border p-4 rounded-lg">
            <Badge>
                {day}
            </Badge>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="font-semibold mb-2 text-center">Breakfast</h3>
                    <MealCard meal={meals.breakfast} />
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-center">Lunch</h3>
                    <MealCard meal={meals.lunch} />
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-center">Dinner</h3>
                    <MealCard meal={meals.dinner} />
                </div>
            </div>
        </div>
    );
};

export default DayCard;