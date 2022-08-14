import React from "react";
import { AiFillStar } from "react-icons/ai";

type Props = {
  title: string;
  image: string;
  synopsis: string;
  score: string;
  genres: string[];
};

const Card = ({ title, image, synopsis, score }: Props) => {
  return (
    <div className="relative w-[18vw] h-[50vh] flex text-white text-ellipsis group">
      <img src={image} alt="" className=" absolute h-full w-full" />
      <div
        className="absolute top-[40%] bg-gradient-to-t from-zinc-900 via-zinc-900 z-10 w-[18vw] h-[30vh]  overflow-hidden p-2 pt-6 
      group-hover:opacity-100 opacity-0 text-ellipsis flex-col flex items-stretch justify-between transition ease-in-out duration-300 delay-150"
      >
        <h1 className=" font-bold ">{title}</h1>

        <p className=" text-sm font-thin  h-[10vh] line-clamp-3">
          {synopsis || "No synopsis provided."}
        </p>
        <h3 className="inline">
          {score} <AiFillStar className="inline" />
        </h3>
      </div>
    </div>
  );
};

export default Card;
