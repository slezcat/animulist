import AnimeCard from "./Card";
import AnimeContainer from "./Container";


const AnimeShowAll = ({ data }: any) => {
  return (
    <div className="">
      {data.map((categories: any, i: number) => {
        return Object.keys(categories).map((key: any, i: number) => {
          return (
            <>
              <h2 className=" text-4xl font-light tracking-wider text-white ">
                {key === "now" && "Top Current Season"}
                {key === "upcoming" && "Top Upcoming Season"}
                {key === "top 10" && "Most Popular Anime"}
              </h2>
             
              <AnimeContainer>
                {categories[key].map((item: any, i: number) => {
                  return <AnimeCard data={item} />;
                })}
              </AnimeContainer>
            </>
          );
        });
      })}
    </div>
  );
};

export default AnimeShowAll;
