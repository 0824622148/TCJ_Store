import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Cloud Junction — JHB South Cannabis Delivery",
  description: "Johannesburg South's premium cannabis delivery. Fast, discreet, and trusted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#060010] antialiased">{children}</body>
    </html>
  );
}
