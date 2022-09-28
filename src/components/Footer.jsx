import React from 'react'
import FooterLogo from '../assets/footer-logo.svg'
function Footer() {
  return (
    <>
    <div className = 'flex flex-col justify-between py-[50px] bg-[#0d123c]'>
        <div className= 'grid md:grid-cols-2 '>
        <div className='flex flex-col md:px-[120px]'>
            <img src={FooterLogo} alt=""  className='w-[200px] mb-6'/>
            <p className='max-w-[55%] text-white'>Mozilor builds extensions, plugins and apps to simplify work for businesses.</p>
        </div>
        <div className=' flex-col justify-between grid md:grid-cols-3 text-white'>
            <div className='flex flex-col'>
                <p className='pb-3 font-[500] text-2xl'>Products</p>
                <ul>
                    <li>cookieYes</li>
                    <li>WebToffee</li>
                </ul>
            </div>
            <div className='flex flex-col'>
            <p className='pb-3 font-[500] text-2xl'>Quick Links</p>
                <ul>
                    <li>About us</li>
                    <li>Career</li>
                    <li>Contat</li>
                </ul>
            </div>
            <div className='flex flex-col'>
            <p className='pb-3 font-[500] text-2xl'>Follow us</p>
                <ul>
                    
                </ul>
            </div>
        </div>
        </div>
        <hr/>
        <div className= 'grid md:grid-cols-2 text-white pt-8'>
            <div className='flex flex-col px-[120px]'>
                <p>2022 Mozilor - All right reserved</p>
            </div>
            <div className='flex flex-col float-right'>
                <a className='underline'>Terms and Conditions</a>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Footer