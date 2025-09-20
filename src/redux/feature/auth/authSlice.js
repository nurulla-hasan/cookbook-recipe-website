import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: typeof window !== "undefined" ? localStorage.getItem("accessToken") : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SetAccessToken: (state, action) => {
            state.accessToken = action.payload;
            if (action.payload) {
                localStorage.setItem("accessToken", action.payload);
            } else {
                localStorage.removeItem("accessToken");
            }
        },
        Logout: (state) => {
            state.accessToken = null;
            localStorage.removeItem("accessToken");
        },
    },
});

export const { SetAccessToken, Logout } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
