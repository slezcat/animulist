import React from "react";

type Props = {};

const AnimeCharacters = ({ data }: any) => {
  // (console.log(d.character.name),
  // console.log(d.voice_actors[0].person.name))
  return (
    <>
      <div>
        {data.map((d: any, i: number) => {
          return (
            <div className="z-50 flex flex-row justify-between bg-red-400">
              <div>
                <img src={d.images} alt="" />
                <h1>{d.character.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimeCharacters;
