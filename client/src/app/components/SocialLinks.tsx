"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const SocialLinks = ({ result, index }: any) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const random = Math.floor(Math.random() * 1);

  function truncateText(text: any, maxLength: any) {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <div className="mt-4 mb-2 flex flex-col justify-self-start">
      {/* <p className="flex">
                <iconify-icon icon="carbon:location" width="17" height="19" style={{ color: 'white', marginRight: '5px' }}></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>India</span>
            </p> */}
      {result?.website?.link && (
        <Link
          onMouseEnter={() => setHovered("website")}
          onMouseLeave={() => setHovered(null)}
          target="_blank"
          rel="noreferrer"
          href={result?.website?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/globe.svg"
            width={17}
            height={19}
            alt="Website"
            className="mr-1"
          />
          <span className="text-sm text-[#BDBEC3] ">
            <p className={`${hovered === "website" ? "text-[#f7f7f7]" : ""}`}>
              {truncateText(result?.website?.text, 10)}
            </p>
          </span>
        </Link>
      )}
      {result?.github?.link && (
        <Link
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
          target="_blank"
          rel="noreferrer"
          href={result?.github?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/github.svg"
            width={17}
            height={19}
            alt="Github"
            className="mr-1"
          />
          <span className="text-sm text-[#BDBEC3] ">
            <p className={`${hovered === "github" ? "text-[#f7f7f7]" : ""}`}>
              {truncateText(result?.github?.text, 10)}
            </p>
          </span>
        </Link>
      )}
      {result?.twitter?.link && (
        <Link
          onMouseEnter={() => setHovered("twitter")}
          onMouseLeave={() => setHovered(null)}
          target="_blank"
          rel="noreferrer"
          href={result?.twitter?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/twitter.svg"
            alt="twitter"
            width={17}
            height={19}
            className="mr-1"
          />
          <span className="text-sm text-[#BDBEC3] ">
            <p className={`${hovered === "twitter" ? "text-[#f7f7f7]" : ""}`}>
              {truncateText(result?.twitter?.text, 10)}
            </p>
          </span>
        </Link>
      )}
      {result?.linkedin?.link && (
        <Link
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
          target="_blank"
          rel="noreferrer"
          href={result?.linkedin?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/linkedin.svg"
            alt="linkedin"
            width={17}
            height={19}
            className="mr-1"
          />
          <span className="text-sm text-[#BDBEC3] ">
            <p className={`${hovered === "linkedin" ? "text-[#f7f7f7]" : ""}`}>
              {truncateText(result?.linkedin?.text, 10)}
            </p>
          </span>
        </Link>
      )}
    </div>
  );
};

export default SocialLinks;
