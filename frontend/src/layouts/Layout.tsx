import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Modal from "../pages/dahsboard/components/Modal";
import { useAppSelector } from "../app/hooks";

type Props = {};

const Layout = (children: any) => {


  return (
    <div className="bg-[#121212]">
      <Modal />
      <Navbar />
      <div className="mx-[16vw]  mt-[6vh] px-1">
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Layout;
