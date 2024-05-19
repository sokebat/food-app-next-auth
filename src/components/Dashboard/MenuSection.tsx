import React from "react";
import Image from "next/image";
import ContactCard from "../Cards/ContactCard";
const MenuSection = () => {
  const datas = [
    {
      id: 1,
      name: "Food Order",
      iconPath: "/Images/menu/FoodOrder.svg",
    },
    {
      id: 2,
      name: "Favorite",
      iconPath: "/Images/menu/Favourite.svg",
    },
    {
      id: 3,
      name: "Order History",
      iconPath: "/Images/menu/History.svg",
    },
    {
      id: 4,
      name: "Bills",
      iconPath: "/Images/menu/Bill.svg",
    },
    {
      id: 5,
      name: "Setting",
      iconPath: "/Images/menu/Setting.svg",
    },
  ];

  return (
    <section className="h-full  bg-[#FFFFFF] px-2 xl:px-5 ">
      <h3 className="text-center text-[#2E2E2E] font-bold pt-10  pb-7  text-3xl">
        GoMeal<span className="text-orange-400 text-3xl ">.</span>
      </h3>
      <section className="flex flex-col gap-y-3 ">
        <div className="bg-[#F8B602] flex gap-1 2xl:gap-4 py-3 px-3 xl:px-5 2xl:px-7  items-center justify-start rounded-xl ">
          <Image
            src={"/Images/menu/Dashboard.svg"}
            alt="Dashboard Icon"
            height={30}
            width={30}
            quality={100}
          />
          <p className="font-semibold text-white text-lg ">Dashboard</p>
        </div>
        {datas.map((data) => {
          return (
            <div
              className="gap-2  2xl:gap-4 py-3 px-3  2xl:px-7  flex   items-center justify-start rounded-xl "
              key={data.id}
            >
              <Image
                src={data.iconPath}
                alt={`${data.name} icon`}
                height={30}
                width={30}
                quality={100}
                className="w-6 xl:w-10"
              />
              <p className="font-semibold text-[#A098AE] text-sm 2xl:text-lg ">
                {data.name}
              </p>
            </div>
          );
        })}
      </section>

      <div className="mt-12 py-12 ">
        <ContactCard />
      </div>
    </section>
  );
};

export default MenuSection;
