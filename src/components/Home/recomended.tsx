import React from 'react'
import Cardgrid from './Card'
import Slider from '../Slider'
import { Button, Text } from '@radix-ui/themes'
import { FaArrowRight } from 'react-icons/fa'

function recomended({products}:any) {
  return (
    <section className="max-w-screen-2xl w-full mx-auto my-10 
    h-full" id="recomended" aria-label="recomended">
            <div className='mb-5 justify-between flex'>
                <div>
                <Text size="7" mb="3" className=" ml-10">
                Trending 
                </Text>
                </div>
                <div className=" mr-10">
                <Button size="2" variant='surface' >
                Shop All Products
                <FaArrowRight />
                </Button>
                </div>
                </div>
        <Slider>
          {products?.slice(10, 17).map((product:any) => (
            <div key={product.slug} className="gap-3" >
            <Cardgrid product={product}/>
            </div>
          ))}
          </Slider>
    </section>
  )
}

export default recomended
