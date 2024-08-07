"use client";

import { createContext, useState } from "react";

export const DataContext = createContext({
  datas: [],
  setDatas: (datas: any) => {},
});

export const DataProvider = ({ children }: any) => {
  const [datas, setDatas] = useState<any>();
  return (
    <DataContext.Provider
      value={{
        datas,
        setDatas,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
