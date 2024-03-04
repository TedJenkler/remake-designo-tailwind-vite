import React from 'react';
import arrowSrc from "../assets/arrowrightorange.png"

export default function PLink({ projectType, bgColor }) {
  return (
    <div className={`w-full flex flex-col items-center py-24 bg-${bgColor} bg-no-repeat rounded-2xl mb-6`}>
      <h1 className='mb-2 px28'>{projectType}</h1>
      <div className='flex gap-1 items-center'>
        <p className='px15 tracking-[5px]'>VIEW PROJECTS</p>
        <img className='h-2 w-1' src={arrowSrc} alt="Arrow" />
      </div>
    </div>
  );
}