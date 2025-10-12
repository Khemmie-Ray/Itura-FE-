"use client";

import React, { useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileSidebar from "@/components/dashboard/MobileSidebar";
// import { useAuth } from "@/context/AuthContext";
// import { toast } from "sonner";
// import { useRouter, usePathname } from "next/navigation";
// import PageLoader from "@/components/loaders/PageLoader";
import ProtectedRoute from "@/components/dashboard/ProtectedRoute";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const { user, loading } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     router.push("/dashboard");
  //   }
  // }, [user, router]);

  // if (loading) return <PageLoader />;
  // if (!user) return null;

  // if (loading)
  //   return (
  //     <p>
  //       <PageLoader />
  //     </p>
    // );

  return (
    <ProtectedRoute>
    <div className="flex justify-between relative lg:flex-row md:flex-row flex-col">
      <Sidebar />
      <div className="lg:w-[80%] md:w-[80%] w-[100%] py-6 h-auto lg:h-[95vh] md:h-[95vh] lg:max-h-[982px] md:max-h-[960px] overflow-y-scroll relative flex flex-col px-6">
        <div className="mb-10">
          <MobileSidebar />
        </div>
        <div className="lg:w-[706px] md:w-[706px] w-[200px]  lg:h-[353px] md:h-[300px] h-[100px] bg-gradient-to-b from-gradientYellow to-gradientRed lg:blur-[315px] md:blur-[280px] blur-[50px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 z-10"></div>
        {children}
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Layout;
