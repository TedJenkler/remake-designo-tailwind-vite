import React from 'react'
import HeroTemplate from '../components/HeroTemplate'
import ProductTemplate from '../components/ProductTemplate'
import tim from "../assets/tim.png"
import boxed from "../assets/boxed.png"
import science from "../assets/science.png"
import AppBtn from '../components/AppBtn'
import DesignBtn from '../components/DesignBtn'

function GDesign() {
  return (
    <main>
        <HeroTemplate h1="Graphic Design" p="We deliver eye-catching branding materials that are tailored to meet your business objectives." />
        <div className='hidden xl:flex absolute left-0 top-72 mt-0 bg-light-grey/75 h-[594px] w-[1006px]  rounded-br-[297px] rounded-t-[297px] -z-10'></div>
        <div className='py-24 px-6 md:px-10 xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-8 xl:gap-y-8 xl:mx-40 xl:px-0'>
          <ProductTemplate img={tim} h1="TIM BROWN" p="A book cover designed for Tim Brown’s new release, ‘Change’" />
          <ProductTemplate img={boxed} h1="BOXED WATER" p="A simple packaging concept made for Boxed Water" />
          <ProductTemplate img={science} h1="SCIENCE!" p="A poster made in collaboration with the Federal Art Project" />
        </div>
        <div className='mb-80 flex flex-col px-6 md:px-10 xl:flex-row xl:mx-40 xl:px-0 xl:gap-8'>
            <DesignBtn />
            <AppBtn />
          </div>
    </main>
  )
}

export default GDesign