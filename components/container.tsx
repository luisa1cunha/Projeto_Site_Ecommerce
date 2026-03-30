import React from "react";
import { cn } from "@/lib/utils";

const Container = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <div className = {cn("max-w-5xl mx-auto p-4", className)}>
    {children}
    </div>
  );
};

export default Container; 