import LeftSidebar from "@/components/LeftSidebar";
import Main from "@/components/Main";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-row gap-x-16 mx-auto">
      <Main />
      <RightSidebar />
    </section>
  );
}
