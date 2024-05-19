"use client";

import axios from "@/axios/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    name: "",
  });

  const router = useRouter();

  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = axios.post("/create-account", formData);

      if ((await res).status == 201) {
        const token = (await res).data.data.refreshToken;
        localStorage.setItem("otp_token", token);
        router.push("/verify-otp");
        toast.success("Verify your Mail");

      }
    } catch (error: any) {
      toast.error(error.code);
    }
  };

  return (
    <section className="bg-[#f5f5f5] text-gray-500">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto ">
        <h3 className="text-center text-[#2E2E2E] font-bold pt-10  pb-7  text-3xl">
          GoMeal<span className="text-orange-400 text-3xl ">.</span>
        </h3>
        <div className="max-w-2xl bg-[#f4f5f4] rounded-lg shadow-xl hover:shadow-2xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#F8B602] md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-4">
                <div>
                  {" "}
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className="bg-[#f5f5f5] border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="off"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  className="bg-[#f5f5f5] border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#F8B602] hover:bg-[#F8B602]-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  href={"/sign-in"}
                  className="font-medium text-[#F8B602]-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
