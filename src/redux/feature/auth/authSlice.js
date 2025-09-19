import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    accessToken: typeof window !== "undefined" ? localStorage.getItem("accessToken") : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SetUser: (state, action) => {
            state.user = action.payload;
        },

        SetAccessToken: (state, action) => {
            state.accessToken = action.payload;
            if (action.payload) {
                localStorage.setItem("accessToken", action.payload);
            } else {
                localStorage.removeItem("accessToken");
            }
        },
    },
});

export const { SetUser, SetAccessToken } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
