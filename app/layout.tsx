import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Noto_Sans } from "next/font/google";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";

const DmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600"], // Specify the weights you need
});
const Noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "iHomes",
  description: "Building Your  Home in Ghana While You Live Abroad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PorscheDesignSystemProvider>
        <body className={Noto.className}>{children}</body>
      </PorscheDesignSystemProvider>
    </html>
  );
}
