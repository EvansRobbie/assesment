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
      <button className="px-10 py-2 text-white bg-blue-500 hover:bg-blue-700 transitions active:scale-105 rounded-r-sm">
        Search
      </button>
    </div>
  );
};

export default Search;
