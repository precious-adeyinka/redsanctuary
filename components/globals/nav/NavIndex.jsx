import React, {useState} from 'react'

// NEXT
import Link from 'next/link'

export default function NavIndex() {
    // states
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // functions
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

  return (
    <nav className='h-12 w-11/12 mx-auto mt-3 bg-red-600 px-4 md:px-10 rounded-t-md position relative z-1000'>
        {/* Inner */}
        <div className='h-full w-full flex justify-between items-center'>
            {/* Left */}
            <div className='h-full w-1/2 flex items-center justify-start'>
                <h1 className='text-white text-md font-medium'>Red Sanctuary</h1>
            </div>
            {/* Right */}
            <div className='h-full w-1/2 flex items-center justify-end'>
                {/* Desktop Menu */}
                <ul className='h-full flex items-center justify-center space-x-5 showOnDesktop'>
                    <li className='flex items-center justify-center'>
                        <Link href="/">
                            <span className="flex items-center justify-center text-white cursor-pointer text-sm font-normal">Home</span>
                        </Link>
                    </li>
                    <li className='flex items-center justify-center'>
                        <Link href="/about">
                            <span className="flex items-center justify-center text-white cursor-pointer text-sm font-normal">About Us</span>
                        </Link>
                    </li>
                    <li className='flex items-center justify-center'>
                        <Link href="/sanctuary">
                            <span className="flex items-center justify-center text-white cursor-pointer text-sm font-normal">Sanctuary</span>
                        </Link>
                    </li>
                    <li className='flex items-center justify-center'>
                        <Link href="/participate">
                            <span className="flex items-center justify-center text-white cursor-pointer text-sm font-normal">Get Involved</span>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className='position relative z-100 hideOnDesktop'>
                    {/* Drawer */}
                    <div 
                    onClick={() => toggleDrawer()}
                    className='h-12 w-8 flex flex-col items-center justify-center space-y-1'>
                        <span className='h-1 w-full bg-white rounded-full'></span>
                        <span className='h-1 w-full bg-white rounded-full'></span>
                        <span className='h-1 w-full bg-white rounded-full'></span>
                    </div>
                    
                    {/* Menu */}
                    <ul 
                    id="mobileMenu"
                    className={`h-auto w-72 p-3 py-10 bg-white rounded-md flex-col items-center justify-center space-y-5 position absolute top-full -left-full transform -translate-x-3/4 shadow-lg ${isDrawerOpen ? 'flex' : 'hidden'}`}>
                        <li className='flex items-center justify-center'>
                            <Link href="#">
                                <span className="flex items-center justify-center text-red-600 cursor-pointer text-md font-medium">Home</span>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center'>
                            <Link href="#">
                                <span className="flex items-center justify-center text-red-600 cursor-pointer text-md font-medium">About Us</span>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center'>
                            <Link href="#">
                                <span className="flex items-center justify-center text-red-600 cursor-pointer text-md font-medium">Sanctuary</span>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center'>
                            <Link href="#">
                                <span className="flex items-center justify-center text-red-600 cursor-pointer text-md font-medium">Get Involved</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
