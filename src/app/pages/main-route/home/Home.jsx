
import HeroCarousel from "@/components/common/hero/HeroCarousel";
import ClientSays from "@/components/home/ClientSays";
import DietGoals from "@/components/home/DietGoals";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import TopCategories from "@/components/home/TopCategories";
import { useSelector } from "react-redux";
import LandingPage from "../landing/LandingPage";


const Home = () => {

    const { accessToken } = useSelector((state) => state.auth);

    return (
        <>
            {
                accessToken ? (
                    <>
                        <HeroCarousel />
                        <TopCategories />
                        <FeaturedRecipes />
                        <DietGoals />
                        <ClientSays />
                    </>
                ) : (
                    <LandingPage />
                )
            }
        </>
    );
};

export default Home;