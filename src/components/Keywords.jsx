import React from 'react'
import keyimg1 from "../assets/keyimg1.png"
import keyimg2 from "../assets/keyimg2.png"
import keyimg3 from "../assets/keyimg3.png"

function Keywords() {
  return (
    <section className='mb-80'>
        <div className='text-center mb-20'>
            <div className='w-full flex items-center justify-center mb-16'>
                <div className='bg-keyoval1 bg-no-repeat bg-center flex items-center w-52 h-52'>
                    <img className='w-48 h-40' src={keyimg1} alt='keyword1' />
                </div>
            </div>
            <h2 className='text-xl text-dark-grey font-medium tracking-[5px] mb-8'>PASSIONATE</h2>
            <p className='text-base text-dark-grey font-normal mx-6'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
        </div>
        <div className='text-center mb-20'>
            <div className='w-full flex items-center justify-center mb-16'>
                <div className='bg-keyoval2 bg-no-repeat bg-center flex items-center w-52 h-52'>
                    <img className='w-48 h-40' src={keyimg2} alt='keyword2' />
                </div>
            </div>
            <h2 className='text-xl text-dark-grey font-medium tracking-[5px] mb-8'>PASSIONATE</h2>
            <p className='text-base text-dark-grey font-normal mx-6'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
        </div>
        <div className='text-center mb-20'>
            <div className='w-full flex items-center justify-center mb-16'>
                <div className='bg-keyoval3 bg-no-repeat bg-center flex items-center w-52 h-52'>
                    <img className='w-48 h-32' src={keyimg3} alt='keyword3' />
                </div>
            </div>
            <h2 className='text-xl text-dark-grey font-medium tracking-[5px] mb-8'>PASSIONATE</h2>
            <p className='text-base text-dark-grey font-normal mx-6'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
        </div>
    </section>
  )
}

export default Keywords