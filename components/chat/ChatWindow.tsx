"use client";

import React, { useState } from "react";
import { Settings, Trash2, Palette, Download, Upload } from "lucide-react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import {
  useMessages,
  useError,
  useSettings,
  useClearMessages,
  useUpdateSettings,
  useRetryMessage,
} from "./hooks";

interface ChatWindowProps {
  title?: string;
  className?: string;
  showHeader?: boolean;
  showSettings?: boolean;
}

export function ChatWindow({
  title = "AI Chat Assistant",
  className = "",
  showHeader = true,
  showSettings = true,
}: ChatWindowProps) {
  const messages = useMessages();
  const error = useError();
  const settings = useSettings();
  const clearMessages = useClearMessages();
  const updateSettings = useUpdateSettings();
  const retryMessage = useRetryMessage();

  const [showSettingsPanel, setShowSettingsPanel] = useState(false);

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

  // Early return if settings are not loaded
  if (!settings || !settings.messageStyle) {
    return <div>Loading...</div>;
  }

  const { messageStyle } = settings;

  return (
    <div
      className={`flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      {/* Header */}
      {showHeader && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
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
              <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
              <p className="text-sm text-gray-500">
                {messages.length} message{messages.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {showSettings && (
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

              {/* Settings Button */}
              <button
                onClick={() => setShowSettingsPanel(!showSettingsPanel)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Chat settings"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Settings Panel */}
      {showSettingsPanel && (
        <div className="border-b border-gray-200 bg-gray-50 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Message Color
              </label>
              <input
                type="color"
                value={messageStyle.userBg}
                onChange={(e) =>
                  updateSettings({
                    messageStyle: {
                      ...messageStyle,
                      userBg: e.target.value,
                    },
                  })
                }
                className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Message Color
              </label>
              <input
                type="color"
                value={messageStyle.aiBg}
                onChange={(e) =>
                  updateSettings({
                    messageStyle: {
                      ...messageStyle,
                      aiBg: e.target.value,
                    },
                  })
                }
                className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Border Radius
              </label>
              <input
                type="range"
                min="0"
                max="24"
                value={parseInt(messageStyle.borderRadius)}
                onChange={(e) =>
                  updateSettings({
                    messageStyle: {
                      ...messageStyle,
                      borderRadius: `${e.target.value}px`,
                    },
                  })
                }
                className="w-full"
              />
              <span className="text-sm text-gray-600">
                {messageStyle.borderRadius}
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Padding
              </label>
              <input
                type="range"
                min="8"
                max="24"
                value={parseInt(messageStyle.padding)}
                onChange={(e) =>
                  updateSettings({
                    messageStyle: {
                      ...messageStyle,
                      padding: `${e.target.value}px`,
                    },
                  })
                }
                className="w-full"
              />
              <span className="text-sm text-gray-600">
                {messageStyle.padding}
              </span>
            </div>
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
