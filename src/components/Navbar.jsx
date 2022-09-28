import React from 'react'
import logo from '../assets/mozilor-logo.svg'
function Navbar() {
  return (
    <>
   <div className = "w-sreen md:h-[100px] 72 bg-gradient-to-r from-white to-slate-200">
        <div className=' w-full flex justify-between items-center py-6 px-[100px]'>
            <img src={logo} alt="" className=''/>
            <ul className='md:flex sm:hidden'>
                <li className='pl-3'>Products</li>
                <li className='pl-3'>About Us</li>
                <li className='pl-3'>Contact</li>
                <button className='bg-red-600  ml-4 text-white'>We're Hiring</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar