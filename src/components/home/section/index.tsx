"use client";
import React from "react";
import Image from "next/image";
import heroimg from "@/assets/images/hero-section/hero-img.png";
import Conatiner from "@/components/container";
import { Input } from "../../ui/input";
import { Button } from "@/components/ui/button";

import CardProduct from "@/components/card/index";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@uidotdev/usehooks";

interface sectionProps {
  bg: string;
  title: string;
  p: any;
  p2: any;
  data: any;

  sectionClassName: string;
  titleClassName: string;
  lineClassName: string;
  bgClassName?:string
}
function Section(props: sectionProps) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 425px)");

  return (
    <div className={`dark:bg-black`}>
      <div
        className={` w-full flex flex-col  
   

      
      ${props.sectionClassName}
       pb-16`}
      >
        <div className="md:px-16 flex flex-col md:gap-2 py-10">
          <div className="flex justify-start w-full  p-6 md:p-0">
            <span className={`border-2 my-auto  lg:w-28 w-20 mr-6 ${props.lineClassName} `}></span>
            <h1 className={`text-[48px] lg:text-[72px] text-title  ${props.titleClassName}`}>
              {props.title}
            </h1>
          </div>
          <div className="flex flex-col gap-6 w-full  p-6 md:p-0">
            {props.p}
            {props.p2}
          </div>
        </div>
        <div className="w-full text-black md:px-[48px]">
          <Carousel
            opts={{
              align: "start",
              active: !isSmallDevice,
              breakpoints: {},
            }}
            className="w-full md:flex carousel-container "
            orientation={isSmallDevice ? "vertical" : "horizontal"}
          >
            <CarouselContent className="md:mx-1 md:px-0 w-full">
              {props.data?.map((item: any, index: number) => (
                <>
                  <CarouselItem key={index} className=" basis-1/1 md:basis-1/2 lg:basis-1/3 px-4">
                    <CardProduct
                      data={item}
                      bgClassName={props?.bgClassName}
                      // title={item.title}
                      // price={item.price}
                      // agency={item.agency}
                      // description={item.description}
                      // totalBed={item.room_num}
                      // totalShower={item.bathrooms}
                      // type={item.type}
                      // totalCar={card.totalCar}
                      // totalMeter={item.sqm}
                      // numPhotos={card.numPhotos}
                      // size={"lg"}
                      // src={item.photos}
                    />
                  </CarouselItem>{" "}
                </>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Section;
