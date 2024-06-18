import { Button, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function authum() {
  return (
    <>
      <section className="max-w-screen-2xl w-full mx-auto my-20 h-full" id="collection" 
      aria-label="collection">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className='overflow-hidden col-span-1 xl:col-span-3'>
            <div
              className=" min-h-[400px] relative
               cursor-pointer hover:scale-105 transition-transform 
               duration-300 ease-in-out bg-cover bg-center"
              style={{ 
                backgroundImage: "url('./banner-1.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' }}
            >
              <div className='absolute top-0 left-0 m-8 w-[200px]'>
                <Text size="7">New Collection</Text>
                <br />
                <Text size="4">Discover Our Autumn Skincare</Text>
              </div>
              <div className='absolute bottom-0 left-0 m-8'>
                <Button variant="surface" size="4" asChild>
                  <Link href="#">
                    Explore More
                    <FaArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className='overflow-hidden col-span-1 xl:col-span-2'>
            <div
              className=" min-h-[400px] relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ backgroundImage: "url('./banner-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className='absolute top-0 left-0 m-8 w-[200px]'>
                <Text size="7">25% off Everything</Text>
                <br />
                <Text size="4">Makeup with extended range in colors for every human.</Text>
              </div>
              <div className='absolute bottom-0 left-0 m-8'>
                <Button variant="surface" size="4" asChild>
                  <Link href="#">
                    Shop Sale
                    <FaArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default authum
