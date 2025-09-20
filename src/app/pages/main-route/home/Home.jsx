
import HeroCarousel from "@/components/common/hero/HeroCarousel";
import ClientSays from "@/components/home/ClientSays";
import DietGoals from "@/components/home/DietGoals";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
// import GetApp from "@/components/home/GetApp";
import TopCategories from "@/components/home/TopCategories";
import { useState } from "react";
import Featured from "../featured/Featured";


const Home = () => {

    const [isLoggedIn] = useState(true);

    return (
        <>
            {
                isLoggedIn ? (
                    <>
                        <HeroCarousel />
                        <TopCategories />
                        <FeaturedRecipes />
                        <DietGoals />
                        <ClientSays />
                        {/* <GetApp /> */}
                    </>
                ) : (
                    <>
                    <Featured />
                    </>
                )
            }
        </>
    );
};

export default Home;