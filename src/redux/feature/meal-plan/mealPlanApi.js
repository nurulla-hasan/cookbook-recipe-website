import { baseApi } from "../baseApi"

const mealPlanApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // GET WEEKLY MEAL PLAN
        getWeeklyMealPlan: builder.query({
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
                    url: "/dashboard/get_weekly_meal_plane",
                    method: "GET",
                    params,
                }
            },
            providesTags: ["MEAL_PLAN"],
        }),

        // GET CUSTOM MEAL PLAN
        getCustomMealPlan: builder.query({
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
                    url: "/meal_plan/get_custom_plane",
                    method: "GET",
                    params,
                }
            },
            providesTags: ["MEAL_PLAN"],
        }),

        // GET FEATURED MEAL PLAN
        getFeaturedMealPlan: builder.query({
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
                    url: "/meal_plan/get_featured_plane",
                    method: "GET",
                    params,
                }
            },
            providesTags: ["MEAL_PLAN"],
        }),

        // GET MEAL PLAN DETAILS
        getMealPlanDetails: builder.query({
            query: (id) => ({
                url: `/meal_plan/get_mealPlan_details/${id}`,
                method: "GET",
            }),
            providesTags: ["MEAL_PLAN"],
        }),

        //===========================END GET QUERY============================================

        //===========================START MUTATION============================================

        // ADD MEAL PLAN RECIPES
        addMealPlanRecipes: builder.mutation({
            query: (data) => ({
                url: "/meal_plan/add_recipes",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["MEAL_PLAN"],
        }),

        // SWAP MEAL PLAN RECIPES
        swapRecipe: builder.mutation({
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
                    url: "/meal_plan/swap_plane_recipe",
                    method: "POST",
                    params,
                }
            },
            invalidatesTags: ["MEAL_PLAN"],
        }),

        // REMOVE MEAL PLAN RECIPES
        removeRecipe: builder.mutation({
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
                    url: "/meal_plan/remove_plan_recipes",
                    method: "POST",
                    params,
                }
            },
            invalidatesTags: ["MEAL_PLAN"],
        }),

        // CREATE CUSTOM MEAL PLAN
        createCustomMealPlan: builder.mutation({
            query: (data) => ({
                url: "/meal_plan/create_custom_plane",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["MEAL_PLAN"],
        }),

        // DELETE CUSTOM MEAL PLAN
        deleteCustomMealPlan: builder.mutation({
            query: (id) => ({
                url: `/meal_plan/delete_custom_plane/${id}`,
                method: "POST",
            }),
            invalidatesTags: ["MEAL_PLAN"],
        }),

    })
})

export const {
    useGetWeeklyMealPlanQuery,
    useGetCustomMealPlanQuery,
    useGetFeaturedMealPlanQuery,
    useGetMealPlanDetailsQuery,
    useAddMealPlanRecipesMutation,
    useCreateCustomMealPlanMutation,
    useDeleteCustomMealPlanMutation,
    useSwapRecipeMutation,
    useRemoveRecipeMutation
} = mealPlanApi