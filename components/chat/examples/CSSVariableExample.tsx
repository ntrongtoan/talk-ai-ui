"use client";

import React from "react";
import { ChatWindow } from "../index";

export function CSSVariableExample() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          CSS Variable-Based Chat Customization
        </h2>
        <p className="text-gray-700 mb-4">
          This example demonstrates how to customize the chat appearance using
          CSS variables. All styling is controlled through CSS custom
          properties, making it easy to maintain consistent theming across your
          application.
        </p>
      </div>

      {/* Chat Window */}
      <div className="h-[600px] w-full">
        <ChatWindow
          title="Customizable Chat"
          className="h-full"
          showHeader={true}
        />
      </div>

      {/* Customization Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Light Theme Variables */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Light Theme Variables
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">
                --chat-user-bg: #6366f1
              </code>
              <p className="text-gray-600 mt-1">
                User message background color
              </p>
            </div>
            <div>
              <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">
                --chat-ai-bg: #f3f4f6
              </code>
              <p className="text-gray-600 mt-1">AI message background color</p>
            </div>
            <div>
              <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">
                --chat-border-radius: 12px
              </code>
              <p className="text-gray-600 mt-1">
                Message bubble corner roundness
              </p>
            </div>
            <div>
              <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">
                --chat-padding: 16px
              </code>
              <p className="text-gray-600 mt-1">Internal message spacing</p>
            </div>
          </div>
        </div>

        {/* Dark Theme Variables */}
        <div className="p-6 bg-gray-900 text-white border border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-4">
            Dark Theme Variables
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                --chat-window-bg: #1f2937
              </code>
              <p className="text-gray-300 mt-1">Window background color</p>
            </div>
            <div>
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                --chat-header-bg: #374151
              </code>
              <p className="text-gray-300 mt-1">Header background color</p>
            </div>
            <div>
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                --chat-ai-bg: #374151
              </code>
              <p className="text-gray-300 mt-1">AI message background</p>
            </div>
            <div>
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                --chat-input-bg: #374151
              </code>
              <p className="text-gray-300 mt-1">Input field background</p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Guide */}
      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-4">
          How to Implement
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-yellow-800">
          <li>
            Add CSS variables to your{" "}
            <code className="bg-yellow-100 px-1 rounded">app/globals.css</code>{" "}
            file
          </li>
          <li>
            Override variables in{" "}
            <code className="bg-yellow-100 px-1 rounded">.dark</code> selector
            for dark mode
          </li>
          <li>
            Use <code className="bg-yellow-100 px-1 rounded">chat-*</code> CSS
            classes for component styling
          </li>
          <li>
            Customize colors, spacing, and layout by modifying the CSS variables
          </li>
        </ol>
      </div>
    </div>
  );
}
