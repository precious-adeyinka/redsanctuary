import React, {useState, useEffect} from 'react'

// NEXT
import Link from 'next/link'

export default function SpeciesSliderIndex({label, filter, data}) {

  return (
    <div 
    className='h-auto md:h-72 w-full rounded-md flex flex-col items-center justify-start space-y-7'>
        {/* Header */}
        <div className='h-12 w-full flex items-center justify-between'>
            <div className='font-normal text-xl'>{label}</div>
            <div className='font-bold cursor-pointer flex items-center justify-center'>
                <Link href={'/sanctuary'}>
                   <div className='flex items-center justify-center space-x-2'>
                        <span>View all</span>
                        <i className='la la-arrow-right text-lg'></i>
                   </div>
                </Link>
            </div>
        </div>
        {/* Slider */}
        <div className='h-auto w-full grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                data && data?.map((item, index) => {
                    return (
                        <Link
                        key={item.id}
                        href={filter === 'country' ? `/country/${item.name}` : `/species/${item.name}`}
                        >
                            <div
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(${item.image})`,
                            objectFit: 'cover',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat'
                    
                        }}
                        className='h-72 w-full bg-red-600 rounded-md shadow-lg cursor-pointer flex items-center justify-center'>
                            <span className='text-white text-xl font-normal'>{item.name}</span>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}
