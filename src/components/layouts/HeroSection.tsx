"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatedText from "./AnimatedText";

import { Variant } from "./variants";
import { carousel } from "@/data/carouselData";

interface carProps {
  cars: {
    result: carEntity[];
    pagination: paginationEntity;
  };
}
const HeroSection = ({ cars }: carProps) => {
  const data = cars && cars.result[0];
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [carousel[currentSlide].image]);

  return (
    <div className="bg-slate-950 max-w-full md:max-h-[50vh] flex items-center px-4 text-slate-200 py-8">
      <div className="mx-auto max-w-[1100px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              variants={Variant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2, duration: 1 }}
              className="text-3xl font-bold capitalize"
            >
              {data.title}
            </motion.h1>
            <AnimatedText
              text="Welcome to Robbie Motors - Your Trusted Source for Quality Pre-Owned Cars!"
              className=" text-[#aaa]  font-semibold py-4 text-2xl"
            />
            <motion.div
              variants={Variant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.6, duration: 1 }}
              className="flex items-center"
            >
              <Link
                href={`/cars/${data.id}`}
                className="bg-red-500 hover:bg-red-700 transitions active:scale-105  px-6 py-2 rounded !text-white inline-flex"
              >
                Read More
              </Link>
            </motion.div>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] -top-20 md:top-10 lg:-top-20">
            <motion.div
              variants={Variant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.6, duration: 1 }}
              className="relative  z-10 h-[60vh] -top-5 md:-top-10 lg:top-10 w-full lg:w-[30vw]"
            >
              <Image
                fill={true}
                priority
                className="object-contain"
                src={`${carousel[currentSlide].image}`}
                alt="heroimage"
              />
            </motion.div>
            <div className=" absolute right-0 lg:right-24 rounded-full top-20 md:top-36  z-0 h-52 w-52 md:h-60 md:w-60 bg-black shadow-lg shadow-red-500 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
