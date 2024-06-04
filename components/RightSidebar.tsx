import { request } from "@/constants";
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const RightSidebar = () => {
  return (
    <section className="h-screen xl:w-[400px] flex flex-col w-[320px] pt-10 sticky">
      <h1 className="text-xl font-semibold text-gray-700 ">Request</h1>
      <div className="flex flex-col  gap-y-5 mt-5">
        {request.map((item, index) => (
          <Card key={index} className="w-[20rem] rounded-2xl ">
            <CardContent className="flex flex-row items-center px-8 py-4 gap-x-5">
              <Avatar className="h-12 w-12 ">
                <AvatarImage src={item.img} alt="User Image" />
                <AvatarFallback>{item.name}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-y-1">
                <h1 className="text-md font-medium text-gray-700">
                  {item.name}
                </h1>
                <h1 className="lowercase text-sm text-muted-foreground">
                  {item.number} Mutual Friends
                </h1>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row gap-x-5 items-center ">
              <Button size="lg">
                Accept
              </Button>
              <Button size="lg" variant='secondary'>
                Decline
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RightSidebar;
