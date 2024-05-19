import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="rounded-xl bg-[#ffffff]  pt-4  border-2 sm:min-w-72 mt-3 relative">
      <p className="px-2 rounded-r-md bg-[#EB5757] w-20 absolute top-2">
        15% Off
      </p>

      <div className=" ml-5 flex items-start justify-center  ">
        <Image
          src={"/Images/test.png"}
          alt="Dashboard Icon"
          height={200}
          width={200}
          quality={100}
        />

        <p className=" ml-2 ">
          {" "}
          <Image
            src={"/Images/Love.svg"}
            alt="love Icon"
            height={20}
            width={20}
            quality={100}
          />
        </p>
      </div>

      <div className="flex items-center justify-between px-10 mt-3 pb-3 ">
        <div className="text-xs sm:text-lg">
          <p>Cheese Cake</p>
          <p className="text-xl">
            <span className="text-[#F8B602]">$</span>5.59
          </p>
        </div>
        <p className="bg-[#F8B602] p-1 px-2 sm:p-2 sm:px-4 text-white text-xs sm:text-lg md:text-xl  text-center rounded-lg ">
          +
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
