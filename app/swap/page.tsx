"use client";
import Image from "next/image";
import { useState } from "react";
import { useWriteContract, useAccount } from "wagmi";
import { PoolSwapTestAbi } from "../lib/abi/PoolSwapTest";
import { SwapState } from "../lib/constants/enums";
import SwapButton from "../lib/components/SwapButton";
import { Address, parseEther } from "viem";
import { ERC20Abi } from "../lib/abi/Erc20Abi";
import { SWAP_ROUTER_ADDRESS, TOKEN_0_ADDRESS, TOKEN_1_ADDRESS } from "../lib/constants/addresses";

export default function Home() {
  const { isDisconnected } = useAccount();
  const { writeContract } = useWriteContract();

  const [sellingToken, setSellingToken] = useState("TOKEN_0");

  const [token0, setToken0] = useState("TOKEN_0");
  const [token1, setToken1] = useState("TOKEN_1");

  const [token0Address, setToken0Address] = useState(TOKEN_0_ADDRESS);
  const [token1Address, setToken1Address] = useState(TOKEN_1_ADDRESS);

  const [amount0, setAmount0] = useState("");
  const [amount1, setAmount1] = useState("");

  const [swapState, setSwapState] = useState(SwapState.ApproveSwapRouter);

  const switch_token = () => {
    const temp = token0;
    const tempAmount = amount0;
    const tempCryptoAddress = token0Address;

    setAmount0(amount1);
    setToken0(token1);
    setToken0Address(token1Address);

    setToken1(temp);
    setAmount1(tempAmount);
    setToken1Address(tempCryptoAddress);

    setSellingToken(sellingToken === "TOKEN_0" ? "TOKEN_1" : "TOKEN_0");
  };

  const approveSwapRouter = () => {
    writeContract({
      address: sellingToken === "TOKEN_0" ? (token0Address as Address) : (token1Address as Address),
      abi: ERC20Abi,
      functionName: "approve",
      args: [
        "0x123456789ABCDEF123456789ABCDEF1234567890", // check this
        sellingToken === "TOKEN_0" ? BigInt(parseEther(amount0)) : BigInt(parseEther(amount1)),
      ],
    });
  };

  const approveHook = () => {
    writeContract({
      address: sellingToken === "TOKEN_0" ? (token0Address as Address) : (token1Address as Address),
      abi: ERC20Abi,
      functionName: "approve",
      args: [
        "0x123456789ABCDEF123456789ABCDEF1234567890", // insert here hook address
        sellingToken === "TOKEN_0" ? BigInt(parseEther(amount0)) : BigInt(parseEther(amount1)),
      ],
    });
  };

  const swap = () => {
    return true;
    // writeContract({
    //   address: SWAP_ROUTER_ADDRESS as Address,
    //   abi: PoolSwapTestAbi,
    //   functionName: "swap",
    //   args: [
    //     {
    //       currency0: TOKEN_0_ADDRESS,
    //       currency1: TOKEN_1_ADDRESS,
    //       fee: 3000,
    //       tickSpacing: 60,
    //       hooks: TOKEN_1_ADDRESS /*Change this address*/,
    //     },
    //     {
    //       zeroForOne: sellingToken === "TOKEN_0",
    //       amountSpecified: sellingToken === "TOKEN_0" ? BigInt(parseEther(amount0)) : BigInt(parseEther(amount1)),
    //       sqrtPriceLimitX96: BigInt(parseEther("1234")),
    //     },
    //   ],
    // });
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
              value={amount0}
              onChange={(e) => setAmount0(e.target.value)}
            />
            <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{token0}</div>
          </div>
        </div>
        <div className="flex-1 rounded-xl">
          <button
            disabled={swapState != SwapState.ApproveSwapRouter}
            className="relative z-50 btn bg-custom-blue"
            onClick={switch_token}
          >
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
              value={amount1}
              onChange={(e) => setAmount1(e.target.value)}
            />
            <div className="flex bg-pink-600 px-5 py-3 rounded-full items-center justify-center">{token1}</div>
          </div>
        </div>
        <SwapButton
          isDisconnected={isDisconnected}
          swapState={swapState}
          approveSwapRouter={approveSwapRouter}
          approveHook={approveHook}
          swap={swap}
        />
      </div>
    </main>
  );
}
