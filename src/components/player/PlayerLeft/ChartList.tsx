'use client'
import EachTrack from '@/components/atom/EachTrack';
import { deezerURL, useDeezerChart } from '@/hooks/useDeezer';
import axios from 'axios';
import React, { useEffect } from 'react'

type Props = {}

export default function ChartList({ }: Props) {

    const { isLoading: chartLoading, data: chartData, isError: chartError, error: chartErrorMsg, refetch: refetchChart } = useDeezerChart();

    console.log({ isLoading: chartLoading, data: chartData, isError: chartError, error: chartErrorMsg, refetch: refetchChart })

    useEffect(() => {
        (async () => {
            try {
                const headers = {
                    Authorization: `Bearer 5822e45656a54814abb97098a0ac11e4`,
                };
                const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', { headers });
                console.log("THE AXIOS OWN", res.data)
            } catch (error) {
                console.log("THE AXIOS OWN", error)
            }
        })();
    },[])
    

    return (
        <>
            {new Array(11).fill(null).map((_) => {
                return <EachTrack key={crypto.randomUUID()} />;
            })}
        </>
    )
}