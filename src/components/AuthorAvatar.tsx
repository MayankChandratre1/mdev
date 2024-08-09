import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const AuthorAvatar = async ({img, name}:{
    img?:string | null,
    name?:string | null
}) => {
  return (
    <Avatar>
      {img && <AvatarImage
        className="w-10 h-10"
        src={img}
      />}
      <AvatarFallback className="bg-gray-900 dark:bg-gray-300 dark:text-gray-700 px-3 py-2 text-white rounded-full shadow-hover">
        {name?.substring(0,1)}
      </AvatarFallback>
    </Avatar>
  );
};

export default AuthorAvatar;
