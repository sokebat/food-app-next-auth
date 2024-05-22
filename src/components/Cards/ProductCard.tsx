import Image from "next/image";
import React from "react";
interface DataProps {
  data: {
    id: number;
    name: string;
    url: string;
    price: string;
  };
}

const ProductCard = ({ data }: DataProps) => {
  return (
    <div className="rounded-xl bg-[#ffffff]  pt-4  border-2 sm:min-w-72 mt-3 relative">
      <p className="px-2 rounded-r-md bg-[#EB5757] w-20 absolute top-2 text-white">
        15% Off
      </p>

      <div className=" ml-5 flex items-start justify-center  ">
        <Image
          src={data.url}
          alt={data.name}
          height={200}
          width={200}
          quality={100}
          className="w-48 h-52 rounded-md"
        />

        <p className=" ml-2 ">
          {" "}
          <Image
            src={"/Images/Love.svg"}
            alt="love Icon"
            height={20}
            width={20}
            quality={100}
            className="object-contain"
          />
        </p>
      </div>

      <div className="flex items-start gap-2 justify-between  px-10 mt-3 pb-3 ">
        <div className=" flex flex-col items-start justify-between  text-xs sm:text-lg">
          <p className="text-xs sm:text-lg font-normal ">{data.name}</p>
          <p className="text-xl">
            <span className="text-[#F8B602]">$</span>
            {data.price}
          </p>
        </div>
        <p className="bg-[#F8B602] p-1 px-2 sm:p-1 sm:px-3 text-white text-xs sm:text-lg md:text-xl cursor-pointer  text-center rounded-lg ">
          +
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
