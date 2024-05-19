"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <SessionProvider>
        <Toaster position="top-center" />
        {children}
      </SessionProvider>
    </div>
  );
};

export default Provider;
