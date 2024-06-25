import { useGifContext } from "@/context/gif.context";
import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

interface IFilter {
  title: string;
  value: string;
  background: string;
}

interface IFilterGifProps {
  alignLeft?: boolean;
  showTrending?: boolean;
}

const filters: IFilter[] = [
  {
    title: "GIFs",
    value: "gifs",
    background:
      "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "Stickers",
    value: "stickers",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
  },
];
const FilterGif: React.FC<IFilterGifProps> = ({
  alignLeft = false,
  showTrending = false,
}) => {
  const { filter, setFilter } = useGifContext();
  return (
    <div
      className={`flex my-2 gap-2 ${alignLeft ? "" : "justify-end"} ${
        showTrending
          ? "justify-between flex-col sm:flex-row sm:items-center"
          : ""
      }`}
    >
      {showTrending && (
        <span className="flex gap-2">
          {showTrending && (
            <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
          )}
          <span className="font-semibold text-gray-400">Trending</span>
        </span>
      )}

      <div className="flex min-w-80 rounded-full bg-gray-800">
        {filters.map((f) => {
          return (
            <span
              onClick={() => setFilter(f.value)}
              className={`${
                filter === f.value ? f.background : ""
              }font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer`}
              key={f.title}
            >
              {f.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGif;
