
"use client"
import { Button, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';


function Collection() {
   
    return (
        <>
       <section className="max-w-screen-2xl w-full mx-auto my-10 
                h-full" id="collection" aria-label="collection">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2
                     md:grid-cols-3 lg:grid-cols-3"> 
                      
                        <div className='overflow-hidden'>
                        <div className="bg-cover min-h-[400px] relative 
                         cursor-pointer hover:scale-105 transition-transform
                          duration-300 ease-in-out"
                            style={{ backgroundImage: "url('./collection-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='absolute top-0 left-0 m-8'>
                                <Text size="7" >Summer Collection</Text>
                                <br />
                                <Text size="4">Starting at $17.99</Text>
                            </div>
                            <div className='absolute bottom-0 left-0 m-8'>
                                <Button variant="ghost" size="4" asChild>
                                    <Link href="#">
                                        Shop Now
                                        <FaArrowRight />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        </div>

                        <div className='overflow-hidden'>
                        <div className="bg-cover min-h-[400px] relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                            style={{ backgroundImage: "url('./collection-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='absolute top-0 left-0 m-8'>
                                <Text size="7" >Buy 1 Get 1</Text>
                                <br />
                                <Text size="4">Starting at $7.99</Text>
                            </div>
                            <div className='absolute bottom-0 left-0 m-8'>
                                <Button variant="ghost" size="4" asChild>
                                    <Link href="#">
                                        Discover Now
                                        <FaArrowRight />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        </div>
                        <div className='overflow-hidden'>
                        <div className="bg-cover min-h-[400px] relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                            style={{ backgroundImage: "url('./collection-3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='absolute top-0 left-0 m-8'>
                                <Text size="7" >What&apos;s New?</Text>
                                <br />
                                <Text size="4">Get the glow</Text>
                            </div>
                            <div className='absolute bottom-0 left-0 m-8'>
                                <Button variant="ghost" size="4" asChild>
                                    <Link href="#">
                                        Discover Now
                                        <FaArrowRight />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
    
        </>
    );
}

export default Collection;

