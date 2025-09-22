"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; 

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth(); 
  console.log(user, loading)
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/dashboard/auth/not-authenticated");
    }
  }, [loading, user, router]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null; 

  return <>{children}</>;
};

export default ProtectedRoute;