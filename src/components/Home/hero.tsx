"use client";

import { IconButton, Text } from "@radix-ui/themes";



function Hero() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full " />
       <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-start text-start">
          <Text size="8">
          Reveal The... <br/>
          <span  className="ml-40"><Text size="8"  >Beauty of Skin</Text></span>
          </Text>
          
          <Text
            size="6"
            className="mt-4 mb-12 w-[40%] md:max-w-full lg:max-w-3xl"
          >
            Made using clean, non-toxic ingredients, our products are designed for everyone.  
          </Text>
          <Text
            size="3"
            className="mt-1 mb-7 font-medium uppercase "
          >
          
          </Text>
          <div className="gap-8 flex w-[40%]">
            <IconButton size="3">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton size="3">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton size="3">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </div>
        </div>
      </div>
      </>
  );
}

export default Hero;
