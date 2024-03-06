import React from 'react'
import logo from "../assets/logo.png"
import hamburgermenu from "../assets/hamburgermenu.svg"
import { Link } from 'react-router-dom'

function Nav( {toggle, setToggle} ) {
  return (
    <nav className='w-full h-24 flex px-6 justify-between items-center md:px-10 md:py-16 xl:px-40 z-50'>
        <div className='flex gap-1 items-center'>
            <img className='h-6 w-6' src={logo} alt='logoimg' />
            <h1 className='logotext text-dark-grey'>DESIGNO</h1>
        </div>
        <div onClick={(e) => {setToggle(!toggle)}} className='flex items-center md:hidden md:absolute'>
            <img src={hamburgermenu} alt='hamburgermenu' />
        </div>
        <div className='hidden absolute md:flex md:relative'>
          <ul className='flex gap-10 text-sm tracking-[2px] font-normal text-dark-grey'>
            <Link to="/about" className='hover:underline'>OUR COMPANY</Link>
            <Link to="/locations" className='hover:underline'>LOCATIONS</Link>
            <Link to="/contact" className='hover:underline'>CONTACT</Link>
          </ul>
        </div>
    </nav>
  )
}

export default Nav