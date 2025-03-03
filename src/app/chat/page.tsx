"use client";

import ChatInput from "@/components/ChatInput";
import ChatHistory from "@/components/ChatHistory";
import { useState, useEffect } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleNewMessage = (message: string) => {
    console.log("New message received:", message); // ✅ Debugging log
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    console.log("Chat history updated:", messages);
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600">AI Travel Assistant</h2>
      <ChatHistory messages={messages} />
      <ChatInput onNewMessage={handleNewMessage} />
    </div>
  );
}
