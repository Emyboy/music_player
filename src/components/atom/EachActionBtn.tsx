"use client";

interface Props {
    Icon: any;
    onClick?: () => void;
}

const EachActionBtn = ({ Icon, onClick }: Props) => {
    return (
        <div
            className="bg-gray-300 h-10 w-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-full cursor-pointer z-50 hover:shadow-lg text-white flex items-center justify-center text-[25px]"
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >
            <Icon />
        </div>
    );
};

export default EachActionBtn;
