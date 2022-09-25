import React, { useEffect, useState } from "react";
import AnimeCharacters from "./Characters";

type Props = {};

const Container = ({ data }: any) => {
  const [filData, setFilData] = useState<any>();

  const {
    title,
    images,
    synopsis,
    score,
    type,
    episodes,
    status,
    aired,
    duration,
    popularity,
    trailer,
  } = data[0]["details"];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const filteredData = {
      type,
      episodes,
      duration,
      status,
      aired,
      score,
      popularity,
    };
    setFilData(filteredData);
  }, [data]);

  return (
    <div className="grid grid-flow-dense grid-cols-4 gap-4 text-white md:grid-cols-[200px_auto]">
      <div className="col-span-4 flex flex-col items-center  justify-center sm:flex-row  md:col-span-1 md:flex-col ">
        <img
          className="row-span-3 w-[200px]"
          src={images?.jpg.image_url}
          alt=""
        />
       
      </div>
      <div className="col-span-4 md:col-span-3 lg:col-span-1">
        <h1 className="text-3xl">{title}</h1>
        <p className="whitespace-normal text-sm line-clamp-[12]">
          <span className="block text-lg font-semibold xl:hidden">
            Synopsis
          </span>
          {synopsis}
        </p>
      </div>
      <div className="col-span-4 w-full bg-[#202020] md:col-span-4 lg:col-span-1 ">
        {filData !== undefined &&
          Object.keys(filData).map((key: any) => {
            if (key === "aired") {
              const { from, to } = filData[key].prop;
              return (
                <>
                  <div className="p-2">
                    <h1 className="font-semibold capitalize">start date</h1>
                    <p className="font-light text-gray-300">
                      {monthNames[from.month]},{from.day},{from.year}
                    </p>
                  </div>
                  <div className="p-2">
                    <h1 className="font-semibold capitalize">end date</h1>
                    <p className="font-light text-gray-300">
                      {to.day},{monthNames[to.month]},{to.year}
                    </p>
                  </div>
                </>
              );
            }
            return (
              <div className="p-2">
                <h1 className="font-semibold capitalize">{key}</h1>
                <p className="font-light text-gray-300">{filData[key]}</p>
              </div>
            );
          })}
      </div>
      <div className="col-span-4 bg-[#121212] lg:col-span-1">
        <div className="grid grid-rows-[400px_auto]">
          <iframe
            className="w-full h-full row-span-1"
            title="youtube"
            src={trailer?.embed_url}
          ></iframe>
          <AnimeCharacters data={data[1]["characters"]}/>
        </div>
      </div>
    </div>
  );
};

export default Container;
