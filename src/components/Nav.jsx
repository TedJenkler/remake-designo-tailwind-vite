import React from 'react'
import logo from "../assets/logo.png"
import hamburgermenu from "../assets/hamburgermenu.svg"

function Nav() {
  return (
    <nav className='w-full h-24 flex px-6 justify-between'>
        <div className='flex gap-1 items-center'>
            <img className='h-6 w-6' src={logo} alt='logoimg' />
            <h1 className='logotext'>DESIGNO</h1>
        </div>
        <div className='flex items-center'>
            <img src={hamburgermenu} alt='hamburgermenu' />
        </div>
    </nav>
  )
}

export default Nav