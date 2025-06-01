import { FaTooth } from "react-icons/fa6";
import { NumberTicker } from "../ui/NumberTicker";
import FigureCard from "./figure-card";

const ClinicFigures = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1 py-12 sm:py-16">
            <h6 className="text-primary text-center font-normal text-xl leading-relaxed flex items-center justify-center gap-1"> <FaTooth />Clinic Figures</h6>
            <h2 className="text-textPrimary text-4xl sm:text-5xl font-bold leading-tight text-center">What Have We Achieved</h2>
            <p className="text-textSecondary text-base font-normal leading-relaxed text-center">
                Our achievement story is a testament to teamwork and perseverance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
                <FigureCard />
                <FigureCard />
                <FigureCard />
                <FigureCard />
            </div>

            {/* <NumberTicker
                value={100}
                className="text-primary text-4xl"
            /> */}
        </div>
    )
};

export default ClinicFigures;