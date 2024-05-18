import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="rounded-xl bg-[#ffffff]  pt-4 min-w-80  mt-3 relative">
      <p className="px-2 rounded-r-md bg-[#EB5757] w-20 absolute top-2">
        15% Off
      </p>

      <div className=" ml-8 flex items-start justify-center  ">
        <Image
          src={"/Images/test.png"}
          alt="Dashboard Icon"
          height={200}
          width={200}
          quality={100}
        />

        <p className=" ml-5 ">
          {" "}
          <Image
            src={"/Images/Love.svg"}
            alt="Dashboard Icon"
            height={20}
            width={20}
            quality={100}
          />
        </p>
      </div>

      <div className="flex items-center justify-between px-10 mt-3 pb-3 ">
        <div>
          <p>Cheese Cake</p>
          <p className="text-xl">
            <span className="text-primary">$</span>5.59
          </p>
        </div>
        <p className="bg-primary p-2 px-4 text-white text-xl  text-center rounded-lg ">
          +
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
