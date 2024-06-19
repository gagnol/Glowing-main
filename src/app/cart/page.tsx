
import React from "react";

import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import CartData from "@/components/Cart/CartData";

export default async function Cart() {
  
  const session = await getServerSession();

    if (!session?.user) {
        redirect("/signin")
    }


  return (
    <div className="min-h-[900px] max-w-screen-2xl mx-auto
     px-6 grid md:grid-cols-2 xl:grid-cols-5 gap-2 py-4">
     <CartData/> 
    </div>
  );
};

