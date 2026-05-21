import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-12 px-8 py-5">
      <Link
        href="/"
        className="font-header text-sm tracking-wide hover:text-highlight transition-colors"
      >
        Portfolio
      </Link>
      <Link href="/" className="font-logo text-2xl">
        Andrew Yong
      </Link>
      <Link
        href="/about"
        className="font-header text-sm tracking-wide hover:text-highlight transition-colors"
      >
        About
      </Link>
    </nav>
  );
}
