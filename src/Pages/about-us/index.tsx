import AboutUs from "../../components/about-us";
import WhyChooseUs from "../../components/why-choose-us";
import BreadcrumbBanner from "../../components/breadcrumb-banner";

const About = () => {
    return (
        <>
            <BreadcrumbBanner title="About Us"/>
            <AboutUs />
            <div className="mb-12">
                <WhyChooseUs />
            </div>
        </>
    );
}

export default About;