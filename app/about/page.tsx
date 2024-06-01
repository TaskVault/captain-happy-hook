"use client";
import Image from "next/image";

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
      <h2 className="text-6xl font-bold text-center my-16 text-custom-blue">About</h2>
      <p className="text-custom-blue text-xl text-center max-w-[700px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      <Image className="rounded-3xl mt-10" src="/hook.webp" width={400} height={400} alt="hook" />
    </main>
  );
}
