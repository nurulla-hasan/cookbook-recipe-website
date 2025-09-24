import { createSlice } from '@reduxjs/toolkit';

const addMealPlanSlice = createSlice({
    name: 'addMealPlan',
    initialState: {
        planId: null,
        selectedDay: null,
        recipeId: null,
        mealPlannerModalOpen: false,
    },
    reducers: {
        SetPlanId: (state, action) => {
            state.planId = action.payload;
        },
        ResetPlanId: (state) => {
            state.planId = null;
        },
        SetSelectedDay: (state, action) => {
            state.selectedDay = action.payload;
        },
        ResetSelectedDay: (state) => {
            state.selectedDay = null;
        },
        SetRecipeId: (state, action) => {
            state.recipeId = action.payload;
        },
        ResetRecipeId: (state) => {
            state.recipeId = null;
        },
        SetMealPlannerModalOpen: (state, action) => {
            state.mealPlannerModalOpen = action.payload;
        },
        SetMealPlannerModalClose: (state) => {
            state.mealPlannerModalOpen = false;
        },
    },
});

export const {
    SetPlanId,
    ResetPlanId,
    SetSelectedDay,
    ResetSelectedDay,
    SetRecipeId,
    ResetRecipeId,
    SetMealPlannerModalOpen,
    SetMealPlannerModalClose,
} = addMealPlanSlice.actions;

export const addMealPlanSliceReducer = addMealPlanSlice.reducer;

