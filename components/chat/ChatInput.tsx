"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Smile, Mic } from "lucide-react";
import { useIsLoading, useSendMessage } from "./hooks";

interface ChatInputProps {
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({
  placeholder = "Type your message...",
  disabled = false,
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isLoading = useIsLoading();
  const sendMessage = useSendMessage();

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  }, [input]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading || disabled) {
      return;
    }

    const messageContent = input.trim();
    setInput("");

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      await sendMessage(messageContent);
    } catch (error) {
      console.error("Failed to send message:", error);
      // Optionally restore the input if sending failed
      setInput(messageContent);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const isInputValid = input.trim().length > 0 && !isLoading && !disabled;

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        {/* File Upload Button */}
        <button
          type="button"
          disabled={disabled}
          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Attach file"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        {/* Voice Input Button */}
        <button
          type="button"
          disabled={disabled}
          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Voice input"
        >
          <Mic className="w-5 h-5" />
        </button>

        {/* Emoji Button */}
        <button
          type="button"
          disabled={disabled}
          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Insert emoji"
        >
          <Smile className="w-5 h-5" />
        </button>

        {/* Text Input */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full resize-none border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            rows={1}
            style={{ minHeight: "44px", maxHeight: "120px" }}
          />

          {/* Character Count */}
          {input.length > 0 && (
            <div className="absolute bottom-2 right-2">
              <span
                className={`text-xs ${
                  input.length > 1000 ? "text-red-500" : "text-gray-400"
                }`}
              >
                {input.length}/1000
              </span>
            </div>
          )}
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={!isInputValid || isComposing}
          className={`p-3 rounded-xl transition-all ${
            isInputValid && !isComposing
              ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          title="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>

      {/* Input Validation Messages */}
      {input.length > 1000 && (
        <div className="mt-2 text-sm text-red-600">
          Message is too long. Please keep it under 1000 characters.
        </div>
      )}

      {isLoading && (
        <div className="mt-2 text-sm text-gray-500">
          Please wait while your message is being processed...
        </div>
      )}
    </div>
  );
}
