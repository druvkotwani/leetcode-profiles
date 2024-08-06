"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import GenerateStats from "./components/GenerateStats";
import { useState } from "react";
import PromotionCard from "./components/PromotionCard";

export default function Home() {
  const [showStats, setShowStats] = useState(false);
  return (
    <section className="px-4 lg:px-24 relative ">
      <button
        onClick={() => setShowStats((prevShowStats) => !prevShowStats)}
        className="transform transition-transform duration-300 hover:scale-125 z-50 fixed w-12 h-12 bottom-0 right-0 lg:right-3 m-4 sm:mr-6 lg:mr-4 rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border border-gray-600 px-3 py-2 text-sm font-bold shadow-white animate"
      >
        <Image
          src="/assets/icons/leetcode.svg"
          alt="Leetcode Logo"
          width={36}
          height={36}
        />
      </button>

      <Navbar />

      <GenerateStats showStats={showStats} setShowStats={setShowStats} />

      <div className="mt-32 max-w-7xl mx-auto  place-items-center grid grid-cols-1 md:grid-cols-2 gap-y-8 xl:grid-cols-3 font-sourcecodepro gap-x-4">
        <PromotionCard />
        {[Array.from({ length: 12 }, (_, i) => <Card key={i} />)]}
      </div>

      <Footer />
    </section>
  );
}
