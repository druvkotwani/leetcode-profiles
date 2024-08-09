"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const SocialLinks = ({ result, index }: any) => {
  return (
    <div className="mt-2 mb-2 grid grid-cols-2 gap-2">
      {/* <p className="flex">
                <iconify-icon icon="carbon:location" width="21" height="23" style={{ color: 'white', marginRight: '5px' }}></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>India</span>
            </p> */}
      {result?.website?.link && (
        <Link
          target="_blank"
          rel="noreferrer"
          href={result?.website?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/globe.svg"
            width={25}
            height={23}
            alt="Website"
            className="mr-1 hover:scale-125 ease-in transition-all transform duration-300 hover:rotate-180"
          />
        </Link>
      )}
      {result?.github?.link && (
        <Link
          target="_blank"
          rel="noreferrer"
          href={result?.github?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/github.svg"
            width={21}
            height={23}
            alt="Github"
            className="mr-1 hover:scale-125 ease-in transition-all transform duration-300 "
          />
        </Link>
      )}
      {result?.twitter?.link && (
        <Link
          target="_blank"
          rel="noreferrer"
          href={result?.twitter?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/twitter.svg"
            alt="twitter"
            width={21}
            height={23}
            className="mr-1 hover:scale-125 ease-in transition-all transform duration-300 "
          />
        </Link>
      )}
      {result?.linkedin?.link && (
        <Link
          target="_blank"
          rel="noreferrer"
          href={result?.linkedin?.link}
          className="flex"
        >
          <Image
            src="/assets/icons/linkedin.svg"
            alt="linkedin"
            width={21}
            height={23}
            className="mr-1 hover:scale-125 ease-in transition-all transform duration-300 "
          />
        </Link>
      )}
    </div>
  );
};

export default SocialLinks;
