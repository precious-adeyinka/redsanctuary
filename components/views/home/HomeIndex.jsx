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
        <NavIndex />
        <HeroIndex />
        <ContentIndex />
        <FooterIndex />
        <BackToTopIndex />
    </div>
  )
}
