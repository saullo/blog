import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className="bg-gray-50">
      <body className={inter.className}>
        <div className="container mx-auto bg-white min-h-screen shadow-md">
          <div className="px-4 sm:px-16">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
