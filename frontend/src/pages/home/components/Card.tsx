import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { animeDetailsApi } from "../../../api/animeAPI";
import { useAppDispatch } from "../../../app/hooks";
import { getAnime, reset } from "../../../features/animeSlice";
import { addAnime } from "../../../features/list/listSlice";

const AnimeCard = ({ data }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    title,
    year,
    score,
    season,
    images,
    genres,
    mal_id,
    episodes,
    status,
  }: any = data;

  const onChange = (e: any) => {
    dispatch(
      addAnime({
        listStatus: e.target.value,
        progress: 0,
        episodes,
        animeId: mal_id,
        title,
        animeStatus: status,
        image: images?.jpg.large_image_url,
      })
    );
    toast.success("Anime Successfully Added to Your List");
  };

  /* onclick opens list button */
  const SelectButton = () => {
    const btnData = [
      "Completed",
      "Watching",
      "Plan to Watch",
      "Completed",
      "On Hold",
      "Dropped",
    ];
    return (
      <>
        <select
          onChange={(e) => onChange(e)}
          className={`rounded bg-slate-800 text-center font-semibold transition duration-150 ease-in-out hover:bg-slate-700`}
        >
          <option selected disabled hidden className="px-6 py-4 text-center">
            + Add To List
          </option>
          {btnData.map((a) => {
            return (
              <option
                className="z-[999] w-full rounded-none bg-slate-800 px-6 py-4 text-start hover:bg-red-500"
                value={a}
              >
                {a}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  /* onhover details */
  const CardDetails = () => {
    return (
      <>
        <div
          onClick={(e) => showMoreDetails(e, mal_id)}
          className="absolute top-[20%] z-10 flex h-[200px] w-full flex-col items-stretch justify-between overflow-hidden text-ellipsis rounded-lg bg-gradient-to-t from-[#000a12]  via-[#000a12] p-2 pt-3  opacity-0 transition delay-150 duration-300 ease-in-out group-hover:opacity-100 "
        >
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
                    {theme.name}
                  </h1>
                )
              );
            })}
          </div>
          <div className="flex flex-col">
            <h3 className="relative mb-2 inline text-center text-lg font-semibold">
              {score !== null && (
                <>
                  {score}
                  <AiOutlineStar className="absolute top-[20%] inline pb-1 text-xl text-yellow-400 " />
                </>
              )}
            </h3>

            <SelectButton />
          </div>
        </div>
      </>
    );
  };
  const showMoreDetails = (e: any, id: any) => {
    if (e.target.tagName === "SELECT") {
      return;
    }
    dispatch(reset());
    navigate(`/search/${id}`);
  };

  return (
    <>
      <div className="group relative flex h-[250px] w-[170px] cursor-pointer text-ellipsis rounded-lg text-white transition delay-150 duration-300 ease-in-out">
        <CardDetails />
        <img
          src={images?.jpg.large_image_url}
          alt=""
          className="absolute h-full w-full rounded-lg transition delay-150 duration-300 ease-in-out group-hover:brightness-50 "
        />
      </div>
    </>
  );
};

export default AnimeCard;
