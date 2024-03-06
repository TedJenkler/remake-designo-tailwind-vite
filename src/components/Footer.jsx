import React from 'react';
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import pintrest from "../assets/pintrest.svg";
import instagram from "../assets/instagram.svg";
import FooterHero from './FooterHero';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  return (
    <footer className='relative bg-black pt-64 pb-16 md:pb-20 xl:pt-36 z-50'>
      {location.pathname !== "/contact" ? <FooterHero /> : null }
      <div className="md:flex md:items-center md:justify-between md:mx-10 md:border-b md:border-white/10 md:mb-8 xl:px-40 xl:pb-5">
        <Link to="/" className='flex gap-1 items-center justify-center border-white/10 border-b pb-8 mx-6 mb-8 md:border-none md:m-0'>
          <img className='h-6 w-6' src={logo} alt='logoimg' />
          <h1 className='logotext text-white'>DESIGNO</h1>
        </Link>
        <ul className='text-white flex flex-col items-center gap-8 mb-10 text-sm font-normal tracking-[2px] md:flex-row'>
          <Link to="/about" className='hover:underline'>OUR COMPANY</Link>
          <Link to="/locations" className='hover:underline'>LOCATIONS</Link>
          <Link to="/contact" className='hover:underline'>CONTACT</Link>
        </ul>
      </div>
      <div className='md:flex md:justify-between md:mx-10 md:items-center xl:px-40'>
        <div className='text-white/75 text-center mb-10 text-base xl:text-start'>
          <p className='font-bold'>Designo Central Office</p>
          <p className='font-normal'>3886 Wellington Street</p>
          <p className='font-normal'>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className='text-white/75 text-center mb-10 text-base xl:text-start'>
          <p className='font-bold'>Contact Us (Central Office)</p>
          <p className='font-normal'>P : +1 253-863-8967</p>
          <p className='font-normal'>M : contact@designo.co</p>
        </div>
        <div className='flex justify-center gap-4'>
          <img className='hover:cursor-pointer' src={facebook} alt='facebook' />
          <img className='hover:cursor-pointer' src={youtube} alt='youtube' />
          <img className='hover:cursor-pointer' src={twitter} alt='twitter' />
          <img className='hover:cursor-pointer' src={pintrest} alt='pintrest' />
          <img className='hover:cursor-pointer' src={instagram} alt='instagram' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;

