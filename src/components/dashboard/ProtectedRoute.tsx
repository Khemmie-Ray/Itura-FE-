// src/components/ProtectedRoute.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import PageLoader from "@/components/loaders/PageLoader";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || loading) return;

    // If not logged in and trying to access dashboard, redirect to login
    if (!user && pathname.startsWith("/dashboard")) {
      router.replace("/login");
      return;
    }

    // If logged in and on auth pages, send to dashboard
    if (user && (pathname === "/login" || pathname === "/signup" || pathname === "/")) {
      router.replace("/dashboard");
    }
  }, [mounted, user, loading, pathname, router]);

  if (!mounted || loading) return <PageLoader />;

  // If not user and somehow here, return null to avoid rendering protected children
  if (!user && pathname.startsWith("/dashboard")) return null;

  return <>{children}</>;
}
