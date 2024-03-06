import React from 'react'

function Form() {
  return (
    <form className='px-6 py-16 bg-peach text-center bg-formbg bg-no-repeat md:mx-10 md:rounded-2xl md:bg-formbg-tablet md:text-start md:px-14 xl:flex xl:p-0 xl:mx-40 xl:bg-formbg-desktop'>
        <div className='xl:w-1/2 xl:flex xl:flex-col xl:justify-center xl:px-24 xl:pt-32 xl:pb-40'>
            <h1 className='px32 mb-6 md:px48 md:mb-8'>Contact Us</h1>
            <p className='px15 mb-12 md:text-base xl:mr-10'>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        </div>
        <div className="xl:w-1/2 xl:px-24 xl:pt-14 xl:flex xl:flex-col xl:justify-center">
        <input className='h-9 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pb-4 pl-3 outline-none' placeholder='Name'></input>
        <input className='h-9 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 outline-none' placeholder='Email Adress'></input>
        <input className='h-9 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 outline-none' placeholder='Phone'></input>
        <textarea className='h-32 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 mb-14 outline-none' placeholder='Your Message'></textarea>
        <div className='md:flex md:justify-end'>
            <button className='btnd'>Submit</button>
        </div>
        </div>
    </form>
  )
}

export default Form