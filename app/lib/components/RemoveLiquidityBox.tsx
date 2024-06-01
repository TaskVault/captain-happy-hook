// components/Navbar.tsx
"use client";
import React from "react";

const RemoveLiquidityBox = () => {
  return (
    <div className="bg-custom-blue p-4 w-[600px] rounded-2xl shadow-md flex flex-col items-center">
      Remove liquidity from ETH/OTHER pool
      <div className="flex flex-row w-full justify-between pt-6 pb-4">
        <p className="text-xl">Your Liquidity</p>
        <p className="text-xl">TBA $</p>
      </div>
      <div className="flex flex-col w-full bg-custom-light-blue rounded-2xl p-4 mt-3">
        <div className="flex flex-row w-full space-x-14 py-8">
          <input
            className="flex-auto bg-transparent focus:bg-transparent focus:outline-none text-2xl"
            type="number"
            placeholder="Amount to remove"
          />
        </div>
      </div>
      <button className="flex w-full bg-pink-600 hover:bg-pink-700 rounded-2xl justify-center items-center text-xl p-4 mt-2">
        Remove liquidity
      </button>
    </div>
  );
};

export default RemoveLiquidityBox;
