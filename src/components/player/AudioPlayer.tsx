import React, { useEffect, useRef, useState } from "react";
import { Slider } from "../ui/slider";
import EachActionBtn from "../atom/EachActionBtn";
import {
    MdOutlinePause,
    MdOutlinePlaylistAdd,
    MdOutlineShuffle,
    MdPlayCircle,
    MdSkipNext,
    MdSkipPrevious,
} from "react-icons/md";
import DefaultTooltip from "../atom/DefaultTooltip";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { formatDuration } from "@/utils/index.utils";

type Props = {};

export default function AudioPlayer({ }: Props) {
    const { activeTrack, nextTrack, previousTrack } = useAudioPlayer();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [totalDuration, setTotalDuration] = useState<number>(0);

    useEffect(() => {
        if (activeTrack) {
            audioRef.current?.play();
        }
    }, [activeTrack]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => {
            setIsPlaying(true);
        };

        const handlePause = () => {
            setIsPlaying(false);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setTotalDuration(audio.duration);
        };

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current?.paused) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    };

    return (
        <>
            <audio ref={audioRef} src={activeTrack?.preview} hidden />
            <div className="min-h-24 w-full bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 flex flex-col items-center gap-5 p-3 justify-between shadow-lg">
                <div className="flex gap-2 justify-between w-full">
                    <DefaultTooltip label="Shuffle">
                        <EachActionBtn Icon={MdOutlineShuffle} />
                    </DefaultTooltip>
                    <div className="flex gap-2">
                        <DefaultTooltip label="Previous">
                            <EachActionBtn Icon={MdSkipPrevious} onClick={previousTrack} />
                        </DefaultTooltip>
                        {isPlaying ? (
                            <DefaultTooltip label="Pause">
                                <EachActionBtn Icon={MdOutlinePause} onClick={handlePlayPause} />
                            </DefaultTooltip>
                        ) : (
                            <DefaultTooltip label="Play">
                                <EachActionBtn Icon={MdPlayCircle} onClick={handlePlayPause} />
                            </DefaultTooltip>
                        )}
                        <DefaultTooltip label="Next">
                            <EachActionBtn Icon={MdSkipNext} onClick={nextTrack} />
                        </DefaultTooltip>
                    </div>
                    <DefaultTooltip label="Queue">
                        <EachActionBtn Icon={MdOutlinePlaylistAdd} />
                    </DefaultTooltip>
                </div>
                <div className="flex w-full gap-3 items-center text-white">
                    <small id="progressive-track-duration">{formatDuration(currentTime)}</small>
                    <div className="flex-1">
                        <Slider value={[currentTime]} max={totalDuration} step={1} />
                    </div>
                    <small id="total-track-duration">{formatDuration(totalDuration)}</small>
                </div>
            </div>
        </>
    );
}
