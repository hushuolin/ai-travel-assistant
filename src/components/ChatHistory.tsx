"use client";

import { useState } from "react";

const ChatHistory = () => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg h-40 overflow-y-auto">
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet...</p>
      ) : (
        messages.map((msg, index) => <p key={index} className="text-black">{msg}</p>)
      )}
    </div>
  );
};

export default ChatHistory;
