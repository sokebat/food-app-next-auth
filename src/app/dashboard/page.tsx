import { CheckoutSection, MainSection, MenuSection } from "@/components";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenuSection from "@/components/Dashboard/MobileMenuSection";
import MobileCheckoutSection from "@/components/Dashboard/MobileCheckoutSection";
import Image from "next/image";


const Dashboard = () => {
  return (
    <div className="bg-[#F4F5F4]">
      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-10 gap-3 mx-auto">
        <div className="col-span-2">
          <MenuSection />
        </div>
        <div className="col-span-6">
          <MainSection />
        </div>
        <div className="col-span-2">
          <CheckoutSection />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col w-full bg-[#ffffff]">
        <div className=" flex justify-between container py-5 ">
          <Sheet>
            <SheetTrigger className="ml-4 flex items-center">
              <RxHamburgerMenu color="orange" size={35} />
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <h3 className="text-center text-[#2E2E2E] font-bold py-5 text-3xl">
                    GoMeal<span className="text-orange-400 text-3xl">.</span>
                  </h3>
                </SheetTitle>
                <SheetDescription>
                  <MobileMenuSection />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger className="ml-4 flex items-center overflow-y-auto">
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
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <h3 className="text-center text-[#2E2E2E] font-bold py-3  text-3xl">
                    GoMeal<span className="text-orange-400 text-3xl">.</span>
                  </h3>
                </SheetTitle>
                <SheetDescription>
                  <MobileCheckoutSection />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="container mx-auto pt-4">
          <MainSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
