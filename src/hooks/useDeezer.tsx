'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DeezerChartResponse {
    tracks: any[];
    albums: any[];
    artists: any[];
}

interface DeezerTrackSearchResponse {
    data: any[];
}

export const deezerURL = 'https://api.deezer.com';

export const useDeezerChart = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<DeezerChartResponse | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const fetchDeezerChart = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get<DeezerChartResponse>(`${deezerURL}/chart`);
            setData(response.data);
            setIsError(false);
        } catch (error) {
            setIsError(true);
            setError(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchDeezerChart()
    }, [])

    return { isLoading, data, isError, error, refetch: fetchDeezerChart };
};

export const useDeezerTrackSearch = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<DeezerTrackSearchResponse | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const searchDeezerTracks = async (query: string) => {
        setIsLoading(true);
        try {
            const response = await axios.get<DeezerTrackSearchResponse>(
                `/${deezerURL}search?q=${query}`
            );
            setData(response.data);
            setIsError(false);
        } catch (error) {
            setIsError(true);
            setError(error);
        }
        setIsLoading(false);
    };

    return { isLoading, data, isError, error, search: searchDeezerTracks };
};
