import Error from "@/components/common/error/Error";
import NoData from "@/components/common/no-data/NoData";
import AddToPlanModal from "@/components/Recipes/add-plan-modal/AddToPlanModal";
import RecipeCard from "@/components/Recipes/recipe-card/RecipeCard";
import RecipeCardSkeleton from "@/components/skeleton/recipe/RecipeCardSkeleton";
import { Pagination } from "@/components/ui/pagination";
import useSmartFetchHook from "@/hooks/useSmartFetchHook";
import { useGetUserFavoriteRecipesQuery } from "@/redux/feature/profile/profileApi";
import { useDispatch, useSelector } from "react-redux";
import { SetCardModalClose, SetRecipeId } from "@/redux/feature/meal-plan/addMealPlanSlice";

const MyFavorite = () => {

    const dispatch = useDispatch();
    const { cardModalOpen } = useSelector((state) => state.addMealPlan);
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        items: recipes,
        isLoading,
        isError,
    } = useSmartFetchHook(useGetUserFavoriteRecipesQuery, { resultsKey: "recipes"});

    return (
        <>
            <div className="grid gap-6 grid-cols-1">
                {isLoading ? (
                    <RecipeCardSkeleton count={3} />
                ) : isError ? (
                    <Error msg="Something went wrong" />
                ) : recipes.length === 0 ? (
                    <NoData msg="No recipes found" />
                ) : (
                    recipes?.map((recipe) => (
                        <RecipeCard
                            key={recipe._id}
                            recipe={recipe}
                            from="My Favorite"
                            fromPath="/profile/my-favourite"
                            showCartButton={true}
                        />
                    ))
                )}
            </div>
            <div className="flex justify-center">
                {totalPages > 1 && (
                    <Pagination
                        page={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
            {/* Add to Plan Modal */}
            <AddToPlanModal
                isOpen={cardModalOpen}
                onClose={() => {
                    dispatch(SetCardModalClose());
                    dispatch(SetRecipeId(null));
                }}
            />
        </>
    );
};

export default MyFavorite;