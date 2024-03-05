import React from 'react'
import HeroTemplate from '../components/HeroTemplate'
import ProductTemplate from '../components/ProductTemplate'
import express from "../assets/express.png"
import transfer from "../assets/transfer.png"
import photon from "../assets/photon.png"
import builder from "../assets/builder.png"
import blogr from "../assets/blogr.png"
import camp from "../assets/camp.png"
import AppBtn from '../components/AppBtn'
import GraphicBtn from '../components/GraphicBtn'

function WebDesign() {
  return (
    <main>
        <HeroTemplate h1="Web Design" p="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
        <div className='py-24 px-6'>
          <ProductTemplate img={express} h1="EXPRESS" p="A multi-carrier shipping website for ecommerce businesses" />
          <ProductTemplate img={transfer} h1="TRANSFER" p="Site for low-cost money transfers and sending money within seconds" />
          <ProductTemplate img={photon} h1="PHOTON" p="A state-of-the-art music player with high-resolution audio and DSP effects" />
          <ProductTemplate img={builder} h1="BUILDER" p="Connects users with local contractors based on their location" />
          <ProductTemplate img={blogr} h1="BLOGR" p="Blogr is a platform for creating an online blog or publication" />
          <ProductTemplate img={camp} h1="CAMP" p="Get expert training in coding, data, design, and digital marketing" />
        </div>
        <div className='mb-80 flex flex-col px-6'>
            <AppBtn />
            <GraphicBtn />
          </div>
    </main>
  )
}

export default WebDesign