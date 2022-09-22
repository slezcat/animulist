import React, { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAnimeList, reset } from "../../features/list/listSlice";
import { openModal } from "../../features/modalSlice";
import Modal from "./components/Modal";

type Props = {};

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { animeList, status, message, listStatus, animeStatus } =
    useAppSelector((state) => state.list);

  const [queriedAnime, setQueriedAnime] = useState<any>(undefined);
  const [active,setActive] = useState(false)

  useEffect(() => {
    console.log(animeList);
    if (status === "failed") {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAnimeList());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, user]);

  const queryAnime = (listStatus: any) => {
    if (listStatus === "All Anime") {
      setQueriedAnime(animeList);
      return;
    }
    const wanted = animeList.filter((item: any) => {
      return item.listStatus === listStatus;
    });
    setQueriedAnime(wanted);
  };

  const modalHandler = (id:any)=>{
    const foundAnime = animeList.find((o:any) => o._id === id )
    dispatch(openModal(foundAnime))

  }

  let anime = queriedAnime === undefined ? animeList : queriedAnime;

  return (
    <>
      <section className="grid min-h-[70.4vh] grid-cols-[auto_200px] gap-2 text-white">
        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-[#383838] text-xs uppercase text-gray-700  dark:text-gray-300">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Title
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Rating
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Progress
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {anime.map((d: any) => {
                  return (
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-[#202020]">
                      <td className="w-32 p-4">
                        <img src={d.image} alt="" />
                      </td>
                      <th
                        scope="row"
                        className="whitespace-normal py-4 px-6 font-medium text-gray-900 dark:text-white"
                      >
                        {d.title}
                        <p className="font-light opacity-60">
                          {" "}
                          {d.animeStatus === "Not yet aired" && "Not yet aired"}
                        </p>
                      </th>

                      <td className="py-4 px-6 text-center">
                        {d.rating || 0}{" "}
                      </td>
                      <td className="py-4 px-6">{`0 / ${
                        d.episodes ?? "-"
                      }`}</td>
                      <td className="py-4 px-6">
                        <button
                          className="rounded border-[1px] px-2 py-1"
                          onClick={() =>  modalHandler(d._id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row-span-1 self-start bg-[#202020] text-center">
          <ul className="flex flex-col gap-2 p-5 font-semibold">
            <li
              className="cursor-pointer  bg-orange-400 bg-opacity-50 hover:bg-orange-700 text-gray-400 hover:text-white hover:bg-opacity-100"
              onClick={() => queryAnime("All Anime")}
            >
              All Anime
            </li>
            <li
              className="cursor-pointer  bg-gray-600 bg-opacity-50 hover:bg-gray-700 text-gray-400 hover:text-white hover:bg-opacity-100"
              onClick={() => queryAnime("Watching")}
            >
              Watching
            </li>
            <li
              className="cursor-pointer bg-blue-600 bg-opacity-30  hover:bg-blue-700 text-gray-400 hover:text-white hover:bg-opacity-100 "
              onClick={() => queryAnime("Plant to Watch")}
            >
              Plan to Watch
            </li>
            <li
              className="cursor-pointer  bg-green-600 bg-opacity-50 hover:bg-green-700 text-gray-400 hover:text-white hover:bg-opacity-100"
              onClick={() => queryAnime("Completed")}
            >
              Completed
            </li>
            <li
              className="cursor-pointer bg-yellow-600 bg-opacity-50 hover:bg-yellow-700 text-gray-400 hover:text-white hover:bg-opacity-100"
              onClick={() => queryAnime("On Hold")}
            >
              On Hold
            </li>
            <li
              className="cursor-pointer  bg-red-600 bg-opacity-50 hover:bg-red-700 text-gray-400 hover:text-white hover:bg-opacity-100"
              onClick={() => queryAnime("Dropped")}
            >
              Dropped
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dashboard;