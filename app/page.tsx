"use client";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center justify-center p-8">
      <header style={{ backgroundColor: '#FF007A' }} className="text-white w-full py-4 px-8 text-center">
        <h1 className="text-3xl font-bold">Uniswap V4 - Fair Transaction Platform</h1>
      </header>

      <section className="my-16 max-w-4xl text-center">
        <h2 className="text-5xl font-bold">Ensure Fairness in Every Transaction</h2>
        <p className="mt-4 text-xl">
          Discover how Uniswap V4 utilizes hooks to protect your transactions from bots and ensure fairness.
        </p>
      </section>

      <section className="my-8">
        <h3 className="text-4xl font-bold">Features</h3>
        <ul className="mt-4 text-left list-disc list-inside">
          <li>Real-time transaction adjustments</li>
          <li>Bot manipulation resistance</li>
          <li>Enhanced security and trading fairness</li>
        </ul>
      </section>

      <section className="my-8">
        <h3 className="text-4xl font-bold">How It Works</h3>
        <p className="mt-4 text-xl">
          Uniswap V4 hooks intercept and modify transaction requests dynamically, preventing unfair advantages.
        </p>
      </section>

      <footer className="bg-gray-200 w-full py-4 px-8 text-center">
        <p>© 2024 Uniswap V4 Demo</p>
      </footer>
    </main>
  );
}
