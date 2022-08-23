import { useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieContainer from "../components/MovieContainer";
import Search from "../components/Search";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAnime } from "../features/animeSlice";

const Home = () => {
  const { animeList } = useAppSelector((store: any) => store.anime);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />
        <div className="mx-[16vw]  mt-[6vh] px-1">
          <Search />
          <MovieContainer data={animeList} />
        </div>
      </div>
    </>
  );
};

export default Home;
