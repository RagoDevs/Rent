"use client";

import { createContext, useContext, useState} from "react";
import { useRouter } from "next/navigation";
import { base_url } from "../constant";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('rentSiteToken') || '' );
  const [err, setErr] = useState("");
  const router = useRouter();

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
          localStorage.setItem("rentSiteToken", token);
          localStorage.setItem('rentSiteExpiry', expire)
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
    setToken(null);
    localStorage.removeItem("rentSiteToken");
    localStorage.removeItem('rentSiteExpiry');
    router.replace("/Login");
  };

  const value = { token, signin, signout, err };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
