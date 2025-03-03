import ChatInput from "@/components/ChatInput";
import ChatHistory from "@/components/ChatHistory";

export default function ChatPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600">AI Travel Assistant</h2>
      <ChatHistory />
      <ChatInput />
    </div>
  );
}
