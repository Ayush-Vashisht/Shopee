import React from "react";
import { Text, Img, Heading, Input, RatingBar, Button } from "../../components";
import { Link } from "react-router-dom";
import Headers from "pages/Headers/Index";

export default function HomepageVOnePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Headers />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-end w-full bg-gray-50">
              <div className="flex flex-row justify-end items-start w-full mx-auto max-w-[1776px]">
                <div className="flex flex-col items-start justify-start w-[32%] mt-[102px] z-[1]">
                  <Text
                    size="xl"
                    as="p"
                    className="!text-gray-800 !font-playfairdisplay"
                  >
                    Summer Sale
                  </Text>
                  <Heading  as="h1" className="mt-0.5 !text-gray-800">
                    50% Off
                  </Heading>
                  <Text
                    as="p"
                    className="w-[93%] mt-[34px] !text-gray-800 leading-8"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </Text>
                  <Link to="/collections">
                    <Button
                      size="3xl"
                      rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" />}
                      className="mt-14 gap-2.5 font-medium min-w-[245px]"
                    >
                      Shop Now
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-row justify-end w-[69%] ml-[-14px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-center w-full">
                      <Img
                        src="images/img_placeholder.png"
                        alt="placeholder_one"
                        className="w-[32%] object-cover"
                      />
                      <Img
                        src="images/img_placeholder_364x837.png"
                        alt="placeholder"
                        className="w-[69%] object-cover"
                      />
                    </div>
                    <div className="flex flex-row justify-center w-full">
                      <div className="h-[336px] w-[32%] relative">
                        <Img
                          src="images/img_placeholder_336x385.png"
                          alt="placeholder"
                          className="justify-center h-[336px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex w-28 h-3 bottom-[11%] right-[17%] m-auto absolute" />
                      </div>
                      <Img
                        src="images/img_placeholder_336x384.png"
                        alt="placeholder"
                        className="w-[32%] object-cover"
                      />
                      <div className="flex flex-row justify-center w-[38%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            src="images/img_placeholder_336x453.png"
                            alt="placeholder"
                            className="w-full object-cover"
                          />
                          <Img
                            src="images/img_button.svg"
                            alt="button_one"
                            className="h-12 mt-[-48px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[103px] gap-7 max-w-[1633px]">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading size="s" as="h2" className="!text-gray-800">
                Categories
              </Heading>
              <div className="flex flex-row justify-center mt-[9px]">
                <Link to="/categories">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </Link>
              </div>
            </div>
            <div className="flex flex-row w-full gap-8">
              <Link to="/productlist/jacket" className="flex flex-col items-center justify-start w-[16%] gap-[7px] p-9 bg-gray-50">
                <Img
                  src="images/img_sweater.svg"
                  alt="jacket_one"
                  className="h-24 w-24"
                />
                <Text as="p" className="mb-2.5">
                  Jacket
                </Text>
              </Link>
              <Link to="/productlist/shirt"  className="flex flex-col items-center justify-start w-[16%] gap-[7px] p-9 bg-gray-50">
                <Img
                  src="images/img_tshirt.svg"
                  alt="tshirt_one"
                  className="h-24 w-24"
                />
                <Text as="p" className="mb-2.5">
                  Shirt
                </Text>
              </Link>
              <Link to="/productlist/pants"  className="flex flex-col items-center justify-start w-[16%] gap-2 p-9 bg-gray-50">
                <Img
                  src="images/img_pants.svg"
                  alt="pants_one"
                  className="h-24 w-24"
                />
                <Text as="p" className="mb-[9px]">
                  Pants
                </Text>
              </Link>
              <Link to="/productlist/shoes"  className="flex flex-col items-center justify-start w-[16%] gap-[7px] p-9 bg-gray-50 hover:bg-gray-800">
                <Img
                  src="images/img_boot_gray_800.svg"
                  alt="boot_one"
                  className="h-24 w-24 object-cover  hover:opacity-0"
                />
                
                <Text as="p" className="mb-2.5 hover:!text-white-A700">
                  Shoes
                </Text>
              </Link>
              <Link to="/productlist/dress"  className="flex flex-col items-center justify-start w-[16%] gap-2 p-9 bg-gray-50">
                <Img
                  src="images/img_dress.svg"
                  alt="dress_one"
                  className="h-24 w-24"
                />
                <Text as="p" className="mb-[9px]">
                  Dress
                </Text>
              </Link>
              <Link to="/productlist/accesories"  className="flex flex-col items-center justify-start w-[16%] gap-[7px] p-9 bg-gray-50">
                <Img
                  src="images/img_belt.svg"
                  alt="belt_one"
                  className="h-24 w-24"
                />
                <Text as="p" className="mb-2.5">
                  Accesories
                </Text>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[98px] max-w-[1632px]">
            <div className="flex flex-col items-center justify-start w-full gap-[33px]">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="s" as="h2" className="!text-gray-800">
                  New Arrivals
                </Heading>
                <div className="flex flex-row justify-center">
                  <a href="#">
                    <Text as="p" className="!text-gray-800 !font-medium">
                      View all
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full gap-8">
                <div className="flex flex-row justify-between items-center w-1/2 p-7 bg-gray-50">
                  <Img
                    src="images/img_placeholder_631x384.png"
                    alt="placeholder"
                    className="w-[52%] ml-[33px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[33%] mr-[33px] gap-6">
                    <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[5px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Purple Warm Jacket
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                    <Button size="5xl" className="font-bold min-w-[200px]">
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-1/2">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="justify-center w-full gap-8 grid-cols-2 grid min-h-[auto]">
                      <div className="flex flex-col items-center justify-start w-full gap-4 p-8 bg-gray-50">
                        <Img
                          src="images/img_placeholder_177x177.png"
                          alt="placeholder_one"
                          className="w-[177px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[89%] pt-0.5 gap-1.5">
                          <Text size="md" as="p" className="!text-gray-800">
                            Blue Grey Warm Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-3.5 p-[31px] bg-gray-50">
                        <Img
                          src="images/img_placeholder_1.png"
                          alt="placeholder_one"
                          className="w-[177px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[52%] gap-[9px]">
                          <Text size="md" as="p" className="!text-gray-800">
                            Denim Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[31px] bg-gray-50">
                        <Img
                          src="images/img_placeholder_2.png"
                          alt="placeholder_one"
                          className="w-[177px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[48%] gap-[9px]">
                          <Text size="md" as="p" className="!text-gray-800">
                            Black Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[31px] bg-gray-50">
                        <Img
                          src="images/img_placeholder_3.png"
                          alt="placeholder_one"
                          className="w-[177px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[72%] gap-[9px]">
                          <Text size="md" as="p" className="!text-gray-800">
                            Green Polar Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[99px] gap-8 max-w-[1632px]">
            <div className="flex flex-row justify-between items-center w-full">
              <Heading size="s" as="h2" className="!text-gray-800">
                Featured
              </Heading>
              <div className="flex flex-row justify-center">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[96%] gap-[113px]">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col items-center justify-start w-1/4 gap-[15px] p-[41px] border-gray-800 border-2 border-solid">
                  <Img
                    src="images/img_placeholder_250x250.png"
                    alt="black_briefcase"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[61%] gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Black Briefcase
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                  <Button size="5xl" className="font-bold min-w-[200px]">
                    Add to Cart
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-[16%] gap-3.5">
                  <Img
                    src="images/img_placeholder_4.png"
                    alt="placeholder_one"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[45%] gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Pink Shirt
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/4 gap-4 px-14 py-[67px]">
                  <Img
                    src="images/img_placeholder_5.png"
                    alt="placeholder"
                    className="w-[250px] mt-3.5 object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[54%] mb-3.5 gap-1.5">
                    <Text size="md" as="p" className="!text-gray-800">
                      Gray T-shirt
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[16%] gap-[15px]">
                  <Img
                    src="images/img_placeholder_6.png"
                    alt="placeholder"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[57%] gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Red Flannel
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-[96%] ml-[67px]">
                <div className="flex flex-col items-center justify-start w-[17%] gap-4">
                  <Img
                    src="images/img_placeholder_3.png"
                    alt="stylishblacks"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[77%] pt-0.5 gap-1.5">
                    <Text size="md" as="p" className="!text-gray-800">
                      Black Highheels
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[17%] gap-4">
                  <Img
                    src="images/img_placeholder_631x384.png"
                    alt="casualfabrics"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[92%] pt-0.5 gap-1.5">
                    <Text size="md" as="p" className="!text-gray-800">
                      Casual Grey Shoes
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[17%] gap-[15px]">
                  <Img
                    src="images/img_shoes_isolated_pk7npbk.png"
                    alt="shoesisolated"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[62%] gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Brown Shoes
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[17%] gap-3.5">
                  <Img
                    src="images/img_business_shirt_ptnj9lv.png"
                    alt="businessshirt"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[67%] gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Business Shirt
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-[96%] ml-[67px]">
                <div className="flex flex-col items-center justify-start w-[17%] gap-4">
                  <Img
                    src="images/img_warm_pants_pxl7hrp.png"
                    alt="warmpants_one"
                    className="w-[250px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[85%] pt-0.5 gap-[5px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Grey Warm Pants
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[73%]">
                  <div className="flex flex-col items-center justify-start w-[24%] gap-4">
                    <Img
                      src="images/img_sport_j9bzxuy.png"
                      alt="sportj9bzxuy"
                      className="w-[250px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[93%] pt-0.5 gap-[5px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Green Sport Jacket
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[36%] gap-4 px-14 py-[67px]">
                    <Img
                      src="images/img_travel_8v7cnke.png"
                      alt="travel8v7cnke"
                      className="w-[250px] mt-3.5 object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[91%] mb-3.5 pt-0.5 gap-[5px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Purple Warm Jacket
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] gap-3.5">
                    <Img
                      src="images/img_placeholder_1.png"
                      alt="womensdenim_one"
                      className="w-[250px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[96%] gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Woman Denim Skirt
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[544px] w-full mt-[75px] relative">
            <div className="flex flex-row justify-center w-[87%] bottom-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-row w-[99%] gap-8">
                  <div className="h-[400px] w-[33%] bg-blue_gray-100 relative">
                    <Img
                      src="images/img_image_2.png"
                      alt="summer"
                      className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="w-[36%] h-max left-[11%] bottom-0 top-0 m-auto !text-gray-800 absolute"
                    >
                      <span className="text-gray-800">
                        Summer <br />
                      </span>
                      <span className="text-gray-800 font-bold">
                        Collection
                      </span>
                    </Text>
                  </div>
                  <div className="h-[400px] w-[33%] bg-blue_gray-100 relative">
                    <Img
                      src="images/img_image_3.png"
                      alt="imagethree_one"
                      className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="w-[36%] h-max left-[10%] bottom-0 top-0 m-auto !text-white-A700 absolute"
                    >
                      <span className="text-white-A700">
                        Casual <br />
                      </span>
                      <span className="text-white-A700 font-bold">
                        Collection
                      </span>
                    </Text>
                  </div>
                  <div className="h-[400px] w-[33%] bg-blue_gray-100 relative">
                    <Img
                      src="images/img_image_4.png"
                      alt="imagefour_one"
                      className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="w-[36%] h-max left-[10%] bottom-0 top-0 m-auto !text-white-A700 absolute"
                    >
                      <span className="text-white-A700">
                        Big Vibe <br />
                      </span>
                      <span className="text-white-A700 font-bold">
                        Collection
                      </span>
                    </Text>
                  </div>
                </div>
                <Button
                  color="white_A700"
                  size="4xl"
                  className="w-[60px] ml-[-30px]"
                >
                  <Img src="images/img_arrow_gray_800.svg" />
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full top-0 right-0 left-0 p-[43px] m-auto bg-gray-800 absolute">
              <Heading size="s" as="h2" className="mb-[284px] ml-[100px]">
                Summer Collections
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[103px] gap-[51px] max-w-[1632px]">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading size="s" as="h2" className="!text-gray-800">
                Popular This Week
              </Heading>
              <div className="flex flex-row justify-center mt-[9px]">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[98%] gap-[77px]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-start items-center w-[29%] gap-4">
                  <div className="flex flex-row justify-start w-[49%]">
                    <Img
                      src="images/img_placeholder_175x225.png"
                      alt="checkered"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[48%] gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Checkered Jacket
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[27%] ml-[94px] gap-4">
                  <div className="flex flex-row justify-start w-[54%]">
                    <Img
                      src="images/img_placeholder_7.png"
                      alt="checkered"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[43%] gap-4">
                    <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                      <Text size="md" as="p" className="mt-0.5 !text-gray-800">
                        Elegant Jacket
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[31%] ml-[134px] gap-4">
                  <div className="flex flex-row justify-start w-[47%]">
                    <Img
                      src="images/img_placeholder_8.png"
                      alt="checkered"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-1/2 gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Blue Woman Denim
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-[95%] mr-[88px]">
                <div className="flex flex-row justify-start items-center w-[28%] gap-4">
                  <div className="flex flex-row justify-start w-[55%]">
                    <Img
                      src="images/img_placeholder_9.png"
                      alt="placeholder_one"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[42%] gap-4">
                    <div className="flex flex-col items-start justify-center w-full gap-1">
                      <Text size="md" as="p" className="mt-0.5 !text-gray-800">
                        Orange Jeans
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[27%] gap-4">
                  <div className="flex flex-row justify-start w-[58%]">
                    <Img
                      src="images/img_placeholder_10.png"
                      alt="placeholder"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[39%] gap-4">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Blue Jeans
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[27%] gap-4">
                  <div className="flex flex-row justify-start w-[58%]">
                    <Img
                      src="images/img_placeholder_11.png"
                      alt="placeholder"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[39%] gap-4">
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                      <Text size="md" as="p" className="mt-px !text-gray-800">
                        Gray Watch
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-[96%] mr-[67px]">
                <div className="flex flex-row justify-between w-[63%]">
                  <div className="flex flex-row justify-start items-center w-1/2 gap-4">
                    <div className="flex flex-row justify-start w-[49%]">
                      <Img
                        src="images/img_placeholder_12.png"
                        alt="placeholder_one"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-4">
                      <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                        <Text size="md" as="p" className="mt-px !text-gray-800">
                          Black Sport Jacket
                        </Text>
                        <Text size="md" as="p">
                          $299
                        </Text>
                      </div>
                      <RatingBar
                        value={4}
                        isEditable={true}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={24}
                        className="flex justify-between w-[152px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[42%] gap-4">
                    <div className="flex flex-row justify-start w-[58%]">
                      <Img
                        src="images/img_placeholder_13.png"
                        alt="placeholder"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[39%] gap-4">
                      <div className="flex flex-col items-start justify-start gap-2">
                        <Text size="md" as="p" className="!text-gray-800">
                          Wristwatch
                        </Text>
                        <Text size="md" as="p">
                          $299
                        </Text>
                      </div>
                      <RatingBar
                        value={4}
                        isEditable={true}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={24}
                        className="flex justify-between w-[152px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[28%] gap-4">
                  <div className="flex flex-row justify-start w-[55%]">
                    <Img
                      src="images/img_placeholder_14.png"
                      alt="placeholder"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[42%] gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Classic Watch
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full mt-[126px] gap-[27px]">
            <Heading size="s" as="h2" className="ml-36 !text-gray-800">
              Why Choose Us
            </Heading>
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-row w-full gap-8 px-36 bg-gray-50">
                <div className="flex flex-col items-center justify-center h-96 w-[24%] gap-8 px-14 py-[63px]">
                  <div className="flex flex-col items-center justify-center h-[120px] w-[120px] p-[25px] border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img
                      src="images/img_truck.svg"
                      alt="truck_one"
                      className="h-[65px] w-[65px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[78%] gap-3.5">
                    <Heading as="h3" className="!text-gray-800">
                      Free Delivery
                    </Heading>
                    <Text as="p" className="text-center">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-96 w-[24%] gap-8 px-14 py-[63px]">
                  <div className="flex flex-col items-center justify-start h-[120px] w-[120px] p-[26px] border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img
                      src="images/img_card.svg"
                      alt="card_one"
                      className="h-16 w-16"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[78%] pt-0.5 gap-[13px]">
                    <Heading as="h4" className="!text-gray-800">
                      Payment Method
                    </Heading>
                    <Text as="p" className="text-center">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-96 w-[24%] gap-8 px-14 py-[63px]">
                  <div className="flex flex-col items-center justify-center h-[120px] w-[120px] p-[25px] border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img
                      src="images/img_broken.svg"
                      alt="broken_one"
                      className="h-16 w-16"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[78%] pt-0.5 gap-[13px]">
                    <Heading as="h5" className="!text-gray-800">
                      Warranty
                    </Heading>
                    <Text as="p" className="text-center">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-96 w-[24%] gap-8 px-14 py-[63px]">
                  <div className="flex flex-col items-center justify-center h-[120px] w-[120px] p-[25px] border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img
                      src="images/img_support.svg"
                      alt="support_one"
                      className="h-[65px] w-[65px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[84%] pt-0.5 gap-[13px]">
                    <Heading as="h6" className="!text-gray-800">
                      Customer Support{" "}
                    </Heading>
                    <Text as="p" className="w-[93%] text-center">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_brand.svg"
            alt="brand_one"
            className="h-[68px] mt-[100px]"
          />
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px] p-[30px] bg-gray-800">
          <div className="flex flex-col items-center justify-center w-[83%] mt-[31px] ml-[113px] gap-[82px]">
            <div className="flex flex-row justify-end w-full">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-row justify-between items-start w-[63%]">
                  <div className="flex flex-col items-start justify-start w-[45%] gap-[30px]">
                    <Heading as="h4">Join our Newsletter</Heading>
                    <Text as="p" className="!text-white-A700">
                      Drop your email below to get update about us, <br />
                      lastest news, tips, and more!
                    </Text>
                    <Input
                      color="white_A700"
                      variant="fill"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      suffix={
                        <Img src="images/img_arrow_gray_800.svg" alt="Arrow" />
                      }
                      className="w-[91%] gap-[35px] text-gray-500_87 tracking-[0.36px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[18%] gap-[25px]">
                    <Heading as="h4">Product Links</Heading>
                    <div className="flex flex-col items-start justify-center gap-[15px]">
                      <Text as="p" className="mt-px !text-white-A700">
                        Categories
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        New Arrival
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        Features
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        Collections
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[13%] mt-1 gap-[21px]">
                    <Heading as="h4">Company</Heading>
                    <div className="flex flex-col items-start justify-start">
                      <Text as="p" className="!text-white-A700">
                        About
                      </Text>
                      <Text as="p" className="mt-3 !text-white-A700">
                        Blog
                      </Text>
                      <a href="#" className="mt-[7px]">
                        <Text as="p" className="!text-white-A700">
                          Careers
                        </Text>
                      </a>
                      <Text as="p" className="mt-2.5 !text-white-A700">
                        Contact{" "}
                      </Text>
                      <Text as="p" className="mt-[9px] !text-white-A700">
                        Services
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[28%]">
                  <div className="flex flex-col items-start justify-start w-[35%] mt-[3px] gap-[21px]">
                    <a href="#">
                      <Heading as="h4">Support</Heading>
                    </a>
                    <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                      <Text as="p" className="mt-0.5 !text-white-A700">
                        Support Center
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        FAQ
                      </Text>
                      <a href="#">
                        <Text as="p" className="!text-white-A700">
                          Privacy Policy
                        </Text>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-white-A700">
                          Terms of service
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[36%] gap-6">
                    <Heading as="h4">Get In Touch</Heading>
                    <div className="flex flex-row justify-between w-[79%]">
                      <Img
                        src="images/img_instagram.svg"
                        alt="instagram_one"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-col items-center justify-start h-6 w-6">
                        <div className="flex flex-col items-center justify-start h-6 w-6">
                          <Img
                            src="images/img_twitter.svg"
                            alt="twitter_one"
                            className="h-6 w-6"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_facebook.svg"
                        alt="facebook_one"
                        className="h-6 w-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text size="xs" as="p" className="mr-[583px] !text-white-A700">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
