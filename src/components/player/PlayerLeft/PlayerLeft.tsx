import React, { Suspense } from "react";
import ChartList from "./ChartList";
import TracksLoading from "@/components/atom/TacksLoading";
import PlayerLeftHeader from "./PlayerLeftHeader";

type Props = {
    query: string | null;
};

export default function PlayerLeft({ query }: Props) {
    return (
        <div className="flex-1 z-50 text-white md:max-h-[500px] p-5 ">
            <div className="gap-5 h-full flex flex-col">
                <div className="min-h-10 max-h-10 flex gap-5 items-center">
                    <PlayerLeftHeader />
                </div>
                <div className="max-h-[100%-2.5rem] overflow-y-auto">
                    <Suspense fallback={<TracksLoading />}>
                        <ChartList query={query} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
