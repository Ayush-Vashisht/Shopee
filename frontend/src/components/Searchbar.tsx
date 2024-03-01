import React, { useState } from "react";
import { Input } from "./Input";
import { CloseSVG } from "assets/images";
import { Img } from "./Img";

const Searchbar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [show, setShow] = useState(false);
  const handleCloseClick = () => {
    setSearchBarValue("");
    setShow(false);
  };
  return (
    <div>
      {show ? (
        <Input
          color="white_A700"
          size="xs"
          variant="fill"
          name="search"
          placeholder="Search..."
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          suffix={
            <div className="flex justify-center items-center w-14 h-14 bg-re-800 ">
              {searchBarValue?.length >=0 ? (
                <>
                  <CloseSVG onClick={handleCloseClick} height={18} width={18} />
                </>
              ) : (
                <Img
                  src="images/img_search_white_a700_18x18.svg"
                  alt="search"
                  className="cursor-pointer"
                />
              )}
            </div>
          }
          className="w-[53%] gap-[35px] px-1 border-gray-50 border-2 border-solid"
        />
      ) : (
        <Img
          src="images/img_search.svg"
          alt="search_one"
          className="h-6 w-6"
          onClick={() => setShow(true)}
        />
      )}
    </div>
  );
};

export default Searchbar;
