import PencilButton from "@/components/blogs/PencilButton";
import AppBar from "@/components/layout/AppBar";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col" >
        <AppBar>
            <Button asChild variant={"ghost"}><Link href="/home"><HomeIcon /></Link></Button>
        </AppBar>
        <div className='h-screen grid dark:bg-gray-950 mt-16 p-3'>{children}</div>
    </div>
  );
}
