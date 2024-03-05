import React from 'react'
import arrowrighto from "../assets/arrowrightorange.png";

function AppBtn() {
  return (
    <div className='w-full h-52 flex flex-col items-center justify-center py-24 bg-plink2 bg-no-repeat rounded-2xl mb-6 brightness-100 md:bg-plink2-tablet'>
        <h1 className='mb-2 px28'>APP DESIGN</h1>
        <div className='flex gap-1 items-center'>
            <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
            <img className='h-2 w-1' src={arrowrighto} alt='arrow' />
        </div>
    </div>
  )
}

export default AppBtn