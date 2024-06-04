"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import NavLinks from "./NavLinks";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";

const LeftSidebar = () => {
  const { user } = useUser();
  return (
    <section className="h-screen xl:w-[400px] flex flex-col w-[320px]">
      <div className="mt-10">
        <Card className="w-[20rem] mx-auto">
          <CardContent className="flex flex-row items-center px-8 py-4 gap-x-5">
            <Avatar className="h-12 w-12 ">
              <AvatarImage src={user?.imageUrl as string} alt="User Image" />
              <AvatarFallback>{user?.firstName}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-y-1">
              <h1 className="text-md font-medium text-gray-700">
                {user?.fullName}
              </h1>
              <h1 className="lowercase text-sm text-muted-foreground">
                @{user?.firstName}
                {user?.lastName}
              </h1>
            </div>
          </CardContent>
        </Card>

        <NavLinks />
        <div className="flex flex-1 justify-center  mt-5">
          <Button size="lg" className="px-32 ">
            Create
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
