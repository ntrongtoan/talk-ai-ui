"use client";

import React from "react";
import { Message } from "./types";
import { Copy, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useMessageStyle } from "./hooks";

interface ChatMessageProps {
  message: Message;
  onRetry?: (messageId: string) => void;
}

export function ChatMessage({ message, onRetry }: ChatMessageProps) {
  const messageStyle = useMessageStyle();
  
  // Default message style fallback
  const defaultStyle = {
    userBg: "#6366f1",
    aiBg: "#f3f4f6",
    borderRadius: "12px",
    padding: "16px",
    userTextColor: "#ffffff",
    aiTextColor: "#1f2937",
    systemBg: "#fef3c7",
    systemTextColor: "#92400e",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    maxWidth: "max-content",
    minWidth: "200px",
  };
  
  const style = messageStyle || defaultStyle;

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
        backgroundColor: style.userBg,
        borderRadius: style.borderRadius,
        padding: style.padding,
        color: style.userTextColor,
        boxShadow: style.shadow,
        maxWidth: style.maxWidth,
        minWidth: style.minWidth,
      };
    } else if (isAI) {
      return {
        backgroundColor: style.aiBg,
        borderRadius: style.borderRadius,
        padding: style.padding,
        color: style.aiTextColor,
        boxShadow: style.shadow,
        maxWidth: style.maxWidth,
        minWidth: style.minWidth,
      };
    } else {
      return {
        backgroundColor: style.systemBg,
        borderRadius: style.borderRadius,
        padding: style.padding,
        color: style.systemTextColor,
        boxShadow: style.shadow,
        maxWidth: style.maxWidth,
        minWidth: style.minWidth,
      };
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content);
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6 group`}
    >
      <div className="max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-2xl">
        {/* Message Bubble */}
        <div className="relative transition-all duration-200 hover:scale-[1.02]" style={getMessageStyle()}>
          {/* Message Content */}
          <div className="break-words">
            {isSystem && (
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  System
                </span>
              </div>
            )}

            <div className="whitespace-pre-wrap leading-relaxed text-sm">
              {message.content}
            </div>
          </div>

          {/* Message Actions */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-sm">
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-150"
                title="Copy message"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>

              {message.status === "error" && onRetry && (
                <button
                  onClick={() => onRetry(message.id)}
                  className="p-1.5 rounded-md hover:bg-red-50 transition-colors duration-150"
                  title="Retry message"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Message Footer */}
        <div
          className={`flex items-center gap-2 mt-3 ${
            isUser ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-xs text-gray-400 font-medium">
            {formatTimestamp(message.timestamp)}
          </span>

          {/* Status Indicator */}
          <div className="flex items-center">
            {getStatusIcon()}
          </div>
        </div>
      </div>
    </div>
  );
}
