import {KeyboardEventHandler, useState} from "react";
import { useAppDispatch } from "../app/hooks";
import {getAnime} from "../features/animeSlice";

type Props = {};

const Search = (props: Props) => {
  const [params, setParams] = useState<String>("")
  const dispatch = useAppDispatch()

  const handleOnChange = (e:any)=>{
    e.preventDefault()
    setParams(e.target.value);
  }
  const handleOnKeyUp = ({key}:React.KeyboardEvent<HTMLInputElement>)=>{
    if (key === "Enter"){
      console.log(key)
      dispatch(getAnime(params))
    }
  };

  return (
    <div className="text-white flex items-center">
      <input
        placeholder="Search"
        type="text"
        name=""
        id=""
        className="rounded-sm border-b-2 bg-[#202020]  p-1 focus:outline-none border-red-500"
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
      />
      <button>
        Search
      </button>
    </div>
  );
};

export default Search;
