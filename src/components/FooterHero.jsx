import React from 'react'
import { Link } from 'react-router-dom'

function FooterHero() {
  return (
    <section className='absolute top-[-190px] bg-peach mx-6 text-center bg-cover px-6 py-16 rounded-2xl bg-herofooter bg-no-repeat bg-center md:left-10 md:right-10 md:top-[-204px] md:bg-herofooter-tablet md:mx-auto xl:mx-0 xl:min-w-[full] xl:left-40 xl:right-40 xl:flex xl:px-24 xl:pt-18 xl:pb-12 xl:top-[-180px] xl:bg-herofooter-desktop xl:bg-right-top'>
        <div className='xl:w-1/2'>
        <h1 className='px32 mb-1 md:mx-40 md:mb-6 md:px40 xl:mx-0 xl:text-start xl:mr-20 xl:mb-5'>Let’s talk about your project</h1>
        <p className='px15 mb-8 md:mx-20 md:text-base xl:mx-0 xl:text-start xl:mb-0'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <div className='xl:w-1/2 xl:flex xl:justify-end xl:items-center'>
        <Link to="/contact" className='btnd'>Get in touch</Link>
        </div>
    </section>
  )
}

export default FooterHero