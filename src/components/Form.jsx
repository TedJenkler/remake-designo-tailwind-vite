import React, { useState } from 'react';
import erroricon from "../assets/erroricon.svg";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    if (email.trim() === '') {
      setEmailError("Can’t be empty");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Wrong format");
      return;
    } else {
      setEmailError(false);
    }

    if (phone.trim() === '') {
      setPhoneError("Can’t be empty");
      return;
    } else if (!validatePhone(phone)) {
      setPhoneError("Wrong format");
      return;
    } else {
      setPhoneError(false);
    }

    if (message.trim() === '') {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/; // Assuming a 10-digit phone number
    return regex.test(phone);
  }

  return (
    <form className='px-6 py-16 bg-peach text-center bg-formbg bg-no-repeat md:mx-10 md:rounded-2xl md:bg-formbg-tablet md:text-start md:px-14 xl:flex xl:p-0 xl:mx-40 xl:bg-formbg-desktop'>
      <div className='xl:w-1/2 xl:flex xl:flex-col xl:justify-center xl:px-24 xl:pt-32 xl:pb-40'>
        <h1 className='px32 mb-6 md:px48 md:mb-8'>Contact Us</h1>
        <p className='px15 mb-12 md:text-base xl:mr-10'>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
      </div>
      <div className="relative xl:w-1/2 xl:px-24 xl:pt-14 xl:flex xl:flex-col xl:justify-center">
        <div className='relative'>
          <input onChange={(e) => {setName(e.target.value)}} value={name} className='h-9 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pb-4 pl-3 outline-none focus:border-b-4 text-white focus:font-bold' placeholder='Name'></input>
          {nameError === true ? <div className='flex absolute top-0 right-0 gap-2 items-center'><p className='text-white text-xs italic'>Can’t be empty</p><img src={erroricon} alt="error"/></div>  : null}
        </div>
        <div className='relative'>
          <input onChange={(e) => {setEmail(e.target.value)}} value={email} className='h-9 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 outline-none focus:border-b-4 text-white focus:font-bold' placeholder='Email Address'></input>
          {emailError ? <div className='flex absolute top-3 right-0 gap-2 items-center'><p className='text-white text-xs italic'>{emailError}</p><img src={erroricon} alt="error"/></div>  : null}
        </div>
        <div className='relative'>
          <input onChange={(e) => {setPhone(e.target.value)}} value={phone} className='h-9 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 outline-none focus:border-b-4 text-white focus:font-bold' placeholder='Phone'></input>
          {phoneError ? <div className='flex absolute top-3 right-0 gap-2 items-center'><p className='text-white text-xs italic'>{phoneError}</p><img src={erroricon} alt="error"/></div>  : null}
        </div>
        <div className='relative'>
          <textarea onChange={(e) => {setMessage(e.target.value)}} value={message} className='h-32 w-full bg-transparent bg-peach border-b border-white placeholder-white/75 pt-6 pb-4 pl-3 mb-14 outline-none focus:border-b-4 text-white focus:font-bold' placeholder='Your Message'></textarea>
          {messageError === true ? <div className='flex absolute top-5 right-0 gap-2 items-center'><p className='text-white text-xs italic'>Can’t be empty</p><img src={erroricon} alt="error"/></div>  : null}
        </div>
        <div className='md:flex md:justify-end'>
          <button onClick={handleSubmit} className='btnd'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Form;
