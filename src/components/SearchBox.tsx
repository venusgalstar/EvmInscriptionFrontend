import { FC, ReactNode, useState } from "react";
import SearchButton from "./SearchButton";

const SearchBox: FC<{
  children?: ReactNode;
  setData?: Function;
}> = ({ children, setData }) => {
  
  return (
    <div className="flex flex-col items-center justify-center px-[16px] py-[80x] mt-[80px]">
      <div className="text-[24px] mb-4 text-[#f6ae2d] font-bold line-[12px] tracking-widest">
        Search opc-20 or wallet
      </div>
      <div className="text-[14px] mb-8 text-[#ffffff73] tracking-widest">
        <a
          href="https://docs.optimism.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 underline-offset-4"
        >
          Read more details about opc-20
        </a>
      </div>

      <SearchButton setData={setData} />

      {children}
    </div>
  );
};

export default SearchBox;
