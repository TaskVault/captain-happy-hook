"use client";
import Image from "next/image";
import { useState } from "react";
import { useWriteContract } from "wagmi";

export default function Home() {
  const [action, setAction] = useState("Add");

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h2 className="text-6xl font-bold text-center mt-16 mb-12">Manage your liquidity</h2>
      <div className="flex flex-row space-x-10 mb-4">
        <button onClick={(e) => setAction("Add")} className="btn btn-neutral rounded-full">
          Add Liquidity
        </button>
        <button onClick={(e) => setAction("Remove")} className="btn btn-neutral rounded-full">
          Remove Liquidity
        </button>
      </div>
      {action === "Add" ? (
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
      ) : (
        <div className="bg-gray-900 p-4 w-[600px] rounded-2xl shadow-md flex flex-col items-center">
          Remove liquidity from ETH/OTHER pool
          <div className="flex flex-row w-full justify-between pt-6 pb-4">
            <p className="text-xl">Your Liquidity</p>
            <p className="text-xl">TBA $</p>
          </div>
          <div className="flex flex-col w-full bg-gray-700 rounded-2xl p-4 mt-3">
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
      )}
    </main>
  );
}
