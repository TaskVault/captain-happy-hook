"use client";
import { useState } from "react";
import AddLiquidityBox from "../lib/components/AddLiquidityBox";
import RemoveLiquidtyBox from "../lib/components/RemoveLiquidityBox";

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
      {action === "Add" ? <AddLiquidityBox /> : <RemoveLiquidtyBox />}
    </main>
  );
}
