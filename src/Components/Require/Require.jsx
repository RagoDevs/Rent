
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider"; 

export  function RequireAuth({ children }) {
  const auth = useAuth();
  const router = useRouter();
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (!auth.token) {
      router.push("/Login"); 
    } else {
      setLoading(false);
    }
  }, [auth.token, router]);

  if (loading || !auth.token) return null; 

  return children;
}
