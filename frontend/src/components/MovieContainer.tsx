import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Card from "./Card";
type Props = {};

const MovieContainer = (props: Props) => {
  const [movies, setMovies] = useState<AxiosResponse<any, any>>();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await axios.get(
          "https://api.jikan.moe/v4/anime?q=higurashi&limit=12"
        );
        setMovies(moviesData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  });
  //   console.log(movies.data.data[0].title)
  return (
    <div className="grid grid-cols-4 gap-4 m-[10vw] pb-[10vw]">
      {/* { movies.data.data[0].title} */}
      {movies?.data.data.map((m: any) => {
        return <Card title={m.title} image={m.images.jpg.large_image_url} 
        synopsis={m.synopsis} score={m.score} genres={m.genres}
        />;
      })}
    </div>
  );
};

export default MovieContainer;
