"use client"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";
import { Text } from "@radix-ui/themes";

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
                    <div className="absolute inset-0 z-10 my-auto mx-auto grid place-items-start text-start">
          <Text size="8">
          Reveal The... <br/>
          <span  className="ml-40">
            <Text size="8"  >
                Beauty of Skin
            </Text></span>
          </Text>
          </div> 
                </div>
                <div>
                    <Image alt="banner" width={1900} height={600}
                        src="/hero-banner-1.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover max-h-[600px]"
                        style={{ objectPosition: 'top' }}
                    />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;
