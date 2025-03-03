"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const ChatInput = ({ onNewMessage }: { onNewMessage: (message: string) => void }) => {
  const [query, setQuery] = useState("");

  const aiQuery = useMutation({
    mutationFn: async (query: string) => {
      console.log("Sending query to API:", query); // ✅ Debugging log
      const res = await axios.post("/api/chat", { query });
      console.log("AI response:", res.data.message); // ✅ Debugging log
      return res.data.message;
    },
    onSuccess: (message) => {
      onNewMessage(message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || aiQuery.isPending) return;
    aiQuery.mutate(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex space-x-3">
      <input
        type="text"
        placeholder="Ask about a destination..."
        className="flex-1 p-3 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={aiQuery.isPending}
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          aiQuery.isPending ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={aiQuery.isPending}
      >
        {aiQuery.isPending ? "Thinking..." : "Send"}
      </button>
    </form>
  );
};

export default ChatInput;
