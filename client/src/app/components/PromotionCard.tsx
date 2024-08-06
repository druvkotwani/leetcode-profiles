import Image from "next/image";
import Link from "next/link";
import React, { memo, useState, useEffect } from "react";

const option = [
  {
    heading: "Could you drop a star on the GitHub repo? It helps a lot!👋",
    imgSrc: "/promoted1.png",
  },
  {
    heading: "Drop a star on our GitHub repo to show your support!🌟",
    imgSrc: "/promoted1.png",
  },
  {
    heading: "Can you drop a star on the GitHub repo? It helps a lot!👋 ",
    imgSrc: "/promoted2.webp",
  },
  {
    heading: "Could you drop a star on the GitHub repo? It helps a lot!👋 ",
    imgSrc: "/promoted3.png",
  },
  {
    heading:
      "Can you please share this project with your friends and family?✨ ",
    imgSrc: "/promoted3.png",
  },
];

const PromotionCard = () => {
  // State to hold the random index
  const [randomIndex, setRandomIndex] = useState(0);

  // Effect to set random index on initial render
  useEffect(() => {
    const random = Math.floor(Math.random() * option.length);
    setRandomIndex(random);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Link
      href="https://github.com/druvkotwani/leetcode-profiles"
      rel="noreferrer"
      target="_blank"
      className="hover:scale-105 transition-all ease-in-out duration-300 font-sourcecodepro "
    >
      <div className="flex justify-betwen flex-col  items-center rounded h-[280px] border-2 border-[#f7f7f7] ">
        {/* Heading and Logo */}
        <div className="flex gap-1 xl:gap-4 items-center justify-between   ">
          <div className="flex items-center text-white justify-center px-4 py-2 w-full gap-2   rounded-md">
            <Image
              src="/assets/icons/leetcode.svg"
              alt="LeetCode Logo"
              width={20}
              height={20}
            />
            <h4 className="font-bold text-xl SourceCodePro">
              LeetCode Profiles
            </h4>
          </div>
        </div>

        <div className="">
          <div
            style={{ height: "0.5px", backgroundColor: "#E0E0E0" }}
            className="h-[0.5px] bg-white"
          />

          <p className=" px-4 text-[#FFFEFE] mt-2  text-base  SourceCodePro">
            {option[randomIndex].heading}
          </p>

          <div className="mx-4 mt-1 ">
            <Image
              width={300}
              height={150}
              alt="Ad image"
              src={`/assets${option[randomIndex].imgSrc}`}
              className="z-1 w-full rounded-xl  h-40  object-contain"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(PromotionCard);
