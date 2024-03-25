import EachTrack from "@/components/atom/EachTrack";
import React from "react";
import { MdOutlinePerson3 } from "react-icons/md";

type Props = {};

export default function PlayerLeft({}: Props) {
    return (
        <div className="flex-1 z-50 text-white md:max-h-[500px] p-5 ">
            <div className="gap-5 h-full flex flex-col">
                <div className="h-10 flex gap-5 items-center">
                    <button className="text-xl">
                        <MdOutlinePerson3 />
                    </button>
                    <div className="flex flex-1 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-5 h-10">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="bg-inherit w-full outline-none rounded-full px-3 h-full"
                        />
                    </div>
                    <button className="text-xl">
                        <MdOutlinePerson3 />
                    </button>
                </div>
                <div className="max-h-[100%-2.5rem] overflow-y-auto">
                    {new Array(11).fill(null).map((_) => {
                        return <EachTrack key={crypto.randomUUID()} />;
                    })}
                </div>
            </div>
        </div>
    );
}
