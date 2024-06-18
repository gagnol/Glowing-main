import { Heading } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'


const Middleimage = ({product}:any) => {
    
    return ( 
<div className="max-w-screen-2xl mx-auto py-2 overflow-x-hidden text-center">
{product.department ==="Men"?
(<>
<Heading size="6" my="4">Men&apos;s Size Guide</Heading>
<Image alt='men' width={800} height={400}
src="/bg-mega-menu.jpg" 

/>

</>):(<>
    <Heading size="6" my="4">Women&apos;s Size Guide</Heading>
    <Image alt='woman' width={1500} height={400}
    src="bg-mega-menu.jpg" />
</>)
       
}       
  </div>
    )
}

export default Middleimage
