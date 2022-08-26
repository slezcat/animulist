import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllAnime } from "../../features/anime/animeSlice";
import CardSkeleton from "../../pages/home/components/AnimeCardSkeleton";
import AnimeSearch from "../../pages/home/components/AnimeSearch";
import AnimeShowAll from "../../pages/home/components/AnimeShowAll";
import AnimeShowFiltered from "../../pages/home/components/AnimeShowFiltered";

const Home = () => {
  const { animeList, status } = useAppSelector((store: any) => store.anime);
  const dispatch = useAppDispatch();

  const api = [
    "https://api.jikan.moe/v4/seasons/now",
    "https://api.jikan.moe/v4/seasons/upcoming",
  ];

  useEffect(() => {
    dispatch(getAllAnime(api));
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
              return <AnimeShowAll data={animeList} />;
            case "searching":
              return <AnimeShowFiltered data={animeList} />;
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
