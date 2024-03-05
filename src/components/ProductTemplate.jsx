import React from 'react'

function ProductTemplate( {img, h1, p} ) {
  return (
    <section className='mb-10'>
        <img className='w-full h-80' src={img} alt={img} />
        <div className='bg-bg text-center py-8 px-8 rounded-b-2xl'>
            <h1 className='text-xl font-medium text-peach tracking-[5px] mb-4'>{h1}</h1>
            <p className='text-base font-normal text-dark-grey'>{p}</p>
        </div>
    </section>
  )
}

export default ProductTemplate