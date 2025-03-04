"use client";

import { useSession, signIn } from "next-auth/react";
import ChatInput from "@/components/ChatInput";
import ChatHistory from "@/components/ChatHistory";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<string[]>([]);

  const handleNewMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <motion.p
          className="text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          You must be signed in to access the chat.
        </motion.p>
        <motion.button
          className="btn-primary mt-4"
          onClick={() => signIn("google")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Sign In with Google
        </motion.button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <motion.div
        className="glass max-w-2xl w-full p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">
          AI Travel Assistant
        </h2>
        <ChatHistory messages={messages} />
        <ChatInput onNewMessage={handleNewMessage} />
      </motion.div>
    </div>
  );
}
