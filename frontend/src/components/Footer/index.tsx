import React from "react";
import { Text, Input, Img, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-[88%] mt-[31px] gap-[97px] mx-[113px]">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-start justify-start w-[26%] gap-[31px]">
            <div className="flex flex-row justify-start items-start gap-2">
              <Img src="images/img_group_19_white_a700.svg" alt="image_three" className="h-6 mt-1" />
              <Heading as="h4" className="!text-white-A700">
                EzShopee{" "}
              </Heading>
            </div>
            <div className="flex flex-row justify-start">
              <Text as="p" className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-row justify-start items-center w-full gap-2 py-0.5">
                <Img src="images/img_call.svg" alt="call_one" className="h-6 w-6" />
                <Text as="p" className="!text-white-A700">
                  +1234567890
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2">
                <Img src="images/img_email_white_a700.svg" alt="email_three" className="h-6 w-6" />
                <Text as="p" className="mt-0.5 !text-white-A700">
                ezshopee@support.com
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-[58%] gap-8">
            <div className="flex flex-col items-start justify-start w-[27%] gap-[33px]">
              <Heading as="h4" className="!text-white-A700">
                Product Links
              </Heading>
              <div className="flex flex-col items-start justify-center gap-[15px]">
                <Text as="p" className="mt-px">
                  Categories
                </Text>
                <Text as="p">New Arrival</Text>
                <Text as="p">Features</Text>
                <Text as="p">Collections</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-[27%] gap-[29px]">
              <Heading as="h4" className="mt-0.5 !text-white-A700">
                Company
              </Heading>
              <div className="flex flex-col items-start justify-start">
                <Text as="p">About</Text>
                <Text as="p" className="mt-3">
                  Blog
                </Text>
                <Text as="p" className="mt-[7px]">
                  Careers
                </Text>
                <Text as="p" className="mt-[9px]">
                  Services
                </Text>
                <Text as="p" className="mt-3">
                  Privacy Policy
                </Text>
                <Text as="p" className="mt-[7px]">
                  Terms of service
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[41%] gap-[30px]">
              <Heading as="h4" className="!text-white-A700">
                Join our Newsletter
              </Heading>
              <Text as="p">Drop your email below to get update, promotions, coupons, and more!</Text>
              <Input
                color="gray_800"
                variant="fill"
                name="email"
                placeholder="Enter your email"
                suffix={
                  <div className="flex justify-center items-center w-[60px] h-[60px] bg-white-A700">
                    <Img src="images/img_arrow_gray_800.svg" alt="Arrow" />
                  </div>
                }
                className="w-full gap-[35px] tracking-[0.36px] border-white-A700 border border-solid"
              />
            </div>
          </div>
        </div>
        <Text size="xs" as="p" className="!text-blue_gray-100">
          Copyright © 2021 EzShopee. All Right Reseved
        </Text>
      </div>
    </footer>
  );
}
