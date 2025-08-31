"use client";

import React from "react";
import { ChatWindow } from "../index";

export function SimpleChat() {
  return (
    <div className="h-[500px] w-full">
      <ChatWindow title="Simple Chat" className="h-full" showHeader={true} />
    </div>
  );
}
