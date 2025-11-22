"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/xinon_1.webp",
    "/images/xinon_2.webp",
    "/images/xinon_3.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute  inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Xinon Awards ${index + 1}`}
            width={600}
            height={650}
            className="object-bottom w-[200px] h-[220px] sm:w-[280px] sm:h-[300px] lg:w-[500px] lg:h-[540px] xl:w-[600px] xl:h-[650px]"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
