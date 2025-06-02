import { IoLocationOutline } from "react-icons/io5";
import { NumberTicker } from "../../ui/NumberTicker";
import { BorderBeam } from "../../ui/BorderBeam";

const FigureCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 py-10 flex flex-col items-center w-full gap-1.5 relative overflow-hidden">
            <IoLocationOutline size={50} color="#DFC57B" />
            <NumberTicker
                value={100}
                className="text-textPrimary text-3xl font-bold"
            />
            <p className="text-xl font-medium text-textPrimary">Clinic Visits</p>
            <BorderBeam duration={4}
                size={300}
                className="from-transparent via-primary to-secondary" />
        </div>
    )
};

export default FigureCard;