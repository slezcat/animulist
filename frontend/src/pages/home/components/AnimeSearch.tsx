import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { getAnime,getAllAnime } from "../../../features/anime/animeSlice";

type Props = {};

const AnimeSearch = (props: Props) => {
  const [params, setParams] = useState<any>("");
  const dispatch = useAppDispatch();

  const handleOnChange = (e: any) => {
    e.preventDefault();
    setParams(e.target.value);
  };

  const handleOnKeyUp = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      if (params === "") {
        dispatch(getAllAnime());
      } else {
        dispatch(getAnime(params));
      }
      setParams("")
    }
  };

  return (
    <div className="flex items-center text-white mb-[4vh]">
      <input
        placeholder="Search"
        type="text"
        name=""
        id=""
        value={params}
        className="rounded-sm border-b-2 border-red-500  bg-[#202020] p-1 focus:outline-none"
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
      />
    </div>
  );
};

export default AnimeSearch;
