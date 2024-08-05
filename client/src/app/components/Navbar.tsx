"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <nav className="bg-[#0e0e0e] border-b border-b-white fixed top-0 left-0 w-full px-8  py-4 flex justify-around items-center">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/icons/leetcode.svg"
          alt="Leetcode Logo"
          width={36}
          height={36}
        />
      </Link>

      {/* Search */}
      <form>
        <div className="relative flex ">
          <input
            type="text"
            placeholder="Search by username"
            className="bg-[#1f1f1f] font-sourcecodepro text-white rounded px-4 py-3  focus:outline-none pl-10"
          />
          <Image
            src="/assets/icons/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
            className="absolute left-2 -translate-y-1/2 top-1/2 "
          />
        </div>
      </form>

      {/* Profile */}

      <div className="flex rounded gap-8 border border-[#1f1f1f] px-4 py-2">
        {[
          {
            icon: "/assets/icons/globe.svg",
            link: "https://dhruvkotwani.vercel.app/",
            name: "Profile",
          },
          {
            icon: "/assets/icons/linkedin.svg",
            link: "https://www.linkedin.com/in/dhruv-kotwani",
            name: "Linkedin",
          },
          {
            icon: "/assets/icons/github.svg",
            link: "https://github.com/druvkotwani/",
            name: "Github",
          },
          {
            icon: "/assets/icons/twitter.svg",
            link: "https://x.com/druv_kotwani",
            name: "Twitter",
          },
          {
            icon: "/assets/icons/star.svg",
            link: "https://github.com/druvkotwani/Leetcode-Profiles/",
            name: "Contribute",
          },
        ].map((item: any, index: number) => (
          <Link
            target="_blank"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            href={item.link}
            key={index}
            className={` relative flex items-center justify-center`}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={30}
              height={30}
              className={`${
                hoveredItem === item.name
                  ? ` ${
                      item.name === "Contribute" || item.name === "Profile"
                        ? "rotate"
                        : "ease-in scale-105 transition-all opacity-80 transform duration-300 "
                    }`
                  : ""
              }`}
            />

            {hoveredItem === item.name && (
              <div className="absolute top-10 font-sourcecodepro -left-4 bg-[#1f1f1f] text-white text-sm p-2 rounded-lg">
                {item.name}
              </div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
