"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavItem {
  name: string;
  path?: string;     
  action?: () => void; 
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const items: NavItem[] = [
    { name: "Dashboard", path: "/" },
    { name: "Companies", path: "/companies" },
    { name: "User Management", path: "/resume" },
    { name: "Client Complains", path: "/complains" },
    { name: "Notice", path: "/notice" },
    { name: "Support", path: "/support" },
  ];

  return (
    <aside className="w-64 bg-white p-6 shadow-md h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h2>
      <ul className="space-y-3">
        {items.map((item) => {

          if (item.action) {
            return (
              <li key={item.name}>
                <button
                  onClick={item.action}
                  className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-semibold"
                >
                  {item.name}
                </button>
              </li>
            );
          }
          return (
            <li key={item.name}>
              <Link
                href={item.path!}
                className={`block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 ${
                  pathname === item.path ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
