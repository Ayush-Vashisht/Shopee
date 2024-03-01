import React from "react";
import { Text, Input, Img, Heading, Button, SelectBox } from "../../components";
import Header1 from "../../components/Header1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CheckoutPage() {
  return (
    <>
      
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header1 className="flex flex-col items-center justify-center w-full" />
        <div className="flex flex-row justify-center w-full mt-[30px] max-w-[1632px]">
          <div className="flex flex-col items-center justify-start w-full">
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
            <Heading size="s" as="h1" className="mt-[38px]">
              Checkout
            </Heading>
            <div className="flex flex-row justify-between w-[99%] mt-[100px]">
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
                <div className="h-0.5 w-[44%] ml-14 bg-blue_gray-100" />
                <div className="flex flex-row justify-start items-center w-1/4 ml-8 gap-6">
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-center items-center h-14 !text-blue_gray-100 border-blue_gray-100 border-2 border-solid text-center rounded-[50%]"
                  >
                    3
                  </Text>
                  <Text size="md" as="p" className="!text-blue_gray-100">
                    Completed
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-[81px]">
              <div className="flex flex-col items-center justify-start w-[41%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row justify-start">
                    <Text as="p" className="!text-gray-800 !font-medium">
                      Buyer Info
                    </Text>
                  </div>
                  <div className="h-px w-full mt-[30px] bg-blue_gray-100" />
                  <Text as="p" className="mt-[30px]">
                    Full Name
                  </Text>
                  <Input size="md" name="fullName" className="w-full mt-4" />
                  <Text as="p" className="mt-[31px] text-center">
                    Address
                  </Text>
                  <Input size="md" name="address" className="w-full mt-4" />
                  <Text as="p" className="mt-8 text-center">
                    Contact
                  </Text>
                  <Input size="md" name="form_one" className="w-full mt-[15px]" />
                  <Text as="p" className="mt-[33px] text-center">
                    City
                  </Text>
                  <Input size="md" name="city" className="w-full mt-3.5" />
                  <div className="flex flex-row justify-start items-center w-full mt-8 gap-8">
                    <div className="flex flex-col items-start justify-start w-[59%] gap-[15px]">
                      <Text as="p" className="text-center">
                        State
                      </Text>
                      <SelectBox
                        indicator={<Img src="images/img_arrow_down_gray_500.svg" alt="arrow_down" />}
                        name="selectstate"
                        placeholder="Select State"
                        options={dropDownOptions}
                        className="w-full gap-px"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[38%] gap-3.5">
                      <Text as="p" className="text-center">
                        Zip Code
                      </Text>
                      <Input size="md" name="zipcode" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-1/2">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    Payment Method
                  </Text>
                  <div className="h-px w-full mt-[29px] bg-blue_gray-100" />
                  <div className="flex flex-row w-full mt-[31px] gap-[33px]">
                    <Button
                      color="blue_gray_100"
                      size="7xl"
                      leftIcon={<Img src="images/img_card.svg" alt="Card" />}
                      className="gap-4 !text-gray-800 border-blue_gray-100 border border-solid min-w-[245px]"
                    >
                      Credit Card
                    </Button>
                    <Button
                      size="7xl"
                      leftIcon={<Img src="images/img_transfer.svg" alt="TRANSFER" />}
                      className="gap-4 border-blue_gray-100 border border-solid min-w-[245px]"
                    >
                      Bank Transfer
                    </Button>
                    <Button
                      color="blue_gray_100"
                      size="7xl"
                      leftIcon={<Img src="images/img_paypal.svg" alt="paypal" />}
                      className="gap-4 !text-gray-800 border-blue_gray-100 border border-solid min-w-[245px]"
                    >
                      Paypal
                    </Button>
                  </div>
                  <Text as="p" className="mt-[31px]">
                    Name on Card
                  </Text>
                  <Input size="md" name="name" className="w-full mt-4" />
                  <div className="flex flex-row justify-start items-center w-full mt-[31px] gap-8">
                    <div className="flex flex-col items-start justify-start w-[66%] gap-4">
                      <Text as="p">Card Number</Text>
                      <Input size="md" name="cardNumber" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[31%] gap-[15px]">
                      <Text as="p">CVV</Text>
                      <Input size="md" name="cvv" className="w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mt-[31px] gap-8">
                    <div className="flex flex-col items-start justify-start w-[48%] gap-4">
                      <Text as="p">Month</Text>
                      <SelectBox
                        indicator={<Img src="images/img_arrow_down_gray_500.svg" alt="arrow_down" />}
                        name="selectmonth"
                        placeholder="Select Month"
                        options={dropDownOptions}
                        className="w-full gap-px"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                      <Text as="p">Year</Text>
                      <SelectBox
                        indicator={<Img src="images/img_arrow_down_gray_500.svg" alt="arrow_down" />}
                        name="selectyear"
                        placeholder="Select Year"
                        options={dropDownOptions}
                        className="w-full gap-px"
                      />
                    </div>
                  </div>
                  <Button size="5xl" className="mt-[75px] font-medium min-w-[245px]">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px]">
          <div className="flex flex-row justify-center w-full p-[30px] bg-gray-800">
            <div className="flex flex-col items-center justify-center w-[88%] mt-[31px] gap-[97px] mx-[113px]">
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
