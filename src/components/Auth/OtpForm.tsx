"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OtpForm = () => {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState<undefined | string>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtpValue(event.target.value);
  };

  const handelSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("otp_token");

    if (otpValue) {
      const data = {
        token: token,
        otp: +otpValue,
      };

      try {
        const res = axios.post("/verify-otp", data);
        console.log(res)
        router.push("/sign-in");
        localStorage.removeItem("otp_token");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="bg-[#f5f5f5] text-gray-500">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h3 className="text-center text-[#2E2E2E] font-bold pt-10  pb-7  text-3xl">
          GoMeal<span className="text-orange-400 text-3xl ">.</span>
        </h3>
        <div className="max-w-2xl bg-[#f4f5f4] rounded-lg shadow-xl hover:shadow-2xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
              Check your mail for Otp
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handelSignIn}>
              <div>
                <label htmlFor="otp" className="block mb-2 text-sm font-medium">
                  Enter Your otp
                </label>
                <input
                  type="text"
                  name="text"
                  autoComplete="off"
                  id="otp"
                  onChange={handleInputChange}
                  className="bg-[#f5f5f5] border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  href={"/sign-up"}
                  className="font-medium text-primary-600  hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpForm;
