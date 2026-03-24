"use client";
import React from "react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 justify-center capitalize text-sm font-semibold text-light whitespace-nowrap">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-ciano hoverEffect relative group font-family-poppins visited:text-light active:text-light ${
            pathname === item?.href ? "text-ciano" : "text-black"}`}
        >
          {item?.title}
          <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-ciano group-hover:w-1/2 hoverEffect group-hover:left-0 ${
            pathname === item?.href && "w-1/2"}`}></span>
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-ciano group-hover:w-1/2 hoverEffect group-hover:right-0 ${
            pathname === item?.href && "w-1/2"}`}></span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderNav;