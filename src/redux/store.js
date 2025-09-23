import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "./feature/baseApi";
import { authSliceReducer } from "./feature/auth/authSlice";
import { profileSliceReducer } from "./feature/profile/profileSlice";
import { mealPlanSliceReducer } from "./feature/meal-plan/mealPlanSlice";

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        profile: profileSliceReducer,
        mealPlan: mealPlanSliceReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

// Optional but recommended for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);