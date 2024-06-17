"use client";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Category {
  name: string;
  name_encoded: string;
}

export interface IGifContext {
  gf: GiphyFetch;
  gifs: any[];
  setGifs: Dispatch<SetStateAction<any[]>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  favorites: any[];
  setFavorites: Dispatch<SetStateAction<any[]>>;
  categories: Category[];
}
const GifContext = createContext<IGifContext | undefined>(undefined);

interface IGifProviderProps {
  children: ReactNode;
}
const GifProvider: React.FC<IGifProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [gifs, setGifs] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("gifs");

  const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API!);

  return (
    <GifContext.Provider
      value={{
        gf,
        gifs,
        setGifs,
        filter,
        setFilter,
        favorites,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
export const useGifContext = () => {
  const context = useContext(GifContext);
  if (context === undefined) {
    throw new Error("useGifContext must be used within a GifProvider");
  }
  return context;
};
export default GifProvider;
