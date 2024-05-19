"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //  console.log(formData)
  };

  const handelSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: "/",
      });
      console.log(res);
      // console.log(res?.status);
      if (res?.status === 200) {
        router.push("/dashboard");
        console.log("Successfully Loggedin");
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("this is error",error);
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#F8B602] md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handelSignIn}>
              <div>
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
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#f5f5f5] border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-[#f5f5f5] border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="••••••••"
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
                  className="font-medium text-[#F8B602]-600  hover:underline"
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

export default Login;
