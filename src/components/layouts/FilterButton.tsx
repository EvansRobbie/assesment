import { useSearch } from "@/context/SearchContext";
import React from "react";

const FilterButton = () => {
  const { showFilter, setShowFilter } = useSearch();
  return (
    <button
      onClick={() => setShowFilter(!showFilter)}
      className="fixed z-20 top-12 px-4 py-2 rounded right-0 bg-red-500 lg:hidden text-white"
    >
      {showFilter ? "Close Filter" : "Show Filters"}
    </button>
  );
};

export default FilterButton;
