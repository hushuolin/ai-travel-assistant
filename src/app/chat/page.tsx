"use client";

import { useSession, signIn } from "next-auth/react";
import ChatInput from "@/components/ChatInput";
import ChatHistory from "@/components/ChatHistory";
import { useState } from "react";

export default function ChatPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<string[]>([]);

  const handleNewMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  if (status === "loading") {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg">You must be signed in to access the chat.</p>
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded mt-4 hover:bg-blue-600 transition"
          onClick={() => signIn("google")}
        >
          Sign In with Google
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600">AI Travel Assistant</h2>
      <ChatHistory messages={messages} />
      <ChatInput onNewMessage={handleNewMessage} />
    </div>
  );
}
