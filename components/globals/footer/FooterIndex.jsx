import React from 'react'
import styled from './FooterIndex.module.css'

// NEXT
import Link from 'next/link'

export default function FooterIndex() {
  return (
    <footer className='h-auto w-full mx-auto flex flex-col items-center justify-center space-y-3 mt-3 md:mt-20 mb-5'>
        {/* Top */}
        {/* <div className={`h-44 w-full bg-gray-50 rounded-md flex items-center justify-center ${styled.footerCTABg}`}>
            <h3 className='text-lg text-white font-normal bg-red-600 rounded-md px-10 py-2 cursor-pointer'>Get Involved</h3>
        </div> */}

        {/* Down */}
        <div className='h-auto md:h-12 w-full bg-gray-100 rounded-md flex flex-col md:flex-row items-center justify-center px-5 py-3'>
            <div className='h-12 md:h-full w-full md:w-1/2 flex items-center justify-center md:justify-start'>
                <h2 className='font-normal text-sm text-gray-700 text-center md:text-left'>&copy; Copyright Red Sanctuary | All Rights Reserved</h2>
            </div>
            <div className='h-12 md:h-full w-full md:w-1/2 flex items-center justify-center md:justify-end space-x-4'>
                <Link href="#">
                    <i className='la la-facebook text-2xl md:text-xl text-red-500 cursor-pointer'></i>
                </Link>
                <Link href="#">
                    <i className='la la-twitter text-2xl md:text-xl text-red-500 cursor-pointer'></i>
                </Link>
                <Link href="#">
                    <i className='la la-linkedin text-2xl md:text-xl text-red-500 cursor-pointer'></i>
                </Link>
            </div>
        </div>
    </footer>
  )
}
