import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (children: any) => {
  return (
    <div className="bg-[#181818] ">
      <Navbar />
      <div className="mx-[16vw]  mt-[6vh] px-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
