"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {
  search?: string;
  setSearch?: (search: string) => void;
  searchBarPresent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  search,
  setSearch,
  searchBarPresent,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav
      className={`bg-[#0e0e0e] z-10 border-b border-b-white fixed top-0 left-0 w-full md:px-8 px-4  py-4 flex ${
        searchBarPresent ? "justify-around" : "justify-between !px-24"
      } items-center`}
    >
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
      {searchBarPresent && (
        <form className="">
          <div className="relative flex ">
            <input
              value={search}
              onChange={(e) => setSearch && setSearch(e.target.value)}
              type="text"
              placeholder="Search by username"
              className="bg-[#1f1f1f] sm:w-[260px] w-[100px] font-sourcecodepro text-white rounded px-4 py-3  focus:outline-none pl-10"
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
      )}

      {/* Profile */}

      <div className="flex rounded gap-4 md:gap-8 border border-[#1f1f1f] px-4 py-2">
        {[
          {
            icon: "/assets/icons/ninja.svg",
            link: "https://dhruvkotwani.vercel.app/",
            name: "Profile",
            flag: false,
          },
          {
            icon: "/assets/icons/linkedin.svg",
            link: "https://www.linkedin.com/in/dhruv-kotwani",
            name: "Linkedin",
            flag: true,
          },
          {
            icon: "/assets/icons/github.svg",
            link: "https://github.com/druvkotwani/",
            name: "Github",
            flag: false,
          },
          {
            icon: "/assets/icons/twitter.svg",
            link: "https://x.com/druv_kotwani",
            name: "Twitter",
            flag: true,
          },
          {
            icon: "/assets/icons/star.svg",
            link: "https://github.com/druvkotwani/Leetcode-Profiles/",
            name: "Contribute",
            flag: true,
          },
        ].map((item: any, index: number) => (
          <Link
            target="_blank"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            href={item.link}
            key={index}
            className={`${
              item.flag ? "" : "hidden sm:block"
            } relative flex items-center justify-center`}
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
