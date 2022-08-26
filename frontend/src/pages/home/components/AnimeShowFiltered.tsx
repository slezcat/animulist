import AnimeCard from "./AnimeCard";
import AnimeContainer from "./AnimeContainer";

const AnimeShowFiltered = ({data}: any) => {
  return (
    <>
      <AnimeContainer>
        {data.map((item: any, i: number) => {
          return <AnimeCard data={item} />;
        })}
      </AnimeContainer>
    </>
  );
};

export default AnimeShowFiltered;
