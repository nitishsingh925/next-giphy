import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IGifProps {
  gif: {
    type: string;
    slug: string;
    title: string;
    images: {
      fixed_width: {
        webp: string;
      };
    };
    user: {
      avatar_url: string;
      display_name: string;
    };
  };
  hover?: boolean;
}
const Gif: React.FC<IGifProps> = ({ gif, hover = true }) => {
  return (
    <Link href={`${gif.type}/${gif.slug}`}>
      <div className="w-full mb-2 relative cursor-pointer group aspect-video">
        <Image
          src={gif?.images?.fixed_width.webp}
          alt={gif?.title}
          width={200}
          height={200}
          unoptimized
          className="w-full object-cover rounded transition-all duration-300"
        />
        {hover && (
          <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2">
            <Image
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              width={50}
              height={50}
              unoptimized
              className="h-8"
            />
            <span>{gif?.user?.display_name}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Gif;
