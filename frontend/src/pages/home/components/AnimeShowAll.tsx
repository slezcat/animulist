import AnimeCard from "./AnimeCard";
import AnimeContainer from "./AnimeContainer";

const AnimeShowAll = ({data}: any) => {
  return data.map((categories: any, i: number) => {
    return Object.keys(categories).map((key: any, i: number) => {
      return (
        <>
          <h2 className=" text-4xl font-light tracking-wider text-white">
            {key === "seasonNowAnime" && "Top Anime This Season"}
            {key === "seasonUpcomingAnime" && "Top Upcoming Anime"}
          </h2>
          <AnimeContainer>
            {categories[key].slice(0, -20).map((item: any, i: number) => {
              return <AnimeCard data={item} />;
            })}
          </AnimeContainer>
        </>
      );
    });
  });
};

export default AnimeShowAll;
