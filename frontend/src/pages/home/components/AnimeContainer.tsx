const AnimeContainer = ({ children }: any) => {
  return (
    <div className=" mt-[6vh] grid grid-cols-1 place-items-center gap-[3vh] pb-[10vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {children}
    </div>
  );
};

export default AnimeContainer;
