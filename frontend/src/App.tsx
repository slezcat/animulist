import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search/:animeId" element={<Details/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
