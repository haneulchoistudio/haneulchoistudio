"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function go(href: string) {
    router.push(href);
  }

  return (
    <>
      <div className="text-center space-y-3 mb-8 lg:mb-10">
        <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl">
          Hi, I&apos;m Haneul Choi
        </h1>
        <p className="text-lg xl:text-xl text-neutral-600 font-light">
          I am a Korean interpreter based in Kentucky.
        </p>
      </div>
      <ul className="px-10 sm:px-0 w-full sm:w-[325px] mx-auto flex flex-col gap-y-4 pb-5 lg:pb-6 border-b border-dotted mb-5 lg:mb-6">
        <Button
          onClick={() => go("/about/current")}
          variant={"default"}
          size={"lg"}
          className="flex justify-center items-center w-full text-base lg:text-lg uppercase tracking-[0.075rem] py-5 lg:py-6"
        >
          Current Job
        </Button>
        <Button
          onClick={() => go("/about/contact")}
          variant={"default"}
          size={"lg"}
          className="flex justify-center items-center w-full text-base lg:text-lg uppercase tracking-[0.075rem] py-5 lg:py-6 bg-transparent text-neutral-900 border border-neutral-900 shadow-none lg:hover:bg-neutral-900 lg:hover:text-white font-medium"
        >
          Contact
        </Button>
      </ul>

      <Button
        onClick={() => {
          alert("I am working on my updated resume. Please check back later!");
        }}
        variant={"link"}
        size={"lg"}
        className="uppercase tracking-[0.075rem] bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 border-b border-sky-400/0 rounded-none lg:hover:border-blue-600 flex items-center lg:hover:from-blue-600 lg:hover:to-sky-300"
      >
        Download Resume
      </Button>
    </>
  );
}
