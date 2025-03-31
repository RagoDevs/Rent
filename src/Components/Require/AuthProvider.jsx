"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { submitRequest } from "../constant";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('rentSiteToken');
    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false);
  }, []);

  const signin = async (email, password) => {
    try {
      setErr("");
      setIsLoading(true);
      
      const res = await submitRequest('/v1/login', 'POST', { email, password });
      
      if (res?.token && res?.expiry) {
        setToken(res.token);
        localStorage.setItem("rentSiteToken", res.token);
        localStorage.setItem('rentSiteExpiry', res.expiry);
        router.push("/dashboard");
        return true;
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      setErr(error.message || "Login failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signout = () => {
    setToken(null);
    localStorage.removeItem("rentSiteToken");
    localStorage.removeItem('rentSiteExpiry');
    router.replace("/login");
  };

  const value = { token, signin, signout, err, isloading, submitRequest };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}