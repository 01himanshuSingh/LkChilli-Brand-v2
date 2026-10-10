import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { sans, serif } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lkchilli.com"),
  title: "LK Chilli | Just Drip It",
  description:
    "A numbered journey of authentic, oil-infused chillies — from gentle Ancho to legendary Naga Ghost. Precision heat for flavour-first cooking.",
  openGraph: {
    title: "LK Chilli | Just Drip It",
    description:
      "A numbered journey of authentic, oil-infused chillies — from gentle Ancho to legendary Naga Ghost.",
    type: "website",
    locale: "en_GB",
    siteName: "LK Chilli",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "LK Chilli premium chilli oils",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
