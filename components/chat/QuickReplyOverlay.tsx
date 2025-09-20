"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { QuickReply } from "./types";

interface QuickReplyOverlayProps {
  replies: QuickReply[];
  onSelectReply: (reply: QuickReply) => void;
  className?: string;
  isVisible?: boolean;
}

export function QuickReplyOverlay({
  replies,
  onSelectReply,
  className,
  isVisible = true,
}: QuickReplyOverlayProps) {
  if (replies.length === 0 || !isVisible) return null;

  return (
    <div
      className={cn("absolute bottom-full left-0 right-0 z-10 p-4", className)}
    >
      <div className="flex flex-wrap gap-2 max-w-full justify-center">
        {replies.map((reply) => (
          <Button
            key={reply.id}
            variant="outline"
            size="sm"
            className="h-8 px-3 text-sm rounded-full shadow-sm hover:shadow-sm transition-shadow bg-white hover:bg-gray-50"
            onClick={() => onSelectReply(reply)}
          >
            {reply.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
