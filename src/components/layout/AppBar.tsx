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
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
const AppBar = () => {
  return (
    <div className="px-12 lg:px-24 py-3 flex items-center justify-between dark:bg-gray-700 border-b fixed w-full z-10 backdrop-blur-sm bg-white/50 dark:bg-black/50">
      <div>
        <Link href={"/home"}>
          <Image src={mdev} width={90} height={90} alt="logo" className="shadow-lg" />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Button
          variant={"outline"}
          className="border-blue-500 text-blue-500 hover:bg-blue-600/20 hover:text-blue-900/70 px-3 shadow-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </Button>
        <div>
          <Popover>
            <PopoverTrigger>
              <Avatar>
                {/* <AvatarImage className="w-10 h-10" src="https://avatar.iran.liara.run/public/50" /> */}
                <AvatarFallback className="bg-gray-900 dark:bg-gray-300 dark:text-gray-700 px-3 py-2 text-white rounded-full shadow-hover">
                  U
                </AvatarFallback>
              </Avatar>
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
