import { useEffect } from "react";
import { allAnime } from "../../api/animeAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAnime } from "../../features/animeSlice";
import CardSkeleton from "../../pages/home/components/AnimeCardSkeleton";
import AnimeSearch from "../../pages/home/components/AnimeSearch";
import AnimeShowAll from "../../pages/home/components/AnimeShowAll";

const Home = () => {
  const { anime, status } = useAppSelector((store: any) => store.anime);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnime(allAnime));
  }, [dispatch]);
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
              return <AnimeShowAll data={anime} />;
            case "failed":
              return (
                <h1 className="mt-12 h-[100vh] w-full text-center text-6xl text-white">
                  Something Went Wrong!
                </h1>
              );
            case "not found":
              return (
                <h1 className="mt-12 h-[100vh] w-full text-center text-6xl text-white">
                  No Result
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
