"use client"

import { MdChevronLeft, MdChevronRight } from "react-icons/md";


function Slider({ children }:any) {

    const slideLeft = () => {
        var slider = (document.getElementById('slider') as any);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = (document.getElementById('slider') as any);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <div className='flex items-center mx-10 py-5'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100'
                    onClick={slideLeft} size={40} />
                <div id='slider' className='flex w-full h-full 
                overflow-x-scroll scroll whitespace-nowrap gap-5
                scroll-smooth scrollbar-hide'>
                 <> {children} </>  
              
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer
                hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </>
    );
}

export default Slider;