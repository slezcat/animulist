import AnimeContainer from "./Container";

const CardSkeleton = () => {
  return (
    <>
      <div className="h-12 w-80 animate-pulse rounded-lg bg-[#202020] transition delay-150 duration-300 ease-in-out">
        {" "}
      </div>
      <AnimeContainer>
        {[...Array(5)].map((_, i: number) => (
          <>
            <div className="group relative flex h-60 w-40 animate-pulse cursor-pointer text-ellipsis rounded-lg bg-[#202020] text-white transition delay-150 duration-300 ease-in-out"></div>
          </>
        ))}
      </AnimeContainer>
      <div className="h-12 w-80 animate-pulse rounded-lg bg-[#202020] transition delay-150 duration-300 ease-in-out">
        {" "}
      </div>
      <AnimeContainer>
        {[...Array(5)].map((_, i: number) => (
          <>
            <div className="group relative flex h-60 w-40 animate-pulse cursor-pointer text-ellipsis rounded-lg bg-[#202020] text-white transition delay-150 duration-300 ease-in-out"></div>
          </>
        ))}
      </AnimeContainer>
    </>
  );
};

export default CardSkeleton;
