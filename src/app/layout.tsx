import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Xino Awards - Plataforma de votaciones kktronicas",
  description:
    "Vota por tus favoritxs en The Xino Awards. Evento el 20 de diciembre. Celebra la excelencia en los kktronicos.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "The Xino Awards",
    description:
      "Vota por tus favoritxs en The Xino Awards. Evento el 20 de diciembre.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "The Xino Awards",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
        }/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "The Xino Awards",
        type: "image/webp",
      },
      {
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
        }/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "The Xino Awards",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Xino Awards",
    description:
      "Vota por tus favoritxs en The Xino Awards. Evento el 20 de diciembre.",
    images: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      }/images/og-image.webp`,
    ],
  },
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
