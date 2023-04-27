"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuItemProps {
  label: string;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to }) => {
  const router = useRouter();

  return (
    <Link
      href={to}
      className={`cursor-pointer hover:text-orange-400 transition ${
        router.pathname === to
          ? "text-orange-500 font-medium"
          : "text-slate-700"
      } `}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
