import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import "@/styles/main.scss";

import Header from "@/components/sections/Header";
import Script from 'next/script';
const Footer = dynamic(() => import('@/components/sections/Footer'));

export const metadata: Metadata = {
  metadataBase: new URL('https://jardineriamontanez.netlify.app'),
  title: {
    default: "Jardinería y Mantenimiento | Montañez",
    template: "%s | Jardineria y Mantenimiento "
  },
  description: "Servicios de jardinería y mantenimiento. Corte de pasto, poda de árboles, limpieza de terrenos, diseño y mantenimiento de espacios verdes. Solicite presupuesto.",

  authors: [{ name: "Pablo Daniel Chavez" }],
  keywords: [
    "jardinería",
    "jardinero",
    "mantenimiento de jardines",
    "corte de césped",
    "corte de pasto",
    "poda de árboles",
    "limpieza de terrenos",
    "desmalezado",
    "paisajismo",
    "espacios verdes",
    "poda de arbustos",
    "cuidado de jardines",
    "cuidado de plantas",
    "mantenimiento de espacios verdes",
    "servicio de jardinería",
    "jardinería profesional",
    "jardinero a domicilio",
    "presupuesto de jardinería",
    "empresa de jardinería",
    "servicios de jardinería",
    "corte de césped profesional"
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '4yIUAbvNIcrI3UhHJW9vszJTkYpBcBoyjlRtCzn7mUc', /////------------------------------------------------>
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinería y Mantenimiento | Montañez",
    description: "Servicios de jardinería y mantenimiento. Corte de pasto, poda de árboles, limpieza de terrenos, diseño y mantenimiento de espacios verdes. Solicite presupuesto.",
    images: [
      {
        url: "/img/logo_nombre.webp",
        width: 1200,
        height: 630,
        alt: "Montañez Jardinería y Mantenimiento",
      }
    ],  /////------------------------------------------------>
  },
  openGraph: {
    title: "Jardinería y Mantenimiento | Montañez",
    description: "Servicios de jardinería y mantenimiento. Corte de pasto, poda de árboles, limpieza de terrenos, diseño y mantenimiento de espacios verdes. Solicite presupuesto.",
    url: "https://jardineriamontanez.netlify.app",
    siteName: "Montañez Jardinería",
    images: [
      {
        url: "/img/logo_nombre.webp",
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
          src="https://googletagmanager.com" 
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
