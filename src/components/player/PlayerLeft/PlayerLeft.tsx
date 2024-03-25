import DefaultTooltip from "@/components/atom/DefaultTooltip";
import React, { Suspense } from "react";
import { MdFavoriteBorder, MdOutlinePerson3 } from "react-icons/md";
import ChartList from "./ChartList";
import TracksLoading from "@/components/atom/TacksLoading";

type Props = {};

export default function PlayerLeft({ }: Props) {
    return (
        <div className="flex-1 z-50 text-white md:max-h-[500px] p-5 ">
            <div className="gap-5 h-full flex flex-col">
                <div className="h-10 flex gap-5 items-center">
                    <button className="text-2xl opacity-60 hover:opacity-100">
                        <MdOutlinePerson3 />
                    </button>
                    <div className="flex flex-1 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-5 h-10">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="bg-inherit w-full outline-none rounded-full px-3 h-full"
                        />
                    </div>
                    <DefaultTooltip label="View favorite">
                        <button className="text-2xl opacity-60 hover:opacity-100">
                            <MdFavoriteBorder />
                            {/* <EachActionBtn Icon={MdFavoriteBorder} /> */}
                        </button>
                    </DefaultTooltip>
                </div>
                <div className="max-h-[100%-2.5rem] overflow-y-auto">
                    <Suspense fallback={<TracksLoading />}>
                        <ChartList />
                    </Suspense>

                </div>
            </div>
        </div>
    );
}
