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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSelector } from "react-redux";

const faqs = [
  {
    question: "Perchè pubblicare i miei immobili in LULIEX?",
    answer: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati",
  },
  {
    question: "Che cos'è la funzionalità prenota una visita virtuale?",
    answer: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati",
  },
  {
    question: "Come creare un account per privati",
    answer: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati",
  },
  {
    question: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati?",
    answer: "Ho un numero massimo di annuncida poter inserire?",
  },
  {
    question: "Come creare un account per la mia agenzia immobiliare",
    answer: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati",
  },
  {
    question: "Ho un numero massimo di annuncida poter inserire?",
    answer: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati",
  },
  {
    question: "Cos'è la spunta gold per le agenzie?",
    answer: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati",
  },
  {
    question: "Quanti mesi di prova gratuita è possibile ottenere?",
    answer: "Gli annunci pubblicati hanno una scadenzae devono essere rinnovati",
  },
];

function FaqSection() {
  // const darkMode = useSelector((state) => state?.settingSlice);
  return (
    <div className={`dark:bg-black`}>
      <div className=" flex flex-col p-6 md:p-10 w-[90%] mx-auto md:w-full  shadow-lg ">
        <label className="text-[20px] md:text-[32px] text-black mb-4  dark:text-white">
          Domande frequenti <span className="text-primary"> (F.A.Q) </span>
        </label>
        <div
          className={`grid  text-left bg-white dark:bg-[#18181B]  text-[14px] text-black w-full gap-10`}
        >
          <Accordion className=" grid lg:grid-cols-2 grid-cols-1   gap-4" type="single" collapsible>
            {faqs.map((faq: any, index: number) => (
              <AccordionItem key={index} value={faq.question} className=" py-2">
                <AccordionTrigger className="flex p-3 text-left text-black dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex p-3  text-left  dark:bg-[#18181B] dark:text-white  text-black  bg-white my-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
