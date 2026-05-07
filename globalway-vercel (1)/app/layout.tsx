import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globalway-international.com"),
  title: {
    default: "GlobalWay International | Cabinet de Conseil en Stratégie et Transformation",
    template: "%s | GlobalWay International",
  },
  description:
    "GlobalWay International, cabinet de conseil expert en stratégie, transformation digitale, certification ISO, cybersécurité et coaching exécutif. Présent au Maroc, en France et en Tunisie depuis 2018.",
  keywords: [
    "cabinet de conseil Maroc",
    "conseil stratégique Casablanca",
    "transformation digitale Maroc",
    "certification ISO 9001 Maroc",
    "cybersécurité entreprise",
    "PMO excellence opérationnelle",
    "conseil IA automatisation",
    "coaching exécutif dirigeants",
    "GlobalWay International",
  ],
  authors: [{ name: "GlobalWay International" }],
  creator: "GlobalWay International",
  publisher: "GlobalWay International",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.globalway-international.com",
    siteName: "GlobalWay International",
    title: "GlobalWay International | Cabinet de Conseil en Stratégie et Transformation",
    description:
      "Cabinet de conseil expert en stratégie, transformation digitale, certification ISO et cybersécurité. Plus de 30 experts certifiés au service de votre transformation au Maroc, en France et en Tunisie.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "GlobalWay International — Cabinet de Conseil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalWay International | Cabinet de Conseil",
    description:
      "Conseil stratégique, transformation digitale, ISO, cybersécurité et coaching. Maroc, France, Tunisie.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.globalway-international.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
