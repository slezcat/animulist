import React from "react";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Modal from "../pages/dahsboard/components/Modal";
import { useAppSelector } from "../app/hooks";
import Spinner from "../components/Spinner";
import Navbar from "./components/Navbar";


type Props = {};

const Layout = (children: any) => {
  const { status } = useAppSelector((state) => state.list);

  return (
    <>
      {status === "loading" && (
        <div className="fixed z-50 h-screen  w-screen bg-black bg-opacity-60 text-black">
          <div
            className="fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
            <Spinner />
          </div>
        </div>
      )}
      <div className="bg-[#121212] ">
        <Modal />
        <Navbar />
        <div className="mx-[16vw]  mt-[6vh] min-h-screen px-1">
          <Outlet />
        </div>
        <ToastContainer />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
