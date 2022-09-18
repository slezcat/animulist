import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = formData;

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // )

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message)
  //   }

  //   if (isSuccess || user) {
  //     navigate('/')
  //   }

  //   dispatch(reset())
  // }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e:any) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    // dispatch(login(userData))
  }

  // if (isLoading) {
  //   return <Spinner />
  // }
  return (
    <div className="mx-auto my-auto h-[70.4vh] w-full bg-[#202020] text-white md:w-[500px] ">
      <form 
      onSubmit={onSubmit}
      className="my-auto flex flex-col gap-9 p-4 text-black">
        <h1 className="text-center text-4xl text-white font-semibold">Sign up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          className="p-2"
          onChange={onChange}
          value={username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
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
        <button type="submit" className="bg-[#c62828] py-2 text-white font-semibold">
          Sign up
        </button>
        <p className="text-center text-white">
          Already have an account?{" "}
          <button
          type="submit"
            onClick={() => navigate("/login")}
            className="font-semibold text-[#c62828]"
          >
            Log in
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
