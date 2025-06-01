import { IoLocationOutline } from "react-icons/io5";
import { NumberTicker } from "../../ui/NumberTicker";

const FigureCard = () => {
    return (
        <div className="bg-primary shadow-md rounded-lg p-6 flex flex-col items-center w-full gap-1.5">
            <IoLocationOutline size={50} color="#FFEECB"/>
            <NumberTicker
                value={100}
                className="text-textPrimary text-3xl font-bold"
            />
            <p className="text-xl font-medium text-textPrimary">Clinic Visits</p>
        </div>
    )
};

export default FigureCard;