import React from 'react'

// components
import NavIndex from '../../globals/nav/NavIndex'
import FooterIndex from '../../globals/footer/FooterIndex'
import BackToTopIndex from '../../globals/backtotop/BackToTopIndex'
import HeroIndex from '../../layouts/hero/HeroIndex'
import ContentIndex from '../content/ContentIndex'

export default function HomeIndex() {
  return (
    <div className='h-auto w-full bg-white overflow-hidden'>
      <div className='h-auto w-11/12 mx-auto'>
        <NavIndex />
        {/* <HeroIndex /> */}
        <section className='h-auto w-full px-3 py-10 bg-red-50 rounded-b-md'>
          <h2 className='w-full text-2xl md:text-4xl font-medium flex items-center justify-center text-black'>We Are REDSANCTUARY!!</h2>
          <p className='w-full md:w-5/12 mx-auto text-center text-gray-700 leading-snug my-3 text-gray-600'>Help us to fight against animal extinction around the world one species at a time, in all the countries starting from yours by creating awareness.</p>
        </section>
        <ContentIndex />
        <FooterIndex />
        <BackToTopIndex />
      </div>
    </div>
  )
}
