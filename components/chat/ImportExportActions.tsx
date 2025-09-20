"use client";

import React from "react";
import { Trash2, Download, Upload } from "lucide-react";

interface ImportExportActionsProps {
  onClearMessages: () => void;
  onExportChat: () => void;
  onImportChat: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasMessages: boolean;
}

export function ImportExportActions({
  onClearMessages,
  onExportChat,
  onImportChat,
  hasMessages,
}: ImportExportActionsProps) {
  return (
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
  );
}
