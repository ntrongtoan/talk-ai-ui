"use client";

import { QuickReplyExample } from "@/components/chat";

export default function Chat() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="h-[600px]">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Quick Reply Demo
        </h2>
        <QuickReplyExample />
      </div>
    </div>
  );
}
