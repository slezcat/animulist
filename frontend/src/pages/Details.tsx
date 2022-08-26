import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Details = (props: Props) => {
  const { name } = useParams();
  return (
    <>
      <h1 className="h-full w-full bg-black text-white text-6xl">{name}</h1>
    </>
  );
};

export default Details;
