import React from 'react'
import heroimg from "../assets/abouthero.png"

function HeroAbout() {
  return (
    <section className=''>
        <div>
            <img className='h-80 w-full' src={heroimg} alt='heroimg' />
        </div>
        <div className='py-20 px-6 text-center bg-peach bg-heroaboutbg bg-no-repeat bg-right-top'>
            <h1 className='px32 mb-6'>About Us</h1>
            <p className='px15'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
        </div>
    </section>
  )
}

export default HeroAbout