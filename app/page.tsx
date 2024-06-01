"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [crypto1, setCrypto1] = useState("ETH");
  const [crypto2, setCrypto2] = useState("OTHER");

  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");

  const switch12 = () => {
    const temp = crypto1;
    const tempAmount = amount1;
    setAmount1(amount2);
    setCrypto1(crypto2);
    setAmount2(tempAmount);
    setCrypto2(temp);
  };

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h2 className="text-6xl font-bold text-center my-16">Try swapping with our new hook</h2>
      <div className="bg-gray-900 p-4 w-[600px] rounded-2xl shadow-md flex flex-col items-center">
        <div className="flex flex-col w-full bg-gray-700 rounded-2xl p-4 -mb-5">
          Sell
          <div className="flex flex-row w-full space-x-14 py-8">
            <input
              className="flex-auto bg-transparent focus:bg-transparent focus:outline-none text-2xl"
              type="number"
              placeholder="Amount"
              value={amount1}
              onChange={(e) => setAmount1(e.target.value)}
            />
            <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{crypto1}</div>
          </div>
        </div>
        <div className="flex-1 bg-gray-700 rounded-xl">
          <button className="relative z-50 btn btn-neutral" onClick={switch12}>
            <Image width={20} height={20} src="https://www.svgrepo.com/show/119597/up-and-down-arrows.svg" alt="Swap" />
          </button>
        </div>
        <div className="flex flex-col w-full bg-gray-700 rounded-2xl p-4 -mt-5">
          Buy
          <div className="flex flex-row w-full space-x-14 py-8">
            <input
              className="flex-auto bg-transparent focus:bg-transparent focus:outline-none text-2xl"
              type="number"
              placeholder="Amount"
              value={amount2}
              onChange={(e) => setAmount2(e.target.value)}
            />
            <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{crypto2}</div>
          </div>
        </div>
        <button className="flex w-full bg-pink-600 hover:bg-pink-700 rounded-2xl justify-center items-center text-xl p-4 mt-2">
          Swap
        </button>
      </div>
    </main>
  );
}
