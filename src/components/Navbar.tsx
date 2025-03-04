"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white/10 backdrop-blur-md p-4 flex justify-between items-center z-50 rounded-full shadow-md">
      {/* Left-side Links */}
      <div className="flex space-x-6 text-white">
        <Link href="/" className={`nav-link ${pathname === "/" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}>Home</Link>
        <Link href="/chat" className={`nav-link ${pathname === "/chat" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}>AI Chat</Link>
        <Link href="/search" className={`nav-link ${pathname === "/search" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}>Travel Search</Link>
      </div>

      {/* Right-side Auth Buttons */}
      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <p className="hidden sm:block text-white/90">Hello, {session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600 transition shadow-md"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-green-500 px-4 py-2 rounded-full text-white hover:bg-green-600 transition shadow-md"
          >
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
