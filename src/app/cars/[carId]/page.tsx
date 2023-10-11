"use client";
import React from "react";
import useSWR from "swr";
import CarMedia from "@/components/cars/CarMedia";
import CTA from "@/components/layouts/CTA";
import Breadcrumb from "@/components/layouts/BreadCrumbs";
import { notFound, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

interface carProps {
  params: {
    carId: string;
  };
}
const CarId: React.FC<carProps> = ({ params: { carId } }) => {
  const pathname = usePathname();
  let car: carEntity;
  const { data, isLoading } = useSWR(`/api/getAllCars/${carId}`, fetcher);
  {
    isLoading && <div>Loading...</div>;
  }
  const error = data && data[0] === 400;
  if (error) {
    toast.error(data[1].error);
    return notFound();
  }
  car = data && data[1];

  return (
    <div className="mx-auto max-w-[1100px]">
      <div className="my-4">
        <Breadcrumb replacePath={pathname} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        car && (
          <div className="flex gap-4">
            <CarMedia car={car} />
            <div className="w-full  bg-slate-100/10 shadow-md rounded-xl px-4 py-8">
              <div className="flex flex-col gap-4 w-full justify-between">
                <h1 className="text-2xl  font-bold text-gray-800">
                  {car.carName}
                </h1>
                <div>
                  <span className="font-bold">Car Value</span>
                  <span className="border border-blue-500 ml-4 px-4 py-1.5 rounded text-red-500  text-sm font-bold ">
                    Ksh : {car.marketplacePrice}
                  </span>
                </div>
              </div>
              <h3 className="text-center my-4 font-bold underline underline-offset-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 justify-center gap-4 w-full">
                <div className="flex w-full justify-between">
                  Type:{" "}
                  <span className="border font-bold text-slate-900 text-sm rounded py-1 px-4">
                    {car.bodyType?.name}
                  </span>
                </div>
                <div className="flex   w-full justify-between">
                  Interior Color:{" "}
                  <span className="border font-bold text-slate-900 text-sm rounded py-1 px-4">
                    {car.interiorColor}
                  </span>
                </div>
                <div className="flex  w-full justify-between">
                  Exterior Color:{" "}
                  <span className="border font-bold text-slate-900 text-sm rounded py-1 px-4">
                    {car.exteriorColor}
                  </span>
                </div>
                <div className="flex  w-full justify-between">
                  Engine Type:{" "}
                  <span className="border font-bold text-slate-900 text-sm rounded py-1 px-4">
                    {car.engineType}
                  </span>
                </div>
                <div className="flex  w-full justify-between">
                  Registration Series Type:{" "}
                  <span className="border font-bold text-slate-900 text-sm rounded py-1 px-4">
                    {car.registrationSeries}
                  </span>
                </div>
              </div>
              <CTA />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CarId;
