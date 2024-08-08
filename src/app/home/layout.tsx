import AppBar from "@/components/layout/AppBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
        <AppBar />
        <div className='h-screen grid dark:bg-gray-950 mt-16 p-3'>{children}</div>
    </div>
  );
}
