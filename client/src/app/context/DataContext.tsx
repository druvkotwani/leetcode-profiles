"use client";

import { createContext, useState } from "react";

export const DataContext = createContext({
  datas: [],
  setDatas: (datas: any) => {},
  search: "",
  setSearch: (search: string) => {},
});

export const DataProvider = ({ children }: any) => {
  const [datas, setDatas] = useState<any>();
  const [search, setSearch] = useState<string>("");
  return (
    <DataContext.Provider
      value={{
        datas,
        setDatas,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
