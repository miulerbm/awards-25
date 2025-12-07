"use client";

import Image from "next/image";

const ImageAwards = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        src="/images/xino-main.webp"
        alt="Xinon Awards Main Portrait"
        width={1919}
        height={2600}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
};

export default ImageAwards;
