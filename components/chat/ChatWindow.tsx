"use client";

import React, { useState } from "react";
import { Trash2, Download, Upload } from "lucide-react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
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
        <div className="chat-header flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <h1
                className="text-lg font-semibold"
                style={{ color: "var(--chat-header-text)" }}
              >
                {title}
              </h1>
              <p
                className="text-sm"
                style={{ color: "var(--chat-header-subtext)" }}
              >
                {messages.length} message{messages.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Import Button */}
            <label
              className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
              title="Import chat"
            >
              <Upload className="w-4 h-4" />
              <input
                type="file"
                accept=".json"
                onChange={handleImportChat}
                className="hidden"
              />
            </label>

            {/* Export Button */}
            <button
              onClick={handleExportChat}
              disabled={messages.length === 0}
              className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Export chat"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Clear Messages Button */}
            <button
              onClick={handleClearMessages}
              disabled={messages.length === 0}
              className="p-2 text-gray-400 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Clear all messages"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <ChatMessages onRetry={retryMessage} />

      {/* Input Area */}
      <ChatInput disabled={false} />
    </div>
  );
}
