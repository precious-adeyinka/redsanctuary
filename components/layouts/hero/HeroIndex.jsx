import React, {useState, useEffect} from 'react'

// custom styles
import styled from './HeroIndex.module.css'

// NEXT
import Link from 'next/link'

export default function HeroIndex() {
    // states
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // functions
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    return (
        <div className={`h-32 w-11/12 bg-red-50 mx-auto my-0 rounded-b-md flex items-center justify-center ${styled.heroFormBg}`}>
            {/* Inner */}
            <div className='h-full w-full flex items-center justify-center'>
                <form className='h-full w-11/12 md:w-1/2 flex items-center justify-center'>
                    {/* Row */}
                    <div className='h-16 w-full flex items-center justify-center space-x-2'>
                        <div className='h-12 w-full position relative'>
                            <input 
                            type="search" 
                            placeholder='Search endangered species...' 
                            className='h-full w-full rounded-md px-3 py-2 pl-16 focus:outline-gray-100 focus:border-gray-300 focus:bg-white'
                            value={searchTerm}
                            onChange={(e) => {setSearchTerm(e.target.value)}}
                            />

                            <i className='la la-search position text-3xl text-gray-300 absolute top-2 left-4'></i>
                        </div>
                        {/* Filter */}
                        <div className='h-12 w-16 rounded-md bg-white flex items-center justify-center cursor-pointer position relative'>
                            <i 
                            onClick={() => toggleFilter()}
                            className='la la-sliders-h text-2xl text-red-600'></i>

                            {/* Dropdown */}
                            <div   className={`h-auto w-52 p-3 bg-white rounded-md flex-col items-center justify-center space-y-5 mt-2 position absolute top-full -left-full transform -translate-x-2/4 shadow-lg ${isFilterOpen ? 'flex' : 'hidden'}`}>
                                <Link href="#">
                                    <span className="flex items-center justify-center text-gray-600 cursor-pointer text-md font-medium">Species</span>
                                </Link>
                                <Link href="#">
                                    <span className="flex items-center justify-center text-gray-600 cursor-pointer text-md font-medium">Countries</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
