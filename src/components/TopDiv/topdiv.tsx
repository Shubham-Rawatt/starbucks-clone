import React from 'react'
import Image from "next/image";

const TopDiv = () => {
  return (
     <div className="flex items-center justify-between bg-[#1e3932] px-40 py-6">
        
        <div className="flex items-center gap-2">
          <Image src="/images/star.svg" alt="Starbucks logo" width={25} height={25} />
          <h5 className="text-sm text-[#f9f9f9]">Sign in to 
            <span className="font-semibold text-[#c5962a]"> Earn Stars </span>
            on every order
          </h5>
        </div>

        <button className="px-5 rounded-full bg-[#f0f0f0] p-1 text-sm font-semibold text-[#212529]">
          Know More
        </button>
      </div> 
  )
}

export default TopDiv;