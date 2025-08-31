"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StarknetContext } from "@/contexts/Usercontext";
import { toast } from "sonner";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { address, status } = useContext(StarknetContext);
  const router = useRouter();
  const [checking, setChecking] = useState(true); 
  console.log(status, address)

  useEffect(() => {
    if (status === "connected" && address) {
      setChecking(false); 
    } else if (status === "disconnected" || !address) {
      toast.error("Connect your wallet to access this page.", {
        position: "top-center",
      });
      router.replace("/dashboard/auth/not-authenticated");
    }
  }, [status, address, router]);

  if (checking) return null; 

  return <>{children}</>;
};

export default ProtectedRoute;