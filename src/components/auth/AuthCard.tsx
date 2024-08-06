"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthCardProps {
    children: React.ReactNode,
    label: string,
    desc: string,
    backLinkMessage: string,
    backLinkUrl: string,
}

function AuthCard({label, desc, children, backLinkMessage, backLinkUrl}:AuthCardProps) {
  return (
    <Card className="min-w-[350px] w-1/4">
      <CardHeader>
        <CardTitle className="text-2xl">{label}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
         <Button size={"sm"} variant={"link"} className="w-full text-center" asChild><Link href={backLinkUrl}>{backLinkMessage}</Link></Button>
      </CardFooter>
    </Card>
  );
}

export default AuthCard;
