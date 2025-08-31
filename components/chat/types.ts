export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  status?: "sending" | "sent" | "error";
  metadata?: {
    type?: "text" | "markdown" | "code" | "file";
    language?: string;
    fileName?: string;
    fileSize?: number;
    fileType?: string;
  };
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  settings?: ChatSettings;
}

export interface ChatSettings {
  theme?: "light" | "dark" | "auto";
  features?: {
    markdown: boolean;
    codeHighlighting: boolean;
    fileUploads: boolean;
    streaming: boolean;
  };
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  settings: ChatSettings;
}
