import React from 'react'
import { Slider } from '../ui/slider'
import EachActionBtn from '../atom/EachActionBtn'
import { MdOutlineAdd, MdOutlineShuffle, MdPlayCircle, MdSkipNext, MdSkipPrevious } from "react-icons/md";

type Props = {}

export default function AudioPlayer({ }: Props) {
    return (
        <div className='h-24 w-full bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col items-center gap-2 p-3 justify-between shadow-lg'>
            <div className="flex gap-2 justify-between w-full">
                <EachActionBtn Icon={MdOutlineShuffle} />
                <div className="flex gap-2">
                    <EachActionBtn Icon={MdSkipPrevious} />
                    <EachActionBtn Icon={MdPlayCircle} />
                    <EachActionBtn Icon={MdSkipNext} />
                </div>
                <EachActionBtn Icon={MdOutlineAdd} />
            </div>
            <Slider defaultValue={[33]} max={100} step={1} />
        </div>
    )
}


