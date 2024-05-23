"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PiBedBold, PiShower } from "react-icons/pi";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import CardProduct from "@/components/card";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        propertyname: "",
        description: "",
        price: "",
        room: "",
        bathroom: "",
        area: "",
        locationOfProperty: "",

        create:"",
        addpic:"",
        update:"",
        delete:"",
        ative:"",
        inative:"",
        // email: "",
        // password: "",
        // username: "",
    })


    // const onSignup = async () => {
    //     try {
    //         const response = await axios.post("/api/users/signup", user);
    //         router.push("/login");
            
    //     } catch (error:any) {
    //         console.log("Signup failed", error.message);
    //     }
    // }
    const onDashboard = async () => {
        try {
            // ????
            const response = await axios.post("/api/users/dashboard", user);
            router.push("/dashboard");
            
        } catch (error:any) {
            console.log("Adding property failed", error.message);
        }
    }
    

    return (
    <div>
        {/* <label htmlFor="propertyname">property name</label>
        <input
            id="propertyname"
            type="text"
            value={user.propertyname}
            onChange={(e) => setUser({...user, propertyname: e.target.value})}
            placeholder="propertyname"
            /> */}

            <div className={`dark`}>
                <div className=
                " dark:bg-[#18181B] lg my-4 grid  lg:grid-cols-3 grid-cols-0  gap-4  "
                
                >
                    {/* <div className={"lg:col-span-2 col-span-0 " }>
                        <Carousel draggable={false} opts={{}}>
                            <CarouselContent draggable={false}>
                                Render Carousel Items Here
                            </CarouselContent>
                            <CarouselPrevious title="create" />
                            <CarouselNext title="crete2" />
                        </Carousel>
                    </div> */}

                    <div className="card-shadow" style={{marginLeft: "30px"}}>
                        <div className={` px-4 py-4`}>
                            <p className={`text-[20px] font-medium py-1 text dark:text-white
                            }`}>
                                Tria Tower
                            </p>
                            

                            <p className="text-[20px] font-medium  py-1 line-clamp-2
                                dark:text-white"
                            >
                                Property location: Dubai Silicon Oasis
                                <br />
                                Property type: Townhouse
                            </p>
                            <div className="flex py-2 ">
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center gap-2">
                                        <PiBedBold className={`text-[20px] text-black dark:text-white`} />
                                        <p className={`text-[16px] font-medium text-black dark:text-white`}>
                                            {" "}
                                            5{" "}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                    {" "}
                                    <PiShower
                                        className={`"text-[20px] text-black dark:text-white`}
                                    />{" "}
                                    <p
                                        className={`text-[16px] font-medium text-black dark:text-white`}
                                    >
                                        {" "}
                                        3{" "}
                                    </p>
                                    </div>
                                    200 sq.ft
                                </div>
                            </div>
                            <div className="border-t border-primary px-4 py-4 flex justify-between items-center"></div>
                            <div className="flex gap-6 items-center">
                                <p className={`font-medium text-[#daad54]  dark:text-white`}>
                                    Price: 28,00000 AED
                                </p>
                            </div>
                        </div>

                        <div className={`border-t border-primary 
                         
                        px-4 py-4 flex justify-between items-center`}>
                            <div className="flex gap-4 items-center  ">
                                {/* <Image src="" objectFit="contain" alt="card-product" width={40} height={40} /> */}
                                <button className={`text-[16px] font-bold text-[#212121] dark:text-white`} style={{backgroundColor: "blue", height:"35px", width:"70px"}}>
                                    delete
                                </button>
                                <button className={`text-[16px] font-bold text-[#212121] dark:text-white`}style={{backgroundColor: "blue", height:"35px", width:"70px"}}>
                                    update
                                </button>
                            </div>
                            {/* <div>
                                <FiShare2 className={`text-[18px] text-black dark:text-white`} />
                            </div> */}
                        </div>
                    </div>

                    <CardProduct data={ {title:"1",
                        price:9,
                        description:"fsfsfs",
                        totalBed:"3",
                        totalShower:4,
                        totalCar:1,
                        totalMeter:2,
                        cartImage:2,
                        photos:[],
                        numPhotos:2,
                        type:"string",
                        room_num: 3,
                        bathrooms:4,
                        sqm:2,
                        sqmCommercial : "23.00",
                        sqmGroundArea : "70.000",
                        // numPhotos: number;
                        }
                    } />
                </div>
            </div>
        </div>
    )
}
