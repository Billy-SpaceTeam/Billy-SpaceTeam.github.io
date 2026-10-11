import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { PageLoader } from "@/components/PageLoader";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Les balises SEO pour Google
export const metadata: Metadata = {
  title: "Billy | Nano-satellite CubeSat de Billy Space Team",
  description: "Billy est un nano-satellite CubeSat innovant développé par l'équipe Billy Space Team de l'IUT d'Annecy. Découvrez notre projet d'ingénierie spatiale.",
  keywords: ["Billy", "Satellite", "CubeSat", "Space Team", "IUT Annecy", "Système embarqué", "Aérospatiale"],
  authors: [{ name: "Billy Space Team" }],
  creator: "Billy Space Team",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://billy-spaceTeam.github.io",
    title: "Billy | Nano-satellite CubeSat",
    description: "Nano-satellite CubeSat développé par l'équipe Billy Space Team",
    siteName: "Billy Space Team",
  },
  verification: {
    google: "CcibHALtcBpTLM5VpbHHn4KyQexIEnQzrXj7ujuK-pQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html lang= "fr" className = {`${font.className} scroll-smooth`
}>
      <body className="antialiased bg-[#FBFBFD] text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative">
        {/* Le loader gère lui-même son "use client" */}
        <PageLoader />
        
        {children}

        {/* Le dock flottant s'affiche sur chaque page */}
      </body>
    </html>
  );
}