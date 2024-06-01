"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [crypto1, setCrypto1] = useState("ETH");
  const [crypto2, setCrypto2] = useState("OTHER");

  const swap = () => {
    const temp = crypto1;
    setCrypto1(crypto2);
    setCrypto2(temp);
  };

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h2 className="text-6xl font-bold text-center my-16">Try swapping with our new hook</h2>
      <div className="bg-gray-900 p-6 w-xl rounded-xl shadow-md flex flex-col items-center space-y-4">
        <div className="flex flex-col w-full bg-gray-700 rounded-xl px-14 py-6">
          Sell
          <div className="flex flex-row space-x-14 py-8">
            <input className="bg-transparent focus:bg-transparent focus:outline-none" type="text" placeholder="Amount" />
            <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{crypto1}</div>
          </div>
        </div>
        <div className="flex-1 bg-gray-700 rounded-xl">
          <button className="btn btn-neutral" onClick={swap}>
            change
          </button>
        </div>
        <div className="flex flex-col w-full bg-gray-700 rounded-xl px-14 py-6">
          Buy
          <div className="flex flex-row space-x-14 py-8">
            <input className="bg-transparent focus:bg-transparent focus:outline-none" type="text" placeholder="Amount" />
            <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{crypto2}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
