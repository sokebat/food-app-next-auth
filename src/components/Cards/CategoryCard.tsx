import Image from "next/image";
import React from "react";
interface CategoryProps {
  name: string;
  icon: string;
}

const CategoryCard = ({ name, icon }: CategoryProps) => {
  return (
    <div className=" rounded-lg bg-[#ffffff]  p-8 flex flex-col items-center justify-center w-36 ">
      <Image
        src={icon}
        alt={` ${name} icon`}
        height={200}
        width={200}
        quality={100}
        className="p-3 "
      />
      <p className="text-[#A098AE]">{name}</p>
    </div>
  );
};

export default CategoryCard;
