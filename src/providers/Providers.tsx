"use client";

import { AegisProvider } from "@cavos/aegis";
import { AuthProvider } from "@/context/AuthContext";
import QueryProvider from "@/providers/QueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <AegisProvider
        config={{
          network: "SN_SEPOLIA",
          appName: "Itura",
          appId: process.env.NEXT_PUBLIC_CAVOS_APP_ID!,
        }}
      >
        <AuthProvider>{children}</AuthProvider>
      </AegisProvider>
    </QueryProvider>
  );
}
