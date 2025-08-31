"use client";

import React from "react";
import { ChatWindow } from "../index";

export function CustomStyledChat() {
  return (
    <div className="h-[500px] w-full">
      <ChatWindow
        title="Custom Styled Chat"
        className="h-full"
        showHeader={true}
      />
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Customization via CSS Variables</h3>
        <p className="text-sm text-gray-600 mb-2">
          This chat uses CSS variables for styling. To customize:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>
            Edit{" "}
            <code className="bg-gray-200 px-1 rounded">app/globals.css</code>
          </li>
          <li>
            Modify the{" "}
            <code className="bg-gray-200 px-1 rounded">--chat-*</code> variables
          </li>
          <li>
            Add dark mode overrides in{" "}
            <code className="bg-gray-200 px-1 rounded">.dark</code> selector
          </li>
        </ul>
      </div>
    </div>
  );
}
