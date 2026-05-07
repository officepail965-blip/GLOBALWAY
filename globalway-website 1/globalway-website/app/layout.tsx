import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobalWay International — Cabinet de Conseil en Stratégie & Transformation",
  description:
    "Cabinet de conseil en stratégie, accompagnement opérationnel et optimisation des performances. Présent au Maroc, en France et en Tunisie. Depuis 2018.",
  keywords: [
    "conseil stratégique",
    "transformation digitale",
    "ISO 9001",
    "cybersécurité",
    "PMO",
    "cabinet de conseil Maroc",
    "GlobalWay International",
  ],
  openGraph: {
    title: "GlobalWay International — Cabinet de Conseil",
    description:
      "Accélérez la performance de votre organisation avec des experts qui transforment vos enjeux en opportunités de croissance.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
