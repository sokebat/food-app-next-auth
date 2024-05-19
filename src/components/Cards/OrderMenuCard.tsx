import Image from "next/image";
import React from "react";

const OrderMenuCard = () => {
  return (
    <div className="">
      <h3 className="my-3 text-lg font-semibold text-black text-start ">Order Menu</h3>

      <div className="flex flex-col gap-y-3 font-semibold ">
        <div className="  flex  gap-1  justify-between items-start  ">
          <div className=" flex gap-1 justify-between item-center">
            {" "}
            <Image
              src={
                "https://cdn.pixabay.com/photo/2020/08/19/14/42/pizza-5501063_640.jpg"
              }
              alt="pizza Icon"
              height={100}
              width={100}
              quality={100}
              className="w-10 h-10 xl:w-10 rounded-md"
            />
            <div className=" flex flex-col gap-y-1">
              <p className="font-semibold text-black 2xl:text-xs text-[10px] line-clamp-1 ">
                Pepperoni Pizza
              </p>
              <p className="font-semibold text-[#A098AE] text-xs text-start ">X1</p>
            </div>
          </div>

          <p className="2xl:text-xs text-[10px]">
            {" "}
            +<span className="text-[#F8B602]">$</span>5.59
          </p>
        </div>
        <div className="  flex  gap-1  justify-between items-start  ">
          <div className=" flex gap-1 justify-between item-center">
            {" "}
            <Image
              src={
                "https://cdn.pixabay.com/photo/2020/08/19/14/42/pizza-5501063_640.jpg"
              }
              alt="pizza Icon"
              height={100}
              width={100}
              quality={100}
              className="w-10 h-10 xl:w-10 rounded-md"
            />
            <div className=" flex flex-col gap-y-1">
              <p className="font-semibold  text-black 2xl:text-xs text-[10px] line-clamp-1 ">
                Pepperoni Pizza
              </p>
              <p className="font-semibold text-[#A098AE] text-xs text-start ">X1</p>
            </div>
          </div>

          <p className="2xl:text-xs text-[10px]">
            {" "}
            +<span className="text-[#F8B602]">$</span>5.59
          </p>
        </div>
        <div className="  flex  gap-1  justify-between items-start  ">
          <div className=" flex gap-1 justify-between item-center">
            {" "}
            <Image
              src={
                "https://cdn.pixabay.com/photo/2020/08/19/14/42/pizza-5501063_640.jpg"
              }
              alt="pizza Icon"
              height={100}
              width={100}
              quality={100}
              className="w-10 h-10 xl:w-10 rounded-md"
            />
            <div className=" flex flex-col gap-y-1">
              <p className="font-semibold text-black 2xl:text-xs text-[10px] line-clamp-1 ">
                Pepperoni Pizza
              </p>
              <p className="font-semibold text-[#A098AE] text-xs text-start ">X1</p>
            </div>
          </div>

          <p className="2xl:text-xs text-[10px]">
            {" "}
            +<span className="text-[#F8B602]">$</span>5.59
          </p>
        </div>
      </div>

      <hr className="mt-10 mb-6 " />

      <div>
        <div className="text-lg">
          <div className="flex justify-between items-center font-medium ">
            <p className="text-[#A098AE] text-sm ">Delivery</p>
            <p className="text-xs">
              {" "}
              +<span className="text-[#F8B602]">$</span>5.59
            </p>
          </div>
          <div className="flex justify-between items-center mt-3 ">
            <p>Total</p>
            <p className="text-sm font-semibold">
              {" "}
              <span className="text-[#F8B602]">$</span>202.00
            </p>
          </div>
        </div>

        <div className="flex text-sm py-4  justify-around flex-col 2xl:flex-row px-3 items-center bg-[#f4f5f4] rounded-lg border-[1px] border-primary my-6 ">
          <div className="rounded-full bg-[#F8B602] w-8 h-9 flex items-center justify-center">
            {" "}
            <Image
              src={"/Images/checkout/Coupon.svg"}
              alt="pizza Icon"
              height={100}
              width={100}
              quality={100}
              className="w-6  h-8 "
            />
          </div>
          <div className="text-[11px] xl:text-[17px]">Have a coupon code? &gt;</div>
        </div>

        <p className="bg-[#F8B602]   gap-4 py-3 px-7  text-center text-white rounded-xl ">
          Checkout
        </p>
      </div>
    </div>
  );
};

export default OrderMenuCard;
