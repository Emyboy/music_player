'use client'
import EachActionBtn from '@/components/atom/EachActionBtn'
import { useAudioPlayer } from '@/context/AudioPlayerContext'
import { TrackData } from '@/types/track.types'
import { formatDuration } from '@/utils/index.utils'
import Image from 'next/image'
import React from 'react'
import { MdClose, MdOutlinePlayCircleFilled, MdPause } from 'react-icons/md'

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
    const { isPlaying, activeTrack, addToQueue, play, setAudioContext } = useAudioPlayer();
    const isCurrentlyPlaying = isPlaying && track.id === activeTrack?.id;

    return <>
        <div className="flex items-center gap-3 group py-3">
            <div className="min-h-16 min-w-16 overflow-hidden rounded-xl relative flex justify-center items-center">
                {
                    isCurrentlyPlaying ?
                        <div className="absolute z-20">
                            <EachActionBtn Icon={MdPause} onClick={() => setAudioContext({ isPlaying: false })} />
                        </div> :
                        <div className="absolute z-20 opacity-0 group-hover:opacity-100">
                            <EachActionBtn Icon={MdOutlinePlayCircleFilled} onClick={() => play(track)} />
                        </div>
                }
                <Image src={track.album.cover_small} alt={track.title} fill />
            </div>
            <div className="flex flex-col flex-1 max-w-[90%] truncate">
                <h1 className='truncate'>{track.title}</h1>
                <h1 className='font-light text-xs truncate'>{track.artist.name}</h1>
                <small className='font-light text-xs'>{formatDuration(track.duration)}</small>
            </div>
            <div className='opacity-0 group-hover:opacity-100'>
                <EachActionBtn Icon={MdClose} onClick={() => addToQueue(track)} />
            </div>
        </div>
    </>
}
