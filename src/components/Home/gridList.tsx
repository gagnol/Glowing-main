"use client"
import React, { useRef } from 'react';
import { InView } from 'react-intersection-observer';
import Card from './Card'
import { Button, Heading, Text } from '@radix-ui/themes';
import { FaArrowRight } from 'react-icons/fa';


const GridList = ({ products }:any) => {

    return (
        <>
        
                <section className="max-w-screen-2xl w-full mx-auto my-5 
                h-full" id="gridlist" aria-label="gridlist">
                    <div className='mb-5 justify-between flex'>
                <div>
                <Text size="7" mb="3" className=" ml-10">
                Top Products
                </Text>
                </div>
                <div className=" mr-10">
                <Button size="2" variant='surface' >
                Shop All Products
                <FaArrowRight />
                </Button>
                </div>
                </div>
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {products.slice(0, 10).map((product:any) => (
                           <div key={product.slug} className="flex justify-center ">
                        <Card product={product} />
                        </div>
                    ))}
                </div>
            </section>
    
</>
    );
};

export default GridList;
