import EachTrack from "@/components/atom/EachTrack";
import { TrackData } from "@/types/track.types";
import axios from "axios";
import { revalidatePath } from "next/cache";
import React from "react";

type Props = {
    query: string | null;
};

export const dynamic = 'force-dynamic'

export default async function ChartList({ query }: Props) {
    const res = await axios(
        `https://api.deezer.com/${query ? `search?q=${query}` : "chart"}`,
    );

    let tracks = query ? res.data.data : res.data.tracks.data;

    revalidatePath("/");

    return (
        <>
            {tracks.map((track: TrackData) => {
                return <EachTrack key={`track-${track.id}`} track={track} />;
            })}
        </>
    );
}
