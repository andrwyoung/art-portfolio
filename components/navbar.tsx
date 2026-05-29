"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `font-header font-semibold text-md tracking-wide transition-colors  hover:text-stone-900 hover:scale-105 ${
      pathname === href
        ? "border-b border-foreground text-stone-700"
        : "hover:text-highlight text-stone-500"
    }`;

  return (
    <nav className="flex flex-col items-center justify-center gap-8 px-8 pt-12 pb-8">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <h1 className="font-logo text-7xl sm:text-8xl  text-highlight hover:scale-105 cursor-pointer transition-all">
            Andrew Yong
          </h1>
        </Link>
        {/* <p className="font-body mt-1">Food and Travel Illustrator</p> */}
      </div>
      <div className="flex flex-row gap-8">
        <Link href="/editorial" className={`${linkClass("/editorial")}`}>
          Editorial
        </Link>
        <Link href="/publishing" className={`${linkClass("/publishing")}`}>
          Publishing
        </Link>
        <Link href="/about" className={`${linkClass("/about")}`}>
          About
        </Link>
      </div>
    </nav>
  );
}
