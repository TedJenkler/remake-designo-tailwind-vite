import React from 'react'

function HeroTemplate( {h1, p} ) {
  return (
    <section className='py-24 px-6 bg-peach text-center bg-herotemplate bg-right bg-no-repeat md:mx-10 md:rounded-2xl md:bg-herotemplate-tablet md:bg-cover xl:mx-40 xl:bg-herotemplate-desktop'>
        <h1 className='px32 mb-6 md:px48'>{h1}</h1>
        <p className='px15 md:text-base md:mx-20 xl:mx-72'>{p}</p>
    </section>
  )
}

export default HeroTemplate