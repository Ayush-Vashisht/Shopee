import { Button } from "components/Button";
import { Heading } from "components/Heading";
import { Img } from "components/Img";
import Searchbar from "components/Searchbar";
import { Text } from "components/Text";
import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="flex  items-center justify-start w-full bg-white-A700">
      <header className="flex justify-center items-center w-full p-[17px] bg-white-A700">
        <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1632px]">
          <div className="flex flex-row justify-start items-start gap-2">
            <Img
              src="images/img_group_19.svg"
              alt="image"
              className="h-6 mt-1"
            />
            <Heading as="h4" className="!text-gray-800">
              EzShopee{" "}
            </Heading>
          </div>
          <div className="flex flex-row justify-between items-center w-[70%]">
            <div className="flex flex-row justify-between w-auto gap-20">
              <Link to="/categories">
                <Text as="p" className="mt-0.5 !text-gray-800 !font-medium">
                  Categories
                </Text>
              </Link>
              <Link to="/newarrivals">
                <Text as="p" className="!text-gray-800 !font-medium">
                  New Arrival
                </Text>
              </Link>
              <Link to="/features">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Features
                </Text>
              </Link>
              <Link to="/collections">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Collections
                </Text>
              </Link>
            </div>
            <div className="flex flex-row justify-end items-center w-[40%] gap-1  ">
              <div className="flex  w-auto  px-2">
                <Searchbar />
              </div>
              <div className="flex flex-row items-center justify-between gap-4">
                <Link to="/cart">
                  <Img
                    src="images/img_cart.svg"
                    alt="cart_one"
                    className="h-8 w-8 "
                  />
                </Link>
                <Button size="5xl" className="font-bold min-w-[107px]">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
