"use client";

import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { usePathname, useRouter } from "next/navigation";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  function go(href: string) {
    router.push(href);
  }

  return (
    <>
      <nav className="flex justify-start sm:justify-center w-full sm:w-max gap-x-3.5 lg:gap-x-4 px-10 lg:px-0 mb-4 lg:mb-6">
        <Button
          className="px-0 text-lg lg:text-xl font-light text-neutral-500 sm:text-neutral-400 sm:hover:text-neutral-900"
          size={"lg"}
          variant={"link"}
          onClick={() => go("/")}
        >
          Home
        </Button>
        {pathname === "/about/current" && (
          <Button
            className="px-0 text-lg lg:text-xl font-light text-neutral-500 sm:text-neutral-400 sm:hover:text-neutral-900"
            size={"lg"}
            variant={"link"}
            onClick={() => go("/about/contact")}
          >
            Contact
          </Button>
        )}
        {pathname === "/about/contact" && (
          <Button
            className="px-0 text-lg lg:text-xl font-light text-neutral-500 sm:text-neutral-400 sm:hover:text-neutral-900"
            size={"lg"}
            variant={"link"}
            onClick={() => go("/about/current")}
          >
            Current
          </Button>
        )}
      </nav>
      <section className="px-10 sm:px-0 sm:max-w-[375px] mx-auto">
        {children}
      </section>
    </>
  );
}
