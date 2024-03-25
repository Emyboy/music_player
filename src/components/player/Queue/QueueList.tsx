import { useAudioPlayer } from '@/context/AudioPlayerContext'
import { TrackData } from '@/types/track.types'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function QueueList({ }: Props) {
    const { queue } = useAudioPlayer();
    return (
        <div className='min-w-[200px] min-h-[400px] max-h-[400px] flex flex-col'>
            <div className="min-h-[40px] p-2 flex items-center">
                <h1>Queued Tracks</h1>
            </div>
            <div className="flex-1 min-h-[400px-60px] overflow-y-auto p-2">
                {
                    queue.map(track => {
                        return <EachQueueTrack key={`queue-${track.id}`} track={track} />
                    })
                }
            </div>
        </div>
    )
}

const EachQueueTrack = ({ track }: { track: TrackData }) => {
    return <>
        <div className="flex items-center">
            <div className="h-20 w-20 overflow-hidden rounded-xl">
                <Image src={track.album.cover_small} alt={track.title} fill />
            </div>
        </div>
    </>
}
