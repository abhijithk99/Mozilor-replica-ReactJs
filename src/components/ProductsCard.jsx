import React from 'react'
import cookieyesLogo from '../assets/cookieyes-logo.svg'
import webtofeeLogo from '../assets/webtoffee-logo.svg'
import card1Img from '../assets/home-product-cy.svg'
function ProductsCard() {
  return (
    <div className='w-[70%] border rounded-[8px] pt-12'>
        <img src={cookieyesLogo} alt=""  className='mb-[16px] ml-12'/>
        <p className='font-[400] text-[22px] leading-[27px] mb-5 ml-12'>Cookie consent solution for<br/> privacy compliance.</p>
        <button className='text-red-600 border border-red-600 mb-3 ml-12'> Learn more</button>
        <img src={card1Img} alt="" className='' />
    </div>
  )
}

export default ProductsCard