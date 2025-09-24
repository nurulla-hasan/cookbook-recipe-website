import DayCard from "./DayCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AddRecipePlanModal from "./AddRecipePlanModal";
import { SetMealPlannerModalOpen, SetSelectedDay } from "@/redux/feature/meal-plan/addMealPlanSlice";
import { useDispatch, useSelector } from "react-redux";

const WeeklyMealPlan = ({ mealPlan }) => {
    const dispatch = useDispatch();

    const { mealPlannerModalOpen } = useSelector((state) => state.addMealPlan);

    const handleAddRecipeClick = (day) => {
        dispatch(SetSelectedDay(day));
        dispatch(SetMealPlannerModalOpen(true));
    };

    return (
        <div className="space-y-8">
            {mealPlan?.data?.map((dayData) => (
                <DayCard 
                    key={dayData._id} 
                    day={dayData.day} 
                    meals={dayData.recipes} 
                    nutritionalTotals={dayData.nutritionalTotals}
                    onAddRecipeClick={() => handleAddRecipeClick(dayData.day)}
                />
            ))}

            <Dialog open={mealPlannerModalOpen} onOpenChange={() => dispatch(SetMealPlannerModalOpen(false))}>
                <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Select a Recipe to Add</DialogTitle>
                        <DialogDescription>Choose a recipe to add to your meal plan.</DialogDescription>
                    </DialogHeader>
                    <div className="flex-grow overflow-y-auto">
                        <AddRecipePlanModal />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default WeeklyMealPlan;