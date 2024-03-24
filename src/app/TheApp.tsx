import Image from 'next/image'
import React from 'react'
import { bg_img } from './page'

type Props = {
    children: any
}

export default function TheApp({ children }: Props) {
    return (
        <div className='min-h-screen max-h-screen flex justify-center items-center'>
            <div className='z-50'>
                {children}
            </div>
            <div className='absolute left-0 right-0 bottom-0 top-0 z-0' id='background-img'>
                <Image src={bg_img} fill alt='background' className='blur-2xl' />
                <div className='bg-black top-0 bottom-0 left-0 right-0 absolute z-10 opacity-70' />
            </div>
        </div>
    )
}