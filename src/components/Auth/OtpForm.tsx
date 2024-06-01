"use client";

import axios from "@/axios/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const OtpForm = () => {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtpValue(event.target.value);
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("otp_token");
    if (!otpValue) {
      toast.error("Please enter the OTP.");
      return;
    }

    if (!token) {
      toast.error("Token is missing. Please try again.");
      return;
    }

    const parsedOtpValue = parseInt(otpValue, 10);

    if (!Number.isInteger(parsedOtpValue)) {
      toast.error("Invalid OTP value. Please enter a valid integer.");
      return;
    }

    await handleOtpSubmission(parsedOtpValue, token);
  };

  const handleOtpSubmission = async (otpValue: number, token: string) => {
    console.log(typeof(otpValue))
    const data = {
      token,
      otp: otpValue,
    };

    try {
      const res = await axios.post("/verify-otp", data);
      if (res.status === 200) {
        toast.success("Account created successfully");
        localStorage.removeItem("otp_token");
      }
    } catch (error: any) {
      console.error("Error verifying OTP:", error);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        toast.error(
          // error.response.data.message ||
            "Failed to verify OTP. Please try again."
        );
      } else if (error.request) {
        console.error("Request data:", error.request);
        toast.error("No response received. Please try again.");
      } else {
        console.error("Error message:", error.message);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="bg-[#f5f5f5] text-gray-500">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h3 className="text-center text-[#2E2E2E] font-bold pt-10 pb-7 text-3xl">
          GoMeal<span className="text-orange-400 text-3xl">.</span>
        </h3>
        <div className="max-w-2xl bg-[#f4f5f4] rounded-lg shadow-xl hover:shadow-2xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#F8B602] md:text-2xl">
              Check your mail for OTP
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
              <div>
                <label htmlFor="otp" className="block mb-2 text-sm font-medium">
                  Enter Your OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  autoComplete="off"
                  id="otp"
                  value={otpValue}
                  onChange={handleInputChange}
                  className="bg-[#f5f5f5] border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#F8B602] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  href={"/sign-up"}
                  className="font-medium text-[#F8B602]-600 hover:underline"
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
