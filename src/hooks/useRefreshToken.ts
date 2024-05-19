"use client";
import axios from "@/axios/axios";
import { useSession } from "next-auth/react";

const useRefreshToken = () => {
  const { data: session, update } = useSession();
  

  const refresh = async () => {
    console.log("this is session",session)
    const refreshToken = session?.user.token;
    console.log(refreshToken, "refreshToken");

    if(refreshToken){
      try {
        const res = await axios.post("/api/auth/refresh", {
          token: refreshToken
        },{
          headers: {
            "Authorization": `Bearer ${refreshToken}`,
            withCredentials: true
          }
        })
        console.log(res.data.data.token, "res.data.data.token");
        // if(session){
        //   session.user.token = res.data.data.token;
        //   console.log(res.data.data.token, "res.data.data.token");
          
        // }
        await update({
          ...session,
          user: {
            ...session.user,
            token: res.data.data.token
          }
        }); 
        
      } catch (error) {
        console.log("error", error);
      }
    }
    
    }
  return refresh;

}

export default useRefreshToken;
