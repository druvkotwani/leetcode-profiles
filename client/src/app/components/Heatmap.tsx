"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data as TempData } from "./Card";
import Link from "next/link";
import Circle from "./Circle";
import Questions from "./Questions";
import html2canvas from "html2canvas";

const CalendarHeatmap = dynamic(() => import("react-calendar-heatmap"), {
  ssr: false,
});

function convertSubmissionCalendar(submissionCalendar: any) {
  // Parse the JSON string to convert it into a JavaScript object
  const submissionCalendarData = JSON.parse(submissionCalendar);

  return submissionCalendarData;
}

const submissionCalendarData = {
  "1704067200": 2,
  "1704153600": 4,
  "1704240000": 3,
  "1704326400": 1,
  "1704412800": 2,
  "1704499200": 1,
  "1704585600": 3,
  "1704672000": 1,
  "1704758400": 2,
  "1704844800": 1,
  "1704931200": 1,
  "1705017600": 1,
  "1705104000": 1,
  "1705190400": 1,
  "1705276800": 1,
  "1705363200": 1,
  "1705449600": 1,
  "1705520000": 1,
  "1705536000": 1,
  "1705622400": 1,
  "1705708800": 1,
  "1705795200": 1,
  "1705881600": 1,
  "1705968000": 1,
  "1706054400": 1,
  "1706140800": 1,
  "1706227200": 1,

  "1702080000": 8,
  "1702166400": 4,
  "1702252800": 2,
  "1702339200": 1,
  "1702425600": 1,
  "1702512000": 1,
  "1702598400": 1,
  "1702684800": 1,
  "1702771200": 1,
  "1702857600": 1,
  "1702944000": 1,
  "1703030400": 1,
  "1703116800": 1,
  "1703203200": 1,
  "1703289600": 1,
  "1703376000": 1,
  "1703402400": 1,

  // Random data for each month of 2024
  "1703443200": 3,
  "1703529600": 5,
  "1703616000": 2,
  "1703702400": 4,
  "1703788800": 1,
  "1703875200": 2,
  "1703961600": 6,
  "1704048000": 3,
  "1704134400": 5,
  "1704220800": 2,
  "1704307200": 4,
  "1704393600": 1,
  "1704480000": 3,
  "1704566400": 5,
  "1704652800": 2,
  "1704739200": 4,

  "1704825600": 6,
  "1704912000": 1,
  "1704998400": 2,
  "1705084800": 3,
  "1705171200": 5,
  "1705257600": 4,
  "1705344000": 1,
  "1705430400": 3,
  "1705516800": 5,
  "1705603200": 2,
  "1705689600": 4,
  "1705776000": 6,
  "1705862400": 1,
  "1705948800": 2,
  "1706035200": 3,

  // More random values for the remaining months
  "1706121600": 1,
  "1706208000": 4,
  "1706294400": 2,
  "1706380800": 5,
  "1706467200": 1,
  "1706553600": 3,
  "1706640000": 6,
  "1706726400": 2,
  "1706812800": 4,
  "1706899200": 1,
  "1706985600": 5,
  "1707072000": 3,
  "1707158400": 6,
  "1707244800": 2,
  "1707331200": 4,
  "1707417600": 1,
};

export default function Heatmap() {
  const [isMounted, setIsMounted] = useState(false);
  const [username, setUsername] = useState("");
  const [submissionCalendar, setSubmissionCalendar] = useState(
    submissionCalendarData
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(TempData);
  const [tooltip, setTooltip] = useState({
    show: false,
    content: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const generateStats = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (!username) {
      return;
    }

    try {
      const res = await fetch("/api/" + username);
      if (!res.ok) {
        toast("👻 User not found");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setData(data);
      setSubmissionCalendar(convertSubmissionCalendar(data.submissionCalendar));
      toast("🫡 Stats generated successfully");
    } catch (error) {
      console.error("An error occurred. Please try again later");
      toast("😞 An error occurred. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date();
  const endDate = today;
  const startDate = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate() + 1
  );

  const values = Object.entries(submissionCalendar)
    .map(([timestamp, count]) => ({
      date: new Date(parseInt(timestamp) * 1000),
      count: count,
    }))
    .filter((value) => value.date >= startDate && value.date <= endDate);

  const formatDate = (date: Date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const contentRef = useRef<HTMLDivElement>(null);

  const downloadAsImage = async () => {
    if (contentRef.current) {
      try {
        // Apply a background color to the element before capturing
        contentRef.current.style.backgroundColor = "#1c1c1c";
        contentRef.current.style.padding = "20px";
        contentRef.current.style.borderRadius = "10px";

        const canvas = await html2canvas(contentRef.current, {
          scale: 2, // Increase scale for better quality
          useCORS: true, // This can help with loading cross-origin images
          logging: true, // This can help debug issues
          backgroundColor: "#1c1c1c", // Set the background color
        });

        // Reset the inline styles after capturing
        contentRef.current.style.backgroundColor = "";
        contentRef.current.style.padding = "";
        contentRef.current.style.borderRadius = "";

        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "leetcode-stats.png";
        link.click();
        toast("🖼️ Image downloaded successfully");
      } catch (error) {
        console.error("Error generating image:", error);
        toast("😞 Error generating image. Please try again.");
      }
    }
  };

  const handleMouseOver = (event: any, value: any) => {
    if (value && value.date) {
      const rect = event.target.getBoundingClientRect();
      setTooltip({
        show: true,
        content: `${value.count} submission${
          value.count !== 1 ? "s" : ""
        } on ${formatDate(value.date)}`,
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY - 40,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, show: false });
  };

  if (!isMounted) return null;

  return (
    <>
      <div className="w-full font-sourcecodepro mt-24 relative mb-8">
        <div className=" flex flex-col items-center justify-center  w-full">
          <h1 className="text-3xl font-semibold mb-4  text-center bg-gradient-to-r from-[#09C4FF] to-[#f38d90]  bg-clip-text text-transparent">
            Estimate LeetCode Worth Generator
          </h1>

          <form
            onSubmit={generateStats}
            className="flex items-center justify-center flex-col"
          >
            <div className="relative ">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter the leetcode username"
                className="bg-[#1f1f1f] pl-10 max-w-[600px] w-[300px] md:w-[450px] lg:w-[500px] h-[40px] text-white rounded px-4 py-6 md:text-lg text-base focus:outline-none"
              />
              <Image
                src="/assets/icons/money.svg"
                alt="MOney Icon"
                width={24}
                height={24}
                className="absolute left-2 -translate-y-1/2 top-1/2 "
              />
            </div>

            <div className="flex gap-2 ">
              <button
                type="submit"
                disabled={!username || loading}
                onClick={generateStats}
                className={`border flex items-center text-center bg-gradient-to-r from-[#78ff09] to-[#f3ac8d]  bg-clip-text text-transparent justify-center gap-2 bg-[#010101] px-4 h-[40px] rounded-md  font-semibold text-lg mt-4  ${
                  loading || !username
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
              >
                Generate
                <Image
                  src={
                    loading
                      ? "/assets/icons/loading.svg"
                      : "/assets/icons/money2.svg"
                  }
                  alt="Money Icon"
                  width={24}
                  height={24}
                  className=""
                />{" "}
                Worth
              </button>
              <button
                type="button"
                onClick={downloadAsImage}
                disabled={!username || loading}
                className={`border flex items-center text-center bg-gradient-to-r from-[#cb42b2] to-[#f38d90]  bg-clip-text text-transparent justify-center gap-2 px-4 h-[40px] rounded-md  font-semibold text-lg mt-4  ${
                  loading || !username
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
              >
                Download Image
              </button>
            </div>
          </form>
        </div>

        <div
          ref={contentRef}
          className="max-w-screen-sm mx-auto rounded border px-8  py-4 mt-8"
        >
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex flex-row md:gap-0 gap-2 md:flex-col">
              <Image
                src={data.profileData.image}
                width={100}
                height={100}
                alt={data.profileData.fullName}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center items-start">
                <h2 className="text-2xl font-semibold mt-2 text-white">
                  {data.profileData.fullName}
                </h2>
                <p className="text-gray-400">@{data.profileData.username}</p>
              </div>
            </div>
            <div className="h-40 w-[1px] rounded mx-1 bg-gray-600 hidden md:block" />
            <div className="  lg:flex-row gap-5 items-center h-full justify-center hidden md:flex">
              {/* Circle */}

              <Circle total={data?.totalSolved} />

              <div className="flex flex-col gap-3">
                {/* Questions */}

                <Questions
                  type={"Easy"}
                  solved={data?.easySolved}
                  total={data?.easyTotal}
                  line="bg-[#2db55d26]"
                  line2="bg-[#01B8A2]"
                />

                <Questions
                  type={"Medium"}
                  solved={data?.mediumSolved}
                  total={data?.mediumTotal}
                  line="bg-[#ffb80026]"
                  line2="bg-[#FFC11F]"
                />

                <Questions
                  type={"Hard"}
                  solved={data?.hardSolved}
                  total={data?.hardTotal}
                  line="bg-[#ef474326]"
                  line2="bg-[#EF4642]"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              values={values}
              classForValue={(value) => {
                if (!value || value.count === 0) {
                  return "color-empty";
                }
                return `color-github-${Math.min(value.count, 4)}`;
              }}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              gutterSize={2}
              horizontal={true}
            />

            <h2 className="text-sm font-semibold mt-4 text-gray-400 text-center">
              <span className="text-[#f3e58d] text-2xl">
                {data.totalSolved * 10}$
              </span>
              <br />
              Estimated Worth
            </h2>

            <p className="text-white mt-4 flex w-full items-center justify-center">
              Get Yours at:&nbsp;
              <Link
                href="https://leetcode-profiles-delta.vercel.app/worth"
                className="text-blue-300"
              >
                leetcode-profiles-delta.vercel.app
              </Link>
            </p>
          </div>
          {tooltip.show && (
            <div
              className="absolute bg-gray-800  text-white p-2 rounded shadow-lg text-sm z-10 pointer-events-none w-fit "
              style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
            >
              {tooltip.content}
            </div>
          )}
        </div>
      </div>
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
    </>
  );
}
