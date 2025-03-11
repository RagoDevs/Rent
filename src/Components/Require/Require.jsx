"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export function RequireAuth({ children }) {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.token ) {
    router.replace("/Login");
  }


  return children;
}
