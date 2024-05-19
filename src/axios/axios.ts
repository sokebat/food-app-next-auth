import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

// const BASE_URL = "http://192.168.18.198:8000";


export default  axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})


export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});