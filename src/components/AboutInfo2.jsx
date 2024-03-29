import React from 'react'
import aboutinfo from "../assets/aboutinfo2.jpg"

function AboutInfo2() {
  return (
    <section className='mb-80 md:mx-10 md:mb-96 xl:mx-40 xl:flex xl:flex-row-reverse xl:h-[640px]'>
        <div className='md:rounded-t-2xl xl:w-2/5'>
            <img className='h-80 w-full md:rounded-t-2xl xl:w-full xl:h-[640px] xl:rounded-tl-none xl:rounded-r-2xl' src={aboutinfo} alt='about info' />
        </div>
        <div className='py-20 px-6 text-center bg-bg bg-infoabout bg-no-repeat bg-right-top md:rounded-b-2xl md:bg-infoabout-tablet md:bg-center xl:w-3/5 xl:h-[640px] xl:rounded-br-none xl:rounded-l-2xl xl:flex xl:flex-col xl:justify-center xl:bg-left-bottom'>
            <h1 className='px32peach mb-6 md:px48'>The real deal</h1>
            <p className='px15grey mb-8 md:text-base md:mx-10'>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
            <p className='px15grey md:text-base md:mx-10'>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </div>
    </section>
  )
}

export default AboutInfo2