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
    const { activeTrack, nextTrack, previousTrack, isPlaying, setAudioContext } = useAudioPlayer();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [totalDuration, setTotalDuration] = useState<number>(0);

    useEffect(() => {
        if (activeTrack) {
            if (isPlaying) {
                audioRef.current?.play();
            } else {
                audioRef.current?.pause();
            }
        }
    }, [isPlaying]); // Listen to changes in isPlaying to play or pause the audio

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setTotalDuration(audio.duration);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, []);

    const handlePlayPause = () => {
        setAudioContext({ isPlaying: !isPlaying });
    };

    const handleSliderChange = (newValue: number[]) => {
        if (audioRef.current) {
            audioRef.current.currentTime = newValue[0];
            setCurrentTime(newValue[0]);
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
                        <DefaultTooltip label={isPlaying ? "Pause" : "Play"}>
                            <EachActionBtn Icon={isPlaying ? MdOutlinePause : MdPlayCircle} onClick={handlePlayPause} />
                        </DefaultTooltip>
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
                        <Slider value={[currentTime]} max={totalDuration} step={1} onValueChange={handleSliderChange} />
                    </div>
                    <small id="total-track-duration">{formatDuration(totalDuration)}</small>
                </div>
            </div>
        </>
    );
}
