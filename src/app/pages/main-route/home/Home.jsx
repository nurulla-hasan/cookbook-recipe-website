
import HeroCarousel from "@/components/common/hero/HeroCarousel";
import ClientSays from "@/components/home/ClientSays";
import DietGoals from "@/components/home/DietGoals";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import GetApp from "@/components/home/GetApp";
import TopCategories from "@/components/home/TopCategories";


const Home = () => {
    return (
        <>
            <HeroCarousel />
            <TopCategories />
            <FeaturedRecipes />
            <DietGoals />
            <ClientSays />
            <GetApp />
        </>
    );
};

export default Home;