"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/header/logo-web.png";
import user from "@/assets/images/header/user.png";
import { IoSunnyOutline } from "react-icons/io5";
import Container from "@/components/container";
import { RxHamburgerMenu } from "react-icons/rx";
// import logoDark from "@/assets/images/header/logo.svg";
import logoDark from "@/assets/images/header/logo3.svg";
// import logoDark from "@/assets/images/header/logo2.svg";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross2 } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { toggleMode } from "@/redux/slices/settingSlice";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const darkMode = useSelector((state: any) => state?.settingSlice);

  const disptach = useDispatch();

  const toogleDarkMode = () => {
    disptach(toggleMode());
  };

  return (
    <Container>
      <div className={`dark:bg-black`}>
        <div className=" gap-12 items-center justify-between py-10 hidden lg:flex ">
          {darkMode?.dark ? (
            <Image src={logoDark} alt="" width={110} height={110} />
          ) : (
            <Image src={logo} alt="" width={110} height={110} />
          )}

          {/* <p className="text-secondary font-medium text-[15px] cursor-pointer font-FontName p-2  border-transparent border hover:border-primary  dark:text-white">
            Home
          </p>
          <p className="text-secondary font-medium text-[15px] cursor-pointer font-FontName p-2 border-transparent border hover:border-primary  dark:text-white">
            Chi siamo
          </p>
          <p className="text-secondary font-medium text-[15px] cursor-pointer font-FontName p-2 border-transparent border hover:border-primary  dark:text-white">
            Annunci
          </p>
          <p className="text-secondary font-medium text-[15px] cursor-pointer font-FontName p-2 border-transparent border hover:border-primary dark:text-white">
            Agenzie
          </p> */}
          {/* <p className="text-secondary font-medium text-[15px] cursor-pointer p-2 hover:border border-transparent border hover:border-primary dark:text-white">
            Contact Us
          </p> */}

          {/* <p className="text-secondary font-medium text-[15px] cursor-pointer p-2 border-transparent border hover:border-primary dark:text-white">
            Home
          </p> */}

          {/* <div className="p-3 bg-primary flex gap-2 items-center justify-center font-FontName  cursor-pointer">
            <Image src={user} height={28} width={28} alt="user" />

            <button className="text-[17px]  font-FontName text-[#ffffff]">LOGIN</button>
          </div> */}
          {/* <div
            onClick={toogleDarkMode}
            className="p-2 cursor-pointer rounded-full hover:bg-primary"
          >
            {darkMode.dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M236,96a4,4,0,0,1-4,4H212v20a4,4,0,0,1-8,0V100H184a4,4,0,0,1,0-8h20V72a4,4,0,0,1,8,0V92h20A4,4,0,0,1,236,96ZM144,52h12V64a4,4,0,0,0,8,0V52h12a4,4,0,0,0,0-8H164V32a4,4,0,0,0-8,0V44H144a4,4,0,0,0,0,8Zm69.73,103.58a4,4,0,0,1,.71,4,92,92,0,1,1-118-118,4,4,0,0,1,5.29,4.54A93.18,93.18,0,0,0,100,64a92.1,92.1,0,0,0,92,92,93.18,93.18,0,0,0,17.91-1.74A4,4,0,0,1,213.73,155.58Zm-9.46,7.67A100,100,0,0,1,92.75,51.73,84,84,0,1,0,204.27,163.25Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"></path>
              </svg>
            )}
            neeche wali line phele se comment out thi
            <IoSunnyOutline size={30} className="cursor-pointer" onClick={toogleDarkMode} />
          </div> */}
        </div>

        <div className=" flex lg:hidden w-full mt-2 pr-4 py-4 ">
          <div className="flex items-center justify-between w-full">
            <div
              onClick={toogleDarkMode}
              className="p-2 cursor-pointer rounded-full hover:bg-primary"
            >
              {darkMode.dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M236,96a4,4,0,0,1-4,4H212v20a4,4,0,0,1-8,0V100H184a4,4,0,0,1,0-8h20V72a4,4,0,0,1,8,0V92h20A4,4,0,0,1,236,96ZM144,52h12V64a4,4,0,0,0,8,0V52h12a4,4,0,0,0,0-8H164V32a4,4,0,0,0-8,0V44H144a4,4,0,0,0,0,8Zm69.73,103.58a4,4,0,0,1,.71,4,92,92,0,1,1-118-118,4,4,0,0,1,5.29,4.54A93.18,93.18,0,0,0,100,64a92.1,92.1,0,0,0,92,92,93.18,93.18,0,0,0,17.91-1.74A4,4,0,0,1,213.73,155.58Zm-9.46,7.67A100,100,0,0,1,92.75,51.73,84,84,0,1,0,204.27,163.25Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"></path>
                </svg>
              )}
            </div>
            <div className="w-[130px] md:w-[200px] ">
              {" "}
              {darkMode?.dark ? (
                <Image src={logoDark} alt="" width={110} height={110} />
              ) : (
                <Image src={logo} alt="" width={110} height={110} />
              )}{" "}
            </div>
            <div className="flex items-center gap-2 md:gap-4  ">
              <Button
                variant="default"
                icon={<Image src={user} className="w-full h-full ml-2" alt="user" />}
                title=""
                size="xs"
                className="flex justify-center items-center "
              />
              <div>
                <Drawer direction="left">
                  <DrawerTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-none  bg-transparent "
                      title=""
                      icon={<RxHamburgerMenu size={24} />}
                    />
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full  h-full relative mt-4">
                      <DrawerHeader className="flex justify-between items-center mx-4 ">
                        <Image src={logo} alt="" width={180} height={190} />
                        <DrawerClose asChild className="cursor-pointer mt-[-2px] ">
                          <RxCross2 size={30} />
                        </DrawerClose>
                      </DrawerHeader>

                      <div className="flex flex-col justify-start  items-start gap-3 mx-8 mt-4">
                        <p className="text-secondary font-medium text-[16px]  cursor-pointer  font-FontName ">
                          Home
                        </p>
                        <p className="text-secondary font-medium text-[16px]  cursor-pointer font-FontName">
                          Chi siamo
                        </p>
                        <p className="text-secondary font-medium text-[16px]  cursor-pointer">
                          Annunci
                        </p>
                        <p className="text-secondary font-medium text-[16px]  cursor-pointer">
                          Agenzie
                        </p>
                        <p className="text-secondary font-medium text-[16px]  cursor-pointer">
                          Blog
                        </p>

                        <p className="text-secondary font-medium text-[16px]  cursor-pointer">
                          Magazine
                        </p>

                        {/* <div className="p-3 bg-primary flex gap-2 items-center justify-center  cursor-pointer">
            <Image src={user} height={28} width={28} alt="user" />

            <button className="text-[17px] font-medium text-[#ffffff]">LOGIN</button>
          </div> */}
                        <div className="flex items-center gap-6">
                          <Button
                            variant="default"
                            icon={<Image src={user} height={28} width={28} alt="user" />}
                            title="Login"
                            size="default"
                          />
                          <IoSunnyOutline size={33} className="cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
