import DayCard from "./DayCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AddRecipePlanModal from "./AddRecipePlanModal";
import { SetMealPlannerModalOpen, SetSelectedDay, SetRecipeId, SetPlanId } from "@/redux/feature/meal-plan/addMealPlanSlice";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationModal from "../common/modal/ConfirmationModal";
import { useState } from "react";
import { useRemoveRecipeMutation } from "@/redux/feature/meal-plan/mealPlanApi";
import { SuccessToast, ErrorToast } from "@/lib/utils";

const WeeklyMealPlan = ({ mealPlan }) => {
    const dispatch = useDispatch();
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    console.log("confirmationModalOpen", confirmationModalOpen);

    const { mealPlannerModalOpen, planId, selectedDay, recipeId } = useSelector((state) => state.addMealPlan);
    console.log("planId", planId, "selectedDay", selectedDay, "recipeId", recipeId);

    const [removeRecipe, { isLoading, isSuccess }] = useRemoveRecipeMutation();

    const handleAddRecipeClick = (day) => {
        dispatch(SetSelectedDay(day));
        dispatch(SetMealPlannerModalOpen(true));
    };

    const handleRemoveRecipe = (id, day) => {
        dispatch(SetRecipeId(id));
        dispatch(SetSelectedDay(day));
        setConfirmationModalOpen(true);
    };
    const handleRemoveConfirm = async () => {
       try {
           const { data } = await removeRecipe({
               removeId: recipeId,
               day: selectedDay,
               planId: planId
           });
           console.log(data);
           if (isSuccess) {
            SuccessToast("Recipe removed successfully");
               setConfirmationModalOpen(false);
               dispatch(SetRecipeId(null));
               dispatch(SetSelectedDay(null));
               dispatch(SetPlanId(null));
           }
       } catch (error) {
           console.log(error);
           ErrorToast("Failed to remove recipe");
       }
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
                    handleRemoveRecipe={(id) => handleRemoveRecipe(id, dayData.day)}
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

            <ConfirmationModal
                isOpen={confirmationModalOpen}
                onOpenChange={setConfirmationModalOpen}
                title="Remove Recipe"
                description="Are you sure you want to remove this recipe from your meal plan?"
                onConfirm={handleRemoveConfirm}
                confirmText="Remove"
                loading={isLoading}
            />
        </div>
    );
};

export default WeeklyMealPlan;