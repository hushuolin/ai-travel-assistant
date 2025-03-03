"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession(); // ✅ Get authentication state

  return (
    <nav className="w-full bg-blue-600 p-4 text-white flex justify-between items-center">
      {/* Left-side Links */}
      <div className="flex space-x-6">
        <Link href="/" className={pathname === "/" ? "underline" : ""}>Home</Link>
        <Link href="/chat" className={pathname === "/chat" ? "underline" : ""}>AI Chat</Link>
        <Link href="/search" className={pathname === "/search" ? "underline" : ""}>Travel Search</Link>
      </div>

      {/* Right-side Auth Buttons */}
      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <p className="hidden sm:block">Hello, {session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
