"use client";

import React from "react";
import { Message } from "./types";
import { Copy, AlertCircle, CheckCircle, Clock } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  onRetry?: (messageId: string) => void;
}

export function ChatMessage({ message, onRetry }: ChatMessageProps) {
  const isUser = message.role === "user";
  const isAI = message.role === "assistant";
  const isSystem = message.role === "system";

  const getStatusIcon = () => {
    switch (message.status) {
      case "sending":
        return <Clock className="w-4 h-4 text-blue-500 animate-pulse" />;
      case "sent":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getMessageStyle = () => {
    if (isUser) {
      return {
        backgroundColor: "var(--chat-user-bg)",
        color: "var(--chat-user-text)",
      };
    } else if (isAI) {
      return {
        backgroundColor: "var(--chat-ai-bg)",
        color: "var(--chat-ai-text)",
      };
    } else {
      return {
        backgroundColor: "var(--chat-system-bg)",
        color: "var(--chat-system-text)",
      };
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content);
  };

  const formatTimestamp = (date: Date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6 group`}
      style={{ marginBottom: "var(--chat-message-margin)" }}
    >
      <div className="max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-2xl">
        {/* Message Bubble */}
        <div className="chat-message relative" style={getMessageStyle()}>
          {/* Message Content */}
          <div className="whitespace-pre-wrap break-words">
            {message.content}
          </div>

          {/* Message Footer */}
          <div className="flex items-center justify-between mt-3 text-xs opacity-70">
            <span>{formatTimestamp(message.timestamp)}</span>
            <div className="flex items-center gap-2">
              {getStatusIcon()}
              {isAI && (
                <button
                  onClick={copyToClipboard}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-black/10 rounded"
                  title="Copy message"
                >
                  <Copy className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Error Retry Button */}
          {message.status === "error" && onRetry && (
            <button
              onClick={() => onRetry(message.id)}
              className="mt-2 text-xs text-red-600 hover:text-red-800 underline"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
