import React from "react";
import { Slider } from "../ui/slider";
import EachActionBtn from "../atom/EachActionBtn";
import {
    MdOutlinePlaylistAdd,
    MdOutlineShuffle,
    MdPlayCircle,
    MdSkipNext,
    MdSkipPrevious,
} from "react-icons/md";
import DefaultTooltip from "../atom/DefaultTooltip";

type Props = {};

export default function AudioPlayer({ }: Props) {
    return (
        <div className="min-h-24 w-full bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col items-center gap-5 p-3 justify-between shadow-lg">
            <div className="flex gap-2 justify-between w-full">
                <DefaultTooltip label="Shuffle">
                    <EachActionBtn Icon={MdOutlineShuffle} />
                </DefaultTooltip>
                <div className="flex gap-2">
                    <DefaultTooltip label="Previous">
                        <EachActionBtn Icon={MdSkipPrevious} />
                    </DefaultTooltip>
                    <DefaultTooltip label="Play">
                        <EachActionBtn Icon={MdPlayCircle} />
                    </DefaultTooltip>
                    <DefaultTooltip label="Next">
                        <EachActionBtn Icon={MdSkipNext} />
                    </DefaultTooltip>
                </div>
                <DefaultTooltip label="Queue">
                    <EachActionBtn Icon={MdOutlinePlaylistAdd} />
                </DefaultTooltip>
            </div>
            <div className="flex w-full gap-3 items-center text-white">
                <small id='progressive-track-duration'>01:45</small>
                <div className="flex-1">
                    <Slider defaultValue={[33]} max={100} step={1} />
                </div>
                <small id='total-track-duration'>03:05</small>
            </div>
        </div>
    );
}
