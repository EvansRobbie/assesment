"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatedText from "./AnimatedText";
import { Variant } from "./variants";

interface carProps {
  cars: {
    result: carEntity[];
    pagination: paginationEntity;
  };
}
const HeroSection = ({ cars }: carProps) => {
  const data = cars && cars.result[0];
  return (
    <div className="bg-slate-950 max-h-[50vh] flex items-center text-slate-200 py-8">
      <div className="mx-auto max-w-[1100px] ">
        <div className="grid grid-cols-2 gap-10 items-center">
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
              text=" Welcome to Robbie Motors - Your Trusted Source for Quality
              Pre-Owned Cars!"
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
                className="bg-red-500  px-6 py-2 rounded !text-white inline-flex"
              >
                Read More
              </Link>
              {/* <button className="primary-btn border border-orange-500  inline-flex items-center gap-2">
                <CartIcon />
                <span>Add to Cart</span>
              </button> */}
            </motion.div>
          </div>
          <div className="relative -top-20">
            <motion.div
              variants={Variant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.6, duration: 1 }}
              className="relative  z-10 h-[60vh] full"
            >
              <Image
                fill={true}
                priority
                className="object-contain"
                src={`/audi-image.png`}
                alt="heroimage"
              />
            </motion.div>
            <div className=" absolute right-24 rounded-full top-36  z-0 h-60 w-60 bg-black shadow-lg shadow-red-500 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
