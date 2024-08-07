"use client";
import React, { useContext, useState } from "react";
import Card from "./Card";
import Image from "next/image";
import { data as defaultData } from "./Card";
import { toast, ToastContainer } from "react-toastify";
import { DataContext } from "../context/DataContext";

const GenerateStats = ({ showStats, setShowStats }: any) => {
  const { datas, setDatas } = useContext(DataContext);
  const [username, setUsername] = useState("");
  const [data, setData] = useState<any>(defaultData);

  const generateStats = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) {
      return;
    }

    try {
      fetch("/api/" + username)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          toast("🫡Stats generated successfully");
        });
    } catch (error) {
      console.error("An error occurred. Please try again later");
    }
  };

  const addToLeetboard = async () => {
    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setDatas([...datas, data]);
        toast("🥷Data added to the hall of fame");
        setShowStats(false);
        setData(defaultData);
        setUsername("");
      } else {
        console.error("Error adding data to the hall of fame");
      }
    } catch (error) {
      console.error("An error occurred while adding data to the hall of fame");
    }
  };

  return (
    <>
      <div
        onClick={() => (
          setShowStats(false), setData(defaultData), setUsername("")
        )}
        className={`fixed z-10 top-0 font-sourcecodepro left-0 backdrop-blur-md flex items-center justify-center h-full w-full ${
          showStats ? "" : "hidden"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="px-4 flex items-center justify-center flex-col gap-4"
        >
          <Card userData={data} />

          <form
            onSubmit={generateStats}
            className="flex items-center justify-center flex-col"
          >
            <div className="relative ">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className="bg-[#1f1f1f] pl-10 w-[300px] h-[40px] text-white rounded px-4 py-6 md:text-lg text-base focus:outline-none"
              />
              <Image
                src="/assets/icons/user.svg"
                alt="Search Icon"
                width={24}
                height={24}
                className="absolute left-2 -translate-y-1/2 top-1/2 "
              />
            </div>

            <div className="flex gap-2 ">
              <button
                type="submit"
                disabled={!username}
                onClick={generateStats}
                className={`border bg-[#010101] px-4 h-[40px] rounded-md text-white font-semibold text-lg mt-4 `}
              >
                Generate <span className="hidden sm:inline-block">Stats</span>
              </button>
              <button
                type="button"
                onClick={addToLeetboard}
                className=" border bg-[#010101] px-4 h-[40px] rounded-md text-white font-semibold text-lg mt-4"
              >
                Add to <span className="">Leetboard</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GenerateStats;
