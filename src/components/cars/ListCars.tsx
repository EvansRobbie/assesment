"use client";
import React from "react";
import CustomPagination from "../layouts/Pagination";
import { CarCardSkeleton } from "../layouts/Skeleton";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../layouts/BreadCrumbs";
import { usePathname } from "next/navigation";
import Filters from "../layouts/Filter";
import { useSearch } from "@/context/SearchContext";
import FilterButton from "../layouts/FilterButton";

interface carProps {
  cars: {
    result: carEntity[];
    pagination: paginationEntity;
  };
  isLoading: boolean;
  popularMake: PopularEntity;
}

const ListCars = ({ cars, isLoading, popularMake }: carProps) => {
  const { search } = useSearch();
  const pathname = usePathname();
  // console.log(isLoading);
  // console.log(cars);
  return (
    <>
      <div className="my-4">
        <Breadcrumb replacePath={pathname} />
      </div>
      <div className="flex relative flex-col md:flex-row ">
        <FilterButton />
        <Filters popularMake={popularMake} />
        <main className=" relative lg:-right-28 xl:-right-44">
          <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 w-full gap-4">
            {isLoading
              ? Array(4)
                  .fill(0)
                  .map((_, index) => <CarCardSkeleton key={index} />)
              : cars &&
                cars.result.length > 0 &&
                cars.result
                  .filter((car) =>
                    car.title
                      ?.toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  )
                  .map((car) => (
                    <Link
                      href={"/cars/" + car.id}
                      key={car.id}
                      className="shadow-lg bg-gray-50 w-full rounded-b-xl"
                    >
                      <div className="relative h-[200px] w-full transitions xl:w-[275px] hover:brightness-50 ">
                        <Image
                          className="object-cover object-center rounded-t-xl "
                          src={`${car.imageUrl}`}
                          alt={`/${car.title}`}
                          fill
                          priority
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-center ">
                          {/* <h2 className="text-slate-200 bg-slate-950 px-4 py-1 rounded-sm text-sm font-medium">
                          {car.year}
                        </h2> */}
                          <h1 className="text-gray-500 text-base text-center">
                            {car.title}
                          </h1>
                        </div>
                        <div className="flex justify-between my-4 w-full">
                          <div className="font-bold text-sm">
                            Ksh: {String(car.marketplacePrice)}
                          </div>
                          <div>
                            {car.sold ? (
                              <span className="bg-red-500 rounded text-sm py-1 font-semibold capitalize text-slate-200  backdrop-blur">
                                Sold
                              </span>
                            ) : (
                              <span className="border rounded text-sm  font-semibold capitalize text-cyan-500 px-4 py-1  backdrop-blur">
                                Available
                              </span>
                            )}
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="w-full  flex justify-center  ">
                          <button className="bg-blue-500 hover:bg-blue-700 active:scale-105 transitions text-white w-3/4 rounded py-2 ">
                            Buy Now
                          </button>
                        </div>
                      </div>
                      {/* <p>{car.}</p> */}
                    </Link>
                  ))}
          </div>
        </main>
      </div>
      <CustomPagination
        resPerPage={cars.pagination.pageSize}
        productsCount={cars.pagination.total}
      />
    </>
  );
};

export default ListCars;
