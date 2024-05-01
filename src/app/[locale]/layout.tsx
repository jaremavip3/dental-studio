import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dental Clinic",
  description: "Made with love from jaremavip",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html className="scroll-smooth" lang={locale}>
      <body>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
