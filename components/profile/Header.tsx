import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { EllipsisVertical } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Header = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col ">
        <Image
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt=""
          width={1920}
          height={500}
          className="w-full h-[450px] relative"
        />
        <Image
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
          alt=""
          width={300}
          height={300}
          className="rounded-full relative bottom-40 left-32"
        />
        <div className="flex flex-row ml-[30rem] -mt-[17rem] gap-x-10 justify-between px-20">
          <div className="flex flex-col">
            <h1 className="font-semibold text-4xl  text-gray-700">
              Ashlynn Curtis
            </h1>
            <p className="font-medium text-muted-foreground text-lg">
              @ashlynncurtis
            </p>
          </div>
          <div className="flex flex-row gap-x-5">
            <Button>Follow</Button>
            <Button>Message</Button>
            <Button variant="outline" size="icon1" className="rounded-full">
              <EllipsisVertical />
            </Button>
          </div>
        </div>
        <div className="flex mb-10 mt-24 flex-col mx-[20rem]">
          <div className="flex flex-row gap-x-5 items-center">
            <h1 className="text-gray-700 text-2xl font-semibold">
              Digital Cerreator
            </h1>
            <FaInstagram
              className="text-2xl cursor-pointer hover:text-yellow-600"
              href="https://www.instagram.com/"
            />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
          </div>
          <p className="line-clamp-4 pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
