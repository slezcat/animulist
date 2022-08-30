import AnimeCard from "./AnimeCard";
import AnimeContainer from "./AnimeContainer";

const AnimeShowAll = ({data}: any) => {
  
  return data.map((categories: any, i: number) => {
    return Object.keys(categories).map((key: any, i: number) => {
      return (
        <>
          <h2 className=" text-4xl font-light tracking-wider text-white">
            {key}   
          </h2>
          <AnimeContainer>
            {categories[key].map((item: any, i: number) => {
              return <AnimeCard data={item} />;
            })}
          </AnimeContainer>
        </>
      );
    });
  });
};

export default AnimeShowAll;
