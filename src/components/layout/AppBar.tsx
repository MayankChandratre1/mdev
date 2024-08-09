"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mdev from "../../../public/mdev.svg";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import UserAvatar from "../UserAvatar";
import { useTheme } from "next-themes";


const AppBar = ({children}:{
  children:React.ReactNode
}) => {
  const session = useSession()
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-2 sm:px-12 lg:px-24 py-3 flex items-center justify-between border-b fixed w-full z-10 backdrop-blur-sm bg-white/50 dark:bg-black/50 ease-in-transition">
      <div className="scale-75 sm:scale-100 ">
        <Link href={"/home"}>
          <Image src={mdev} width={90} height={90} alt="logo" className="shadow-lg hover:shadow-xl dark:shadow-emerald-300/10 " />
        </Link>
      </div>
      <div className="flex gap-4 items-center scale-75 sm:scale-100">
        {children}
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3">
        {theme === 'dark' ? '☀️' : '🌙' }
        </Button>
        <div>
          <Popover>
            <PopoverTrigger>
              <UserAvatar img={session.data?.user?.image} name={session.data?.user?.name}/>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col space-y-2 py-3 px-2 my-3 mr-3 rounded-xl justify-center bg-white shadow-lg dark:bg-gray-800">
                <Link
                  href="/myprofile"
                  className="hover:bg-gray-100 dark:text-gray-600 text-center rounded-md px-2 py-1"
                >
                  My Profile
                </Link>

                <Button
                  variant={"destructive"}
                  onClick={async () => {
                    await signOut();
                  }}
                >
                  Sign Out
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
