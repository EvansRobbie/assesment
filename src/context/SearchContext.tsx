"use client";
import React, {
  useContext,
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface contextProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  showFilter: boolean;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
}
const searchContext = createContext({} as contextProps);

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [showFilter, setShowFilter] = useState(true);

  // const
  return (
    <searchContext.Provider
      value={{ search, setSearch, showFilter, setShowFilter }}
    >
      {children}
    </searchContext.Provider>
  );
};
export const useSearch = () => useContext(searchContext);
export default SearchContextProvider;
