"use client";
import Image from "next/image";
import React from "react";
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


const AppBar = ({children}:{
  children:React.ReactNode
}) => {
  const session = useSession()
  return (
    <div className="px-12 lg:px-24 py-3 flex items-center justify-between dark:bg-gray-700 border-b fixed w-full z-10 backdrop-blur-sm bg-white/50 dark:bg-black/50">
      <div>
        <Link href={"/home"}>
          <Image src={mdev} width={90} height={90} alt="logo" className="shadow-lg" />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {children}
        <div>
          <Popover>
            <PopoverTrigger>
              <UserAvatar img={session.data?.user?.image} name={session.data?.user?.name}/>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col space-y-2 py-3 px-2 my-3 mr-3 rounded-xl justify-center bg-white shadow-lg">
                <Link
                  href="/myprofile"
                  className="hover:bg-gray-100 text-center rounded-md px-2 py-1"
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
