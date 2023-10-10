"use client";
import React from "react";
import CustomPagination from "../layouts/Pagination";
import { CarCardSkeleton } from "../layouts/Skeleton";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../layouts/BreadCrumbs";
import { usePathname } from "next/navigation";

interface carProps {
  cars: {
    result: carEntity[];
    pagination: paginationEntity;
  };
  isLoading: boolean;
}

const ListCars = ({ cars, isLoading }: carProps) => {
  const pathname = usePathname();
  // console.log(isLoading);
  // console.log(cars);
  return (
    <div className="my-6 ">
      <div className="my-4">
        <Breadcrumb replacePath={pathname} />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => <CarCardSkeleton key={index} />)
          : cars.result.map((car) => (
              <Link
                href={"/cars/" + car.id}
                key={car.id}
                className="shadow-lg bg-gray-50 rounded-b-xl"
              >
                <div className="relative h-[200px] transitions w-full hover:brightness-50 ">
                  <Image
                    className="object-cover rounded-t-xl "
                    src={`${car.imageUrl}`}
                    alt={`/${car.title}`}
                    fill
                    priority
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between ">
                    <h2 className="text-slate-200 bg-slate-950 px-4 py-1 rounded-sm text-sm font-medium">
                      {car.year}
                    </h2>
                    <h1 className="text-gray-500 text-lg">{car.title}</h1>
                  </div>
                  <div className="grid grid-cols-3 w-full gap-4 py-6 items-center  justify-center text-center">
                    <div className="bg-slate-900/50 rounded text-sm py-1 font-semibold capitalize text-slate-200  backdrop-blur">
                      {car.transmission}
                    </div>
                    <div className="bg-slate-900/50 rounded text-sm py-1 font-semibold capitalize text-slate-200  backdrop-blur">
                      {car.ccMeasurement}
                    </div>
                    <div className="bg-slate-900/50 rounded text-sm py-1 font-semibold capitalize text-slate-200  backdrop-blur">
                      {car.sellingCondition}
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between w-full">
                    <div className="font-bold">
                      Ksh: {String(car.marketplacePrice)}
                    </div>
                    <div>
                      {car.sold ? (
                        <span className="bg-red-500 rounded text-sm py-1 font-semibold capitalize text-slate-200  backdrop-blur">
                          Sold
                        </span>
                      ) : (
                        <span className="bg-slate-950 rounded text-sm  font-semibold capitalize text-cyan-500 px-4 py-1  backdrop-blur">
                          Available
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* <p>{car.}</p> */}
              </Link>
            ))}
      </div>
      <CustomPagination
        resPerPage={cars.pagination.pageSize}
        productsCount={cars.pagination.total}
      />
    </div>
  );
};

export default ListCars;
