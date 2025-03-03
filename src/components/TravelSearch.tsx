"use client";

import { useState } from "react";

const TravelSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="mt-4 flex space-x-3">
      <input
        type="text"
        placeholder="Enter a city or country..."
        className="flex-1 p-3 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default TravelSearch;
