import React from "react";

type Props = {};

const AnimeCharacters = ({ data }: any) => {
  // (console.log(d.character.name),
  // console.log(d.voice_actors[0].person.name))
  return (
    <>
      <div className="row-span-1">
        {data.slice(0, 4).map((d: any, i: number) => {
          return (
            <div className="z-50 mt-5 flex flex-row justify-between bg-[#202020] text-gray-200 ">
              <div className="flex flex-row">
                <img
                  src={d.character.images?.jpg.image_url}
                  alt=""
                  className="w-20"
                />
                <div className="m-2 flex flex-col justify-between text-left">
                  <h1 className="font-semibold">{d.character.name}</h1>
                  <h2 className="opacity-80">{d.role}</h2>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="m-2 flex flex-col justify-between text-right">
                  <h1 className="text-start font-semibold">{d.voice_actors[0].person.name}</h1>
                  <h2 className="opacity-80">{d.voice_actors[0].language}</h2>
                </div>
                <img
                  src={d.voice_actors[0].person.images?.jpg.image_url}
                  alt=""
                  className="w-20"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimeCharacters;
