import React from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import NextTopLoader from "nextjs-toploader";
import { CustomizerContextProvider } from "@/app/context/CustomizerContext";
import "../utils/i18n";
import { Providers } from "@/utils/stores/providers";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

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
      <body className={`${lato.className}`}>
        <Flowbite theme={{ theme: customTheme }}>
          <NextTopLoader color="var(--color-primary)" />
          <Providers>
            <CustomizerContextProvider>{children}</CustomizerContextProvider>
          </Providers>
        </Flowbite>
      </body>
    </html>
  );
}
