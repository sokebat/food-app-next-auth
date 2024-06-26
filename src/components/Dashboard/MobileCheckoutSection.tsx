import React from "react";
import OrderMenuCard from "../Cards/OrderMenuCard";
import Image from "next/image";

const MobileCheckoutSection = () => {
  return (
    <section className="h-auto    bg-[#FFFFFF]  px-3 ">
      <div>
        <div className=" flex justify-between pt-10 pb-5">
          <div className="flex gap-1">
            <Image
              src={"/Images/checkout/Chat.svg"}
              alt="Chat Icon"
              height={30}
              width={30}
              quality={100}
              className="w-8"
            />
            <Image
              src={"/Images/checkout/Notification.svg"}
              alt="Notificatin Icon"
              height={30}
              width={30}
              quality={100}
              className="w-8"
            />
            <Image
              src={"/Images/checkout/Process.svg"}
              alt="setting Icon"
              height={30}
              width={28}
              quality={100}
              className="w-8"
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
              className="rounded-full h-12 w-12 "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2   ">
        <p className="text-lg text-black font-semibold  text-start">
          Your Address{" "}
        </p>

        <div className="flex justify-between flex-wrap gap-1">
          <div className="2xl:text-sm text-[10px] font-semibold flex gap-1   items-center justify-center">
            <Image
              src={"/Images/Location.svg"}
              alt="Loactioin Icon"
              height={25}
              width={25}
              quality={100}
              className="w-7"
            />
            <p className="text-wrap text-black font-semibold text-sm">
              {" "}
              Gharipatan,Pokhara
            </p>
          </div>
          <p className="p-1 border-[1px] rounded-md border-primary text-sm text-start text-[#F8B602] cursor-pointer">
            {" "}
            change
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-[12px] text-[#A098AE]">
            your default address of delivery{" "}
          </p>
          <div className="flex 2xl:flex-row flex-col gap-1 text-center ">
            <p className="p-1 border-[1px] rounded-md border-primary text-sm text-[#F8B602] cursor-pointer">
              {" "}
              Add details
            </p>
            <p className="p-1 border-[1px] rounded-md border-primary text-sm text-[#F8B602] cursor-pointer">
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

export default MobileCheckoutSection;
