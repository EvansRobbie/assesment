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
}
const searchContext = createContext({} as contextProps);

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");

  // const
  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};
export const useSearch = () => useContext(searchContext);
export default SearchContextProvider;
