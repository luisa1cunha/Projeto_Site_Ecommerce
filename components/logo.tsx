import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className}: { className?: string }) => {
  return (
        <Link href={"/"}>
          <h2 className={cn("bg-gradient-to-r from-[rgb(11,19,30)] to-[rgb(41,105,98)] bg-clip-text text-2xl font-black uppercase tracking-[0.08em] text-transparent hover:from-[rgb(41,105,98)] hover:to-[rgb(250,121,89)] hoverEffect dark:from-slate-100 dark:to-cyan-300", className)}>
            <span>GR Imports</span>
          </h2>
    </Link>
  );
};

export default Logo; 

