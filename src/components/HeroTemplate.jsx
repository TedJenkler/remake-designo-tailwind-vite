import React from 'react'

function HeroTemplate( {h1, p} ) {
  return (
    <section className='py-24 px-6 bg-peach text-center bg-herotemplate bg-right bg-no-repeat'>
        <h1 className='px32 mb-6'>{h1}</h1>
        <p className='px15'>{p}</p>
    </section>
  )
}

export default HeroTemplate