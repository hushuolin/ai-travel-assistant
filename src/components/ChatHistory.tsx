"use client";

import Image from "next/image";

const ChatHistory = ({ messages }: { messages: { sender: "user" | "ai"; text: string }[] }) => {
  return (
    <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-transparent p-3 space-y-4">
      {messages.map((msg, index) => (
        <div key={index} className={`flex items-start ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
          {/* AI Avatar (Bigger Size) */}
          {msg.sender === "ai" && (
            <div className="w-12 h-12 flex-shrink-0 mr-3">
              <Image
                src="/ai-avatar.png" // ✅ This loads the image from `public/ai-avatar.png`
                alt="AI Avatar"
                width={48} // ⬅️ Increased from 40 to 48
                height={48} // ⬅️ Increased from 40 to 48
                className="rounded-full"
              />
            </div>
          )}

          {/* Chat Bubble */}
          <div
            className={`px-4 py-3 max-w-xs md:max-w-md text-sm rounded-lg shadow-md ${
              msg.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
