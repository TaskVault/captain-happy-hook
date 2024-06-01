"use client";
import Image from "next/image";
import { useState } from "react";
import { useWriteContract, useAccount } from "wagmi";

export default function Home() {
  const { isConnecting, isDisconnected } = useAccount();
  const { writeContract } = useWriteContract();

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

  const swap = () => {
    return true;
    /*
    writeContract({
       address: '0x841B5A0b3DBc473c8A057E2391014aa4C4751351',
       abi: [{"inputs":[{"internalType":"contract IPoolManager","name":"_manager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"NoSwapOccurred","type":"error"},{"inputs":[],"name":"manager","outputs":[{"internalType":"contract IPoolManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"int24","name":"tickSpacing","type":"int24"},{"internalType":"contract IHooks","name":"hooks","type":"address"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"components":[{"internalType":"bool","name":"zeroForOne","type":"bool"},{"internalType":"int256","name":"amountSpecified","type":"int256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct IPoolManager.SwapParams","name":"params","type":"tuple"},{"components":[{"internalType":"bool","name":"takeClaims","type":"bool"},{"internalType":"bool","name":"settleUsingBurn","type":"bool"}],"internalType":"struct PoolSwapTest.TestSettings","name":"testSettings","type":"tuple"},{"internalType":"bytes","name":"hookData","type":"bytes"}],"name":"swap","outputs":[{"internalType":"BalanceDelta","name":"delta","type":"int256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"rawData","type":"bytes"}],"name":"unlockCallback","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"}],
       functionName: 'swap',
       args: [
  BigInt("1000000000000000000"), // 1 ether in Wei
  ["0x123456789ABCDEF123456789ABCDEF1234567890", 42], // Tuple example: [address, uint]
  "0x123456789ABCDEF123456789ABCDEF1234567890", // currency0 address
  "0x0987654321FEDCBA0987654321FEDCBA09876543", // currency1 address
  500, // fee as a uint24
  -10, // tickSpacing as int24
  "0xABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDE", // hooks address
  [true, BigInt("500000000000000000"), ["0xABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDE", 100]], // params tuple: [bool, uint256, [address, uint]]
  true, // zeroForOne as bool
  BigInt("-1000000000000000000"), // amountSpecified as int256
  BigInt("489366168637213703093760231"), // sqrtPriceLimitX96 as uint160
  [false, "Extra data"], // testSettings tuple: [bool, string]
  true, // takeClaims as bool
  false, // settleUsingBurn as bool
  "0x68656c6c6f20776f726c64" // hookData in bytes (hex for "hello world")
];
,
     })
     */
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: `url(/background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-6xl font-bold text-center my-16 text-custom-blue">Fairly Distributed Swaps</h2>
      <div className="bg-custom-blue p-4 w-[600px] rounded-2xl shadow-md flex flex-col items-center">
        <div className="flex flex-col w-full bg-custom-light-blue rounded-2xl p-4 -mb-5">
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
        <div className="flex-1 rounded-xl">
          <button className="relative z-50 btn bg-custom-blue" onClick={switch12}>
            <Image width={20} height={20} src="/arrows.png" alt="Swap" />
          </button>
        </div>
        <div className="flex flex-col w-full bg-custom-light-blue rounded-2xl p-4 -mt-5">
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
        {isConnecting || isDisconnected ? (
          <button
            onClick={swap}
            className="flex w-full bg-slate-600 rounded-2xl justify-center items-center text-xl p-4 mt-2"
          >
            Swap
          </button>
        ) : (
          <button
            onClick={swap}
            className="flex w-full bg-pink-600 hover:bg-pink-700 rounded-2xl justify-center items-center text-xl p-4 mt-2"
          >
            Swap
          </button>
        )}
      </div>
    </main>
  );
}
