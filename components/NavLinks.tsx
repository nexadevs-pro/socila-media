"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Card, CardContent } from "./ui/card";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex mt-5">
      <Card className="w-[20rem] mx-auto pt-7 rounded-2xl">
        <CardContent >
          <ul className="sidebar-nav_elements">
            {navLinks.map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-primary text-white" : "text-gray-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </nav>
  );
};

export default NavLinks;
