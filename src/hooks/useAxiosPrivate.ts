"use client";
import { axiosPrivate } from "@/axios/axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const { data: session } = useSession();
  const refresh = useRefreshToken();
  // console.log(session?.user.token);
  

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        console.log(config)
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${session?.user.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const resposeInterceptor = axiosPrivate.interceptors.response.use(
      (respose) => respose,
      async (error) => {
        const prevRequest = error?.config;
        if (error.response?.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newRefreshToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newRefreshToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(resposeInterceptor);
    };
  }, [session, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;
