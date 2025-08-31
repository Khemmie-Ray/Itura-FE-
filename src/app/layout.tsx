import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
const StarknetContextProvider = dynamic(
  () =>
    import("@/contexts/Usercontext").then((mod) => mod.StarknetContextProvider),
  { ssr: false }
);
const StarknetProvider = dynamic(
  () =>
    import("@/components/StarknetProvider").then((mod) => mod.StarknetProvider),
  { ssr: false }
);

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
        <StarknetProvider>
          <StarknetContextProvider>
            {children}
            <Toaster richColors={true} position="top-right" />
          </StarknetContextProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
