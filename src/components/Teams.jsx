import React from 'react'
import homeIdeas from '../assets/home-ideas.svg'
function Teams() {
  return (
    <>
    <div className='flex flex-col justify-between pt-[100px] bg-gradient-to-r from-white to-slate-200 '>
        <div className= 'grid md:grid-cols-2 '>
            <div className='flex flex-col md:px-[110px] py-[100px]'>
            <p className='text-5xl font-[700] leading-[60px] text-[#1a2578] max-w-[80%]'>Let's build the next big thing!</p>
            <p className='max-w-[80%] f-[400] text-[16] leading-[27px] my-6'>Looking to achieve great things? You’ve come to the right place.</p>
            <button className='text-red-600 border  sm:mt-4 border-red-600'>Join the team</button>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-center '>
               <img src={homeIdeas} alt="" className='pb-[100px]'/>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Teams