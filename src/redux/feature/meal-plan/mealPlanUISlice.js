import { createSlice } from '@reduxjs/toolkit';

const addMealPlanSlice = createSlice({
    name: 'addMealPlan',
    initialState: {
        planId: null,
    },
    reducers: {
        SetPlanId: (state, action) => {
            state.planId = action.payload;
        },
        ResetPlanId: (state) => {
            state.planId = null;
        },
    },
});

export const {
    SetPlanId,
    ResetPlanId,
} = addMealPlanSlice.actions;

export const addMealPlanSliceReducer = addMealPlanSlice.reducer;

