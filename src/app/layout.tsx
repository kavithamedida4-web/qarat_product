import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QARAT - Interior Decorator & Material Supply | Lucknow",
  description: "Authorized wholesale supply of Saint-Gobain Gyproc, Ramco Hilux, USG Knauf, Sakarni POP, GI Channels, WPC Louvers, and UV Marble Sheets.",
  keywords: [
    "Gypsum board Lucknow",
    "Saint Gobain Gyproc wholesale",
    "WPC louvers supplier",
    "UV marble sheet Lucknow",
    "false ceiling material contractor",
    "GI channels 0.50mm",
    "Qarat interior decorator"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream-100 text-qarat-charcoal antialiased selection:bg-qarat-gold/20 selection:text-qarat-charcoal">
        {children}
      </body>
    </html>
  );
}

