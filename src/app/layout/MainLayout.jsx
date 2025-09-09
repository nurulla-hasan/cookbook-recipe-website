import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="body-height">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;