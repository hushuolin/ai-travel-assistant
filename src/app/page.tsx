"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/travel-bg.jpg')] bg-cover bg-center brightness-75"></div>

      {/* Content Wrapper with Overlay */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <motion.h1
          className="text-5xl font-extrabold tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✈️ Plan Your Trip with AI
        </motion.h1>
        
        <p className="text-lg mt-4 max-w-2xl text-white/80">
          Let AI help you search, book, and plan your travels seamlessly. Get real-time recommendations and travel insights instantly.
        </p>

        {/* Call to Action */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href="/chat">
            <button className="btn-primary shadow-lg bg-blue-500 hover:bg-blue-600 px-6 py-3">
              Try AI Chat
            </button>
          </Link>
          <Link href="/search">
            <button className="btn-primary shadow-lg bg-white text-gray-900 hover:bg-gray-200 px-6 py-3">
              Explore Destinations
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
