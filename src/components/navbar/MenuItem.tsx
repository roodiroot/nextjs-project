"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuItemProps {
  label: string;
  to: string;
  mobil?: boolean;
  close?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to, mobil, close }) => {
  const router = useRouter();

  return (
    <div
      onClick={close}
      className={`
          py-1
          px-1
          ${mobil && "w-full flex py-2 border-b"}
          ${router.pathname === to && "border-b-2 border-orange-500"}
    `}
    >
      <Link
        href={to}
        className={`
          ${mobil && "text-xl w-full py-3  hover:bg-slate-100"}
          text-lg
          cursor-pointer 
          hover:text-orange-500 
          transition 
          whitespace-nowrap 
          text-slate-900
          font-medium`}
      >
        {label}
      </Link>
    </div>
  );
};

export default MenuItem;
