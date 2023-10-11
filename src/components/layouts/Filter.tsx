"use client";
import { useSearch } from "@/context/SearchContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { useMediaQuery } from "usehooks-ts";

const Filters = ({ popularMake }: { popularMake: PopularEntity }) => {
  const pathname = usePathname();
  const [scrollNav, setScrollNav] = useState(false);
  const isMediumDevice = useMediaQuery("(max-width:820px)");
  const isLaptop = useMediaQuery("(min-width:1024px)");
  const { setShowFilter, showFilter } = useSearch();
  const mobileFilter = () => {};

  const closeFilter = () => {
    if (isMediumDevice) setShowFilter(false);
  };
  const navScroll = () => {
    window.scrollY > 530 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", navScroll);
    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  });

  return (
    <aside
      className={`${
        showFilter && isMediumDevice
          ? " fixed z-10 top-2 left-0"
          : pathname.startsWith("/cars")
          ? "absolute top-0 left-0"
          : scrollNav && isLaptop
          ? " fixed z-10 -left-1 xl:left-10 top-2"
          : "absolute -left-[100%] transitions !ease-in-out duration-300 "
      } md:w-1/3 lg:w-1/4 px-4 transitions !ease-out duration-300 overflow-auto`}
    >
      <div
        onClick={closeFilter}
        className="hidden mb-5  w-full text-center px-4 py-2  text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
      >
        Filter by
      </div>

      <div className="block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2 text-red-500">Popular Brand</h3>

        <ul className="space-y-1 flex flex-wrap gap-4">
          {popularMake.makeList.length > 0 &&
            popularMake.makeList.map((brand) => (
              <div key={brand.id} className="flex items-center gap-2">
                <span>
                  <input name="brand" type="checkbox" className="h-4 w-4" />
                </span>
                <div className="relative h-10 w-10">
                  <Image
                    fill
                    priority
                    className=""
                    src={`${brand.imageUrl}`}
                    alt={`${brand.name}`}
                  />
                </div>
              </div>
            ))}
        </ul>

        <hr className="my-4" />
        <h3 className="font-semibold mb-2 text-red-500">Discount</h3>

        <ul className="space-y-1">
          <li>
            <label className="flex items-center">
              <input name="category" type="checkbox" className="h-4 w-4" />
              <span className="ml-2 text-gray-500"> 5% or More</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input name="category" type="checkbox" className="h-4 w-4" />
              <span className="ml-2 text-gray-500"> 40% or More </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input name="category" type="checkbox" className="h-4 w-4" />
              <span className="ml-2 text-gray-500"> 20% or More </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input name="category" type="checkbox" className="h-4 w-4" />
              <span className="ml-2 text-gray-500"> 30% or More </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="50%"
                className="h-4 w-4"
              />
              <span className="ml-2 text-gray-500"> 50% or More</span>
            </label>
          </li>
        </ul>

        <hr className="my-4" />

        <h3 className="font-semibold mb-2 text-red-500">Customer Review</h3>
        <ul className="space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-4 w-4"
                />
                <span className="ml-2 text-gray-500">
                  {" "}
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filters;
