import React from "react";
import PlayerRight from "@/components/player/PlayerRight";
import PlayerLeft from "@/components/player/PlayerLeft/PlayerLeft";


export default function page(props: any) {
    return (
        <div className="">
            <div className="flex md:flex-row flex-col min-w-[1000px] min-h-[500px] md:absolute">
                <PlayerLeft query={props?.searchParams?.query} />
                <PlayerRight />
            </div>
            <div className="md:min-w-[1000px] md:min-h-[500px]  bg-white opacity-20- border border-white rounded-xl flex z-50 p-5 opacity-20"></div>
        </div>
    );
}
