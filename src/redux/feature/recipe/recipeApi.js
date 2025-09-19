import { ErrorToast } from "@/lib/utils";
import { baseApi } from "../baseApi";


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
            providesTags: ["RECIPE"],
        }),

        // GET RECIPE REVIEWS
        getRecipeReviews: builder.query({
            query: ({ id, args }) => {
                const params = new URLSearchParams();
                if (args) {
                    Object.entries(args).forEach(([key, value]) => {
                        if (value) {
                            params.append(key, value);
                        }
                    });
                }
                return {
                    url: `/dashboard/get_recipe_reviews/${id}`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["REVIEW"],
        }),


        // GET RECIPE BY ID
        getRecipeById: builder.query({
            query: (id) => ({
                url: `/dashboard/get_recipe_details/${id}`,
                method: "GET",
            }),
            providesTags: ["RECIPE"],
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
            invalidatesTags: ["RECIPE"],
        }),

        // UPDATE RECIPE
        updateRecipe: builder.mutation({
            query: (data) => ({
                url: `/dashboard/update_recipe/${data.id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["RECIPE"],
        }),

        // DELETE RECIPE
        deleteRecipe: builder.mutation({
            query: (id) => ({
                url: `/dashboard/delete_recipe/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["RECIPE"],
        }),

        // TOGGLE FAVORITE RECIPE
        toggleFavoriteRecipe: builder.mutation({
            query: (id) => ({
                url: `/dashboard/toggle_favorite/${id}`,
                method: "POST",
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                // Optimistically update the cache
                const patchResult = dispatch(
                    recipeApi.util.updateQueryData(
                        "getRecipes",
                        undefined,
                        (draft) => {
                            if (!draft?.data?.results) return;
                            // Update in recipe list
                            const recipe = draft.data.results.find(r => r.id === id);
                            if (recipe) {
                                recipe.isFavorite = !recipe.isFavorite;
                                recipe.favoriteCount = recipe.isFavorite
                                    ? (recipe.favoriteCount || 0) + 1
                                    : Math.max(0, (recipe.favoriteCount || 1) - 1);
                            }
                        }
                    )
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    patchResult.undo();
                    ErrorToast(error?.data?.message || "Failed to update favorite");
                    throw error;
                }
            },
            invalidatesTags: ["RECIPE", "FAVORITE"],
        }),

        // SEND REVIEW
        sendReview: builder.mutation({
            query: (data) => ({
                url: "/dashboard/review/send_review",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["RECIPE", "REVIEW"],
        }),

    })
})

export const {
    useGetRecipesQuery,
    useGetRecipeByIdQuery,
    useGetRecipeReviewsQuery,
    useCreateRecipeMutation,
    useUpdateRecipeMutation,
    useDeleteRecipeMutation,
    useToggleFavoriteRecipeMutation,
    useSendReviewMutation
} = recipeApi