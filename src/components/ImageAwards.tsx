"use client";

import Image from "next/image";
import { useState } from "react";

const ImageAwards = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        src="/images/xino-main.webp"
        alt="Xinon Awards Main Portrait"
        width={1919}
        height={2600}
        className={`object-contain w-full h-full transition-all duration-1000 ease-out ${
          isLoaded
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
        priority
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageAwards;
