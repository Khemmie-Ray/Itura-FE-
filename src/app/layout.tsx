"use client"

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";
import { AegisProvider } from '@cavos/aegis';

// export const metadata: Metadata = {
//   title: "Itura",
//   description: "Your Web3 Art Studio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter max-w-[1550px] mx-auto w-[100%]">
      <AegisProvider
      config={{
        network: 'SN_SEPOLIA',
        appName: 'Itura',
        appId: process.env.NEXT_PUBLIC_CAVOS_APP_ID!
      }}
    >
        <AuthProvider>
          {children}
          <Toaster richColors={true} position="top-right" />
        </AuthProvider>
        </AegisProvider>
      </body>
    </html>
  );
}
