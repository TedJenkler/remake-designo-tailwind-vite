import React from 'react';
import keyimg1 from "../assets/keyimg1.png";
import keyimg2 from "../assets/keyimg2.png";
import keyimg3 from "../assets/keyimg3.png";

function Keywords() {
  return (
    <section className='mb-80 md:mx-10 lg:flex lg:mx-10 lg:gap-8 xl:mx-40'>
      {/* First Keyword */}
      <div className='text-center mb-20 md:flex md:items-center md:mb-8 lg:flex-col'>
        <div className='w-full flex items-center justify-center mb-16 md:mb-0'>
          <div className='bg-keyoval1 bg-no-repeat bg-center flex items-center w-52 h-52'>
            <img className='w-48 h-40' src={keyimg1} alt='keyword1' />
          </div>
        </div>
        <div className='md:text-start lg:text-center'>
          <h2 className='text-xl text-dark-grey font-medium tracking-[5px] mb-8'>PASSIONATE</h2>
          <p className='text-base text-dark-grey font-normal mx-6 md:mx-0 lg:px-8 xl:px-8'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
        </div>
      </div>

      {/* Second Keyword */}
      <div className='text-center mb-20 md:flex md:items-center md:mb-8 lg:flex-col'>
        <div className='w-full flex items-center justify-center mb-16 md:mb-0'>
          <div className='bg-keyoval2 bg-no-repeat bg-center flex items-center w-52 h-52'>
            <img className='w-48 h-40' src={keyimg2} alt='keyword2' />
          </div>
        </div>
        <div className='md:text-start lg:text-center'>
          <h2 className='text-xl text-dark-grey font-medium tracking-[5px] mb-8'>RESOURCEFUL</h2>
          <p className='text-base text-dark-grey font-normal mx-6 md:mx-0 lg:px-8'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
        </div>
      </div>

      {/* Third Keyword */}
      <div className='text-center mb-20 md:flex md:items-center md:mb-8 lg:flex-col'>
        <div className='w-full flex items-center justify-center mb-16 md:mb-0'>
          <div className='bg-keyoval3 bg-no-repeat bg-center flex items-center w-52 h-52'>
            <img className='w-48 h-32' src={keyimg3} alt='keyword3' />
          </div>
        </div>
        <div className='md:text-start lg:text-center'>
          <h2 className='text-xl text-dark-grey font-medium tracking-[5px] mb-8'>FRIENDLY</h2>
          <p className='text-base text-dark-grey font-normal mx-6 md:mx-0 lg:px-8'>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
        </div>
      </div>
    </section>
  );
}

export default Keywords;
