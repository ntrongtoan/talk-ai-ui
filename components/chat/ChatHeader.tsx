"use client";

import React from "react";
import { Trash2, Download, Upload } from "lucide-react";

interface ChatHeaderProps {
  title: string;
  messageCount: number;
  onClearMessages: () => void;
  onExportChat: () => void;
  onImportChat: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasMessages: boolean;
}

export function ChatHeader({
  title,
  messageCount,
  onClearMessages,
  onExportChat,
  onImportChat,
  hasMessages,
}: ChatHeaderProps) {
  return (
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
            {messageCount} message{messageCount !== 1 ? "s" : ""}
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
            onChange={onImportChat}
            className="hidden"
          />
        </label>

        {/* Export Button */}
        <button
          onClick={onExportChat}
          disabled={!hasMessages}
          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Export chat"
        >
          <Download className="w-4 h-4" />
        </button>

        {/* Clear Messages Button */}
        <button
          onClick={onClearMessages}
          disabled={!hasMessages}
          className="p-2 text-gray-400 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Clear all messages"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
