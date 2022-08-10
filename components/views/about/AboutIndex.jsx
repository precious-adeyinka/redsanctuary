import React from 'react'

// components
import NavIndex from '../../globals/nav/NavIndex'
import HeroIndex from '../../layouts/hero/HeroIndex'
import FooterIndex from '../../globals/footer/FooterIndex'
import BackToTopIndex from '../../globals/backtotop/BackToTopIndex'

// NEXT
import Image from 'next/image'


export default function AboutIndex() {
  return (
    <div className='h-auto w-full bg-white overflow-hidden'>
        <div className='h-auto w-11/12 mx-auto'>
            <NavIndex />
            <section className='h-auto w-full px-3 py-10 bg-red-50 rounded-b-md'>
                <h2 className='w-full text-2xl md:text-4xl font-medium flex items-center justify-center'>Get Involved!</h2>
                <p className='w-full md:w-5/12 mx-auto text-center text-gray-700 leading-snug my-3'>Help us to fight against animal extinction around the world one species at a time, in all the countries starting from yours by creating awareness.</p>
            </section>
            <section className='h-auto w-11/12 mx-auto my-5 md:mt-10 flex flex-col items-center justify-center'>
                <h2 className="w-full md:w-8/12 text-2xl md:text-4xl font-medium leading-tight text-center">
                    Meet our team of <em className='font-normal'>creators</em>, entrepreneuers and world-class <em className='font-normal'>problem solvers</em>
                </h2>
                <p className='w-full md:w-4/5 text-sm md:text-lg font-normal text-gray-600 text-center my-3'>We are a team of two, currently on a mission to help save the world by creating awareness, inspiring others and encouraging them to get involved in the preservation of ecosystem services one endangered species at a time, all around the world. 
                <span className='text-red-600 font-medium mx-1'>We are the redSantuary!!</span>
                </p>
                {/* Members */}
                <div className='h-auto w-full flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-7 my-10'>
                    {/* Card */}
                    <div className="h-auto w-52 flex flex-col items-center justify-center space-y-2">
                        <div className='h-52 w-full bg-transparent flex items-center justify-center overflow-hidden'>
                            <Image src="/assets/images/team/precious_adeyinka.jpg" height={500} width={500} alt="" />
                        </div>
                        <div className='w-full flex flex-col items-start justify-start space-y-0'>
                            <h2 className='font-medium text-lg text-gray-800'>
                                <a href="https://www.linkedin.com/in/precious-adeyinka" target="_blank" rel="noopener noreferrer">
                                Precious Adeyinka
                                </a>
                            </h2>
                            <p className='text-sm text-slate-500 font-normal'>
                                <em>Fullstack Engineer</em>
                            </p>
                        </div>
                    </div>
                    {/* Card */}
                    {/* <div className="h-auto w-52 flex flex-col items-center justify-center space-y-2">
                        <div className='h-52 w-full bg-transparent flex items-center justify-center overflow-hidden'>
                            <Image src="/assets/images/team/precious_adeyinka.jpg" height={500} width={500} alt="" />
                        </div>
                        <div className='w-full flex flex-col items-start justify-start space-y-0'>
                            <h2 className='font-medium text-lg text-gray-800'>Mohammed Eshan</h2>
                            <p className='text-sm text-slate-500 font-normal'>
                                <em>Backend Engineer</em>
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>
            <FooterIndex />
            <BackToTopIndex />
        </div>
    </div>
  )
}
