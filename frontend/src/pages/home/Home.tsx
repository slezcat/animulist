import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { allAnimeApi } from "../../api/animeAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllAnime,  reset } from "../../features/animeSlice";
import CardSkeleton from "./components/CardSkeleton";
import AnimeSearch from "./components/Search";
import AnimeShowAll from "./components/ShowAll";

const Home = () => {
  
  // const [data ,setData] = useState(undefined)

  const { allAnime, status } = useAppSelector((store: any) => store.anime);
  let dispatch = useAppDispatch();

  
  useEffect(() => {
    dispatch(getAllAnime(allAnimeApi));
  }, [dispatch]);

  console.log(status)
  

  return (
    <>
      <AnimeSearch />
      {
        //show whether the anime is successfully fetched or not
        (() => {
          switch (status) { 
            case "loading":
              return <CardSkeleton />;
            case "idle":
              return <AnimeShowAll data={allAnime} />;
            case "failed":
              return (
                <h1 className="mt-12 h-[100vh] w-full text-center text-6xl text-white">
                  Something Went Wrong!
                </h1>
              );
            case "not found":
              return (
                <h1 className="mt-12 h-[100vh] w-full text-center text-6xl text-white">
                  404 Not Found
                </h1>
              );
            default:
              break;
          }
        })()
      }
    </>
  );
};

export default Home;
