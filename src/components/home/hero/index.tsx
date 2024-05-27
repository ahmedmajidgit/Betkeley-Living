import React, { useState } from "react";
import Image from "next/image";
import heroimg from "@/assets/images/hero-section/hero-img.png";
import Conatiner from "@/components/container";
import { Input } from "../../ui/input";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import openmodelicon from "@/assets/images/hero-section/openmodel.png";
import { Slider } from "@/components/ui/slider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeroSearchFilter from "./heroSearchFilter";

function HeroSection() {
  return (
    <div className="relative mb-[200px] md:mb-[180px] lg:mb-0 ">
      <div className="grid grid-cols-12 lg:mb-[170px]  ">
        <div className=" col-span-12 md:col-span-12 z-100  ">
          <div className=" col-span-12  w-full h-[80vh] md:h-[90vh] lg:h-[120vh]">
            <Image src={heroimg} className="h-full  w-full" alt="Hero Image" />
            <p className=" text-[70px] md:text-[90px] lg:text-[150px] text-title text-white absolute leading-[1.0] font-normal left-[30%] top-[70%] -translate-x-[15%] -translate-y-[100%] md:top-1/3  md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 ">
              Berkely Living 
              {/* <br className=" block  " /> a state{" "}
              <br className="  block" />
              of mind */}
            </p>
          </div>
        </div>
      </div>

      {/* <div className=" bg-white dark:bg-[#18181B]  border py-4  px-3 w-[70%]  md:w-[88%] lg:max-w-full   max-w-[370px] lg:w-fit  lg:px-8   card-shadow absolute    left-1/2 -translate-x-1/2  z-10 top-[86%] lg:top-[70%]    ">
        <HeroSearchFilter />
      </div> */}
    </div>
  );
}

export default HeroSection;
