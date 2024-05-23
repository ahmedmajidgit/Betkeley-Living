"use client";
import React from "react";
import Image from "next/image";
import heroimg from "@/assets/images/hero-section/hero-img.png";
import Conatiner from "@/components/container";
import { Input } from "../../ui/input";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import openmodelicon from "@/assets/images/hero-section/openmodel.png";
import CardProduct from "@/components/card/index";
import Container from "@/components/container/index";
import agenzie from "@/assets/images/card/agenzie-banner.png";
import { useState } from "react";
import card3 from "@/assets/images/card/card-3.png";
import blog from "@/assets/images/card/blog.jpeg";
import { useGetBlogsQuery } from "@/redux/services/homeApi";
import moment from "moment";
import { useSelector } from "react-redux";

function BlogSection() {
  const { data: blogs = [] } = useGetBlogsQuery({});

  return (
    <div className={`dark:bg-black`}>
      <div className=" flex flex-col p-6 md:p-10 w-[90%] mx-auto md:w-full shadow-lg ">
        <h1 className="md:text-[32px] text-[20px] text-black mb-4 dark:text-white ">
          About <span className="text-primary">Us</span>
        </h1>
        {/* <div
          className={`grid grid-cols-12 bg-white dark:bg-[#18181B] gap-y-8 lg:gap-4 text-black w-full`}
        > */}
          {/* <div className="w-full col-span-12 lg:col-span-7 relative  h-[181px] lg:h-[420px] text-white ">
            <Image src={blog} objectFit="cover" alt="card-product" layout="fill" />
            <div className="absolute flex flex-col justify-between w-full p-1 md:p-3 h-full  image-shadow ">
              <button className="bg-primary  p-2 w-24 hidden md:flex ml-auto justify-center">
                About
              </button>
              <div className="flex flex-col px-4 pb-2 mt-auto ">
                <label className="md:text-[20px] text-[16px]">Welcome Luliex</label>
                <label className="md:text-[13px] text-[10px]">
                  {" "}
                  {moment().format("DD MMM, YYYY")}
                </label>
              </div>
            </div>
          </div> */}
          {/* <div className=" grid lg:col-span-5 col-span-12 lg:gap-3 gap-8">
            {blogs.slice(0, 3).map((blog: any, index: any) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 lg:gap-2 w-full">
                <div className="relative w-[100%] md:w-[40%] h-[130px]">
                  <Image src={blog.photo} alt="card-product" layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col w-fit md:w-[60%] h-[130px] justify-between ">
                  <label className="text-primary text-[11px] font-bold ">
                    {moment(blog.updated_at).format("DD MMM, YYYY")}
                  </label>
                  <p className="font-bold  line-clamp-2 text-[16px] text-black dark:text-white">
                    {blog.title}
                  </p>
                  <p className="text-[#666666] dark:text-white line-clamp-2  text-[14px]">
                    {blog.htmlText}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <p className="text-black dark:text-white" style={{fontSize: "20px"}}>
          Welcome to BL Real Estate, your premier destination for discovering the finest deals in buying, selling, and renting properties. Founded with a passion for revolutionizing the real estate industry, BL Real Estate is committed to providing unparalleled service and expertise to our clients.
          <br /><br />
          At BL Real Estate, we understand that finding the perfect property is more than just a transaction; it's about finding a place to call home, a space to create memories, and an investment in your future. With this vision in mind, we strive to empower our clients with the tools, resources, and guidance needed to make informed decisions and achieve their real estate goals.
          <br /><br />
          What sets us apart is our unwavering dedication to excellence, integrity, and personalized service. Our team of experienced professionals brings a wealth of knowledge and expertise to every transaction, ensuring a seamless and rewarding experience for buyers, sellers, and renters alike.
          <br /><br />
          Whether you're a first-time homebuyer, an experienced investor, or a homeowner looking to sell or rent your property, BL Real Estate is here to support you every step of the way. From navigating the complexities of the market to negotiating the best deals, we are committed to exceeding your expectations and delivering results that matter.
          </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default BlogSection;
