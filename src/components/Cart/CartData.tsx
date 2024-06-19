"use client"
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import CartPayment from './CartPayment'
import ResetCart from './ResetCart'
import CartProduct from './CartProduct'
import { useSelector } from 'react-redux'

function CartData() {

    const { productData} = useSelector((state: any) => state.next);

  return (
    <>
      {productData.length > 0 ? (
        <>
          <div className=" col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px]  pb-1">
              <p className="text-2xl  font-semibold ">
                Your Cart
              </p>
            </div>
            <div className="p-2 flex flex-col gap-2 ">
              {productData.map((item: any) => (
                <div key={item._id}>
                  <CartProduct item={item} />
                </div>
              ))}
              <ResetCart />
            </div>
          </div>
          
          <div className=" col-span-1 p-4 rounded-lg flex items-center justify-center">
            <CartPayment />

          </div>
          <div className="xl:w-[1000px] md:w-[300px] md:m-1 border-[1px] p-4 m-10 ">
            <p>
            The price and availability of items at are subject to change.
            The Cart is a temporary place to store a list of your items 
            and reflects each item&apos;s most recent price.
            </p>
          </div>
        </>
      ) : (
        <div className=" h-64 col-span-5 flex flex-col items-center 
        justify-center py-5 rounded-lg shadow-lg ">
          <h1 className="text-lg font-medium my-5">Your cart is empty!</h1>
          
            <Button variant="classic"  size="3" asChild>
            <Link href={"/"}>
             Go shopping
             </Link>
            </Button>
          
        </div>
      )}
    </>
  )
}

export default CartData
