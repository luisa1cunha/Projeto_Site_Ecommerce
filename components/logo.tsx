import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className}: { className?: string }) => {
  return (
        <Link href={"/"}>
          <h2 className={cn("text-2xl text-black font-black tracking-wider uppercase hover:text-ciano hoverEffect hover:cursor-pointer font-sans hover:cursor-pointer", className)}>
            <span>GR Imports</span>
          </h2>
    </Link>
  );
};

export default Logo; 

