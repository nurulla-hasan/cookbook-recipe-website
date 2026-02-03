import { baseApi } from "../baseApi";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategoryDropDown: builder.query({
            query: () => "/category/get-category-drop-down",
            providesTags: ["CATEGORY"],
        }),
    }),
});

export const { useGetCategoryDropDownQuery } = categoryApi;