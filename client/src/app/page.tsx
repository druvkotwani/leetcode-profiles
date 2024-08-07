"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import GenerateStats from "./components/GenerateStats";
import { useContext, useEffect, useState } from "react";
import PromotionCard from "./components/PromotionCard";
import { DataContext } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { datas, setDatas } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [showStats, setShowStats] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/fetchdata");
      const data = await res.json();
      setDatas(data.data);
      console.log(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [datas]);

  const searchedData = datas?.filter((data: any) =>
    data.profileData.fullName.toLowerCase().includes(search.toLowerCase())
  );

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

      <Navbar search={search} setSearch={setSearch} />

      <GenerateStats showStats={showStats} setShowStats={setShowStats} />

      <div className="mt-32  max-w-7xl mx-auto  place-items-center grid grid-cols-1 md:grid-cols-2 gap-y-8 xl:grid-cols-3 font-sourcecodepro gap-x-4">
        <PromotionCard />
        {searchedData &&
          searchedData
            .sort(
              (a: any, b: any) =>
                new Date(b.timeStamp).getTime() -
                new Date(a.timeStamp).getTime()
            )
            .map((userData: any, index: number) => (
              <Card userData={userData} index={index} key={index} />
            ))}
      </div>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}
