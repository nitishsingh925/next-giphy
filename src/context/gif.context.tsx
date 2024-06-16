"use client";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Category {
  name: string;
  name_encoded: string;
}

export interface IGifContext {
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

  const [gf, setGf] = useState<GiphyFetch | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
    if (apiKey) {
      setGf(new GiphyFetch(apiKey));
    } else {
      console.error("Giphy API key is not set in environment variables.");
    }
  }, []);

  return (
    <GifContext.Provider value={{ favorites }}>{children}</GifContext.Provider>
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
