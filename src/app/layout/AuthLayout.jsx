import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ErrorBoundary } from "@/tools/ErrorBoundary";

const AuthLayout = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </ErrorBoundary>
    );
};

export default AuthLayout;