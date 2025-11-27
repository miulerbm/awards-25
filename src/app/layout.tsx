import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plataforma de votaciones kktronicas",
  description: "Vota por tus favoritxs :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-awards-gradient`}>
        <AuthProvider>
          <Navbar />
          <ScrollToTop />
          <main className="pt-16">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
