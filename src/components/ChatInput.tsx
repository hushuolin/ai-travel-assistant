"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const ChatInput = ({ onNewMessage }: { onNewMessage: (message: string) => void }) => {
  const [query, setQuery] = useState("");

  const aiQuery = useMutation({
    mutationFn: async (query: string) => {
      console.log("Sending query to API:", query);
      const res = await axios.post("/api/chat", { query });
      console.log("AI response:", res.data.message);
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
    <motion.form
      onSubmit={handleSubmit}
      className="mt-4 flex w-full items-center space-x-3 bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Input Field */}
      <input
        type="text"
        placeholder="Ask about a destination..."
        className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/60 focus:ring-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={aiQuery.isPending}
      />

      {/* Submit Button */}
      <motion.button
        type="submit"
        className={`px-5 py-2 text-white font-semibold rounded-full transition-transform ${
          aiQuery.isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 active:scale-95"
        }`}
        disabled={aiQuery.isPending}
        whileTap={{ scale: 0.95 }}
      >
        {aiQuery.isPending ? "Thinking..." : "Send"}
      </motion.button>
    </motion.form>
  );
};

export default ChatInput;
