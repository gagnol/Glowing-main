"use client"
import * as Popover from '@radix-ui/react-popover';
import { Button, Separator, Strong, Text } from '@radix-ui/themes'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import FormattedPrice from '../FormattedPrice';

const CountryTaxes = ({ discountPrice,product }: any) => {
   
    const totalPrice = (discountPrice + product.shipping )

    return (
        <> 
              <Popover.Root>
                        <Popover.Trigger >
                <Text size="2"  className=" my-2 flex ">
                    $ {product.shipping} Shipping
                </Text>
                <Button variant="ghost" size="3">
                    Details 
                    <FaCaretDown  />
                </Button>                
                </Popover.Trigger>
                <Popover.Portal >
                        <Popover.Content >
                    <div className='bg-gray-300 p-2 w-60 h-60'>
                        <ul className='m-0 p-0 '>
                            <h4 className='text-[18px] font-bold p-2 border-b'>
                                Total Price 
                            </h4>
                            <li className="nav_text">Price
                             <span className='float-right'>
                                <FormattedPrice discountPrice={discountPrice}/>
                            </span>
                                </li>
                            <li className="nav_text">Shipping
                                <span className='float-right'>${product.shipping}</span></li>
                                <Separator size="4" color='jade' />
                            <Text><Strong>Total</Strong>
                                <span className='float-right'>
                                <FormattedPrice discountPrice={totalPrice}/>
                                </span>
                            </Text>
                        </ul>
                    </div>
                </Popover.Content>
                </Popover.Portal>
              
            </Popover.Root>
            
        </>
    )
}

export default CountryTaxes
