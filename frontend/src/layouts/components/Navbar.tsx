import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, reset } from "../../features/auth/authSlice";
type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between bg-[#202020] py-4 px-[16vw] ">
      <h1 className="text-4xl font-bold text-white">Animulist</h1>
      <div className="flex items-center justify-center text-white caret-teal-800">
        {user ? (
          <>
            <h2
              className=" ml-[1vw] cursor-pointer rounded  px-3
           pb-2 pt-1 text-center text-xl font-medium transition duration-300 ease-in-out hover:bg-[#c62828] "
              onClick={onLogout}
            >
              Logout
            </h2>
          </>
        ) : (
          <>
            {" "}
            <h2
              className=" ml-[1vw] cursor-pointer rounded  px-3
           pb-2 pt-1 text-center text-xl font-medium transition duration-300 ease-in-out hover:bg-[#c62828] "
              onClick={() => navigate("/login")}
            >
              Login
            </h2>
            <h2
              className=" ml-[1vw] cursor-pointer rounded  px-3
           pb-2 pt-1 text-center text-xl font-medium transition duration-300 ease-in-out hover:bg-[#c62828] "
              onClick={() => navigate("/register")}
            >
              Register
            </h2>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
