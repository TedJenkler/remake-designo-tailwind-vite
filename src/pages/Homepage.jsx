import React from 'react'
import Hero from '../components/Hero'
import ProjectLinks from '../components/ProjectLinks'
import Keywords from '../components/Keywords'

function Homepage() {
  return (
    <main className='relative bg-white z-50 min-h-full'>
        <Hero />
        <div className='hidden xl:flex absolute left-0 top-96 mt-32 bg-light-grey/75 h-[594px] w-[1006px]  rounded-br-[297px] rounded-t-[297px] -z-10'></div>
        <ProjectLinks />
        <Keywords />
        <div className='hidden xl:flex absolute right-0 bottom-[-306px] bg-light-grey/75 h-[594px] w-[1006px]  rounded-b-[297px] rounded-tl-[297px] -z-10'></div>
    </main>
  )
}

export default Homepage