'use client'
import Image from "next/image";
import React from "react";
import AudioPlayer from "./AudioPlayer";
import { bg_img } from "@/app/page";
import EachActionBtn from "../atom/EachActionBtn";
import { MdFavoriteBorder } from "react-icons/md";

type Props = {};

export default function PlayerRight({}: Props) {
    return (
        <>
            <div className="p-5 hidden md:block">
                <div className="relative h-full min-w-[460px] rounded-xl overflow-hidden">
                    <div className="md:absolute w-full top-2 px-5 py-4 z-50">
                        <EachActionBtn Icon={MdFavoriteBorder} />
                    </div>
                    <Image
                        src={bg_img}
                        fill
                        alt="background"
                        className="shadow-md"
                    />
                    <div className="absolute w-full bottom-2 p-5 z-50">
                        <AudioPlayer />
                    </div>
                </div>
            </div>
        </>
    );
}
