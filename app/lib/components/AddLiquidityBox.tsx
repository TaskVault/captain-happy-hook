// components/Navbar.tsx
"use client";
import React from "react";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";

const AddLiquidityBox = () => {
  return (
    <div className="bg-gray-900 p-4 w-[600px] rounded-2xl shadow-md flex flex-col items-center">
      Add liquidity to ETH/OTHER pool
      <div className="flex flex-col w-full bg-gray-700 rounded-2xl p-4 mt-3">
        <div className="flex flex-row w-full space-x-14 py-8">
          <input
            className="flex-auto bg-transparent focus:bg-transparent focus:outline-none text-2xl"
            type="number"
            placeholder="Amount"
          />
          <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{"ETH"}</div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gray-700 rounded-2xl p-4 mt-2">
        <div className="flex flex-row w-full space-x-14 py-8">
          <input
            className="flex-auto bg-transparent focus:bg-transparent focus:outline-none text-2xl"
            type="number"
            placeholder="Amount"
          />
          <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{"OTHER"}</div>
        </div>
      </div>
      <button className="flex w-full bg-pink-600 hover:bg-pink-700 rounded-2xl justify-center items-center text-xl p-4 mt-2">
        Add liquidity
      </button>
    </div>
  );
};

export default AddLiquidityBox;
