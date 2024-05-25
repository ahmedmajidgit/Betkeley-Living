"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PiBedBold, PiShower } from "react-icons/pi";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import CardProduct from "@/components/card";

import CreateModal from "../../components/createmodal"; // Assuming CreateModal.js is in the same directory
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
    



  const [showCreateModal, setCreateShowModal] = useState(false);

  const openCreateModal = () => {
    setCreateShowModal((showCreateModal) => !showCreateModal);
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
                " dark:bg-[#18181B]   lg:grid-cols-3 grid-cols-0  gap-4  " style={{marginLeft:"100px", marginRight:"100px"}}
                
                >
                    <button className="text-lg font-bold text-[#212121] dark:text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded lg:mb-0 mb-4" style={{marginBottom:"20px"}} onClick={openCreateModal}>
                        Create
                    </button>
                    <CreateModal openCreateModal={openCreateModal} showCreateModal={showCreateModal}/>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full border-collapse border border-gray-400">
                            <thead>
                            <tr className="" style={{backgroundColor:"#D3A186"}}>
                                <th className="px-4 py-2">Property Title</th>
                                <th className="px-4 py-2">Property Location</th>
                                <th className="px-4 py-2">Property Type</th>
                                {/* <th className="px-4 py-2">Description</th> */}
                                <th className="px-4 py-2">Rooms</th>
                                <th className="px-4 py-2">Bath</th>
                                <th className="px-4 py-2">Area</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr >
                                <td className="px-4 py-2"style={{textAlign:"center"}}>Tria Tower</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>Dubai Silicon Osais</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>Township</td>
                                {/* <td className="px-4 py-2">Property location: Dubai Silicon Oasis Property type: Townhouse</td> */}
                                <td className="px-4 py-2"style={{textAlign:"center"}}>5</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>3</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>1000 sq.ft</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>28,00000 AED</td>
                                <td className="px-4 py-2" style={{textAlign:"center"}}>
                                <button className="text-lg font-bold text-[#212121] dark:text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                                    Delete
                                </button>
                                <button className="text-lg font-bold text-[#212121] dark:text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                                    Update
                                </button>
                                </td>
                            </tr>
                            <tr >
                                <td className="px-4 py-2"style={{textAlign:"center"}}>Tria Tower</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>Dubai Silicon Osais</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>Township</td>
                                {/* <td className="px-4 py-2">Property location: Dubai Silicon Oasis Property type: Townhouse</td> */}
                                <td className="px-4 py-2"style={{textAlign:"center"}}>5</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>3</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>1000 sq.ft</td>
                                <td className="px-4 py-2"style={{textAlign:"center"}}>28,00000 AED</td>
                                <td className="px-4 py-2" style={{textAlign:"center"}}>
                                <button className="text-lg font-bold text-[#212121] dark:text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                                    Delete
                                </button>
                                <button className="text-lg font-bold text-[#212121] dark:text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                                    Update
                                </button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                            </tbody>
                        </table>
                        </div>

                        <h2>reviews</h2>
                        <div className={`dark`}>
                            <div className="dark:bg-[#18181B] my-4 grid lg:grid-cols-3 grid-cols-0 gap-4">
                                {/* Review 1 */}
                                <div className="card-shadow" style={{marginLeft: "30px"}}>
                                    <div className="px-4 py-4">
                                        <p className="text-[35px] font-medium py-1 text dark:text-white">
                                            Mohsin Raza
                                        </p>
                                        <p className="text-[20px] font-medium py-1 dark:text-white">
                                            After exploring Dubai's real estate market, I connected with Mr. Zahid from Berkely Living. He presented various projects and helped me select a unit. Mr. Zahid impressed me with his friendly demeanor, professionalism, and thorough knowledge of his portfolio. He was always available and offered valuable advice, making me feel confident in finalizing the deal. I highly recommend Mr. Zahid and Berkely Living for anyone interested in Dubai property.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Review 2 */}
                                <div className="card-shadow" style={{marginLeft: "30px"}}>
                                    <div className="px-4 py-4">
                                        <p className="text-[35px] font-medium py-1 text dark:text-white">
                                            Omer Khan
                                        </p>
                                        <p className="text-[20px] font-medium py-1 dark:text-white">
                                            My experience with Berkely Living and Mr. Zahid has been exceptional. Mr. Zahid's expertise in the Dubai real estate market and his dedication to understanding my needs made the process smooth and efficient. He provided valuable insights and guidance, helping me find the perfect property. I highly recommend Mr. Zahid and Berkely Living to anyone looking for professionalism and reliability in their property search.
                                        </p>
                                    </div>
                                </div>

                                {/* Review 3 */}
                                <div className="card-shadow" style={{marginLeft: "30px"}}>
                                    <div className="px-4 py-4">
                                        <p className="text-[35px] font-medium py-1 text dark:text-white">
                                            Aisha Kashif
                                        </p>
                                        <p className="text-[20px] font-medium py-1 dark:text-white">
                                            I recently had the pleasure of working with Mr. Zahid from Berkely Living, and I couldn't be happier with the experience. Mr. Zahid's professionalism, knowledge, and commitment to his clients are commendable. He patiently listened to my requirements and provided personalized recommendations that perfectly matched my preferences. Thanks to his expertise, I found my dream property hassle-free. I highly recommend Mr. Zahid and Berkely Living for their exceptional service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                </div>
                
            </div>
                <h2>add form</h2>
                <div className="card-shadow" style={{marginLeft:"200px", marginRight:"200px", padding:"100px"}}>
                    <h2 className="text-2xl font-semibold mb-4">Create Property</h2>
                    {/* Picture Upload */}
                    <div className="mb-4">
                        <label htmlFor="pictures" className="block mb-1">Upload Pictures</label>
                        <input
                        type="file"
                        id="pictures"
                        multiple
                        //   onChange={handlePictureUpload}
                        accept="image/*"
                        />
                        <div>
                        {/* {pictures.map((picture, index) => (
                            <div key={index} className="flex items-center mt-2">
                            <img src={URL.createObjectURL(picture)} alt={`Property ${index}`} className="w-20 h-20 object-cover mr-2" />
                            <button onClick={() => handlePictureDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                            </div>
                        ))} */}
                        </div>
                    </div>

                    {/* Property Details */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label htmlFor="propertyTitle" className="block mb-1">Property Title</label>
                        <input
                            type="text"
                            id="propertyTitle"
                            // value={propertyTitle}
                            // onChange={(e) => setPropertyTitle(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="propertyLocation" className="block mb-1">Property Location</label>
                        <input
                            type="text"
                            id="propertyLocation"
                            // value={propertyLocation}
                            // onChange={(e) => setPropertyLocation(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="propertyType" className="block mb-1">Property Type</label>
                        <input
                            type="text"
                            id="propertyType"
                            // value={propertyType}
                            // onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="numRooms" className="block mb-1">Number of Rooms</label>
                        <input
                            type="number"
                            id="numRooms"
                            // value={numRooms}
                            // onChange={(e) => setNumRooms(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="numBathrooms" className="block mb-1">Number of Bathrooms</label>
                        <input
                            type="number"
                            id="numBathrooms"
                            // value={numBathrooms}
                            // onChange={(e) => setNumBathrooms(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="area" className="block mb-1">Area (sq.ft)</label>
                        <input
                            type="number"
                            id="area"
                            // value={area}
                            // onChange={(e) => setArea(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="price" className="block mb-1">Price</label>
                        <input
                            type="number"
                            id="price"
                            // value={price}
                            // onChange={(e) => setPrice(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                    </div>
                </div>
            
                <br /><br />
                    <div className="flex justify-center items-center ">
                        <div className="bg-white shadow-lg rounded-lg p-8 w-80">
                            <h2 className="text-2xl font-semibold mb-4">Login</h2>
                            <div className="mb-4">
                            <label htmlFor="username" className="block mb-1">Username</label>
                            <input type="text" id="username" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <input type="password" id="password" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                            </div>
                            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
                            <p className="text-blue-500 text-sm mt-2 text-center"><a href="#">Forgot Password?</a></p>
                        </div>
                    </div>
        </div>
    )
}


                    {/* <div className="card-shadow" style={{marginLeft: "30px"}}>
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
                                <button className={`text-[16px] font-bold text-[#212121] dark:text-white`} style={{backgroundColor: "blue", height:"35px", width:"70px"}}>
                                    delete
                                </button>
                                <button className={`text-[16px] font-bold text-[#212121] dark:text-white`}style={{backgroundColor: "blue", height:"35px", width:"70px"}}>
                                    update
                                </button>
                            </div>
                            
                        </div>
                    </div> */}

                    {/* <CardProduct data={ {title:"1",
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
                    } /> */}