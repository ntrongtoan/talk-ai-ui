"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface QuickReply {
  id: string;
  text: string;
  value?: string;
}

interface QuickReplyButtonsProps {
  replies: QuickReply[];
  onSelectReply: (reply: QuickReply) => void;
  className?: string;
}

export function QuickReplyButtons({ replies, onSelectReply, className }: QuickReplyButtonsProps) {
  if (replies.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap gap-2 px-4 pb-4', className)}>
      {replies.map((reply) => (
        <Button
          key={reply.id}
          variant="outline"
          size="sm"
          className="h-8 px-3 text-sm rounded-full"
          onClick={() => onSelectReply(reply)}
        >
          {reply.text}
        </Button>
      ))}
    </div>
  );
}
