import React from 'react';
import arrowrighto from "../assets/arrowrightorange.png";
import { Link } from 'react-router-dom';

function ProjectLinks() {
  return (
    <section className='relative py-32 px-6 md:px-10 xl:px-40 xl:grid xl:grid-cols-2 xl:gap-8 xl:py-40'>
        <Link to="/webdesign" className='w-full h-52 flex flex-col items-center justify-center py-24 bg-plink1 bg-no-repeat rounded-2xl mb-6 md:bg-plink1-tablet xl:row-span-3 xl:h-full xl:m-0 xl:bg-plink1-desktop xl:hover:bg-plink1-desktop-h relative z-50'>
            <h1 className='mb-2 px28 md:px40 md:mb-6'>WEB DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} alt='arrow' />
            </div>
        </Link>
        <Link to="/appdesign" className='w-full h-52 flex flex-col items-center justify-center py-24 bg-plink2 bg-no-repeat rounded-2xl mb-6 md:bg-plink2-tablet xl:gap-6 xl:m-0 xl:h-full xl:bg-plink2-desktop xl:hover:bg-plink2-desktop-h'>
            <h1 className='mb-2 px28 md:px40 md:mb-6'>APP DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} alt='arrow' />
            </div>
        </Link>
        <Link to="/graphicdesign" className='w-full h-52 flex flex-col items-center justify-center py-24 bg-plink3 bg-no-repeat rounded-2xl mb-6 md:bg-plink3-tablet xl:gap-6 xl:m-0 xl:h-full xl:bg-plink3-desktop xl:hover:bg-plink3-desktop-h'>
            <h1 className='mb-2 px28 md:px40 md:mb-6'>GRAPHIC DESIGN</h1>
            <div className='flex gap-1 items-center'>
                <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
                <img className='h-2 w-1' src={arrowrighto} alt='arrow' />
            </div>
        </Link>
    </section>
  )
}

export default ProjectLinks;
