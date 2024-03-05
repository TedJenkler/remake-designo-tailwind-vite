import React from 'react'
import HeroTemplate from '../components/HeroTemplate'
import ProductTemplate from '../components/ProductTemplate'
import airfilter from "../assets/airfilter.png"
import eyecam from "../assets/eyecam.png"
import faceit from "../assets/faceit.png"
import todo from "../assets/todo.png"
import blogr from "../assets/blogr.png"
import loop from "../assets/loop.png"

import GraphicBtn from '../components/GraphicBtn'
import DesignBtn from '../components/DesignBtn'

function AppDesign() {
  return (
    <main>
        <HeroTemplate h1="App Design" p="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />
        <div className='hidden xl:flex absolute left-0 top-72 mt-0 bg-light-grey/75 h-[594px] w-[1006px]  rounded-br-[297px] rounded-t-[297px] -z-10'></div>
        <div className='py-24 px-6 md:px-10 xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-x-8 xl:gap-y-8 xl:mx-40 xl:px-0'>
          <ProductTemplate img={airfilter} h1="AIRFILTER" p="Solving the problem of poor indoor air quality by filtering the air" />
          <ProductTemplate img={eyecam} h1="EYECAM" p="Product that lets you edit your favorite photos and videos at any time" />
          <ProductTemplate img={faceit} h1="FACEIT" p="Get to meet your favorite internet superstar with the faceit app" />
          <ProductTemplate img={todo} h1="TODO" p="A todo app that features cloud sync with light and dark mode" />
          <ProductTemplate img={loop} h1="LOOPSTUDIOS" p="A VR experience app made for Loopstudios" />
        </div>
        <div className='mb-80 flex flex-col px-6 md:px-10 xl:flex-row xl:mx-40 xl:px-0 xl:gap-8'>
            <DesignBtn />
            <GraphicBtn />
          </div>
    </main>
  )
}

export default AppDesign