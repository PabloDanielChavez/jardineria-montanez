import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import "@/styles/main.scss";

import Header from "@/components/sections/Header";
import Script from 'next/script';
const Footer = dynamic(() => import('@/components/sections/Footer'));

export const metadata: Metadata = {
  metadataBase: new URL('https://jardineriamontanez.netlify.app'),
  title: {
    default: "Jardinería en Buenos Aires | Montañez",
    template: "%s | Jardinería Montañez"
  },
  description: "Corte de pasto, poda, limpieza de terrenos, desmalezado y mantenimiento de jardines. Pedí presupuesto por WhatsApp enviando fotos del espacio.",

  authors: [{ name: "Pablo Daniel Chavez" }],
  keywords: [
    "jardinería",
    "jardinero",
    "jardinero a domicilio",
    "jardinería en Cañuelas",
    "corte de césped",
    "poda de árboles",
    "limpieza de terrenos",
    "desmalezado",
    "mantenimiento de jardines",
    "recuperación de espacios verdes",
    "presupuesto de jardinería"
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '4yIUAbvNIcrI3UhHJW9vszJTkYpBcBoyjlRtCzn7mUc', 
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinería en Buenos Aires | Montañez",
    description: "Corte de pasto, poda, limpieza y mantenimiento de jardines. Pedí presupuesto por WhatsApp.",
    images: [
      {
        url: "/img/logo_nombre.jpg",
        width: 1200,
        height: 630,
        alt: "Montañez Jardinería y Mantenimiento",
      }
    ], 
  },
  openGraph: {
    title: "Jardinería en Buenos Aires | Montañez",
    description: "Corte de pasto, poda, limpieza de terrenos, desmalezado y mantenimiento de jardines. Pedí presupuesto por WhatsApp.",
    url: "https://jardineriamontanez.netlify.app",
    siteName: "Montañez Jardinería",
    images: [
      {
        url: "/img/logo_nombre.jpg",
        width: 1200,
        height: 630,
        alt: "Montañez Jardinería y Mantenimiento",
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  
  icons: {
    icon: [
      {
        url: "/img/favicon.ico",
      },
      {
        url: "/img/favicon-16x16.webp",
        sizes: "16x16",
        type: "image/webp",
      },
      {
        url: "/img/favicon-32x32.webp",
        sizes: "32x32",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "/img/apple-touch-icon.webp",
        sizes: "180x180",
      },
    ],
  },

  manifest: "/img/site.webmanifest",
  alternates: {
  canonical: '/',
},
};

export const viewport = {
  themeColor: '#f2efe9',
};

export default function RootLayout({children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="es-AR">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-PQCJ7Q409E`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PQCJ7Q409E');
          `}
        </Script>
      </head>
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
