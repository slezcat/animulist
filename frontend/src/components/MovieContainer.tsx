import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Card from "./Card";
type Props = {
  data: any;
};

const MovieContainer = ({ data }: Props) => {
  return (
    <div>
      <h2 className="py-10 text-4xl font-light tracking-wider text-white">
        {" "}
        Featured{" "}
      </h2>
      <div className="  grid grid-cols-1 place-items-center gap-[3vh] pb-[10vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.map((data: any,i:number) => {
          return <Card data={data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default MovieContainer;
