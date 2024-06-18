"use client"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";
import { Button, Text } from "@radix-ui/themes";

const HeroBanner = () => {
    return (
        <div className="relative w-full mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                interval={5000}    >
               
                <div>
                    <Image alt="banner" width={1900} height={600}
                        src="/hero-banner-3.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover max-h-[600px]"
                        style={{ objectPosition: 'top' }}
                    />
           <div className="absolute inset-0 z-10 my-5  xl:my-20 mx-auto grid
            place-items-start text-start ml-10">
          <Text className="text-[22px]  xl:text-[32px]">
          Reveal The... <br/>
          <span  className="ml-2 xl:ml-40">
            <Text className="text-[22px] xl:text-[32px]"  >
                Beauty of Skin
            </Text></span>
          </Text>
          <Text         
            className="mt-4 mb-12 w-[40%] md:max-w-[400px] lg:max-w-3xl text-[16px] xl:text-[22px]"
          >
            Made using clean, non-toxic ingredients, our products are designed for everyone.  
          </Text>
          <div className=" bottom-0 xl:bottom-10 left-20">
      <Button size="4" variant="classic">Shop Now</Button>
      </div>
          </div> 
                </div>
                <div>
                <Image alt="banner" width={1900} height={600}
                        src="/hero-banner-1.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover max-h-[600px]"
                        style={{ objectPosition: 'top' }}
                    />
                  <div className="absolute inset-0 z-10 my-5  xl:my-20 mx-auto grid
            place-items-start text-start ml-10">
          <Text className="text-[22px]  xl:text-[32px]">
          Reveal The... <br/>
          <span  className="ml-2 xl:ml-40">
            <Text className="text-[22px] xl:text-[32px]"  >
                Beauty of Skin
            </Text></span>
          </Text>
          <Text
          className="mt-4 mb-12 w-[40%] md:max-w-[400px] lg:max-w-3xl text-[16px] xl:text-[22px]"
          >
            Made using clean, non-toxic ingredients, our products are designed for everyone.  
          </Text>
          <div className=" bottom-0 xl:bottom-10 left-20">
      <Button size="4" variant="classic">Shop Now</Button>
      </div>
          </div> 
             </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;
