import React from 'react'

function FooterHero() {
  return (
    <section className='absolute top-[-190px] bg-peach mx-6 text-center px-6 py-16 rounded-2xl bg-herofooter bg-no-repeat bg-center md:mx-10 md:top-[-264px] md:bg-herofooter-tablet xl:mx-40 xl:min-w-[1180px] xl:flex xl:px-24 xl:pt-18 xl:pb-12 xl:top-[-180px] xl:bg-herofooter-desktop xl:bg-right-top'>
        <div className='xl:w-1/2'>
        <h1 className='px32 mb-1 md:mx-40 md:mb-6 md:px40 xl:mx-0 xl:text-start xl:mr-20 xl:mb-5'>Let’s talk about your project</h1>
        <p className='px15 mb-8 md:mx-20 md:text-base xl:mx-0 xl:text-start xl:mb-0'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <div className='xl:w-1/2 xl:flex xl:justify-end xl:items-center'>
        <button className='btnd'>Get in touch</button>
        </div>
    </section>
  )
}

export default FooterHero