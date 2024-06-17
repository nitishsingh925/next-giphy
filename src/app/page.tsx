"use client";
import Gif from "@/components/Gif";
import { useGifContext } from "@/context/gif.context";
import Image from "next/image";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  const { gf, gifs, setGifs, filter } = useGifContext();

  const fetchTrandingGifs = async () => {
    const { data } = await gf.trending();
    setGifs(data);
  };
  useEffect(() => {
    fetchTrandingGifs();
  }, [filter]);

  return (
    <div className="">
      <Image
        src="/banner.gif"
        alt="banner"
        width={300}
        height={300}
        unoptimized
        className="mt-2 rounded w-full"
      />
      {/* Filter Gifs */}
      <div className=" mt-2 columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif, index) => {
          return <Gif gif={gif} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
