import Image from "next/image";
import React from "react";
import logo from "@/assets/images/header/logo-white.png";
import { FaWhatsapp } from "react-icons/fa";
import logoDark from "@/assets/images/header/logo3.svg"
function Footer() {
  return (
    <>
    <br />
    <br />
      <div className=" p-2 lg:p-4 md:p-10 flex flex-col justify-center items-center" style={{backgroundColor: "#18181B"}}>
        <div className="lg:block hidden pt-6 py-4">
          <Image src={logoDark} alt="" width={250} height={110} />
        </div>
        {/* <div className="lg:hidden block mt-5">
          <Image src={logo} alt="" width={170} height={20} />
        </div> */}

        <hr className="border-b-[2px] border-[#ffffff] text-[#ffffff] font-bold mx-18 w-[90%] my-8" />

        <div className="flex w-full flex-col flex-wrap   lg:flex-row  px-4 md:px-0  justify-start md:justify-center items-start  gap-6 lg:gap-16">
          {/* <div className="flex flex-col gap-2 flex-wrap my-4 ">
            <p className="text-[#ffffff] font-bold text-[18px] lg:text-[20px] ">
              {" "}
              Vendi con noi{" "}
            </p>
            <p className="text-[14px]  md:text-[18px] text-[#ffffff] font-medium cursor-pointer underline">
              Registration form{" "}
            </p>
          </div> */}
          {/* <div className="flex flex-col gap-2 flex-wrap my-4 ">
            <p className="text-[#ffffff] font-bold text-[18px] lg:text-[20px] ">
              Company
            </p>
            <div className="flex flex-row lg:flex-col gap-2">
              <p className="text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Chi siamo
              </p>
              <p className="text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Contatti
              </p>
              <p className="text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Blog
              </p>
            </div>
          </div> */}
          {/* <div className="flex flex-col gap-2 flex-wrap my-4 ">
            <p className="text-[#ffffff] font-bold text-[18px] lg:text-[20px] ">
              Legal
            </p>
            <div className="flex flex-row lg:flex-col gap-2 flex-wrap w-full ">
              <p className="  text-[14px] md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Privacy Policy
              </p>
              <p className="   text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Terms & Services
              </p>
              <p className="   text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Terms of use
              </p>
              <p className="   text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Refund Policy
              </p>
            </div>
          </div> */}
          <div>

          <div className="flex flex-col gap-2 flex-wrap my-4 " style={{marginRight: "450px"}}>
            <p className="text-[#ffffff] font-bold text-[18px] lg:text-[20px] ">
              {/* Link Veloci */}
            </p>
            <div className="flex flex-row lg:flex-col gap-2">
              <p className=" text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
                Available Properties
              </p>
              <p className="text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
              Contact Us
              </p>
              <p className="text-[14px]  md:text-[18px] text-[#ffffff] font-normal cursor-pointer">
              Contact Us Right Now Via {" "}<FaWhatsapp className="text-white inline-block" style={{height: "22px"}} /> WhatsApp
              </p>
            </div>
          </div>
          </div>

          <div>
          <div className="flex flex-col gap-2 flex-wrap my-4"style={{marginRight: "20%"}}>
            <p className="text-[#ffffff] font-bold text-[18px] lg:text-[20px] ">
              {" "}
              Dubai UAE
            </p>
            {/* <div className="flex  items-center ">
              <input
                type="text"
                className=" w-[60%] lg:max-w-[200px] h-[35px] px-2 text-gray placeholder-gray-200"
                placeholder="Indirizzo mail"
                />
                <button className="  w-[40%] bg-black text-white h-[35px] px-4  cursor-pointer ">
                Iscriviti
                </button>
              </div>{" "} */}
            <p className="text-[12px] md:text-[18px] opacity-90 font-300 text-[#ffffff] cursor-pointer">
              Spider Business Centre, 19th floor,  
              <br />Room R2, Conrad Business Tower, Sheikh Zayed Road
            </p>
          </div>
              </div>
        </div>
        <br />
        <br />
      </div>
      <div className="flex justify-center items-center text-primary bg-white dark:bg-black p-6 text-[14px] cursor-pointer font-normal" style={{backgroundColor: "#fff"}}>
        Copyright © 2024 Betkely Living. 
        {/* All rights reserved. Powered by Webshop */}
      </div>
    </>
  );
}

export default Footer;
