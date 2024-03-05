import React from 'react'
import { Link } from 'react-router-dom'

function MobileNav( {setToggle} ) {
  return (
    <div className='absolute bg-black text-white h-60 w-full z-50'>
        <ul className='flex flex-col py-12 px-6 gap-8 text-2xl font-normal tracking-[2px]'>
            <Link onClick={(e) => setToggle(false)} to="/about">OUR COMPANY</Link>
            <Link onClick={(e) => setToggle(false)} to="/locations">LOCATIONS</Link>
            <Link>CONTACT</Link>
        </ul>
    </div>
  )
}

export default MobileNav