import React from 'react'
import frame from "../assets/frame.svg"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='bg-peach text-center pt-20 bg-hero-pattern-mobile bg-no-repeat bg-[center_top_102px] bg-contain md:mx-10 md:rounded-2xl md:bg-hero-pattern-tablet md:bg-[right_top_102px] md:pt-16 xl:mx-40 xl:flex xl:pt-36 xl:mb-0 xl:bg-hero-pattern-desktop xl:bg-tight-top xl:bg-contain xl:bg-right-top'>
        <div className='xl:text-start xl:pb-36 xl:w-1/2'>
        <h1 className='px32 mb-4 px-6 md:mx-20 md:px48 xl:m-0 xl:p-0 xl:pl-16 xl:mb-10'>Award-winning custom designs and digital branding solutions</h1>
        <p className='px15 mb-6 px-6 md:mx-28 md:text-base xl:m-0 xl:p-0 xl:pl-16 xl:mb-10'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <Link to="/about" className='btnd mb-20 md:mb-16 xl:m-0 xl:ml-16'>Learn More</Link>
        </div>
        <div className='md:mx-52 xl:mx-24 xl:w-1/2'>
            <img className='w-full bg-transparent' src={frame} alt='heroimg' />
        </div>
    </section>
  )
}

export default Hero