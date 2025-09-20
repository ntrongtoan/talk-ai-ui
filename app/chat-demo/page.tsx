"use client";

import React from "react";
import { ChatWindow, QuickReplyExample } from "../../components/chat";

export default function ChatDemoPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chat AI UI Components
          </h1>
          <p className="text-lg text-gray-600">
            A comprehensive collection of pre-built chat interface components
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Chat Window */}
          <div className="h-[600px]">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Basic Chat Window
            </h2>
            <ChatWindow
              title="Basic Assistant"
              className="h-full"
              showHeader={true}
            />
          </div>

          {/* Quick Reply Example */}
          <div className="h-[600px]">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Reply Demo
            </h2>
            <QuickReplyExample />
          </div>

          {/* Minimal Chat Window */}
          <div className="h-[600px]">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Minimal Chat Window
            </h2>
            <ChatWindow
              title="Minimal Chat"
              className="h-full"
              showHeader={true}
            />
          </div>

          {/* Custom Styled Chat Window */}
          <div className="h-[600px]">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Styled Chat
            </h2>
            <ChatWindow
              title="Custom Styled"
              className="h-full"
              showHeader={true}
            />
          </div>

          {/* Full Featured Chat Window */}
          <div className="h-[600px]">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Full Featured Chat
            </h2>
            <ChatWindow
              title="Full Featured Assistant"
              className="h-full"
              showHeader={true}
            />
          </div>
        </div>

        {/* Component Documentation */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Component Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Message Types
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User messages</li>
                <li>• AI responses</li>
                <li>• System notifications</li>
                <li>• Status indicators</li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Input Features
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Auto-resizing textarea</li>
                <li>• File upload support</li>
                <li>• Voice input ready</li>
                <li>• Emoji picker</li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Customization
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Color themes</li>
                <li>• Border radius</li>
                <li>• Padding controls</li>
                <li>• Message styling</li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                State Management
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Message history</li>
                <li>• Loading states</li>
                <li>• Error handling</li>
                <li>• Retry functionality</li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Accessibility
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Screen reader support</li>
                <li>• Keyboard navigation</li>
                <li>• ARIA labels</li>
                <li>• Focus management</li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Export/Import
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chat export (JSON)</li>
                <li>• Chat import</li>
                <li>• Message clearing</li>
                <li>• Settings persistence</li>
              </ul>
            </div>
          </div>
        </div>

         {/* Usage Instructions */}
         <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start</h2>

           <div className="space-y-6">
             <div>
               <h3 className="text-lg font-semibold text-gray-800 mb-3">Basic Usage</h3>
               <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                 <pre>{`import { ChatWindow } from '@/components/chat';

function MyApp() {
  return (
    <ChatWindow 
      title="My AI Assistant"
      showHeader={true}
    />
  );
}`}</pre>
               </div>
             </div>

             <div>
               <h3 className="text-lg font-semibold text-gray-800 mb-3">With Quick Replies</h3>
               <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                 <pre>{`import { ChatWindow, QuickReply } from '@/components/chat';

function MyApp() {
  const quickReplies: QuickReply[] = [
    { id: "1", text: "👋 Hello", value: "Hello! How can I help?" },
    { id: "2", text: "❓ Help", value: "I need assistance" },
    { id: "3", text: "💡 Ideas", value: "Give me some creative ideas" },
  ];

  return (
    <ChatWindow 
      title="AI Assistant"
      showHeader={true}
      quickReplies={quickReplies}
    />
  );
}`}</pre>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}
