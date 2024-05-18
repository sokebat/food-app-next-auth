import Image from "next/image";
import React from "react";

const OrderMenuCard = () => {
  return (
    <div className="">
      <h3 className="my-3 text-lg font-semibold ">Order Menu</h3>

      <div className="flex flex-col gap-y-3 font-semibold ">
        <div className="  flex   items-center justify-between  ">
          <div className="">
            {" "}
            <Image
              src={
                "https://media.istockphoto.com/id/1287868629/photo/beautiful-woman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Ywlhz3DpiRo0TJBNt84QHnnMhrU0HQQtB0ynG6LcWXg="
              }
              alt="Dashboard Icon"
              height={100}
              width={100}
              quality={100}
              className="w-16"
            />
          </div>
          <div className="">
            <p className="font-semibold text-black text-xs ">Pepperoni Pizza</p>
            <p className="font-semibold text-[#A098AE] text-xs ">X1</p>
          </div>
          <p className="text-xs">
            {" "}
            +<span className="text-primary">$</span>5.59
          </p>
        </div>
        <div className="  flex   items-center justify-between   ">
          <div className="">
            {" "}
            <Image
              src={
                "https://media.istockphoto.com/id/1287868629/photo/beautiful-woman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Ywlhz3DpiRo0TJBNt84QHnnMhrU0HQQtB0ynG6LcWXg="
              }
              alt="Dashboard Icon"
              height={100}
              width={100}
              quality={100}
              className="w-16"
            />
          </div>
          <div className="">
            <p className="font-semibold text-black text-xs ">Pepperoni Pizza</p>
            <p className="font-semibold text-[#A098AE] text-xs ">X1</p>
          </div>
          <p className="text-xs">
            {" "}
            +<span className="text-primary">$</span>5.59
          </p>
        </div>
        <div className="  flex   items-center justify-between   ">
          <div className="">
            {" "}
            <Image
              src={
                "https://media.istockphoto.com/id/1287868629/photo/beautiful-woman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Ywlhz3DpiRo0TJBNt84QHnnMhrU0HQQtB0ynG6LcWXg="
              }
              alt="Dashboard Icon"
              height={100}
              width={100}
              quality={100}
              className="w-16"
            />
          </div>
          <div className="">
            <p className="font-semibold text-black text-xs ">Pepperoni Pizza</p>
            <p className="font-semibold text-[#A098AE] text-xs ">X1</p>
          </div>
          <p className="text-xs">
            {" "}
            +<span className="text-primary">$</span>5.59
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
              +<span className="text-primary">$</span>5.59
            </p>
          </div>
          <div className="flex justify-between items-center mt-3 ">
            <p>Total</p>
            <p className="text-sm font-semibold">
              {" "}
              <span className="text-primary">$</span>202.00
            </p>
          </div>
        </div>

        <div className="flex text-sm py-4  justify-around px-3  bg-[#f4f5f4] rounded-lg border-[1px] border-primary my-6 ">
          <div>icon</div>
          <div>Have a coupon code?</div>
          <div>/</div>
        </div>

        <p className="bg-[#F8B602]   gap-4 py-3 px-7  text-center text-white rounded-xl ">
          Checkout
        </p>
      </div>
    </div>
  );
};

export default OrderMenuCard;
