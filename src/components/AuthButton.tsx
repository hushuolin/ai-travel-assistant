"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  return session ? (
    <div className="flex items-center space-x-4">
      <p className="text-white">{session.user?.name}</p>
      <button className="bg-red-500 px-4 py-2 text-white rounded" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  ) : (
    <button className="bg-blue-500 px-4 py-2 text-white rounded" onClick={() => signIn("google")}>
      Sign In with Google
    </button>
  );
};

export default AuthButton;
