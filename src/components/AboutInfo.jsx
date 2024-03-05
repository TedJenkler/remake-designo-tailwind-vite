import React from 'react'
import aboutinfo from "../assets/aboutinfo.png"

function AboutInfo() {
  return (
    <section className='md:mx-10'>
        <div className='md:rounded-t-2xl'>
            <img className='h-80 w-full md:rounded-t-2xl' src={aboutinfo} alt='about info' />
        </div>
        <div className='py-20 px-6 text-center bg-bg bg-infoabout bg-no-repeat bg-right-top md:rounded-b-2xl md:bg-infoabout-tablet md:bg-center'>
            <h1 className='px32peach mb-6 md:px48'>World-class talent</h1>
            <p className='px15grey mb-8 md:text-base md:mx-10'>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
            <p className='px15grey md:text-base md:mx-10'>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
        </div>
    </section>
  )
}

export default AboutInfo