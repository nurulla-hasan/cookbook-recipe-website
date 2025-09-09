import { withErrorAndSuspense } from "@/components/tools/withErrorAndSuspense";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        withErrorAndSuspense(Outlet, <div>Loading...</div>)
    );
};

export default AuthLayout;