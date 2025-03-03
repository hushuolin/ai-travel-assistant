import Image from "next/image";
import TestComponent from "@/components/TestComponent";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to AI Travel Assistant</h1>
      <TestComponent />
    </div>
  );
}

