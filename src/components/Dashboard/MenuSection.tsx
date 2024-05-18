import React from "react";
import Image from "next/image";
import ContactCard from "../Cards/ContactCard";
const MenuSection = () => {
  return (
    <section className="h-auto w-[17vw] bg-[#FFFFFF]  px-5 ">
      <h3 className="text-center text-[#2E2E2E] font-bold pt-10  pb-7  text-3xl">
        GoMeal<span className="text-orange-400 text-3xl ">.</span>
      </h3>
      <section className="flex flex-col gap-y-3 ">
        <div className="bg-[#F8B602] flex gap-4 py-3 px-7  items-center justify-start rounded-xl ">
          <Image
            src={"/Images/menu/Dashboard.svg"}
            alt="Dashboard Icon"
            height={30}
            width={30}
            quality={100}
          />
          <p className="font-semibold text-white text-lg ">Dashboard</p>
        </div>
        <div className="  flex gap-4 py-2 px-7  items-center justify-start rounded-xl ">
          <Image
            src={"/Images/menu/FoodOrder.svg"}
            alt="Food Order Icon"
            height={30}
            width={30}
            quality={100}
          />
          <p className="font-semibold text-[#A098AE] text-lg ">Food Order</p>
        </div>
        <div className="  flex gap-4 py-2 px-7  items-center justify-start rounded-xl ">
          <Image
            src={"/Images/menu/Favourite.svg"}
            alt="History Icon"
            height={30}
            width={30}
            quality={100}
          />
          <p className="font-semibold text-[#A098AE] text-lg ">Favorite</p>
        </div>
        <div className="  flex gap-4 py-2 px-7  items-center justify-start rounded-xl ">
          <Image
            src={"/Images/menu/History.svg"}
            alt="History Icon"
            height={30}
            width={30}
            quality={100}
          />
          <p className="font-semibold text-[#A098AE] text-lg ">Order History</p>
        </div>
        <div className="  flex gap-4 py-2 px-7  items-center justify-start rounded-xl ">
          <Image
            src={"/Images/menu/Bill.svg"}
            alt=" Bill Icon"
            height={30}
            width={30}
            quality={100}
          />
          <p className="font-semibold text-[#A098AE] text-lg ">Bills</p>
        </div>
        <div className="  flex gap-4 py-2 px-7  items-center justify-start rounded-xl ">
          <Image
            src={"/Images/menu/Setting.svg"}
            alt="Setting Icon"
            height={30}
            width={30}
            quality={100}
          />
          <p className="font-semibold text-[#A098AE] text-lg ">Setting</p>
        </div>
      </section>

      <div className="mt-12 py-12 ">
        <ContactCard />
      </div>
    </section>
  );
};

export default MenuSection;
