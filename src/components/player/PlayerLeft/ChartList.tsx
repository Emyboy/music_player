import EachTrack from '@/components/atom/EachTrack';
import { TrackData } from '@/types/track.types';
import axios from 'axios';
import React from 'react'

type Props = {}

export default async function ChartList({ }: Props) {

    const res = await axios('https://api.deezer.com/chart');

    // console.log(res.data.tracks)

    return (
        <>
            {res.data.tracks.data.map((track: TrackData) => {
                return <EachTrack key={`track-${track.id}`} track={track} />;
            })}
        </>
    )
}