import banner from '../../assets/Banner.svg';

interface BreadcrumbBannerProps {
    title: string;
}

const BreadcrumbBanner: React.FC<BreadcrumbBannerProps> = ({ title }) => {
    return (
        <div className="w-full h-[180px] bg-secondary relative">
            <img src={banner} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-primary text-4xl font-bold">{title}</h1>
            </div>
        </div>
    )
};

export default BreadcrumbBanner;