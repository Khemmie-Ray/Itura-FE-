"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; 
import PageLoader from "../loaders/PageLoader";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth(); 
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    
    if (user && (pathname === "/login" || pathname === "/signup" || pathname === "/")) {
      router.replace("/dashboard");
    }
  }, [user, loading, pathname, router]);

  if (loading) return <p><PageLoader /></p>;
  if (!user) return null; 

  return <>{children}</>;
};

export default ProtectedRoute;