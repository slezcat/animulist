import React from "react";

type Props = {};

const Skeleton = (props: Props) => {
  return (
    <div className="animate-pulse grid grid-flow-dense grid-cols-4 gap-4 text-white md:grid-cols-[200px_auto]">
      <div className="col-span-4 flex flex-col items-center  justify-center sm:flex-row sm:justify-start md:col-span-1 md:flex-col">
        <div className="row-span-3 w-[200px] h-[300px] bg-[#202020] rounded" />
       
      </div>
      <div className="col-span-4 md:col-span-1">
        <h1 className="text-3xl bg-[#202020] text-[#202020]">a</h1>
        <p className="whitespace-normal text-sm line-clamp-[12] bg-[#202020] h-[80%] mt-3">
          <span className="block text-lg font-semibold xl:hidden">
           
          </span>
         
        </p>
      </div>
      <div className="col-span-4 w-full bg-[#202020] md:col-span-1 h-[80vh]"></div>
      <div className="col-span-4 bg-[#202020] lg:col-span-1 h-[80vh]"></div>
    </div>
  );
};

export default Skeleton;
