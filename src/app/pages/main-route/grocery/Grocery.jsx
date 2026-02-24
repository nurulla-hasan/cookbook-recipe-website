// import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageLayout from "@/tools/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
// import PlanTypeFilter from "@/components/meal-planner/PlanTypeFilter";
import { useSelector } from "react-redux";
import {
    useGetCustomMealPlanQuery,
    useGetFeaturedMealPlanQuery,
    useGetWeeklyMealPlanQuery
} from "@/redux/feature/meal-plan/mealPlanApi";
import { useGetGroceryListQuery } from "@/redux/feature/grocery/groceryApi";
import { Button } from "@/components/ui/button";
import GroceryRecipeCard from "@/components/grocery/GroceryRecipeCard";
import { useEffect, useRef } from "react";
import { InfoToast } from "@/lib/utils";
import GroceryCardListSkeleton from "@/components/skeleton/grocery/GroceryCardListSkeleton";
import Error from "@/components/common/error/Error";
import NoData from "@/components/common/no-data/NoData";

const Grocery = () => {
    // const dispatch = useDispatch();
    useGetWeeklyMealPlanQuery()
    useGetFeaturedMealPlanQuery()
    useGetCustomMealPlanQuery()
    const { planId } = useSelector((state) => state.addMealPlan);


    const { data: groceryData, isLoading: isGroceryLoading, isError: isGroceryError } = useGetGroceryListQuery(planId, { skip: !planId });

    const recipesWithAllIngredients = groceryData?.data?.data.flatMap(day =>
        day.recipes
            .filter(r => r.ingredients && r.ingredients.length > 0)
            .map(r => ({
                id: r.recipe._id,
                image: r.recipe.image,
                title: r.recipe.name,
                subtitle: r.recipe.category,
                ingredients: r.ingredients
            }))
    );

    const aisleRecipes = recipesWithAllIngredients?.map(recipe => ({
        ...recipe,
        ingredients: recipe.ingredients.filter(i => !i.buy)
    })).filter(recipe => recipe.ingredients.length > 0);

    const recipeTabRecipes = recipesWithAllIngredients?.map(recipe => ({
        ...recipe,
        ingredients: recipe.ingredients.filter(i => i.buy)
    })).filter(recipe => recipe.ingredients.length > 0);


    const hasShownToast = useRef(false);
    useEffect(() => {
        if (!planId && !hasShownToast.current) {
            hasShownToast.current = true;
            InfoToast("Please select a plan from Meal Planner");
        }
    }, [planId]);

    const breadcrumbs = [
        { name: "Home", href: "/" },
        { name: "Grocery" },
    ];

    return (
        <>
            <PageHeader breadcrumbs={breadcrumbs} title="Grocery" />
            <PageLayout paddingSize="none">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="md:col-span-2">
                        <Tabs defaultValue="aisle" className="w-full">
                            <TabsList className="mb-6 w-full">
                                <TabsTrigger
                                    value="aisle"
                                    className="w-full px-4 py-2 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                >
                                    By AISLE
                                </TabsTrigger>
                                <TabsTrigger
                                    value="recipe"
                                    className="w-full px-4 py-2 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                >
                                    By RECIPE
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="aisle" className="space-y-8">
                                {isGroceryLoading ? (
                                    <GroceryCardListSkeleton />
                                ) : isGroceryError ? (
                                    <Error msg="Something went wrong" />
                                ) : aisleRecipes?.length === 0 ? (
                                    <NoData msg="No recipes found for this plan." />
                                ) : !planId ?(
                                    <NoData msg="Please select a plan from Meal Planner" />
                                ) : (
                                    aisleRecipes?.map((recipe) => (
                                        <GroceryRecipeCard
                                            key={`aisle-${recipe.id}`}
                                            image={recipe.image}
                                            title={recipe.title}
                                            subtitle={recipe.subtitle}
                                            ingredients={recipe.ingredients}
                                        />
                                    ))
                                )}
                            </TabsContent>

                            <TabsContent value="recipe" className="space-y-8">
                            {isGroceryLoading ? (
                                    <GroceryCardListSkeleton />
                                ) : isGroceryError ? (
                                    <Error msg="Something went wrong" />
                                ) : recipeTabRecipes?.length === 0 ? (
                                    <NoData msg="No recipes found for this plan." />
                                ) : !planId ?(
                                    <NoData msg="Please select a plan from Meal Planner" />
                                ) : (
                                    recipeTabRecipes?.map((recipe) => (
                                        <GroceryRecipeCard
                                            key={`recipe-${recipe.id}`}
                                            image={recipe.image}
                                            title={recipe.title}
                                            subtitle={recipe.subtitle}
                                            ingredients={recipe.ingredients}
                                        />
                                    ))
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>
                    {/* Right Section */}
                    <div className="md:col-span-1 flex justify-center items-start border-l px-6">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            BUY ON AMAZON FRESH
                        </Button>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default Grocery;
