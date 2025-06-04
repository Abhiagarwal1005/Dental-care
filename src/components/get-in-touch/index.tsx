import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaTooth } from "react-icons/fa6";
import { MdEmail, MdOutlineAccessTimeFilled } from "react-icons/md";

const GetInTouch = () => {
    return (
        <section className="py-12 sm:py-16 relative ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

                    <div className="w-full lg:order-1 order-2 lg:justify-start justify-center items-start flex">
                        <img
                            className="w-full h-full rounded-3xl object-cover"
                            src="https://pagedone.io/asset/uploads/1717742431.png"
                            alt="about Us image"
                        />
                    </div>
                    <div className="w-full lg:order-2 order-1 flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-5 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-2 flex">
                                <h6 className="text-primary font-normal text-xl leading-relaxed flex items-center gap-1"> <FaTooth />Contact Us</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                                    <h2 className="text-textPrimary text-4xl sm:text-5xl font-bold leading-tight lg:text-start text-center my-1">
                                        Get In Touch
                                    </h2>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed lg:text-start text-center">
                                        Our achievement story is a testament to teamwork and perseverance. Together, we've
                                        overcome challenges, celebrated victories, and created a narrative of progress and
                                        success.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-col justify-center gap-6 flex">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                        <FaLocationDot size={20} />
                                    </div>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        1234 Street Name, City, State, 12345
                                    </p>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                        <FaPhoneAlt size={20} />
                                    </div>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        1234 Street Name, City, State, 12345
                                    </p>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                        <MdEmail size={20} />
                                    </div>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        1234 Street Name, City, State, 12345
                                    </p>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <div className="p-2 bg-white rounded-full text-textPrimary shadow-md">
                                        <MdOutlineAccessTimeFilled size={20} />
                                    </div>
                                    <p className="text-textSecondary text-base font-normal leading-relaxed">
                                        1234 Street Name, City, State, 12345
                                    </p>
                                </div>
                                <div className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all text-center duration-200 bg-primary rounded-lg hover:bg-hoverColor">Book Appointment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default GetInTouch;