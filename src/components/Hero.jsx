import React from 'react'
import frame from "../assets/frame.svg"

function Hero() {
  return (
    <section className='bg-peach text-center pt-20 bg-hero-pattern-mobile bg-no-repeat bg-center bg-auto'>
        <h1 className='px32 mb-4 px-6'>Award-winning custom designs and digital branding solutions</h1>
        <p className='px15 mb-6 px-6'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <button className='btnd mb-20'>Learn More</button>
        <div>
            <img className='w-full' src={frame} alt='heroimg' />
        </div>
    </section>
  )
}

export default Hero