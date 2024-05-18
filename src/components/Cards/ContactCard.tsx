import Image from "next/image";
import React from "react";

const ContactCard = () => {
  return (
    <div className="w-52 bg-primary rounded-lg relative py-4 px-2">
      <div className=" flex justify-between items-start   ">
        <p className="font-semibold text-base text-white p-2">
          Contact us for any queries or for special reservation
        </p>

        <div className="w-16 h-16 ">
          <Image
            src={"/Images/menu/Dots.svg"}
            alt="Dashboard Icon"
            height={200}
            width={100}
            quality={100}
          />
        </div>
      </div>
      <div className="h-40 w-40 rounded-full bg-circle-gradient absolute right-0 top-1/2 left-2/3"></div>
      <button className="  px-4 py-2    rounded-lg bg-white">
        Contact
      </button>
    </div>
  );
};

export default ContactCard;
