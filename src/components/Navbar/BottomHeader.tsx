
import Link from "next/link";
import SideNavigation from "./SideNavigation";
import { Button, Text } from "@radix-ui/themes";


const BottomHeader = () => {

  return (
    <div className=" mx-auto py-2 overflow-hidden 
    h-10 text-sm px-4 flex items-center justify-center bg-[#f0f0f0]">
      <SideNavigation />
     
      <Button variant="ghost" asChild size="4" className="hidden md:inline-flex justify-center h-8 px-2 border border-transparent 
      hover:border-white cursor-pointer duration-300 m-5">
      <Link href="/" >
       Home
        </Link>
      </Button>
      <Button variant="ghost" asChild size="4" className="hidden md:inline-flex justify-center h-8 px-2 border border-transparent 
      hover:border-white cursor-pointer duration-300 m-5">
      <Link href="#collection" >
       Collections
        </Link>
      </Button>
      <Button variant="ghost" asChild size="4" className="hidden md:inline-flex justify-center h-8 px-2 border border-transparent 
      hover:border-white cursor-pointer duration-300 m-5">
      <Link href={`/search?discount>`} >
       Today&apos;s Deals
        </Link>
      </Button>
      <Button variant="ghost" asChild size="4" className="hidden md:inline-flex justify-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 m-5">
        <Link href="/customer">
          Customer Service
        </Link>
      </Button>
     
      <Button variant="ghost" asChild  size="4" className="hidden md:inline-flex justify-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 m-5">
      <Link href={`/products/557`} >
       Gift  
        </Link>
      </Button>
     
    </div>
  );
};

export default BottomHeader;
