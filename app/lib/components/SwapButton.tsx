import React, { MouseEventHandler } from "react";
import { SwapState } from "../constants/enums";

const SwapButton = ({ isDisconnected, swapState, approveSwapRouter, approveHook, swap }: any) => {
  let buttonText = "";
  let buttonAction = null;
  let buttonColor = "bg-slate-600";

  if (isDisconnected) {
    buttonText = "Connect Wallet";
  } else if (
    swapState === SwapState.WaitingApproveHook ||
    swapState === SwapState.WaitingApproveSwapRouter ||
    swapState === SwapState.WaitingSwap
  ) {
    buttonText = "Waiting...";
  } else if (swapState === SwapState.ApproveSwapRouter) {
    buttonText = "Approve Swap";
    buttonAction = approveSwapRouter;
    buttonColor = "bg-pink-600 hover:bg-pink-700";
  } else if (swapState === SwapState.ApproveHook) {
    buttonText = "Approve Hook";
    buttonAction = approveHook;
    buttonColor = "bg-pink-600 hover:bg-pink-700";
  } else {
    buttonText = "Swap";
    buttonAction = swap;
    buttonColor = "bg-pink-600 hover:bg-pink-700";
  }

  return (
    <button
      onClick={buttonAction}
      className={`flex w-full ${buttonColor} rounded-2xl justify-center items-center text-xl p-4 mt-2`}
    >
      {buttonText}
    </button>
  );
};

export default SwapButton;
