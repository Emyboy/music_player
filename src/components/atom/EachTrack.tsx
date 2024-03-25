import Image from "next/image";
import React from "react";
import EachActionBtn from "./EachActionBtn";
import { MdAdd, MdFavoriteBorder, MdOutlinePlayCircleFilled } from "react-icons/md";
import DefaultTooltip from "./DefaultTooltip";

type Props = {};

export default function EachTrack({ }: Props) {
    return (
        <div className="relative group">
            <div className="p-3 flex gap-3 absolute z-30 w-full justify-between">
                <div className="flex max-w-[75%] gap-3">
                    <div className="min-h-[67px] min-w-[65px] relative overflow-hidden rounded-lg flex items-center justify-center">
                        <Image
                            src="https://e-cdns-images.dzcdn.net/images/artist/23de8e5598fae2d1abb45b885a1924ce/1000x1000-000000-80-0-0.jpg"
                            alt="album art"
                            fill
                        />
                        <div className="opacity-0 group-hover:opacity-100">
                            <EachActionBtn Icon={MdOutlinePlayCircleFilled} />
                        </div>
                    </div>
                    <div className="flex flex-col truncate">
                        <h3 className="truncate">The track name</h3>
                        <h5 className="text-sm opacity-60 truncate">
                            Another thing about the track Another thing about
                            the track
                        </h5>
                        <small className="opacity-50">03:45</small>
                    </div>
                </div>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100">
                    <DefaultTooltip label="Add to queue">
                        <EachActionBtn Icon={MdAdd} />
                    </DefaultTooltip>
                    <DefaultTooltip label="Add to favorite">
                        <EachActionBtn Icon={MdFavoriteBorder} />
                    </DefaultTooltip>
                </div>
            </div>
            <div className="group-hover:bg-gray-400 rounded-lg group-hover:bg-clip-padding group-hover:backdrop-filter group-hover:backdrop-blur-xl group-hover:bg-opacity-10 h-[90px]" />
        </div>
    );
}
