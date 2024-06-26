"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { footerLinks } from "@/constant";
import { FaArrowCircleUp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { Button, Text } from '@radix-ui/themes';


const FooterColumnMiddle = ({ title, links }: any) => (
    <div className="mx-auto">
        <Text size="6" >
            {title}
        </Text>
        <ul className="footer_ul m-1">
            {links.map((link: any,index:number) =>
                
                <div key={index}>
                    <Button variant='ghost' size="3" asChild>
                        <Link href="/" key={link} className='
                         mb-2 relative block '>
                            {link}
                        </Link>
                    </Button>
                </div>
                
            )}


        </ul>
    </div>
);

const Footer = () => {

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <footer>
                <div className="footer_back" >
                    <Button size="4"   onClick={ScrollToTop}>
                        Back to Top
                        <FaArrowCircleUp/>
                        </Button>
                </div>
                <div className="footer_middle ">
                    <FooterColumnMiddle title={footerLinks[0].title} links={footerLinks[0].links} />
                    <FooterColumnMiddle title={footerLinks[1].title} links={footerLinks[1].links} />
                    <FooterColumnMiddle title={footerLinks[2].title} links={footerLinks[2].links} />
                    <FooterColumnMiddle title={footerLinks[3].title} links={footerLinks[3].links} />
                </div>
                <div className='block '>
                    <div className='flex w-full items-center justify-center pt-2 text-center border-t' >
                        <Link href="/" >
                            <Image
                                alt='logo'
                                width={100}
                                height={100}
                                style={{ width: 100, height: "auto" }}
                                src='/logo.png'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading='lazy'
                            />
                        </Link>
                    </div>
                    <div className=' w-full items-center justify-center 
                        p-1 text-center '>
                        <div className="flex w-full items-center justify-center 
                         text-center gap-8 text-2xl mt-5 ">
                            <Button variant='ghost' size="4"   >
                                <Link href="/">
                                    <FaFacebookF />
                                </Link>
                            </Button>
                            <Button variant='ghost' size="4"   >
                                <Link href="/">
                                    <BsTwitter />
                                </Link>
                            </Button>
                            <Button variant='ghost' size="4"   >
                                <Link href="/">
                                    <BsPinterest />
                                </Link>
                            </Button>
                            <Button variant='ghost' size="4"   >
                                <Link href="/">
                                    <FaLinkedinIn />
                                </Link>
                            </Button>

                        </div>
                    </div>
                </div>
                <div className="footer_bottom ">
                    <div className='footer_copyright  pt-1 mx-auto'>

                        <div className="flex gap-10 mx-auto justify-center">
                            <p className='text-[14px] relative hover:underline cursor-pointer'>Terms and Conditions</p>
                            <Link href="/aviso">
                                <p className='text-[14px] relative hover:underline cursor-pointer'>Privacy</p>
                            </Link>
                            <Link href="/cookies">
                                <p className='text-[14px] relative hover:underline cursor-pointer'>
                                    Cookies Policy</p>
                            </Link>
                        </div>
                        <p className='text-center pt-5'>Copyrigth &copy; {new Date().getFullYear()},
                            Glowing, all rigths reserved.</p>
                        <br />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
