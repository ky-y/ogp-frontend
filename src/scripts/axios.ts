import axiosBase from "axios";

export default axiosBase.create({
    baseURL: process.env.NODE_PUBLIC_API_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    responseType: "json",
    withCredentials: true
});