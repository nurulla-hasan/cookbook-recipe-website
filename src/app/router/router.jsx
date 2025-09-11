import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { withErrorAndSuspense } from "@/tools/withErrorAndSuspense";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Profilelayout from "../layout/Profilelayout";
import AddRecipe from "../pages/profile-route/add-recipe/AddRecipe";
import EditRecipe from "../pages/profile-route/my-recipe/edit-recipe/EditRecipe";
const Favorite = lazy(() => import("../pages/profile-route/my-favorite/MyFavorite"));
const MyRecipe = lazy(() => import("../pages/profile-route/my-recipe/MyRecipe"));
const MyAccount = lazy(() => import("../pages/profile-route/my-account/MyAccount"));
const Home = lazy(() => import("../pages/main-route/home/Home"));
const Recipes = lazy(() => import("../pages/main-route/recipes/Recipes"));
const RecipeDetails = lazy(() => import("../pages/main-route/recipes/recipe-details/RecipeDetails"));
const MealPlanner = lazy(() => import("../pages/main-route/meal-planner/MealPlanner"));
const Grocery = lazy(() => import("../pages/main-route/grocery/Grocery"));
const Featured = lazy(() => import("../pages/main-route/featured/Featured"));
const About = lazy(() => import("../pages/main-route/about/About"));
const Contact = lazy(() => import("../pages/main-route/contact/Contact"));
const Login = lazy(() => import("../pages/auth-route/login/Login"));
const Register = lazy(() => import("../pages/auth-route/register/Register"));
const ForgetPassword = lazy(() => import("../pages/auth-route/forgot-password/ForgetPassword"));
const VerifyOtp = lazy(() => import("../pages/auth-route/verify-otp/VerifyOtp"));
const ResetPassword = lazy(() => import("../pages/auth-route/reset-password/ResetPassword"));
const Category = lazy(() => import("../pages/main-route/category/Category"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "recipes",
                element: withErrorAndSuspense(Recipes, <div>Loading...</div>),
            },
            {
                path: "category/:slug",
                element: withErrorAndSuspense(Category, <div>Loading...</div>),
            },
            {
                path: "recipes/recipe-details/:id",
                element: withErrorAndSuspense(RecipeDetails, <div>Loading...</div>),
            },
            {
                path: "meal-planner",
                element: withErrorAndSuspense(MealPlanner, <div>Loading...</div>),
            },
            {
                path: "grocery",
                element: withErrorAndSuspense(Grocery, <div>Loading...</div>),
            },
            {
                path: "featured",
                element: withErrorAndSuspense(Featured, <div>Loading...</div>),
            },
            {
                path: "about",
                element: withErrorAndSuspense(About, <div>Loading...</div>),
            },
            {
                path: "contact",
                element: withErrorAndSuspense(Contact, <div>Loading...</div>),
            },
            {
                path: "profile",
                element: withErrorAndSuspense(Profilelayout, <div>Loading...</div>),
                children: [
                    {
                        index: true,
                        element: withErrorAndSuspense(MyAccount, <div>Loading...</div>),
                    },
                    {
                        path: "my-favourite",
                        element: withErrorAndSuspense(Favorite, <div>Loading...</div>),
                    },
                    {
                        path: "my-recipes",
                        element: withErrorAndSuspense(MyRecipe, <div>Loading...</div>),
                    },
                    {
                        path: "add-recipe",
                        element: withErrorAndSuspense(AddRecipe, <div>Loading...</div>),
                    },
                    {
                        path: "edit-recipe/:id",
                        element: withErrorAndSuspense(EditRecipe, <div>Loading...</div>),
                    },
                ]
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "forgot-password",
                element: <ForgetPassword />,
            },
            {
                path: "verify-otp",
                element: <VerifyOtp />,
            },
            {
                path: "reset-password",
                element: <ResetPassword />,
            },
        ]
    }
])

export default router;