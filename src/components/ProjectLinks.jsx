import React from 'react'
import arrowrighto from "../assets/arrowrightorange.png"

function ProjectLinks() {
  return (
    <section className='bg-white py-32 px-6'>
        <div className='w-full flex flex-col items-center py-24 bg-plink1 bg-no-repeat rounded-2xl mb-6'>
            <h1 className='mb-2 px28'>WEB DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} />
            </div>
        </div>
        <div className='w-full flex flex-col items-center py-24 bg-plink2 bg-no-repeat rounded-2xl mb-6'>
            <h1 className='mb-2 px28'>APP DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} />
            </div>
        </div>
        <div className='w-full flex flex-col items-center py-24 bg-plink3 bg-no-repeat rounded-2xl mb-6'>
            <h1 className='mb-2 px28'>GRAPHIC DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} />
            </div>
        </div>
    </section>
  )
}

export default ProjectLinks