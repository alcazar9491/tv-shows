import { createContext } from "react";

export const TvShowContext = createContext(null);

export const InitTvShowContext = {
  filter: "",
  favorites:false,
  TvShowList:[]
};
