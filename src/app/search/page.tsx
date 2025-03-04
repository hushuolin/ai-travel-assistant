"use client";

import { motion } from "framer-motion";
import TravelSearch from "@/components/TravelSearch";

export default function SearchPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/search-bg.jpg')] bg-cover bg-center brightness-75"></div>

      {/* Content Wrapper */}
      <motion.div
        className="glass max-w-2xl w-full p-6 rounded-xl shadow-lg relative z-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold drop-shadow-lg text-center">
          Search for Destinations
        </h2>
        <TravelSearch />
      </motion.div>
    </div>
  );
}
