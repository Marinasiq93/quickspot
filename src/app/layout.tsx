import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quickspot — Curadoria e Produção de Locação",
  description: "Parceira premium de locação para produções audiovisuais complexas. Curadoria, prospecção ativa, operação e acompanhamento do briefing ao set.",
  openGraph: {
    title: "Quickspot — Curadoria e Produção de Locação",
    description: "Da curadoria à operação, a Quickspot conduz locações para produções que exigem mais.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
