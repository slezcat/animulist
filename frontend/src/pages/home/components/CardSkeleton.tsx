import AnimeContainer from "./Container";

const CardSkeleton = () => {
  return (
    <>
      <AnimeContainer>
        {[...Array(10)].map(() => (
          <div className="group relative flex h-60 w-40 animate-pulse cursor-pointer text-ellipsis rounded-lg bg-slate-700 text-white transition delay-150 duration-300 ease-in-out"></div>
        ))}
      </AnimeContainer>
    </>
  );
};

export default CardSkeleton;
