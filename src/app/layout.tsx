import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/Web3";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimism",
  description: "Metamask Wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-white min-h-screen flex flex-col">
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
