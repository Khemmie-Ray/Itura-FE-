import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";
import type { Metadata } from "next";

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
      <body className="font-inter max-w-[1550px] mx-auto w-[100%] bg-[#030A04] text-white">
        <Providers>
          {children}
          <Toaster richColors={true} position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
