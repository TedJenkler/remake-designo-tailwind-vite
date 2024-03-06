import React from 'react'

function Form() {
  return (
    <form className='px-6 py-16 bg-peach text-center bg-formbg'>
        <h1 className='px32 mb-6'>Contact Us</h1>
        <p className='px15 mb-12'>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        <input className='h-9 w-full bg-peach border-b border-white placeholder-white/75 pb-4 pl-3 outline-none' placeholder='Name'></input>
        <input className='h-9 w-full bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 outline-none' placeholder='Email Adress'></input>
        <input className='h-9 w-full bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 outline-none' placeholder='Phone'></input>
        <textarea className='h-32 w-full bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 mb-14 outline-none' placeholder='Your Message'></textarea>
        <button className='btnd'>Submit</button>
    </form>
  )
}

export default Form