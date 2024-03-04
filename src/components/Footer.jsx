import React from 'react'
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.svg"
import youtube from "../assets/youtube.svg"
import twitter from "../assets/twitter.svg"
import pintrest from "../assets/pintrest.svg"
import instagram from "../assets/instagram.svg"
import FooterHero from './FooterHero'


function Footer() {
  return (
    <footer className='relative bg-black pt-64 pb-16'>
        <FooterHero />
        <div className='flex gap-1 items-center justify-center border-white/10 border-b pb-8 mx-6 mb-8'>
            <img className='h-6 w-6' src={logo} alt='logoimg' />
            <h1 className='logotext text-white'>DESIGNO</h1>
        </div>
        <ul className='text-white flex flex-col items-center gap-8 mb-10 text-sm font-normal tracking-[2px]'>
            <li>OUR COMPANY</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
        </ul>
        <div className='text-white/75 text-center mb-10 text-base'>
            <p className='font-bold'>Designo Central Office</p>
            <p className='font-normal'>3886 Wellington Street</p>
            <p className='font-normal'>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className='text-white/75 text-center mb-10 text-base'>
            <p className='font-bold'>Contact Us (Central Office)</p>
            <p className='font-normal'>P : +1 253-863-8967</p>
            <p className='font-normal'>M : contact@designo.co</p>
        </div>
        <div className='flex justify-center gap-4'>
            <img src={facebook} alt='facebook' />
            <img src={youtube} alt='youtube' />
            <img src={twitter} alt='twitter' />
            <img src={pintrest} alt='pintrest' />
            <img src={instagram} alt='instagram' />
        </div>
    </footer>
  )
}

export default Footer