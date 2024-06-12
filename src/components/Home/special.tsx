import { Button, Quote, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

function special() {
    return (
        <>
            <section className="max-w-screen-2xl w-full 
            mx-auto my-20 h-full bg-[#f0f0f0] p-20" 
            id="collection" aria-label="collection">
                <div className="grid gap-8 grid-cols-1 
                sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className='overflow-hidden col-span-1 xl:col-span-1 items-center flex justify-center'>

        <Image src="/offer-banner-1.jpg" width={305} height={408}  alt="offer products"
              className="w-100"/>

        </div>

        <div className='overflow-hidden col-span-1 xl:col-span-2 flex justify-center'>

        <Image src="/offer-banner-2.jpg" width={450} height={625}  alt="offer products"
              className="w-100"/>
        
        </div>
        <div className='overflow-hidden col-span-1 xl:col-span-2'>
        <div className='flex justify-between'>
        <div>
        <Text size="5">Special Offer<br/>
            <Quote> Don&apos;t miss Today&apos;s offers for limited time </Quote>
        </Text>
        </div>
        <div>
        <Button variant='surface' size="4" color='red' >20% OFF</Button>
        </div>
        </div>
        <div className="my-20 py-10">

        <Text size="8">Mountain Pine Bath Oil</Text><br/><br/>
        <Text size="4">Made using clean, non-toxic ingredients, 
            our products are designed for everyone.</Text>
            </div>
            <div className="my-10 flex">

              <Button variant='classic'size="3" color='gray' mx="4" >15</Button>
              <span className='p-1 text-[20px]'>:</span>
              <Button variant='classic'size="3" color='gray' mx="4" >21</Button>
              <span className='p-1 text-[20px]'>:</span>
              <Button variant='classic'size="3" color='gray' mx="4" >46</Button>
              

            </div>

            <Text size="4"><Strong>Get Only $39.00</Strong></Text>

        </div>
      </div>
  </section>
        </>
    )
}

export default special
