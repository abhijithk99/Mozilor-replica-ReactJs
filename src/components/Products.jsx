import React from 'react'
import ProductsCard from './ProductsCard'
 function Products() {
  return (
    <>
    <div className='flex flex-col justify-between pt-[100px]'>
        <div className= 'grid md:grid-cols-2'>
            <div className='flex flex-col'>
                <ProductsCard/>
            </div>
            <div className='flex flex-col'>
                <ProductsCard/>
            </div>
        </div>
    </div>
    </>
  )
 }
 export default Products