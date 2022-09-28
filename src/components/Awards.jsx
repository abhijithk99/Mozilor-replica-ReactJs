import React from 'react'
import AwardLogo from './AwardLogo'

 function Awards() {
  return (
    <div className='flex flex-col justify-between pt-[100px] bg-gradient-to-r from-white to-slate-200 '>
        <div className= 'grid md:grid-cols-2 '>
            <div className='flex flex-col md:px-[110px] py-[100px]'>
            <p className='text-5xl font-[700] leading-[60px] text-[#1a2578] max-w-[80%]'>Creators of award-winning products</p>
            <p className='max-w-[80%] f-[400] text-[16] leading-[27px] my-6'>Our products are loved by customers and recommended by leading industry experts.</p>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-center '>
               <div className= 'grid grid-cols-2 '>
                  <div className='flex flex-col pt-6 mx-2'>
                    <AwardLogo/>
                    <AwardLogo/>
                  </div>
                  <div className='flex flex-col mx-2'>
                    <AwardLogo/>
                    <AwardLogo/>
                  </div>
                 </div>
              </div>
            </div>
        </div>
    </div>
  )
 }

 export default Awards