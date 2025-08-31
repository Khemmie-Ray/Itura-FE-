"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { StarknetContext } from "@/contexts/Usercontext";

// interface SkeletonLoaderProps {
//   className?: string;
// }

const NotAuthenticated = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const { address, status } = useContext(StarknetContext);

  useEffect(() => {
    if (address && status === "connected" && redirectTo) {
      router.push(redirectTo);
    }
  }, [address, status, redirectTo, router]);

  return (
    <div
      className= "animate-pulse space-y-4 p-6 rounded-lg bg-muted w-[80%] mx-auto my-4"
    >
      <div className="animate-pulse space-y-4 p-6 rounded-lg bg-muted mb-4">
      <div className="h-8 w-24 bg-gray-300 rounded mt-4" />
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
      </div>
      <div className="animate-pulse space-y-4 p-6 rounded-lg bg-muted mb-4">
      <div className="h-8 w-24 bg-gray-300 rounded mt-4" />
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
      </div>
      <div className="animate-pulse space-y-4 p-6 rounded-lg bg-muted mb-4">
      <div className="h-8 w-24 bg-gray-300 rounded mt-4" />
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
      </div>
      <div className="animate-pulse space-y-4 p-6 rounded-lg bg-muted mb-4">
      <div className="h-8 w-24 bg-gray-300 rounded mt-4" />
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default NotAuthenticated;
