"use client";
import Image from "next/image";
import React from "react";
import EachActionBtn from "./EachActionBtn";
import {
    MdAdd,
    MdFavoriteBorder,
    MdOutlinePlayCircleFilled,
} from "react-icons/md";
import DefaultTooltip from "./DefaultTooltip";
import { TrackData } from "@/types/track.types";
import { formatDuration } from "@/utils/index.utils";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

type Props = {
    track: TrackData;
};

export default function EachTrack({ track }: Props) {
    const { setAudioContext } = useAudioPlayer();

    return (
        <div className="relative group">
            <div className="p-3 flex gap-3 absolute z-30 w-full justify-between">
                <div className="flex max-w-[75%] gap-3">
                    <div className="min-h-[67px] min-w-[65px] relative overflow-hidden rounded-lg flex items-center justify-center">
                        <Image src={track.album.cover} alt={track.title} fill />
                        <div className="opacity-0 group-hover:opacity-100">
                            <EachActionBtn
                                Icon={MdOutlinePlayCircleFilled}
                                onClick={() =>
                                    setAudioContext({ activeTrack: track })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col truncate">
                        <h3 className="truncate">{track.title}</h3>
                        <h5 className="text-sm opacity-60 truncate mb-1">
                            by {track.artist.name}
                        </h5>
                        <small className="opacity-50">
                            {formatDuration(track.duration)}
                        </small>
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
