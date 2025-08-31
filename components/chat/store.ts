import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Message, ChatSettings, ChatState } from "./types";

interface ChatStore extends ChatState {
  // Actions
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  updateSettings: (settings: Partial<ChatSettings>) => void;
  retryMessage: (messageId: string) => Promise<void>;
  addMessage: (message: Message) => void;
  updateMessageStatus: (id: string, status: Message["status"]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const defaultSettings: ChatSettings = {
  theme: "auto",
  messageStyle: {
    userBg: "#6366f1",
    aiBg: "#f3f4f6",
    borderRadius: "12px",
    padding: "16px",
    userTextColor: "#ffffff",
    aiTextColor: "#1f2937",
    systemBg: "#fef3c7",
    systemTextColor: "#92400e",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    maxWidth: "max-content",
    minWidth: "200px",
  },
  features: {
    markdown: true,
    codeHighlighting: true,
    fileUploads: true,
    streaming: true,
  },
};

export const useChatStore = create<ChatStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        messages: [],
        isLoading: false,
        error: null,
        settings: defaultSettings,

        // Actions
        sendMessage: async (content: string) => {
          const userMessage: Message = {
            id: `user-${Date.now()}`,
            role: "user",
            content,
            timestamp: new Date(),
            status: "sending",
          };

          // Add user message
          set((state) => ({
            messages: [...state.messages, userMessage],
            isLoading: true,
            error: null,
          }));

          try {
            // Simulate API call - replace with actual implementation
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const aiMessage: Message = {
              id: `ai-${Date.now()}`,
              role: "assistant",
              content: `This is a simulated response to: "${content}"`,
              timestamp: new Date(),
              status: "sent",
            };

            // Update user message status and add AI response
            set((state) => ({
              messages: state.messages.map((msg) =>
                msg.id === userMessage.id
                  ? { ...msg, status: "sent" as const }
                  : msg
              ),
              isLoading: false,
            }));

            // Add AI message
            set((state) => ({
              messages: [...state.messages, aiMessage],
            }));
          } catch (error) {
            // Handle error
            set((state) => ({
              messages: state.messages.map((msg) =>
                msg.id === userMessage.id
                  ? { ...msg, status: "error" as const }
                  : msg
              ),
              error: "Failed to send message",
              isLoading: false,
            }));
          }
        },

        clearMessages: () => {
          set({ messages: [], error: null });
        },

        updateSettings: (settings: Partial<ChatSettings>) => {
          set((state) => ({
            settings: { ...state.settings, ...settings },
          }));
        },

        retryMessage: async (messageId: string) => {
          set((state) => ({
            messages: state.messages.map((msg) =>
              msg.id === messageId
                ? { ...msg, status: "sending" as const }
                : msg
            ),
          }));

          // Implement retry logic here
          // For now, just simulate a retry
          setTimeout(() => {
            set((state) => ({
              messages: state.messages.map((msg) =>
                msg.id === messageId ? { ...msg, status: "sent" as const } : msg
              ),
            }));
          }, 1000);
        },

        addMessage: (message: Message) => {
          set((state) => ({
            messages: [...state.messages, message],
          }));
        },

        updateMessageStatus: (id: string, status: Message["status"]) => {
          set((state) => ({
            messages: state.messages.map((msg) =>
              msg.id === id ? { ...msg, status } : msg
            ),
          }));
        },

        setLoading: (loading: boolean) => {
          set({ isLoading: loading });
        },

        setError: (error: string | null) => {
          set({ error });
        },
      }),
      {
        name: "chat-store",
        partialize: (state) => ({
          messages: state.messages,
          settings: state.settings,
        }),
      }
    )
  )
);
