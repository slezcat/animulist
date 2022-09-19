import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login,reset } from "../../features/auth/authSlice";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <div className="mx-auto my-auto h-[70.4vh] w-full bg-[#202020] text-white md:w-[500px] ">
      <form
        onSubmit={onSubmit}
        className="my-auto flex flex-col gap-9 p-4 text-black"
      >
        <h1 className="text-center text-4xl font-semibold text-white">
          Log in
        </h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2"
          onChange={onChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2"
          onChange={onChange}
          value={password}
        />
        <button
          type="submit"
          className="bg-[#c62828] py-2 font-semibold text-white"
        >
          Log in
        </button>
        <p className="text-center text-white">
          Don't have an account?{" "}
          <button
            type="submit"
            onClick={() => navigate("/register")}
            className="font-semibold text-[#c62828]"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
