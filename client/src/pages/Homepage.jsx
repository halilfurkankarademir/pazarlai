import { HeroSection, FeaturesSection } from "../components/sections";

const Homepage = () => {
    return (
        <div className="min-h-screen  max-w-[1536px] mx-auto">
            <HeroSection />
            <FeaturesSection />
        </div>
    );
};

export default Homepage;
