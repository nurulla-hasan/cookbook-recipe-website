import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    favoriteRecipes: null,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        SetProfile: (state, action) => {
            state.profile = action.payload;
        },

        SetFavoriteRecipes: (state, action) => {
            state.favoriteRecipes = action.payload;
        },
    },
})

export const { SetProfile, SetFavoriteRecipes } = profileSlice.actions;
export const profileSliceReducer = profileSlice.reducer;
