import React from "react";
import Header from "./header";
import { cn } from "@/lib/utils";

const Container = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <div className = {cn("max-w-screen-lg mx-auto p-4", className)}>
    {children}
    </div>
  );
};

export default Container; 