import { SuccessToast, ErrorToast } from "@/lib/utils";
import { SetAccessToken, SetUser } from "../auth/authSlice";
import { baseApi } from "../baseApi";
import { jwtDecode } from "jwt-decode";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // GET USER PROFILE
        getUserProfile: builder.query({
            query: () => ({
                url: "/auth/profile",
                method: "GET",
            }),
            providesTags: ["PROFILE"],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.data) {
                        dispatch(SetUser(data.data));
                    }
                } catch {
                    // silently ignore; UI can read error from hook if needed
                }
            },
        }),

        // UPDATE USER PROFILE
        updateUserProfile: builder.mutation({
            query: (data) => ({
                url: "/auth/edit-profile",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["PROFILE"],
        }),

        // Login Endpoint (Mutation) 
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const accessToken = data?.data?.accessToken;
                    const decoded = jwtDecode(accessToken);
                    if (decoded?.role === "USER") {
                        if (accessToken) {
                            dispatch(SetAccessToken(accessToken));
                        }
                        SuccessToast("Login successful!");
                        window.location.href = "/";
                    } else {
                        ErrorToast("You are not authorized to login.");
                        return;
                    }
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "Login failed.");
                }
            },
        }),

        // Register Endpoint (Mutation)
        register: builder.mutation({
            query: (credentials) => ({
                url: "/auth/register",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted({ email }, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    window.location.href = `/auth/verification?type=signup&email=${encodeURIComponent(email)}`;
                    SuccessToast("Registration successful! Please check your email for OTP verification.");
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "Registration failed.");
                }
            },
        }),

        // FORGET PASSWORD
        forgetPassword: builder.mutation({
            query: (email) => {
                return {
                    url: '/auth/forgot-password',
                    method: 'POST',
                    body: email
                }
            },
            async onQueryStarted({ email }, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    SuccessToast("OTP sent successfully!");
                    window.location.href = `/auth/verify-otp?type=forget-password&email=${encodeURIComponent(email)}`;
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "Failed to send new OTP.");
                }
            }
        }),

        // OTP VERIFY FOR SIGNUP
        verifyOTPForSignup: builder.mutation({
            query: (data) => ({
                url: '/auth/activate-user',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    SuccessToast(data?.message);
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "OTP verification failed.");
                }
            },
        }),

        // OTP VERIFY FOR RESET PASSWORD
        verifyOTPForResetPassword: builder.mutation({
            query: (data) => ({
                url: '/auth/verify-otp',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    SuccessToast(data?.message);
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "OTP verification failed.");
                }
            },
        }),

        // RESEND SIGNUP OTP
        resendSignupOTP: builder.mutation({
            query: (email) => ({
                url: '/auth/active-resend',
                method: 'POST',
                body: email
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    SuccessToast(data?.message);
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "Failed to send new OTP.");
                }
            },
        }),

        // RESEND RESET OTP
        resendResetOTP: builder.mutation({
            query: (email) => ({
                url: '/auth/forgot-resend',
                method: 'POST',
                body: email
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    SuccessToast(data?.message);
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "Failed to send new OTP.");
                }
            },
        }),

        // RESET PASSWORD
        resetPassword: builder.mutation({
            query: ({ email, ...data }) => {
                return {
                    url: `/auth/reset-password?email=${email}`,
                    method: 'POST',
                    body: data,
                }
            },
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    SuccessToast(data?.message);
                    localStorage.removeItem("FPE");
                    window.location.href = "/auth/login";
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "Failed to reset password.");
                }
            }
        }),

        // CHANGE PASSWORD
        changePassword: builder.mutation({
            query: (data) => {
                return {
                    url: "/auth/change-password",
                    method: 'PATCH',
                    body: data
                }
            },
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    SuccessToast(data?.message);
                } catch (error) {
                    ErrorToast(error?.error?.data?.message || "Failed to change password.");
                }
            },
        }),

    })
})

export const {
    useGetUserProfileQuery,
    useRegisterMutation,
    useUpdateUserProfileMutation,
    useLoginMutation,
    useForgetPasswordMutation,
    useVerifyOTPForSignupMutation,
    useVerifyOTPForResetPasswordMutation,
    useResendResetOTPMutation,
    useResendSignupOTPMutation,
    useResetPasswordMutation,
    useChangePasswordMutation
} = authApi;