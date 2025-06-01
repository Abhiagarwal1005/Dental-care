import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Marquee = () => {
    const testimonials = [
        {
            service: "Crown and bridge",
            name: "Crown and bridge",
        },
        {
            service: "Dental Implants",
            name: "Dental Implants",
        },
        {
            service: "Cosmetic Dentistry",
            name: "Cosmetic Dentistry",
        },
        {
            service: "Orthodontics",
            name: "Orthodontics",
        },
        {
            service: "Hydrafacial",
            name: "Hydrafacial",
        },
        {
            service: "Microneedling",
            name: "Microneedling",
        },
        {
            service: "Botox",
            name: "Botox",
        },
        {
            service: "Fillers",
            name: "Fillers",
        },
        {
            service: "Laser Treatment",
            name: "Laser Treatment",
        },
    ];
    return (
        <div className="bg-primary">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>

    )
};

export default Marquee;