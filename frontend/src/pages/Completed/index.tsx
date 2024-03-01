import React from "react";
import { Text, Input, Img, Heading, Button } from "../../components";
import Header1 from "../../components/Header1";

export default function CompletedPage() {
  return (
    <>
      
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header1 className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-col items-center justify-start w-full mt-[30px] max-w-[1604px]">
          <div className="flex flex-row justify-start w-[23%] gap-4">
            <Text as="p" className="!font-medium">
              Home
            </Text>
            <Text as="p" className="!text-blue_gray-100 !font-medium">
              {`>`}
            </Text>
            <Text as="p" className="!font-medium">
              Shopping Cart
            </Text>
            <Text as="p" className="!text-blue_gray-100 !font-medium">
              {`>`}
            </Text>
            <Text as="p" className="!text-gray-800 !font-medium">
              Checkout
            </Text>
          </div>
          <div className="flex flex-row justify-between w-full mt-[97px]">
            <div className="flex flex-row justify-start items-center w-[42%] gap-[21px]">
              <div className="flex flex-row justify-start items-center w-[39%] gap-6">
                <Text
                  size="md"
                  as="p"
                  className="flex justify-center items-center h-14 !text-gray-800 border-gray-800 border-2 border-solid text-center rounded-[50%]"
                >
                  1
                </Text>
                <Text size="md" as="p" className="!text-gray-800">
                  Shopping Cart
                </Text>
              </div>
              <div className="h-0.5 w-[59%] bg-gray-800" />
            </div>
            <div className="flex flex-row justify-center items-center w-[56%]">
              <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                <Text
                  size="md"
                  as="p"
                  className="flex justify-center items-center h-14 !text-gray-800 border-gray-800 border-2 border-solid text-center rounded-[50%]"
                >
                  2
                </Text>
                <Text size="md" as="p" className="!text-gray-800">
                  Checkout
                </Text>
              </div>
              <div className="h-0.5 w-[44%] ml-14 bg-gray-800" />
              <div className="flex flex-row justify-start items-center w-1/4 ml-8 gap-6">
                <Text
                  size="md"
                  as="p"
                  className="flex justify-center items-center h-14 !text-gray-800 border-gray-800 border-2 border-solid text-center rounded-[50%]"
                >
                  3
                </Text>
                <Text size="md" as="p" className="!text-gray-800">
                  Completed
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[44%] mt-[206px]">
            <Heading size="md" as="h1">
              Checkout Complete!
            </Heading>
            <Text as="p" className="w-[98%] mt-[9px] !text-gray-800 text-center leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </Text>
            <Button size="5xl" className="mt-16 font-medium min-w-[245px]">
              Go Shopping Again
            </Button>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[200px] p-[30px] bg-gray-800">
          <div className="flex flex-row justify-center w-full mt-[31px] mx-auto max-w-[1632px]">
            <div className="flex flex-col items-center justify-center w-full gap-[97px]">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col items-start justify-start w-[26%] gap-[31px]">
                  <div className="flex flex-row justify-start items-start gap-2">
                    <Img src="images/img_group_19_white_a700.svg" alt="image_one" className="h-6 mt-1" />
                    <Heading as="h4" className="!text-white-A700">
                      Elliye{" "}
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
                        elliye@support.com
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
                      <a href="#" className="mt-[7px]">
                        <Text as="p">Careers</Text>
                      </a>
                      <Text as="p" className="mt-[9px]">
                        Services
                      </Text>
                      <a href="#" className="mt-3">
                        <Text as="p">Privacy Policy</Text>
                      </a>
                      <a href="#" className="mt-[7px]">
                        <Text as="p">Terms of service</Text>
                      </a>
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
                      type="email"
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
                Copyright © 2021 Elliye. All Right Reseved
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
