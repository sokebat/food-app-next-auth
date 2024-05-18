import React from "react";
import Image from "next/image";
import OrderMenuCard from "../Cards/OrderMenuCard";
const CheckoutSection = () => {
  return (
    <section className="h-auto  w-[17vw] bg-[#FFFFFF]  px-3 ">
      <div>
        <div className=" flex justify-between pt-10 pb-5">
          <div className="flex gap-4">
            <Image
              src={"/Images/checkout/chat.svg"}
              alt="Dashboard Icon"
              height={30}
              width={30}
              quality={100}
            />
            <Image
              src={"/Images/checkout/Notification.svg"}
              alt="Dashboard Icon"
              height={30}
              width={30}
              quality={100}
            />
            <Image
              src={"/Images/checkout/Process.svg"}
              alt="Dashboard Icon"
              height={30}
              width={28}
              quality={100}
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
              className="rounded-full h-8 w-12 "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2   ">
          <p className="text-sm font-semibold ">Your Address </p>
          <div>
            <div className="text-sm font-semibold flex gap-2  items-center justify-center">
              <Image
                src={"/Images/Location.svg"}
                alt="Loactioin Icon"
                height={25}
                width={25}
                quality={100}
              />
              <p> Gharipatan,Pokhara</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-[12px] text-[#A098AE]">
              your default address of delivery{" "}
            </p>
            <div className="flex gap-1 ">
              <p className="p-1 border-[1px] rounded-md border-primary text-xs text-primary cursor-pointer">
                {" "}
                Add details
              </p>
              <p className="p-1 border-[1px] rounded-md border-primary text-xs text-primary cursor-pointer">
                {" "}
                Add note
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="p-1 border-[1px] rounded-md border-primary text-xs text-primary cursor-pointer">
            {" "}
            change
          </p>
        </div>
      </div>

      <OrderMenuCard />
    </section>
  );
};

export default CheckoutSection;
