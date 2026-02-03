import { baseApi, tagTypes } from "../baseApi";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategoryDropDown: builder.query({
            query: () => "/category/get-category-drop-down",
            providesTags: [tagTypes.CATEGORY],
        }),
    }),
});

export const { useGetCategoryDropDownQuery } = categoryApi;