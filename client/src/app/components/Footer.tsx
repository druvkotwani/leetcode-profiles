import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center mt-8 py-4 text-gray-500 font-sourcecodepro">
      <p>
        Made with{" "}
        <span aria-label="heart" role="img">
          ❤️
        </span>{" "}
        by{" "}
        <Link
          href="https://dhruvkotwani.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Dhruv Kotwani
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
