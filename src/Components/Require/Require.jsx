"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export function RequireAuth({ children }) {
  const auth = useAuth();
  const router = useRouter();
  const [loading, setLoading ] = useState(true);


  useEffect(() => {
    if (auth.token === null) return
    if (!auth.token) {
      router.replace("/Login");
    } else {
      setLoading(false)
    }
  }, [auth.token, router]);

  if (loading) return <div>Loading....</div>
  

  return children;
}
