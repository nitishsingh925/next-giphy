"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { IGifContext, useGifContext } from "@/context/gif.context";

interface ICategory {
  name: string;
  name_encoded: string;
}
const Header: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>();
  const [showCategories, setShowCategories] = useState(false);

  const { favorites }: IGifContext = useGifContext();

  const fetchGifCategories = async () => {
    try {
      const res = await fetch("/categories.json");
      const { data } = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchGifCategories();
  }, []);
  return (
    <header className="relative flex gap-4 justify-between items-center mb-2">
      <Link href="/" className="flex gap-2">
        <Image
          src="/logo.svg"
          alt="Giphy logo"
          className="w-8"
          width={40}
          height={40}
        />
        <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
          GIPHY
        </h1>
      </Link>
      <div className="font-bold text-base flex gap-2 items-center">
        {/* render categories */}
        {categories?.slice(0, 5)?.map((category: any) => {
          return (
            <Link
              key={category.name}
              href={`/${category.name_encoded}`}
              className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
            >
              Reactions
            </Link>
          );
        })}
        <button onClick={() => setShowCategories(!showCategories)}>
          <HiEllipsisVertical
            size={35}
            className={`py-0.5 hover:gradient ${
              showCategories ? "gradient" : ""
            } border-b-4 hidden lg:block`}
          />
        </button>
        {/* Display favorites */}
        {favorites?.length > 0 && (
          <div className="h-9 bg-neutral-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link href="/favorites">Favorite GIFs</Link>
          </div>
        )}
        <button>
          <HiMiniBars3BottomRight
            className="text-sky-400 block lg:hidden"
            size={30}
          />
        </button>
      </div>
      {showCategories && (
        <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-10">
          <span className="text-3xl font-extrabold">Categories</span>
          <hr className="bg-gray-100 opacity-50 my-5" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-5 xl:grid-cols-6 gap-4 ">
            {categories?.map((category: ICategory) => {
              return (
                <Link
                  key={category.name}
                  href={`/${category.name_encoded}`}
                  className="font-bold"
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
