"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const user = useSession()
  if(user.status == "authenticated"){
    router.push("/home")
  }
  return (
    <div>
      
    </div>
  );
}
