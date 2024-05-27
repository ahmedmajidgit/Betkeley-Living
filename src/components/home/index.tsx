"use client";
import HeroSection from "@/components/home/hero";
import CardProduct from "@/components/card/index";
import Container from "@/components/container/index";

// import Section from "./section";
import BlogSection from "./blogSection";

import FaqSection from "./faqSection";
import { useGetBlogsQuery, useGetRealEstatesQuery } from "@/redux/services/homeApi";
import { useGetPropertiesQuery } from "@/redux/services/propertiesApi";

import dynamic from "next/dynamic";

const Section = dynamic(() => import("./section").then((module) => module), {
  ssr: false,
});

export default function Home() {
  const { data: recommendations = [] } = useGetRealEstatesQuery({
    type: "recommended-noauth",
  });
  const { data: casales = [] } = useGetRealEstatesQuery({});
  const { data: resorts = [] } = useGetRealEstatesQuery({
    type: "last5/Resort",
  });
  const { data: cantines = [] } = useGetRealEstatesQuery({
    type: "last5/Cantine",
  });
  const { data: chalets = [] } = useGetRealEstatesQuery({
    type: "last5/Chalet",
  });
  const { data: dimores = [] } = useGetRealEstatesQuery({
    type: "last5/Dimore",
  });
  const { data: villas = [] } = useGetRealEstatesQuery({ type: "last5/Ville" });
  const { data: hotels = [] } = useGetRealEstatesQuery({ type: "last5/Hotel" });
  const { data: properties = [] } = useGetPropertiesQuery({});

  // const mode = useSelector((state: any) => state?.settingSlice);
  // console.log(mode, "settingSlice");

  return (
    <div className={`dark:bg-black`}>
      <div className="flex flex-col gap-14 ">
      {/* <div className="flex flex-col gap-14 "> */}
        <HeroSection />

        {/* <Container>
          <div className="flex justify-start w-full px-6">
            <span className={`border-2 my-auto  lg:w-28 w-20  mr-6 border-primary`}></span>
            <h1 className="md:text-[48px] lg:text-[72px] text-[22px] text-title text-black dark:text-white">
              Recommended
            </h1>
          </div>

          <div className=" flex flex-col gap-16 w-full p-6">
            {recommendations.map((item: any, index: number) => (
              <CardProduct
                key={index}
                data={item}
                size={"lg"}
                
                
                // title={item.title}
                // price={item.price}
                // description={item.description}
                // totalBed={item.room_num}
                // agency={item.agency}
                // totalShower={item.bathrooms}
                // type={item.type}
                // totalCar={card.totalCar}
                // totalMeter={item.sqm}
                // numPhotos={item.numPhotos}
                // src={item.photos}
              />
            ))}
          </div>
        </Container> */}
        <Container>
          <BlogSection />
        </Container>
        <Container className=" flex flex-col gap-10">

          
            {/* <Section
              data={resorts}
              bg={"primary"}
              sectionClassName="bg-primary text-white"
              titleClassName=""
              lineClassName="border-white"
              bgClassName={"bg-white"}
              p={
                <p className="text-white">
                  
                </p>
              }
              p2={
                <p className="text-white">

                </p>
              }
              title={"Properties"}
            /> */}
            <Section
              data={properties}
              bg={"primary"}
              sectionClassName="bg-primary text-white"
              titleClassName=""
              lineClassName="border-white"
              bgClassName={"bg-white"}
              p={
                <p className="text-white">
                  
                </p>
              }
              p2={
                <p className="text-white">

                </p>
              }
              title={"Properties"}
            />
            {/* <Section
            data={cantines}
            bg={"white"}
            sectionClassName=" text-black dark:text-white"
            titleClassName=""
            lineClassName="border-primary"
            bgClassName={"bg-dark"}
            p={
              <p className="text-black dark:text-white">
              </p>
            }
            p2={
              <p className="text-black dark:text-white">
                
              </p>
            }
            title={"Reviews"}
          />  */}
        </Container>
        <Container>
        <div className={`dark`}>
        <h1 className="md:text-[32px] text-[20px] text-black mb-4 dark:text-white ">
          Reviews <span className="text-primary"></span>
        </h1>
          <div className="dark:bg-[#18181B] my-4 grid lg:grid-cols-3 grid-cols-0 gap-4">
              {/* Review 1 */}
              <div className="" style={{marginLeft: "30px"}}>
                  <div className="px-4 py-4 card-shadow">
                      <p className="text-[25px] font-medium py-1 text dark:text-white">
                          Mohsin Raza
                      </p>
                      <p className="text-[13px] font-medium py-1 dark:text-white">
                          After exploring Dubai's real estate market, I connected with Mr. Zahid from Berkely Living. He presented various projects and helped me select a unit. Mr. Zahid impressed me with his friendly demeanor, professionalism, and thorough knowledge of his portfolio. He was always available and offered valuable advice, making me feel confident in finalizing the deal. I highly recommend Mr. Zahid and Berkely Living for anyone interested in Dubai property.
                      </p>
                  </div>
              </div>
              
              {/* Review 2 */}
              <div className="" style={{marginLeft: "30px"}}>
                  <div className="px-4 py-4 card-shadow">
                      <p className="text-[25px] font-medium py-1 text dark:text-white">
                          Omer Khan
                      </p>
                      <p className="text-[13px] font-medium py-1 dark:text-white">
                          My experience with Berkely Living and Mr. Zahid has been exceptional. Mr. Zahid's expertise in the Dubai real estate market and his dedication to understanding my needs made the process smooth and efficient. He provided valuable insights and guidance, helping me find the perfect property. I highly recommend Mr. Zahid and Berkely Living to anyone looking for professionalism and reliability in their property search.
                      </p>
                  </div>
              </div>

              {/* Review 3 */}
              <div className="" style={{marginLeft: "30px"}}>
                  <div className="px-4 py-4 card-shadow">
                      <p className="text-[25px] font-medium py-1 text dark:text-white">
                          Aisha Kashif
                      </p>
                      <p className="text-[13px] font-medium py-1 dark:text-white">
                          I recently had the pleasure of working with Mr. Zahid from Berkely Living, and I couldn't be happier with the experience. Mr. Zahid's professionalism, knowledge, and commitment to his clients are commendable. He patiently listened to my requirements and provided personalized recommendations that perfectly matched my preferences. Thanks to his expertise, I found my dream property hassle-free. I highly recommend Mr. Zahid and Berkely Living for their exceptional service.
                      </p>
                  </div>
              </div>
          </div>
      </div>
        </Container>
        
        {/* <Container className="mb-10">
          <FaqSection />
        </Container> */}
      </div>
    </div>
  );
}


          {/* <Section
            data={cantines}
            bg={"white"}
            sectionClassName=" text-black dark:text-white"
            titleClassName=""
            lineClassName="border-primary"
            bgClassName={"bg-dark"}
            p={
              <p className="text-black dark:text-white">
                BL is a Real Estate platform, its motive is show best deals in buying, selling and renting property.
              </p>
            }
            p2={
              <p className="text-black dark:text-white">
                
              </p>
            }
            title={"About Us"}
          /> */}