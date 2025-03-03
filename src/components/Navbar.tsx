"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-blue-600 p-4 text-white flex justify-center space-x-6">
      <Link href="/" className={pathname === "/" ? "underline" : ""}>Home</Link>
      <Link href="/chat" className={pathname === "/chat" ? "underline" : ""}>AI Chat</Link>
      <Link href="/search" className={pathname === "/search" ? "underline" : ""}>Travel Search</Link>
    </nav>
  );
};

export default Navbar;
