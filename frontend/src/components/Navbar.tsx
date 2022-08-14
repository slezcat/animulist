import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center py-6 bg-[#00796b] px-[10vw]">
      <h1 className="text-white font-bold text-xl">My AniMovie List</h1>
      <div className="caret-teal-800 flex text-white items-center justify-center">
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search"
          className=" focus:outline-none
          p-1  caret-white
        bg-[#00796b] 
        border-b-[1px] border-white 
        text-white
        box-border"
        />
        <AiOutlineSearch className="text-2xl" />
        
      </div>
    </nav>
  );
};

export default Navbar;
