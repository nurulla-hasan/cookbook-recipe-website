import { baseApi, tagTypes } from "../baseApi";


const recipeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // GET ALL RECIPES
        getRecipes: builder.query({
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
                };
            },
            providesTags: [tagTypes.RECIPE],
        }),

        // GET MY RECIPES
        getMyRecipes: builder.query({
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
                    url: "/dashboard/my_all_recipe",
                    method: "GET",
                    params,
                };
            },
            providesTags: [tagTypes.RECIPE],
        }),

        // GET RECIPE REVIEWS
        getRecipeReviews: builder.query({
            query: ({ id, ...args }) => {
                const params = new URLSearchParams();
                if (args) {
                    Object.entries(args).forEach(([key, value]) => {
                        if (value) {
                            params.append(key, value);
                        }
                    });
                }
                return {
                    url: `/dashboard/reviews/get/${id}`,
                    method: "GET",
                    params,
                };
            },
            providesTags: [tagTypes.REVIEW],
        }),


        // GET RECIPE BY ID
        getRecipeById: builder.query({
            query: (id) => ({
                url: `/dashboard/get_recipe_details/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.RECIPE, tagTypes.FAVORITE],
        }),

        // ===================================END GET QUERY============================================

        // ===================================START MUTATION===========================================

        // CREATE NEW RECIPE
        createRecipe: builder.mutation({
            query: (data) => ({
                url: "/dashboard/create_recipe",
                method: "POST",
                body: data
            }),
            invalidatesTags: [tagTypes.RECIPE],
        }),

        // UPDATE RECIPE
        updateRecipe: builder.mutation({
            query: ({ id, data }) => ({
                url: `/dashboard/update_recipe/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [tagTypes.RECIPE],
        }),

        // DELETE RECIPE
        deleteRecipe: builder.mutation({
            query: (id) => ({
                url: `/dashboard/delete_recipe/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.RECIPE],
        }),

        // TOGGLE FAVORITE RECIPE
        toggleFavoriteRecipe: builder.mutation({
            query: (id) => ({
                url: `/dashboard/toggle_favorite/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: [tagTypes.RECIPE, tagTypes.FAVORITE],
        }),

        // SEND REVIEW
        sendReview: builder.mutation({
            query: (data) => ({
                url: "/dashboard/review/send",
                method: "POST",
                body: data
            }),
            invalidatesTags: [tagTypes.RECIPE, tagTypes.REVIEW],
        }),

        // SEND SATIETY REVIEW
        sendSatietyReview: builder.mutation({
            query: (arg) => {
                const params = new URLSearchParams();
                if (arg) {
                    Object.entries(arg).forEach(([key, value]) => {
                        if (value) {
                            params.append(key, value);
                        }
                    });
                }
                return {
                    url: "/dashboard/score_review/send",
                    method: "POST",
                    params,
                }
            },
            invalidatesTags: [tagTypes.RECIPE, tagTypes.REVIEW],
        }),

    })
})

export const {
    useGetRecipesQuery,
    useGetMyRecipesQuery,
    useGetRecipeReviewsQuery,
    useGetRecipeByIdQuery,
    useCreateRecipeMutation,
    useUpdateRecipeMutation,
    useDeleteRecipeMutation,
    useToggleFavoriteRecipeMutation,
    useSendReviewMutation,
    useSendSatietyReviewMutation
} = recipeApi