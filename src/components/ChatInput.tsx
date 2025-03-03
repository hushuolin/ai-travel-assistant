"use client";

import { useState } from "react";

const ChatInput = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Query:", query);
    setQuery(""); // Reset input field after submit
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex space-x-3">
      <input
        type="text"
        placeholder="Ask about a destination..."
        className="flex-1 p-3 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
