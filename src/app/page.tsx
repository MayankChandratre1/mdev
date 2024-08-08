"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div>
      <Button variant={"avatar"} onClick={()=> alert("Hi")}>
      <Avatar>
  <AvatarImage src="https://avatar.iran.liara.run/public/50" />
  
</Avatar></Button>

    </div>
  );
}
