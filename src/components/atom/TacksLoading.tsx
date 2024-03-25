import Image from "next/image";
import React from "react";
import EachActionBtn from "./EachActionBtn";
import {
    MdAdd,
    MdFavoriteBorder,
    MdOutlinePlayCircleFilled,
} from "react-icons/md";
import DefaultTooltip from "./DefaultTooltip";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export default function TracksLoading({}: Props) {
    return (
        <>
            {new Array(5).fill(null).map((_) => {
                return (
                    <div className="relative group" key={crypto.randomUUID()}>
                        <div className="p-3 flex gap-3 absolute z-30 w-full justify-between">
                            <div className="flex max-w-[95%] gap-3">
                                <div className="min-h-[67px] min-w-[65px] relative overflow-hidden rounded-lg flex items-center justify-center">
                                    <Skeleton className="w-full h-full rounded-lg" />
                                </div>
                                <div className="flex flex-col truncate">
                                    <h3 className="truncate mb-2">
                                        <Skeleton className="w-[100px] h-[15px] rounded-full" />
                                    </h3>
                                    <h5 className="text-sm opacity-60 truncate mb-2">
                                        <Skeleton className="w-[300px] h-[15px] rounded-full" />
                                    </h5>
                                    <small className="opacity-50">
                                        <Skeleton className="w-[50px] h-[10px] rounded-full" />
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="group-hover:bg-gray-400 rounded-lg group-hover:bg-clip-padding group-hover:backdrop-filter group-hover:backdrop-blur-xl group-hover:bg-opacity-10 h-[90px]" />
                    </div>
                );
            })}
        </>
    );
}
