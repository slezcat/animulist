import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";

function App() {
  useEffect(() => {
    console.log("app");

    return () => {};
  });

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search/:animeId" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
