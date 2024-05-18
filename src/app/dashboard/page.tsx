import { CheckoutSection, MainSection, MenuSection } from "@/components";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex bg-[#F4F5F4] ">
      <MenuSection />
      <MainSection />
      <CheckoutSection />
    </div>
  );
};

export default Dashboard;
