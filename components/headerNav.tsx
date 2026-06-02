"use client";
import React from "react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { usuarioEhAdmin } from "@/lib/userSession";

const HeaderNav = () => {
  const pathname = usePathname();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setAdmin(usuarioEhAdmin());
  }, []);

  const links = useMemo(() => {
    if (!admin) return headerData;
    return [...headerData, { title: "Admin", href: "/admin" }];
  }, [admin]);

  return (
    <div className="hidden h-11 w-fit max-w-full items-center justify-center gap-2 whitespace-nowrap px-2 text-sm font-semibold md:inline-flex md:justify-self-center">
      {links?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`relative rounded-full px-3 py-1.5 capitalize hoverEffect ${
            pathname === item?.href
              ? "bg-ciano_escuro text-white dark:bg-ciano_escuro"
              : "text-slate-700 hover:bg-slate-100 hover:text-ciano_escuro dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-ciano"
          }`}
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderNav;