import React from "react";
import Image from "next/image";
import OrderMenuCard from "../Cards/OrderMenuCard";
const CheckoutSection = () => {
  return (
    <section className="h-full bg-[#FFFFFF]  px-3 ">
      <div>
        <div className=" flex justify-between pt-10 pb-5">
          <div className="flex gap-1">
            <Image
              src={"/Images/checkout/chat.svg"}
              alt="Dashboard Icon"
              height={30}
              width={30}
              quality={100}
              className="w-6 xl:w-10"
            />
            <Image
              src={"/Images/checkout/Notification.svg"}
              alt="Dashboard Icon"
              height={30}
              width={30}
              quality={100}
              className="w-6 xl:w-10"
            />
            <Image
              src={"/Images/checkout/Process.svg"}
              alt="Dashboard Icon"
              height={30}
              width={28}
              quality={100}
              className="w-6 xl:w-10"
            />
          </div>
          <div>
            {" "}
            <Image
              src={
                "https://media.istockphoto.com/id/1287868629/photo/beautiful-woman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Ywlhz3DpiRo0TJBNt84QHnnMhrU0HQQtB0ynG6LcWXg="
              }
              alt="Dashboard Icon"
              height={100}
              width={80}
              quality={100}
              className="rounded-full h-8 w-8 "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2   ">
        <p className="text-sm font-semibold ">Your Address </p>

        <div className="flex justify-between flex-wrap gap-1">
          <div className="2xl:text-sm text-[10px] font-semibold flex gap-1   items-center justify-center">
            <Image
              src={"/Images/Location.svg"}
              alt="Loactioin Icon"
              height={25}
              width={25}
              quality={100}
              className="w-4 xl:w-6"
            />
            <p className="text-wrap"> Gharipatan,Pokhara</p>
          </div>
          <p className="p-1 border-[1px] rounded-md border-primary text-xs text-center text-[#F8B602] cursor-pointer">
            {" "}
            change
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-[12px] text-[#A098AE]">
            your default address of delivery{" "}
          </p>
          <div className="flex 2xl:flex-row flex-col gap-1 text-center ">
            <p className="p-1 border-[1px] rounded-md border-primary text-xs text-[#F8B602] cursor-pointer">
              {" "}
              Add details
            </p>
            <p className="p-1 border-[1px] rounded-md border-primary text-xs text-[#F8B602] cursor-pointer">
              {" "}
              Add note
            </p>
          </div>
        </div>
      </div>

      <OrderMenuCard />
    </section>
  );
};

export default CheckoutSection;
