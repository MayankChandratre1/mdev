import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MDEV",
  description: "The ultimate blog website for obviously the developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>
        <Provider>
            {children}
        </Provider>
      </body>
    </html>
  );
}
