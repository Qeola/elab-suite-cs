import React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import NextTopLoader from 'nextjs-toploader';
import { CustomizerContextProvider } from "@/app/context/CustomizerContext";
import "../utils/i18n";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elab Suite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <ThemeModeScript />
      </head>
      <body className={`${manrope.className}`}>
        <Flowbite theme={{ theme: customTheme }}>
        <NextTopLoader color="var(--color-primary)" />
          <CustomizerContextProvider>{children}</CustomizerContextProvider>
        </Flowbite>
      </body>
    </html>
  );
}
