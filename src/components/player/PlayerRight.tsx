"use client";
import Image from "next/image";
import React from "react";
import AudioPlayer from "./AudioPlayer";
import EachActionBtn from "../atom/EachActionBtn";
import { MdFavoriteBorder } from "react-icons/md";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

type Props = {};

export default function PlayerRight({}: Props) {
    const { activeTrack } = useAudioPlayer();

    return (
        <>
            <div className="p-5 hidden md:block">
                <div className="relative h-full min-w-[460px] rounded-xl overflow-hidden">
                    {activeTrack ? (
                        <>
                            <div className="md:absolute w-full top-2 px-5 py-4 z-50">
                                <EachActionBtn Icon={MdFavoriteBorder} />
                            </div>
                            <Image
                                src={activeTrack.album.cover_xl}
                                fill
                                alt="background"
                                className="shadow-md"
                                placeholder="blur"
                                blurDataURL={activeTrack.album.cover_small}
                            />
                            <div className="absolute w-full bottom-2 p-5 z-50">
                                <AudioPlayer />
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}
