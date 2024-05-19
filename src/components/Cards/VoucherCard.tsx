import Circle from "../Utils/Circle";

 

const VoucherCard = () => {
  return (
    <div className="bg-[#F8B602] text-white p-4 flex flex-col gap-y-3 rounded-lg container  relative">
      <p className=" text-2xl font-bold">
        Get Discount Voucher <br /> Up To 20%
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod tempor incididunt.{" "}
      </p>

      <div className="absolute bottom-10 z-1 right-12">
     {/* <Circle/> */}
      </div>
    </div>
  );
};

export default VoucherCard;
