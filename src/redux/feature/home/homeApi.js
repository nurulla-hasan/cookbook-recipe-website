import { baseApi, tagTypes } from "../baseApi"

const homeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // GET FEATURED RECIPES
        getFeaturedRecipes: builder.query({
            query: () => ({
                url: "/dashboard/recipe_for_you",
                method: "GET",
            }),
            providesTags: [tagTypes.FEATURED],
        }),

        // GET RECIPE BY CATEGORY
        getRecipeByCategory: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    Object.entries(args).forEach(([key, value]) => {
                        if (value) {
                            params.append(key, value);
                        }
                    });
                }
                return {
                    url: "/dashboard/get_all_recipe",
                    method: "GET",
                    params,
                }
            },
            providesTags: [tagTypes.RECIPE],
        }),

        // GET RECIPE BY FITNESS GOAL
        getRecipeByFitnessGoal: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    Object.entries(args).forEach(([key, value]) => {
                        if (value) {
                            params.append(key, value);
                        }
                    });
                }
                return {
                    url: "/dashboard/get_all_recipe",
                    method: "GET",
                    params,
                }
            },
            providesTags: [tagTypes.RECIPE],
        }),
    })
})

export const { 
    useGetFeaturedRecipesQuery, 
    useGetRecipeByCategoryQuery, 
    useGetRecipeByFitnessGoalQuery 
} = homeApi

