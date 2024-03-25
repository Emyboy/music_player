'use client'
import EachTrack from '@/components/atom/EachTrack';
import { deezerURL, useDeezerChart } from '@/hooks/useDeezer';
import axios from 'axios';
import React, { useEffect } from 'react'

type Props = {}

export default function ChartList({ }: Props) {

    const { isLoading: chartLoading, data: chartData, isError: chartError, error: chartErrorMsg, refetch: refetchChart } = useDeezerChart();

    console.log({ isLoading: chartLoading, data: chartData, isError: chartError, error: chartErrorMsg, refetch: refetchChart })
    

    return (
        <>
            {new Array(11).fill(null).map((_) => {
                return <EachTrack key={crypto.randomUUID()} />;
            })}
        </>
    )
}