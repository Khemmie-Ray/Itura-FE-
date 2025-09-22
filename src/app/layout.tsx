import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Itura",
  description: "Your Web3 Art Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter max-w-[1550px] mx-auto w-[100%]">
        <AuthProvider>
          {children}
          <Toaster richColors={true} position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
