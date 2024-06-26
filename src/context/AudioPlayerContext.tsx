'use client'
import React, { createContext, useState, useContext } from "react";
import { TrackData } from "@/types/track.types";

interface AudioPlayerContextType {
    queue: TrackData[];
    activeTrack: TrackData | null;
    isPlaying: boolean;
    setAudioContext: (newState: Partial<AudioPlayerContextType>) => void;
    nextTrack: () => void;
    previousTrack: () => void;
    playTrack: (track: TrackData) => void;
    addToQueue: (track: TrackData) => void;
    play: (track: TrackData) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
    undefined,
);

export const useAudioPlayer = () => {
    const context = useContext(AudioPlayerContext);
    if (!context) {
        throw new Error(
            "useAudioPlayer must be used within an AudioPlayerProvider",
        );
    }
    return context;
};

export const AudioPlayerProvider: React.FC = ({ children }: any) => {
    const [state, setState] = useState<AudioPlayerContextType>({
        queue: [],
        activeTrack: null,
        isPlaying: false,
        setAudioContext: (context: Partial<AudioPlayerContextType>) => context,
        nextTrack: () => { },
        previousTrack: () => { },
        playTrack: (track: TrackData) => track,
        addToQueue: (track: TrackData) => track,
        play: (track: TrackData) => track,
    });

    const setAudioContext = (newState: Partial<AudioPlayerContextType>) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };

    // plays a single track
    const playTrack = (track: TrackData) => {
        let alreadyExist = state.queue.find(t => t.id === track.id)
        if (alreadyExist && state.isPlaying) {
            return setState((prevState) => ({
                ...prevState,
                isPlaying: false,
            }));
        }
        setState((prevState) => ({
            ...prevState,
            activeTrack: track,
            queue: [track],
            isPlaying: true,
        }));
    };

    const play = (track: TrackData) => {
        setState((prev: any) => {
            return { 
                ...prev, 
                activeTrack: track, 
                isPlaying: true }
        })
    }

    const nextTrack = () => {
        console.log('NEXT RACK CALLED')
        const { queue, activeTrack } = state;
        if (!activeTrack || queue.length === 0) return;

        const currentIndex = queue.findIndex(
            (track) => track.id === activeTrack.id,
        );
        if (currentIndex === -1 || currentIndex === queue.length - 1) return;

        const nextIndex = currentIndex + 1;
        const nextTrack = queue[nextIndex];
        play(nextTrack);
    };

    const previousTrack = () => {
        const { queue, activeTrack } = state;
        if (!activeTrack || queue.length === 0) return;

        const currentIndex = queue.findIndex(
            (track) => track.id === activeTrack.id,
        );
        if (currentIndex === -1 || currentIndex === 0) return;

        const previousIndex = currentIndex - 1;
        const previousTrack = queue[previousIndex];
        play(previousTrack);
    };

    const addToQueue = (track: TrackData) => {
        const { queue } = state;
        const existingIndex = queue.findIndex((t) => t.id === track.id);
        if (existingIndex !== -1) {
            const updatedQueue = [...queue];
            updatedQueue.splice(existingIndex, 1);
            setState((prevState) => ({
                ...prevState,
                queue: updatedQueue,
            }));
        } else {
            setState((prevState) => ({
                ...prevState,
                queue: [...queue, track],
            }));
        }
    };

    // console.log('PLAYER UPDATE:::', state)

    return (
        <AudioPlayerContext.Provider
            value={{ ...state, setAudioContext, nextTrack, previousTrack, playTrack, addToQueue, play }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
};
