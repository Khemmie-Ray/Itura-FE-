// src/components/ProtectedRoute.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import PageLoader from "@/components/loaders/PageLoader";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && pathname.startsWith("/dashboard")) {
      router.replace("/login");
      return;
    }

    if (user && (pathname === "/login" || pathname === "/signup" || pathname === "/")) {
      router.replace("/dashboard");
    }
  }, [user, loading, pathname, router]);

  if (loading) return <PageLoader />;

  if (!user && pathname.startsWith("/dashboard")) return null;

  return <>{children}</>;
}
