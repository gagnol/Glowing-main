"use client"
import React from "react";
import { useSelector } from "react-redux";
import FavoriteProduct from "@/components/Navbar/FavoriteProduct";
import ResetFavoriteItems from "@/components/Navbar/ResetFavoriteItems";
import Link from "next/link";
import { Button, Text } from "@radix-ui/themes";
import BgPage from "@/components/BgPage";

const FavoritePage: React.FC = () => {
  const { favoriteData } = useSelector((state: any) => state.next);
  return (
    <>
    <BgPage/>
    <div className="mt-[150px] max-w-screen-xl mx-auto
     px-6 gap-10 py-4 min-h-full absolute inset-0">
      {favoriteData.length > 0 ? (
        <div className=" p-4 rounded-lg">
          <div className="flex items-center justify-between border-b-[1px] pb-1">
            <p className="text-2xl font-semibold ">
              Your Favorite List 
            </p>
        </div>
          <div>
            {favoriteData.map((item: any) => (
              <div key={item._id} className="mt-2">
                <FavoriteProduct item={item} />                
              </div>
            ))}
            <ResetFavoriteItems />
          </div>
        </div>
      ) : (
        <div className=" h-96 flex flex-col items-center  border-b-gray-400
        justify-center py-5 rounded-lg shadow-lg ">
          <Text size="6" style={{marginBottom:"50px"}} >Nothing available in your list</Text>
            <Button variant="surface" size="4" asChild  >
            <Link href="/">
              Back
              </Link>
            </Button>
        </div>
      )}
    </div>
    </>
  );
};

export default FavoritePage;