import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex item-center justify-center gap-4">
        <Link
          href="/sign-in"
          className="px-3 py-1 bg-[#F8B602] rounded-md pointer   text-white "
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="px-3 py-1 bg-[#F8B602] rounded-md pointer text-white "
        >
          Sign Up{" "}
        </Link>
        <Link
          href="/dashboard"
          className="px-3 py-1 bg-[#F8B602] rounded-md  pointer text-white "
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default page;
