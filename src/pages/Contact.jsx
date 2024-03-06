import React from 'react'
import LocationLink from '../components/LocationLink'
import Form from '../components/Form'

function Contact() {
  return (
    <main>
        <Form  />
        <LocationLink />
        <div className='hidden xl:flex absolute right-0 top-96 mt-96 bg-light-grey/75 h-[594px] w-[1006px]  rounded-br-[297px] rounded-t-[297px] -z-10'></div>
    </main>
  )
}

export default Contact