import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { AiFillCaretRight } from "react-icons/ai";
import { IoPauseOutline } from "react-icons/io5";
import Image from "next/image";
import { FaVideo } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface MyComponentProps {
  isVideo?: boolean;
  url?: string;
  cartImage?: any;
  numPhotos?: number;
  size?: string;
  items?: any;
  type?: string;
  videoPresent?: boolean;
  // currentSlide?: number;
  // itemIndex?: number;
}

function CardSlider(props: MyComponentProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlaying) {
        await video.pause();
      } else {
        await video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };
  const stopVideo = async () => {
    const video = videoRef.current;
    if (video) {
      await video.pause();

      setIsVideoPlaying(false);
    }
  };

  // useEffect(() => {
  //   if (props.currentSlide !== props.itemIndex) {
  //     // stopVideo();
  //   }
  // }, [props.currentSlide, props.itemIndex]);

  return (
    <>
      <div
        className={`relative h-[200px] ${
          props.size == "lg" ? "lg:h-[451px] h-[233px]" : "h-[233px]"
        } `}
      >
        {props?.isVideo ? (
          <video ref={videoRef} className="object-cover h-full bg-black">
            <source src={props.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${props.url}`}
            objectFit="cover"
            alt="card-product"
            layout="fill"
          />
        )}
        {props?.isVideo && (
          <div
            className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            onClick={toggleVideo}
          >
            {!isVideoPlaying ? <AiFillCaretRight size={30} /> : <IoPauseOutline size={30} />}
          </div>
        )}
        <div className="absolute flex flex-col w-full h-full py-4 px-6">
          <div className="relative w-[25%] text-center ml-auto py-1">
            <label className="absolute inset-0 opacity-70  bg-primary"></label>
            <label className={` w-full relative z-10 text-[16px] text-center text-white `}>
              {props.type}
            </label>
          </div>

          <div className="flex justify-between mt-auto ">
            <div className=" flex gap-4 items-center ">
              {props.videoPresent && (
                <div>
                  <FaVideo size={18} className="text-white" />
                </div>
              )}
              <div>
                <FaCamera size={18} className="text-white" />
              </div>
              <span className="text-white text-[14px]">{props.numPhotos}</span>
            </div>
            <div>
              <FaHeart size={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSlider;
