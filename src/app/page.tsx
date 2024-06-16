import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="">
      <Image
        src="/banner.gif"
        alt="banner"
        width={500}
        height={500}
        unoptimized
        className="mt-2 rounded w-full"
      />
    </div>
  );
};

export default Home;
