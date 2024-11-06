"use client";
import Cookies from "js-cookie";

export default class Token {
    setToken(token: string) {
        Cookies.set("token", token);
    }

    getToken() {
        return Cookies.get("token");
    }

    removeToken() {
        Cookies.remove("token");
    }
}
