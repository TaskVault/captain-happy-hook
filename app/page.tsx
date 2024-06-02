"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center "
      style={{
        backgroundImage: `url(/background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-6xl font-bold text-center mt-16 mb-10 text-custom-blue">About</h2>
      <p className="text-custom-blue text-xl text-center max-w-[700px]">
        With Captain Happy Hook we tried to solve the price impact problem that afflicts every defi user, especially small
        ones. We created a Uniswap hook for v4 pools that reorders incoming swap transaction in a smart way and guarantees a
        more fair price for every participant.
      </p>
      <p className="text-custom-blue text-xl text-center max-w-[700px]">
        See{" "}
        <Link target="blank" className="text-white underline" href={"https://github.com/blackicon-eth/unicorn-v4-interface"}>
          our github repo
        </Link>{" "}
        for more details!
      </p>
      <Link
        target="blank"
        href={
          "https://images.squarespace-cdn.com/content/v1/5e01d4d4c4faa308239ed7b6/1578558330242-F7BAHKSPPM71KZ90TY44/original.gif"
        }
      >
        <Image className="rounded-3xl mt-10" src="/hook.webp" width={400} height={400} alt="hook" />
      </Link>
    </main>
  );
}
