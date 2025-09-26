import RecipeCard from "@/components/Recipes/recipe-card/RecipeCard";
import { useGetMyRecipesQuery } from "@/redux/feature/recipe/recipeApi";
import CustomPagination from "@/components/common/custom-pagination/CustomPagination";
import useSmartFetchHook from "@/hooks/useSmartFetchHook";
import NoData from "@/components/common/no-data/NoData";
import Error from "@/components/common/error/Error";
import RecipeCardSkeleton from "@/components/skeleton/recipe/RecipeCardSkeleton";
const MyRecipe = () => {

    const {
        // searchTerm,
        // setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        // items: myRecipes,
        isLoading,
        isError,
    } = useSmartFetchHook(useGetMyRecipesQuery, { resultsKey: "result" });

    // console.log(myRecipes);

    const {data} = useGetMyRecipesQuery();
    console.log(data);



    return (
        <>
            <div className="grid gap-6 grid-cols-1">
                {isLoading ? (
                    <RecipeCardSkeleton count={3} />
                ) : isError ? (
                    <Error msg="Something went wrong" />
                ) : data?.data?.length === 0 ? (
                    <NoData msg="No recipes found" />
                ) : (
                data?.data?.map((recipe) => (
                    <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        from="My Recipe"
                        fromPath="/profile/my-recipes"
                        isMyRecipe={true} 
                        favorite={false}
                        />
                )))}
            </div>

            <CustomPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </>
    );
};

export default MyRecipe;