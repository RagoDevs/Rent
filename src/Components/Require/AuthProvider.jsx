"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { base_url } from "../constant";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("siteToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const signin = async (email, password) => {

    try {

      const response = await fetch(`${base_url}/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await response.json();

      if (response.status === 201) {
        const  token  = res.token;
        const expire  = res.expiry

        if (token) {
          setToken(token);
          localStorage.setItem("siteToken", token);
          localStorage.setItem('siteExpiry', expire)
          router.push("/dashboard");
        }
      } else {
        setErr(res.error || "Login failed");
        throw new Error('error')
      }
    } catch (error) {
      setErr("An error occurred");
      throw error;
    }
  };

  const signout = () => {
    setToken("");
    localStorage.removeItem("siteToken");
    localStorage.removeItem('siteExpiry');
    router.push("/Login");
  };

  const value = { token, signin, signout, err };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
