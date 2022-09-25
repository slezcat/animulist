import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-7  flex w-full justify-between bg-[#202020] px-32 py-2 font-semibold text-white">
      <div className="flex w-[10vw] flex-row justify-between text-3xl">
        <a
          href="https://github.com/slezcat"
          className="cursor-pointer text-gray-400"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <h2 className="text-gray-400">&copy; Copyright 2022 slezcat</h2>
    </div>
  );
};

export default Footer;
