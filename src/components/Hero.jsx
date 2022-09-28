import React from 'react'
import heroImg from '../assets/hero-image.svg'
function Hero() {
  return (
    <>
    <div className='flex flex-col justify-between bg-gradient-to-r from-white to-slate-200'>
        <div className= 'grid md:grid-cols-2'>
            <div className='flex flex-col h-[90%] md:py-[50px] md:px-[110px] sm:px-[20px]'>
                <div className='max-w-[95%]'>
                <p className='text-5xl font-[700] leading-[60px] text-[#1a2578]'>We build products<br/> to <br/>simplify work for<br/>businesses</p>
                <p className='my-6 font-[400] text-[20px] leading-[33px]'>Our next-gen products empower businesses to<br/> implement agility and accelerate growth.</p>
                <button className='bg-red-600'>Learn more</button>
                <button className='text-red-600 border md:ml-4 sm:mt-4 border-red-600'>Work with us</button>
                </div>
            </div>
            <div className='flex flex-col h-[90%] pt-[73px]'>
                <img src={heroImg} alt = "" className='w-[85%]'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero