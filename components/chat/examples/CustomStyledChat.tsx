"use client";

import React, { useEffect } from "react";
import { ChatWindow } from "../index";
import { useUpdateSettings } from "../hooks";

export function CustomStyledChat() {
  const updateSettings = useUpdateSettings();

  useEffect(() => {
    // Apply custom styling
    updateSettings({
      messageStyle: {
        userTextColor: "#ffffff",
        aiTextColor: "#1f2937",
        systemBg: "#fef3c7",
        systemTextColor: "#92400e",
        shadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        maxWidth: "max-content",
        minWidth: "200px",
        userBg: "#8b5cf6", // Purple
        aiBg: "#f1f5f9", // Light gray
        borderRadius: "20px",
        padding: "16px",
      },
    });
  }, [updateSettings]);

  return (
    <div className="h-[500px] w-full">
      <ChatWindow
        title="Custom Styled Chat"
        className="h-full"
        showHeader={true}
        showSettings={true}
      />
    </div>
  );
}
