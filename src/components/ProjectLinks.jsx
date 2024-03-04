import React from 'react'
import arrowrighto from "../assets/arrowrightorange.png"

function ProjectLinks() {
  return (
    <section className='bg-white py-32 px-6 md:px-10'>
        <div className='w-full h-52 flex flex-col items-center justify-center py-24 bg-plink1 bg-no-repeat rounded-2xl mb-6 md:bg-plink1-tablet'>
            <h1 className='mb-2 px28 md:px40 md:mb-6'>WEB DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} />
            </div>
        </div>
        <div className='w-full h-52 flex flex-col items-center justify-center py-24 bg-plink2 bg-no-repeat rounded-2xl mb-6 md:bg-plink2-tablet'>
            <h1 className='mb-2 px28 md:px40 md:mb-6'>APP DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} />
            </div>
        </div>
        <div className='w-full h-52 flex flex-col items-center justify-center py-24 bg-plink3 bg-no-repeat rounded-2xl mb-6 md:bg-plink3-tablet'>
            <h1 className='mb-2 px28 md:px40 md:mb-6'>GRAPHIC DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} />
            </div>
        </div>
    </section>
  )
}

export default ProjectLinks