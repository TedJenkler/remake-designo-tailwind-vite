import React from 'react'
import logo from "../assets/logo.png"
import hamburgermenu from "../assets/hamburgermenu.svg"

function Nav() {
  return (
    <nav className='w-full h-24 flex px-6 justify-between items-center md:px-10 md:py-16'>
        <div className='flex gap-1 items-center'>
            <img className='h-6 w-6' src={logo} alt='logoimg' />
            <h1 className='logotext text-dark-grey'>DESIGNO</h1>
        </div>
        <div className='flex items-center md:hidden md:absolute'>
            <img src={hamburgermenu} alt='hamburgermenu' />
        </div>
        <div className='hidden absolute md:flex md:relative'>
          <ul className='flex gap-10 text-sm tracking-[2px] font-normal text-dark-grey'>
            <li>OUR COMPANY</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav