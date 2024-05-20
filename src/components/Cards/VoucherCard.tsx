import Circle from "../Utils/Circle";

const VoucherCard = () => {
  return (
    <div className="bg-[#F8B602] text-white p-4  rounded-lg container  overflow-hidden ">
      <div className="relative flex flex-col gap-y-3">
        <p className=" text-2xl font-bold z-40">
          Get Discount Voucher <br /> Up To 20%
        </p>
        <p className="z-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
          eiusmod tempor incididunt.{" "}
        </p>
        <div className="absolute bottom-20   right-52">
          <Circle />
        </div>
        <div className="absolute top-12  -z-0 -left-20">
          <Circle />
        </div>
        <div className="absolute top-12  -z-0 -right-20">
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default VoucherCard;
