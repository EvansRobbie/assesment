"use client";
import { useSearch } from "@/context/SearchContext";
import React from "react";

const Search = () => {
  const { search, setSearch } = useSearch();

  return (
    <div className="w-[100vh] flex  gap-2 ">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-l-sm bg-transparent flex-grow max-w-full outline-none border border-gray-400 shadow-md"
        placeholder="Search"
      />
      <button className="px-4 md:px-10 py-2 text-white bg-blue-500 hover:bg-blue-700 transitions active:scale-105 rounded-r-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="block md:hidden w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <span className="hidden md:block"> Search</span>
      </button>
    </div>
  );
};

export default Search;
