import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import "@/styles/main.scss";

import Header from "@/components/sections/Header";
const Footer = dynamic(() => import('@/components/sections/Footer'));

export const metadata: Metadata = {
  title: "Jardineria Montañez",
  description: "Jardineria Montañez",
};

export const viewport = {
  themeColor: '#FFF',
};

export default function RootLayout({children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body >
        <header>
          <Header />
        </header>
        <main style={{ minHeight: "100vh" }}>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
