import React from 'react'
import frame from "../assets/frame.svg"

function Hero() {
  return (
    <section className='bg-peach text-center pt-20 bg-hero-pattern-mobile bg-no-repeat bg-center bg-auto md:mx-10 md:rounded-2xl md:bg-hero-pattern-tablet md:bg-right md:pt-16'>
        <h1 className='px32 mb-4 px-6 md:mx-20 md:px48'>Award-winning custom designs and digital branding solutions</h1>
        <p className='px15 mb-6 px-6 md:mx-28 md:text-base'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <button className='btnd mb-20 md:mb-16'>Learn More</button>
        <div className='md:mx-52'>
            <img className='w-full' src={frame} alt='heroimg' />
        </div>
    </section>
  )
}

export default Hero