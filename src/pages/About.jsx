import React from 'react'
import HeroAbout from '../components/HeroAbout'
import AboutInfo from '../components/AboutInfo'
import LocationLink from '../components/LocationLink'
import AboutInfo2 from '../components/AboutInfo2'

function About() {
  return (
    <main>
        <HeroAbout />
        <AboutInfo />
        <LocationLink />
        <AboutInfo2 />
    </main>
  )
}

export default About