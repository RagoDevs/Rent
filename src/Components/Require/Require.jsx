"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

export function RequireAuth({ children }) {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    
    if (!auth.isloading && !auth.token) {
      router.replace("/login");
    }
  }, [auth.token, auth.isloading, router]);

  if (auth.isloading) {
    return
  }

  if (!auth.token) {
    return null;
  }

  return children;
}