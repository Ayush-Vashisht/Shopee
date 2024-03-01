import React, { useState } from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Input, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-start items-start ml-[120px] gap-2">
        <Img src="images/img_group_19.svg" alt="image" className="h-6 mt-1" />
        <Heading as="h4">EzShopee </Heading>
      </div>
      <div className="flex flex-row justify-between w-3/5 mr-[120px]">
        <Input
          color="white_A700"
          size="xs"
          variant="fill"
          name="search"
          placeholder="Search here"
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          suffix={
            <div className="flex justify-center items-center w-12 h-12 bg-gray-800">
              {searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} />
              ) : (
                <Img src="images/img_search_white_a700_18x18.svg" alt="search" className="cursor-pointer" />
              )}
            </div>
          }
          className="w-[53%] gap-[35px] text-gray-500_87 border-gray-50 border-2 border-solid"
        />
        <div className="flex flex-row justify-between items-center w-1/5">
          <div className="flex flex-row justify-between w-auto gap-8">
            <Img src="images/img_cart.svg" alt="cart_one" className="h-6 w-6" />
            <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-6 w-6" />
          </div>
          <Button size="md" className="font-bold min-w-[107px]">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

