import React from 'react'
import heroimg from "../assets/abouthero.png"

function HeroAbout() {
  return (
    <section className='md:mx-10 md:mb-32 xl:mx-40 xl:flex xl:flex-row-reverse xl:h-[480px]'>
        <div className='md:rounded-t-2xl xl:w-2/5 xl:rounded-l-2xl xl:rounded-t-none'>
            <img className='h-80 w-full md:rounded-t-2xl xl:h-[480px] xl:rounded-r-2xl xl:rounded-t-none' src={heroimg} alt='heroimg' />
        </div>
        <div className='py-20 px-6 text-center bg-peach bg-heroaboutbg bg-no-repeat bg-right-top md:rounded-b-2xl md:bg-heroaboutbg-tablet md:bg-center xl:w-3/5 xl:md:rounded-b-none xl:rounded-l-2xl xl:text-start xl:flex xl:flex-col xl:justify-center xl:px-0 xl:pr-24 xl:bg-heroaboutbg-desktop xl:bg-right-top'>
            <h1 className='px32 mb-6 md:px48 xl:ml-24'>About Us</h1>
            <p className='px15 md:mx-10 md:text-base xl:m-0 xl:ml-24'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
        </div>
    </section>
  )
}

export default HeroAbout