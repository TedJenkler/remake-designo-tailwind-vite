import React from 'react'
import HeroAbout from '../components/HeroAbout'
import AboutInfo from '../components/AboutInfo'
import LocationLink from '../components/LocationLink'
import AboutInfo2 from '../components/AboutInfo2'

function About() {
  return (
    <main>
        <HeroAbout />
        <div className='hidden xl:flex absolute left-0 top-96 mt-32 bg-light-grey/75 h-[594px] w-[1006px]  rounded-br-[297px] rounded-t-[297px] -z-10'></div>
        <AboutInfo />
        <LocationLink />
        <AboutInfo2 />
        <div className='hidden xl:flex absolute right-[-25%] bottom-[-1550px] bg-light-grey/75 h-[594px] w-[1006px]  rounded-b-[297px] rounded-tl-[297px] -z-10'></div>
    </main>
  )
}

export default About