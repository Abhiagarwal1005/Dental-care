// @ts-ignore
const TestimonialCard = ({text}) => {
    return (
        <div className="relative group">
            <div
                className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div>
                <div
                    className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4"><img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                        <div>
                            <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                        </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">{text}</p>
                </div>
        </div>
    )
};

export default TestimonialCard;