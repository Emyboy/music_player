import { PlayCircle, PlayIcon } from "lucide-react";

interface Props {
    Icon: any;
}

const EachActionBtn = ({ Icon }: Props) => {
    return (
        <div className="bg-gray-300 h-10 w-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-full cursor-pointer z-50 hover:shadow-lg text-white flex items-center justify-center text-[25px]">
            <Icon />
        </div>
    );
};

export default EachActionBtn;
