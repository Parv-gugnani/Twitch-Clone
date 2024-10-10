"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <Image
        src="/my-honest-reaction-my.gif"
        alt="My Honest Reaction GIF"
        width={200}
        height={50}
      />
      <p>Something went wrong.</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
