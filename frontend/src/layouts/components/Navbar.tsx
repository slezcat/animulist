import React, { useState } from "react";
import logo from "../../assets/oie_Q9zkwFkppVTY.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, reset } from "../../features/auth/authSlice";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const [open, setOpen] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="rounded border-gray-200  bg-[#202020]  px-[16vw] py-2.5 dark:bg-[#202020]">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} className="mr-3 h-12 sm:h-16" alt="logo" />
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="ml-3 inline-flex items-center rounded p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${open ? "absolute m-auto left-[0%] top-[8%] z-50 transition duration-150 ease-in-out" :"hidden" } md:static md:m-0 w-full md:block md:w-auto `}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col   bg-[#202020] p-4 dark:border-gray-700 dark:bg-[#202020] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-[#202020] md:text-sm md:font-medium md:dark:bg-[#202020]">
            <li
              onClick={() => navigate("/")}
              className="block cursor-pointer rounded  py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-red-500 hover:text-red-500"
            >
              Home
            </li>
            
            {user ? (
              <>
                <li
                  className="block cursor-pointer rounded py-2 pr-4 pl-3 text-white
                   dark:text-white hover:text-red-500 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white "
                  onClick={() => navigate("/dashboard")}
                >
                  Library
                </li>
                <li
                  className="block cursor-pointer rounded py-2 pr-4 pl-3 text-white  dark:text-white hover:text-red-500 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  onClick={onLogout}
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                {" "}
                <li
                  className="block cursor-pointer rounded py-2 pr-4 pl-3 text-white hover:text-red-500 dark:text-white   md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  onClick={() => navigate("/login")}
                >
                  Login
                </li>
                <li
                  className="block cursor-pointer rounded py-2 pr-4 pl-3 text-white hover:text-red-500 dark:text-white   md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  onClick={() => navigate("/register")}
                >
                  Register
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
