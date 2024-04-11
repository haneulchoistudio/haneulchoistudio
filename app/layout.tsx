import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Me from "@/public/me.jpg";

export const metadata: Metadata = {
  title: "Haneul Choi Studio",
  description:
    "I am Haneul Choi. I am a Korean-English interpreter based in Kentucky.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="h-full flex flex-col justify-start items-center">
          <ul className="grid grid-cols-1 mb-10 lg:mb-14 grayscale rounded-b-full overflow-hidden">
            <picture className="block sm:w-[400px] mx-auto">
              <Image src={Me} alt="Haneul Choi" className="w-auto" />
            </picture>
          </ul>
          {children}
        </main>
      </body>
    </html>
  );
}
