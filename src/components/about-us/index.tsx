import { FaTooth } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <section className="py-12 sm:py-16 relative ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

                    {/* Image block - now appears first on large screens */}
                    <div className="w-full lg:order-1 order-2 lg:justify-start justify-center items-start flex">
                        <div className="sm:w-[564px] w-full sm:h-[550px] h-[350px] sm:bg-secondary rounded-3xl sm:border border-primary relative">
                            <img
                                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src="https://pagedone.io/asset/uploads/1717742431.png"
                                alt="about Us image"
                            />
                        </div>
                    </div>

                    {/* Text content block - now appears second on large screens */}
                    <div className="w-full lg:order-2 order-1 flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-5 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-2 flex">
                                <h6 className="text-textSecondary font-normal text-xl leading-relaxed flex items-center gap-1"> <FaTooth />About Us</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                                    <h2 className="text-textPrimary text-4xl font-bold leading-tight lg:text-start text-center">
                                        The Tale of Our Achievement Story
                                    </h2>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed lg:text-start text-center">
                                        Our achievement story is a testament to teamwork and perseverance. Together, we've
                                        overcome challenges, celebrated victories, and created a narrative of progress and
                                        success.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-textPrimary text-2xl font-bold leading-9">33+ Years</h4>
                                        <p className="text-textSecondary text-base font-normal leading-relaxed">
                                            Influencing Digital Landscapes Together
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-textPrimary text-2xl font-bold leading-9">125+ Projects</h4>
                                        <p className="text-textSecondary text-base font-normal leading-relaxed">
                                            Excellence Achieved Through Success
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-textPrimary text-2xl font-bold leading-9">26+ Awards</h4>
                                        <p className="text-textSecondary text-base font-normal leading-relaxed">
                                            Our Dedication to Innovation Wins Understanding
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-primary hover:border-primary transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-textPrimary text-2xl font-bold leading-9">99% Happy Clients</h4>
                                        <p className="text-textSecondary text-base font-normal leading-relaxed">
                                            Mirrors our Focus on Client Satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
};

export default AboutUs;