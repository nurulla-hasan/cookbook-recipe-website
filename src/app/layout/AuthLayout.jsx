import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ErrorBoundary } from "@/tools/ErrorBoundary";

const AuthLayout = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="h-screen flex flex-col justify-center items-center">
                    <Outlet />
                </div>
            </Suspense>
        </ErrorBoundary>
    );
};

export default AuthLayout;