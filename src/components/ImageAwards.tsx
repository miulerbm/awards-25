"use client";

import Image from "next/image";

const ImageAwards = () => {
  return (
    <div className="relative w-full h-full flex justify-center">
      <Image
        src="/images/xino-main.webp"
        alt="Xinon Awards Main Portrait"
        width={1919}
        height={2600}
        className="object-cover w-[240px] h-[325px] sm:w-[300px] sm:h-[407px] lg:w-[470px] lg:h-[637px] xl:w-[575px] xl:h-[780px]"
      />
    </div>
  );
};

export default ImageAwards;
