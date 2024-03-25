"use client";
import Image from "next/image";
import React from "react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

type Props = {
    children: any;
};

export const bg_img =
    "https://e-cdns-images.dzcdn.net/images/artist/3590cb6cac25b0b1ea6918eec878145e/250x250-000000-80-0-0.jpg";

export default function TheApp({ children }: Props) {
    const { activeTrack } = useAudioPlayer();

    return (
        <div className="md:min-h-screen md:max-h-screen flex justify-center items-center">
            <div className="z-50">{children}</div>
            <div
                className="absolute left-0 right-0 bottom-0 top-0 z-0"
                id="background-img"
            >
                <Image
                    src={activeTrack?.album.cover_xl || bg_img}
                    fill
                    alt="background"
                    className="blur-2xl"
                />
                <div className="bg-black top-0 bottom-0 left-0 right-0 absolute z-10 opacity-70" />
            </div>
        </div>
    );
}
