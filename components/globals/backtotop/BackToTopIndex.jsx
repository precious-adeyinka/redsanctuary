import React, {useState, useEffect} from 'react'

export default function BackToTopIndex () {
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

    useEffect(() => {
        setInterval(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    setIsBackToTopVisible(true)
                } else {
                    setIsBackToTopVisible(false)
                }
            })
        }, 1000)
    }, [isBackToTopVisible])

     return (
        <a
        href="#" 
        className={`h-12 w-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer position fixed z-1000 bottom-28 transition duration-300 ${isBackToTopVisible ? 'right-10' : '-right-full'} `}
        style={{transition: 'all 0.5s ease-in-out'}}
        >
            <i className='la la-angle-up text-white text-2xl'></i>
        </a>
    )
}
