import { FaTooth } from "react-icons/fa6";
import AboutUs from "../../components/about-us";
import Card from "../../components/card";
import HeroSection from "../../components/hero-section";
import Marquee from "../../components/marquee";
import ClinicFigures from "../../components/clinic-figures";
import WhyChooseUs from "../../components/why-choose-us";
import Testimonials from "../../components/testimonials";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <Marquee />
            <AboutUs />
            <div className="bg-[#f5f5f5]">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1 py-12 sm:py-16">
                    <h6 className="text-primary text-center font-normal text-xl leading-relaxed flex items-center justify-center gap-1"> <FaTooth />Services</h6>
                    <h2 className="text-textPrimary text-4xl sm:text-5xl font-bold leading-tight text-center">The Tale of Our Achievement Story</h2>
                    <p className="text-textSecondary text-base font-normal leading-relaxed text-center my-1">
                        Our achievement story is a testament to teamwork and perseverance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-12">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="flex justify-center mt-8 md:mt-10">
                        <div className="inline-flex px-6 py-3 text-lg font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-hoverColor cursor-pointer">View More</div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
            <ClinicFigures />
            <div className="bg-[#f5f5f5]">
                <Testimonials />
            </div>
        </div>
    )
};

export default HomePage;