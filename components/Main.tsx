'use client'
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "./ui/button";
import { BookMarked, BookmarkIcon, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const Main = () => {
  const { user } = useUser()

  return (
    <section className="mt-10 flex flex-col w-[60rem]">
      <div>
        <Card className="rounded-full">
          <CardContent className="flex flex-row justify-between p-3 ">
            <div className="flex flex-row gap-x-3 items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.imageUrl as string} alt="User Image" />
                <AvatarFallback>{user?.fullName}</AvatarFallback>
              </Avatar>
              <h1 className="text-md font-medium text-muted-foreground">
                Share your thoughts
              </h1>
            </div>
            <div>
              <Button size="lg">Post</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col mt-5 gap-y-5">
        <Card className="rounded-3xl">
          <CardHeader className="flex flex-row justify-between p-3 items-center">
            <div className="flex flex-row gap-x-3 items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={
                    "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                  }
                  alt="User Image"
                />
                <AvatarFallback>{user?.firstName}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h1 className="text-md font-medium text-blue-950">
                  Share your thoughts
                </h1>
                <p className="text-sm text-muted-foreground">
                  India, 7 minutes ago
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Ellipsis className="h-6 w-6 text-muted-foreground" />
            </Button>
          </CardHeader>
          <CardContent>
            <Image
              src={
                "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
              }
              alt=";"
              height={400}
              width={1000}
              className="aspect-video h-[400px] rounded-xl"
            />
          </CardContent>
          <CardFooter >
            <div className="mt-2 flex items-center flex-col">
              <div className="flex flex-row items-center ">
                <Avatar className="w-7 h-7 relative">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.fullName}</AvatarFallback>
                </Avatar>
                <Avatar className="w-7 h-7 relative -ml-3">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.fullName}</AvatarFallback>
                </Avatar>
                <Avatar className="w-7 h-7 relative -ml-3">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <p className="pl-3 text-muted-foreground">Liked by <span className="font-semibold text-black"> Rihana maharsh</span> and <span className="font-semibold text-black"> 523 others</span></p>
              </div>
            </div>
              <p className="font-semibold text-black mt-2">Share your Thats <span className="text-muted-forground font-normal">Lorem ipsum dolor sit</span> </p>
              <p className="text-muted-foreground mt-2">View all 120 Comments</p>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader className="flex flex-row justify-between p-3 items-center">
            <div className="flex flex-row gap-x-3 items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={
                    "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                  }
                  alt="User Image"
                />
                <AvatarFallback>{user?.firstName}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h1 className="text-md font-medium text-blue-950">
                  Share your thoughts
                </h1>
                <p className="text-sm text-muted-foreground">
                  India, 7 minutes ago
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Ellipsis className="h-6 w-6 text-muted-foreground" />
            </Button>
          </CardHeader>
          <CardContent>
            <Image
              src={
                "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
              }
              alt=";"
              height={400}
              width={1000}
              className="aspect-video h-[400px] rounded-xl"
            />
          </CardContent>
          <CardFooter >
            <div className="mt-2 flex items-center flex-col">
              <div className="flex flex-row items-center ">
                <Avatar className="w-7 h-7 relative">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <Avatar className="w-7 h-7 relative -ml-3">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <Avatar className="w-7 h-7 relative -ml-3">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <p className="pl-3 text-muted-foreground">Liked by <span className="font-semibold text-black"> Rihana maharsh</span> and <span className="font-semibold text-black"> 523 others</span></p>
              </div>
            </div>
              <p className="font-semibold text-black mt-2">Share your Thats <span className="text-muted-forground font-normal">Lorem ipsum dolor sit</span> </p>
              <p className="text-muted-foreground mt-2">View all 120 Comments</p>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader className="flex flex-row justify-between p-3 items-center">
            <div className="flex flex-row gap-x-3 items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={
                    "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                  }
                  alt="User Image"
                />
                <AvatarFallback>{user?.firstName}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h1 className="text-md font-medium text-blue-950">
                  Share your thoughts
                </h1>
                <p className="text-sm text-muted-foreground">
                  India, 7 minutes ago
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Ellipsis className="h-6 w-6 text-muted-foreground" />
            </Button>
          </CardHeader>
          <CardContent>
            <Image
              src={
                "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
              }
              alt=";"
              height={400}
              width={1000}
              className="aspect-video h-[400px] rounded-xl"
            />
          </CardContent>
            <div className="flex flex-row justify-between px-6 items-center">
              <div className="flex flex-row gap-x-3 items-center">
                <Heart className="h-6 w-6 text-muted-foreground" />
                <MessageCircle className="h-6 w-6 text-muted-foreground" />
                <Send className="h-6 w-6 text-muted-foreground" />
              </div>
              <Button variant="ghost" size="icon">
                <BookmarkIcon className="h-6 w-6 text-muted-foreground" />
              </Button>
            </div>
          <CardFooter >
            <div className="mt-2 flex items-center flex-col">
              <div className="flex flex-row items-center ">
                <Avatar className="w-7 h-7 relative">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <Avatar className="w-7 h-7 relative -ml-3">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <Avatar className="w-7 h-7 relative -ml-3">
                  <AvatarImage
                    src={
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    alt="User Image"
                  />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <p className="pl-3 text-muted-foreground">Liked by <span className="font-semibold text-black"> Rihana maharsh</span> and <span className="font-semibold text-black"> 523 others</span></p>
              </div>
            </div>
              <p className="font-semibold text-black mt-2">Share your Thats <span className="text-muted-forground font-normal">Lorem ipsum dolor sit</span> </p>
              <p className="text-muted-foreground mt-2">View all 120 Comments</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Main;
