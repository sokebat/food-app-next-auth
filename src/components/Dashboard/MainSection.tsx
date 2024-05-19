import CategoryCard from "../Cards/CategoryCard";
import ProductCard from "../Cards/ProductCard";
import VoucherCard from "../Cards/VoucherCard";

const MainSection = () => {
  const categoryData = [
    {
      name: "Bakery",
      icon: "/Images/mainSection/Baked.svg",
    },
    {
      name: "Burger",
      icon: "/Images/mainSection/Burger.svg",
    },
    {
      name: "Beverage",
      icon: "/Images/mainSection/Coffee.svg",
    },
    {
      name: "Chicken",
      icon: "/Images/mainSection/Chicken.svg",
    },
    {
      name: "Pizza",
      icon: "/Images/mainSection/Fast.svg",
    },
    {
      name: "Seafood",
      icon: "/Images/mainSection/Fish.svg",
    },
  ];
  return (
    <div className="md:mx-5   ">
      <div className="flex md:flex-row flex-col gap-y-4  items-center justify-between md:pt-10 ">
        <div className=" flex  justify-between gap-4 items-center md:w-4/3">
        <p className="text-center text-[#2E2E2E] font-bold text-xl  xl:text-2xl  2xl:text-3xl">
          Hello, Samantha
        </p>
        <div className="flex bg-[#ffffff] text-center py rounded-lg font-semibold pl-3">
          <p className="p-2">Delivery</p>{" "}
          <p className="py-3 border-[1px] rounded-md  px-5  text-xs  bg-[#F8B602] cursor-pointer">
            {" "}
            Pickup
          </p>
        </div>
        </div>
        <div className="   ">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="w-4 h-4 text-[#F8B602] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="  w-full p-3 ps-10 text-sm text-gray-900  rounded-lg focus:outline-none "
              placeholder="What do you want eat today..."
              required
            />
          </div>
        </div>
      </div>

      <div className="py-3 mt-3  ">
        <VoucherCard />
      </div>

      <div className="">
        <div className="flex py-3 justify-between">
          <p className="font-bold text-xl">Category</p>
          <p className="font-normal text-lg text-[#F8B602] ">veiw all &gt; </p>
        </div>
        <div className="flex justify-between gap-2 overflow-x-auto mx-4 py-3 ">
          {categoryData.map((category, index) => (
            <div key={index}>
              <CategoryCard name={category.name} icon={category.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className=" my-4 pb-9  ">
        <div className="flex py-3 justify-between ">
          <p className="font-bold text-xl">GoMeal Special</p>
          <p className="font-normal text-lg text-[#F8B602] ">veiw all &gt; </p>
        </div>
        <div className="flex gap-2 overflow-x-auto py-3  overflow-hidden   ">
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className=" mt-4 container">
        <div className="flex py-3 justify-between ">
          <p className="font-bold text-xl">Burger</p>
          <p className="font-normal text-lg text-[#F8B602] ">veiw all &gt; </p>
        </div>
        <div className="flex gap-2 py-3 overflow-x-auto  overflow-hidden mx-auto ">
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className=" mt-4 container">
        <div className="flex py-3 justify-between ">
          <p className="font-bold text-xl">Beverage</p>
          <p className="font-normal text-lg text-[#F8B602] ">veiw all &gt; </p>
        </div>
        <div className="flex gap-2 overflow-x-auto py-3 overflow-hidden mx-auto ">
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
