"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiBedBold } from "react-icons/pi";
import { PiShower } from "react-icons/pi";
import { BsBox } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CardSlider from "./cardSlider";
import { useRouter } from "next/navigation";

interface MyComponentProps {
  data: any;
  // title: string;
  // price: string;
  // description: string;
  // totalBed?: number;
  // totalShower?: number;
  // totalCar?: number;
  // totalMeter?: number;
  // cartImage?: any;
  // numPhotos?: number;
  // type?: string;

  size?: string;
  // isVideo?: boolean;
  // src?: any;
  // agency: any;
  bgClassName?: string;
}

function CardProduct({
  data,
  // price,
  // description,
  // totalBed,
  // totalShower,
  // totalCar,
  // totalMeter,
  // cartImage,
  // numPhotos,
  // type,
  // numPhotos: number;
  size,
  // isVideo,
  // src,
  // agency,
  bgClassName,
}: MyComponentProps) {
  const {
    title,
    price,
    description,
    totalBed,
    totalShower,
    totalCar,
    totalMeter,
    cartImage,
    photos,
    numPhotos,
    type,
    room_num,
    bathrooms,
    sqm,
    sqmCommercial = "23.00",
    sqmGroundArea = "70.000",
    // numPhotos: number;

    isVideo,

    agency,
    videoPresent,
    videoUrl,
  } = data;
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // const darkMode = useSelector((state) => state?.settingSlice);
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`dark:bg-dark`}>
      <div
        className={` ${bgClassName} dark:bg-[#18181B]  my-4   ${
          size == "lg" ? "grid  lg:grid-cols-3 grid-cols-0  gap-4  " : "card-shadow "
        }`}
      >
        <div className={`${size == "lg" ? "lg:col-span-2 col-span-0 " : ""}`}>
          <Carousel draggable={false} opts={{}}>
            <CarouselContent draggable={false}>
              {videoPresent && (
                <CarouselItem>
                  <CardSlider
                    url={videoUrl as string}
                    isVideo={true}
                    size={size}
                    numPhotos={numPhotos}
                    type={type}
                    videoPresent={videoPresent}
                  />
                </CarouselItem>
              )}

              {photos.map((url: string, index: number) => (
                <CarouselItem key={index}>
                  <CardSlider
                    url={url}
                    isVideo={false}
                    size={size}
                    // cartImage={cartImage}
                    numPhotos={numPhotos}
                    type={type}
                    videoPresent={videoPresent}
                    // size={size}
                    // items={items}
                    // currentSlide={currentSlide}
                    // itemIndex={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious title="" />
            <CarouselNext title="" />
          </Carousel>
        </div>

        <div>
          <div className={`${bgClassName} px-4 py-4`}>
            <p
              className={`text-[20px] font-medium py-1 text ${
                bgClassName === "bg-white" ? "text-black" : "dark:text-white"
              }`}
            >
              {title}
            </p>
            <div className="flex gap-6 items-center">
              <p
                className={` ${
                  size == "lg" ? "md:text-[32px] md:my-0 my-4 text-[18px] " : "text-[18px] "
                }  font-medium text-[#daad54] blur-sm dark:text-white`}
              >
                &euro;{price}
              </p>
              <div className="flex flex-col  text-[14px]">
                <button
                  className="flex -ml-4 text-primary items-center "
                  onClick={() => router.push("/")}
                >
                  <MdChevronRight className="text-[18px]" />
                  Registrati
                </button>
                <label className="text-[#C4C4C4]">per vedere il prezzo</label>
              </div>
            </div>

            <p
              className={`text-[13px] font-medium  py-1 line-clamp-2   ${
                bgClassName === "bg-white" ? "text-[#666666]" : "dark:text-white"
              } `}
            >
              {description}
            </p>
            <div className="flex py-2 ">
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  {" "}
                  <PiBedBold
                    className={`text-[20px] text-black ${
                      bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                    } `}
                  />{" "}
                  <p
                    className={`text-[16px] font-medium text-black ${
                      bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                    }`}
                  >
                    {room_num}{" "}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {" "}
                  <PiShower
                    className={`"text-[20px] text-black ${
                      bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                    } "`}
                  />{" "}
                  <p
                    className={`text-[16px] font-medium text-black ${
                      bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                    } `}
                  >
                    {" "}
                    {bathrooms}{" "}
                  </p>
                </div>

                {/* <div className="flex items-center gap-2">
                  <MdOutlineDirectionsCar className="text-[20px] text-black " />
                  <p className="text-[16px] font-medium m-0 p-0 text-black ">{totalCar}</p>
                </div> */}

                <div className="flex items-start gap-2">
                  <BsBox
                    className={`text-[18px] ${
                      bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                    } mt-[2px]`}
                  />{" "}
                  <div className="flex  gap-4">
                    <div className="text-center">
                      <p
                        className={`text-[14px] font-medium m-0 p-0 ${
                          bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                        }`}
                      >
                        {" "}
                        {sqmCommercial} m&sup2;
                      </p>
                      <p
                        className={`text-[9px] font-medium m-0 p-0 text-black  ${
                          bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                        }`}
                      >
                        commerciali
                      </p>
                    </div>{" "}
                    <div className="text-center">
                      <p
                        className={`text-[14px] font-medium m-0 p-0 text-black ${
                          bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                        }`}
                      >
                        {" "}
                        {sqmGroundArea} m&sup2;
                      </p>
                      <p
                        className={`text-[9px]  font-medium m-0 p-0 text-black ${
                          bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                        }`}
                      >
                        terreno
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border-t border-primary ${bgClassName}  px-4 py-4 flex justify-between items-center`}
          >
            <div className="flex gap-4 items-center  ">
              <Image
                src={agency?.logo}
                objectFit="contain"
                alt="card-product"
                width={40}
                height={40}
              />
              <p
                className={`text-[16px] font-bold text-[#212121] ${
                  bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                }   `}
              >
                {agency?.name}
              </p>
            </div>
            <div>
              {" "}
              <FiShare2
                className={`text-[18px] text-black ${
                  bgClassName === "bg-white" ? "text-black" : "dark:text-white"
                } `}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
