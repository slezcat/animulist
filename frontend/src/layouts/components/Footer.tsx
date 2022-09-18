import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex  w-full justify-between px-32 py-2 font-semibold text-white bg-[#202020] mt-7">
      <div className="flex flex-row justify-between text-3xl w-[10vw]">
        <AiFillGithub />
        <AiFillInstagram />
        <AiFillYoutube />
      </div>
      <h2>&copy; Copyright 2022 slezcat</h2>
    </div>
  );
};

export default Footer;
