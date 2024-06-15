"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";

const Header: React.FC = () => {
  const [showCategories, setShowCategories] = useState(false);
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
        <div className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
          Reactions
        </div>
        <button onClick={() => setShowCategories(!showCategories)}>
          <HiEllipsisVertical
            size={35}
            className={`py-0.5 hover:gradient ${
              showCategories ? "gradient" : ""
            } border-b-4 hidden lg:block`}
          />
        </button>
        <div className="h-9 bg-neutral-700 pt-1.5 px-6 cursor-pointer rounded">
          <Link href={"/favorites"}> Favorite GIFs</Link>
        </div>
        <button>
          <HiMiniBars3BottomRight
            className="text-sky-400 block lg:hidden"
            size={30}
          />
        </button>
      </div>
      {showCategories && (
        <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-10">
          <span>Categories</span>
          <hr />
          <div className="font-bold">Reactions</div>
        </div>
      )}
    </header>
  );
};

export default Header;
