"use client";

import React from "react";
import { ChatWindow } from "../ChatWindow";
import { QuickReply } from "../types";

export function QuickReplyExample() {
  // Custom quick replies for this example
  const quickReplies: QuickReply[] = [
    { id: "1", text: "👋 Hello", value: "Hello! Nice to meet you!" },
    { id: "2", text: "❓ Help", value: "I need help with something" },
    { id: "3", text: "💡 Ideas", value: "Can you give me some creative ideas?" },
    { id: "4", text: "📝 Write", value: "Can you help me write something?" },
    { id: "5", text: "🎯 Focus", value: "I need help staying focused" },
    { id: "6", text: "🚀 Start", value: "Let's get started!" },
  ];

  return (
    <ChatWindow
      title="Quick Reply Demo"
      className="h-full"
      showHeader={true}
      quickReplies={quickReplies}
    />
  );
}
