import React from 'react'
import canada from "../assets/canada.png"
import australia from "../assets/australia.png"
import uk from "../assets/unitedkingdom.png"

function LocationLink() {
  return (
    <section className='py-32 px-3'>
        <div className='flex flex-col items-center mb-12'>
            <div className='mb-12'>
                <img src={canada} alt='canada' />
            </div>
            <h2 className='mb-8 text-xl text-dark-grey font-normal'>CANADA</h2>
            <button className='btnl'>SEE LOCATION</button>
        </div>
        <div className='flex flex-col items-center mb-12'>
            <div className='mb-12'>
                <img src={australia} alt='australia' />
            </div>
            <h2 className='mb-8 text-xl text-dark-grey font-normal'>AUSTRALIA</h2>
            <button className='btnl'>SEE LOCATION</button>
        </div>
        <div className='flex flex-col items-center'>
            <div className='mb-12'>
                <img src={uk} alt='uk' />
            </div>
            <h2 className='mb-8 text-xl text-dark-grey font-normal'>UNITED KINGDOM</h2>
            <button className='btnl'>SEE LOCATION</button>
        </div>
    </section>
  )
}

export default LocationLink