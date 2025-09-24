import { getImageUrl } from "@/lib/utils";
import { Badge } from "../ui/badge";

const MealCard = ({ meal }) => {
    if (meal) {
        return (
            <div className="border rounded-lg p-4">
                <img src={getImageUrl(meal.image)} alt={meal.name} className="w-full h-32 object-cover rounded-md mb-4" />
                <div className="flex justify-between items-center gap-2">
                    <h3 className="font-semibold">{meal.name}</h3>
                    <Badge variant="outline">{meal.category}</Badge>
                </div>
            </div>
        );
    }
}

export default MealCard;