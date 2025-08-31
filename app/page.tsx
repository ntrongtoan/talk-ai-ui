"use client";

import { ChatWindow } from "../components/chat";

export default function Chat() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto h-[800px]">
        <ChatWindow
          title="AI Chat Assistant"
          className="h-full"
          showHeader={true}
          showSettings={true}
        />
      </div>
    </div>
  );
}
