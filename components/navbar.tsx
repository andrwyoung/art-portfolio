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
    <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 px-14 pt-4 pb-16 sm:pb-8">
      <Link href="/">
        <span className="font-logo text-7xl sm:text-7xl  text-highlight hover:scale-105 cursor-pointer transition-all block">
          Andrew Yong
        </span>
      </Link>
      <div className="flex flex-row gap-8">
        <Link href="/" className={`${linkClass("/")}`}>
          Portfolio
        </Link>
        <Link href="/about" className={`${linkClass("/about")}`}>
          About
        </Link>
        <Link href="/contact" className={`${linkClass("/contact")}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
