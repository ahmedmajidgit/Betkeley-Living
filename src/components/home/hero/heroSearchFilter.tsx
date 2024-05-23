import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Glass from "@/assets/images/hero-section/glass.png";
import { Slider } from "@/components/ui/slider";
import { Combobox } from "@/components/ui/combobox";
import { useGetCitiesQuery } from "@/redux/services/homeApi";

function HeroSearchFilter() {
  const [citySearchValue, setCitySearchValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { data: cities = [] } = useGetCitiesQuery({
    query: citySearchValue.length >= 3 ? citySearchValue : '',
  });
  console.log(citySearchValue, "citySearchValue");
  return (
    <div>
      {" "}
      <p className="text-primary text-[15px] lg:text-[24px] mb-2 ">
        Scopri l&apos;immobile dei tuoi sogni
      </p>
      <div className=" flex flex-col lg:flex-row gap-2 lg:gap-12  bg-white dark:bg-black  justify-center ">
        <div className=" flex justify-between items-center mr-2 md:mx-0 lg:w-[270px] relative ">
          {/* <Input
            className=" border-t-0 border-r-0 border-l-0 opacity-100 text-black rounded-none outline-none  focus:border-b-gray"
            title="Città"
          /> */}
          <Combobox
            searchValue={citySearchValue}
            seachValueHandler={(e: any) => {
              setCitySearchValue(e.target.value);
              setSelectedCity("");
            }}
            onSelect={(value: any) => setSelectedCity(value)}
            data={cities.map((x: any) => x.nomeComune)}
          />
          {/* <Image className="h-[25px] w-[25px] cursor-pointer absolute right-1" src={Glass} alt="" /> */}
        </div>
        <div className="w-full mr-2 lg:w-[270px]">
          <Select>
            <SelectTrigger className="border-t-0 border-r-0 border-l-0 opacity-100 text-[#666666] dark:text-white rounded-none outline-none  focus:border-b-gray w-full">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" flex  justify-between w-full mr-2 items-center  lg:w-[270px]">
          <Select>
            <SelectTrigger className="border-t-0 border-r-0 border-l-0 opacity-100 text-[#666666] dark:text-white border-gray rounded-none outline-none  focus:border-b-gray w-full">
              <SelectValue placeholder="Caratteristiche" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" mt-1 md:mt-4 mb-4">
        <p className="text-primary text-[13px] mb-1">Prezzo</p>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className=" w-full  lg:w-[68%]">
            <Slider min={0} max={20} step={1} minStepsBetweenThumbs={2} />
          </div>

          <div className="hidden lg:block">
            <Button
              className="w-full  p-2 md:p-6"
              variant="default"
              icon={<CiSearch size={25} />}
              title="Cerca"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSearchFilter;
