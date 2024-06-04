'use client'
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";
import { Search } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Navbar = () => {
 const { user } = useUser()
 const userButtonAppearance = {
  elements: {
    userButtonAvatarBox: "w-10 h-10", // Custom width and height
    userButtonPopoverCard: "bg-blue-100", // Custom background for the popover card
    userButtonPopoverActionButton: "text-red-600", // Custom text color for action buttons
  },
};
  return (
    <div className="relative w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-5 border-b">
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold ">
            MY<span className="text-primary">PETS</span>
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
        <Input placeholder="search" />
      </div>
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          <>
            {/* <div className="flex gap-x-5">
            <Button size='lg'>Create</Button>
            <UserNav
              email={user.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
            </div> */}

            <UserButton appearance={userButtonAppearance} />
          </>
        ) : (
          <div className="flex items-center gap-x-2">
            <Button asChild>
              <Link href={'/sign-in'}>
                Login
              </Link>
            </Button>
            <Button variant="secondary" asChild>
            <Link href={'/sign-up'}>
                Login
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
