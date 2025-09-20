"use client";

import React from "react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";
import { ErrorDisplay } from "./ErrorDisplay";
import {
  useMessages,
  useError,
  useClearMessages,
  useRetryMessage,
} from "./hooks";

interface ChatWindowProps {
  title?: string;
  className?: string;
  showHeader?: boolean;
}

export function ChatWindow({
  title = "AI Chat Assistant",
  className = "",
  showHeader = true,
}: ChatWindowProps) {
  const messages = useMessages();
  const error = useError();
  const clearMessages = useClearMessages();
  const retryMessage = useRetryMessage();

  const handleClearMessages = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all messages? This action cannot be undone."
      )
    ) {
      clearMessages();
    }
  };

  const handleExportChat = () => {
    const chatData = {
      title,
      messages: messages,
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(chatData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportChat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const chatData = JSON.parse(e.target?.result as string);
        // Here you would implement the import logic
        console.log("Importing chat data:", chatData);
        alert("Chat import functionality would be implemented here");
      } catch (error) {
        alert("Invalid chat file format");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      className={`chat-window flex flex-col h-full overflow-hidden ${className}`}
    >
      {/* Header */}
      {showHeader && (
        <ChatHeader
          title={title}
          messageCount={messages.length}
          onClearMessages={handleClearMessages}
          onExportChat={handleExportChat}
          onImportChat={handleImportChat}
          hasMessages={messages.length > 0}
        />
      )}

      {/* Error Display */}
      <ErrorDisplay error={error || ""} />

      {/* Messages Area */}
      <ChatMessages onRetry={retryMessage} />

      {/* Input Area */}
      <ChatInput disabled={false} />
    </div>
  );
}
