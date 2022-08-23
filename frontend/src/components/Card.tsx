import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const btnData = ["Completed", "Curently Watching"];

const Card = ({ data }: any) => {
  const { title, year, score, season, images, genres }: any = data;

  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onMouseLeave={() => setOpen(false)}
        className="group relative flex h-60 w-40 cursor-pointer text-ellipsis rounded-lg text-white transition delay-150 duration-300 ease-in-out
      "
      >
        <span
          onMouseLeave={() => setOpen(false)}
          className={`absolute top-[105%]
          left-[5%]  ${open ? "visible" : "invisible"}  opacity-${
            open ? 100 : 0
          }  z-50 w-max max-w-full translate-y-[calc(0%_-_10px)] rounded bg-[#333] p-0.5 text-start text-white shadow-lg  shadow-black transition duration-300  ease-in-out `}
        >
          {btnData.map((a) => {
            return (
              <button
                className="
              z-50 w-full bg-slate-700 px-2 py-1 text-start hover:bg-slate-600"
              >
                {a}
              </button>
            );
          })}
        </span>
        <img
          src={images?.jpg.large_image_url}
          alt=""
          className="absolute h-full w-full rounded-lg transition delay-150 duration-300 ease-in-out group-hover:brightness-50 "
        />
        <div className="absolute top-[20%] z-10 flex h-[32vh] w-full flex-col items-stretch justify-between overflow-hidden text-ellipsis rounded-lg bg-gradient-to-t from-[#000a12]  via-[#000a12] p-2 pt-3  opacity-0 transition delay-150 duration-300 ease-in-out group-hover:opacity-100 ">
          <div>
            <h1 className="overflow-hidden text-ellipsis text-center text-lg font-bold line-clamp-1">
              {title}
            </h1>
            <h5 className="text-md text-center capitalize">
              {year ?? "Year not provided"}, {season}
            </h5>
          </div>

          <div className="flex flex-row flex-wrap justify-center text-sm">
            {genres?.map((theme: any, i: number) => {
              return (
                i < 2 && (
                  <h1 className="m-1  rounded-full bg-red-500 px-2">
                    {theme.name}{" "}
                  </h1>
                )
              );
            })}
          </div>

          <div className="flex flex-col">
            <h3 className="relative mb-2 inline text-center text-lg font-semibold">
              {score}{" "}
              <AiOutlineStar className="absolute top-[20%] inline pb-1 text-xl text-yellow-400 " />
            </h3>
            <button
              className="rounded bg-slate-700 font-semibold"
              onClick={() => setOpen(true)}
            >
              + Add to list
            </button>
          </div>
        </div>
        {/* <span
          className="absolute top-[-4rem]
          left-[100%] translate-x-[30%] opacity-0 translate-y-[calc(8_*_10px)] border-[10px] border-solid border-transparent border-t-[#333] origin-top group-hover:opacity-100 rotate-90 z-10 transition delay-150 duration-300 ease-in-out"
        >        
        </span> */}
      </div>
    </>
  );
};

export default Card;
