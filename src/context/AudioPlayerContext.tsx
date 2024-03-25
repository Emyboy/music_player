'use client'
import { TrackData } from '@/types/track.types';
import React, { createContext, useState, useContext } from 'react';

interface Track {
    id: string;
    title: string;
    artist: string;
    duration: number;
}

interface AudioPlayerContextType {
    queue: TrackData[];
    activeTrack: TrackData | null;
    isPlaying: boolean;
    setAudioContext: (newState: Partial<AudioPlayerContextType>) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const useAudioPlayer = () => {
    const context = useContext(AudioPlayerContext);
    if (!context) {
        throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
    }
    return context;
};

export const AudioPlayerProvider: React.FC = ({ children }:any) => {
    const [state, setState] = useState<AudioPlayerContextType>({
        queue: [],
        activeTrack: null,
        isPlaying: false,
        setAudioContext: (context: Partial<AudioPlayerContextType>) => context
    });

    const setAudioContext = (newState: Partial<AudioPlayerContextType>) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };

    return (
        <AudioPlayerContext.Provider value={{ ...state, setAudioContext }}>
            {children}
        </AudioPlayerContext.Provider>
    );
};
