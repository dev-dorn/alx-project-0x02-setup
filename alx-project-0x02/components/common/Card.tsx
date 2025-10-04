import React from 'react'
import { type CardProps } from '@/interfaces'
import Image from 'next/image'

const Card: React.FC<CardProps>= ({
    title,
    price,
    content,
    nights,
    rating,
    image,
    isGuestFavorite,
    location

}) => {
    return (
        <>
        <div className='rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-whitw cursor-pointer w-[260px]'>
            <div className='relative w-full h-48'>
                <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className='rounded-t-2xl'
                
                
                />
                {isGuestFavorite && (
                    <span className='absolute top-2 left-2 g-white text-xs px-2 py-1 rounded-md shadow'>
                        Guest favorite
                    </span>

                )}
                </div>
                <div className='p-3 space-y-1'>
                    <h3 className='font-semibold text-gray-800 truncate'>{title}</h3>
                    <p className='text-sm text-gray-500'>{location}</p>
                    <p className='text-sm font-medium'>
                        Ksh{price.toLocaleString()} for {nights} nights
                    </p>
                    <p className='text-sm text-yellow-500'>{rating.toFixed(2)}</p>

                </div>
            </div>

    
        
        </>
    )
}

export default Card
