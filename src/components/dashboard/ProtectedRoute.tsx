"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; 
import PageLoader from "../loaders/PageLoader";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    } 
  }, [loading, user, router]);

  if (loading) return <p><PageLoader /></p>;
  if (!user) return null; 

  return <>{children}</>;
};

export default ProtectedRoute;