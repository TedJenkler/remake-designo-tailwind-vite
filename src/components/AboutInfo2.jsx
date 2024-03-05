import React from 'react'
import aboutinfo from "../assets/aboutinfo2.jpg"

function AboutInfo2() {
  return (
    <section className='mb-80'>
        <div>
            <img className='h-80 w-full' src={aboutinfo} alt='about info' />
        </div>
        <div className='py-20 px-6 text-center bg-bg bg-infoabout bg-no-repeat bg-right-top'>
            <h1 className='px32peach mb-6'>The real deal</h1>
            <p className='px15grey mb-8'>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
            <p className='px15grey'>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </div>
    </section>
  )
}

export default AboutInfo2