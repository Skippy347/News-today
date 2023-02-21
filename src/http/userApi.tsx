import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (fullName: string, email: string, password: string) => {
    const { data } = await $host.post("auth/registration", { fullName, email, password });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
};

export const login = async (email: string, password: string) => {
    const { data } = await $host.post("auth/login", { email, password });
    localStorage.setItem("token", data.token);

    return jwt_decode(data.token);
};

export const checkAuth = async () => {
    try {
        const { data } = await $authHost.get("auth/me");
        return data;
    } catch (e: any) {
        if (e.response.status === 401) {
            localStorage.removeItem("token");
        }
        console.warn(e.response.data);
        console.warn("status code " + e.response.status);
    }
};

export const getAllUsers = async () => {
    try {
        const { data } = await $host.get("users");
        return data;
    } catch (e: any) {
        console.warn(e.response.data);
        console.warn("status code " + e.response.status);
    }
};
