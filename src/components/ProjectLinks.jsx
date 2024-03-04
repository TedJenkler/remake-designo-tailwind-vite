import React from 'react'
import PLink from "../components/PLink"

function ProjectLinks() {
  return (
    <section className='bg-white py-32 px-6'>
      <PLink projectType="WEB DESIGN" bgColor="plink1" />
      <PLink projectType="APP DESIGN" bgColor="plink2" />
      <PLink projectType="GRAPHIC DESIGN" bgColor="plink3" />
    </section>
  )
}

export default ProjectLinks