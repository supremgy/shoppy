import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-70"></div>
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl">
          BUY. SELL.
          <br /> DO IT ALL OVER.
        </h2>
        <p className="text-2xl">
          Welcome to the community-powered circular fashion marketplace
        </p>
      </div>
    </section>
  );
}
