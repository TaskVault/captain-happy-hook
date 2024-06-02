// components/Navbar.tsx
"use client";
import React from "react";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-opacity-95 bg-custom-blue">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/swap" className="text-xl">
                Swap
              </Link>
            </li>
            <li>
              <Link href="/liquidity" className="text-xl">
                Manage liquidity
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <div className="btn btn-ghost text-2xl">Captain Happy Hook</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/swap" className="text-xl mx-1">
              Swap
            </Link>
          </li>
          <li>
            <Link href="/liquidity" className="text-xl mx-1">
              Manage liquidity
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectKitButton />
      </div>
    </div>
  );
};
export default Navbar;
