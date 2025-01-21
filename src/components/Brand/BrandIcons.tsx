import React from "react";
import Image from "next/image";
import { brands } from "../../lib/data"; 

const BrandIcons: React.FC = () => {
  return (
    <div className="flex mt-[450px] mb-[100px] w-[1100px] justify-around items-center mx-auto space-x-[40px]">
      {brands.map((brand, index) => (
        <div key={index} className="flex items-center">
          <Image
            src={brand.src}
            alt={brand.name}
            width={120}
            height={35}
            className="filter brightness-0"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandIcons;
