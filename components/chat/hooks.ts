import { useChatStore } from "./store";

// Hook for accessing messages
export const useMessages = () => useChatStore((state) => state.messages);

// Hook for accessing loading state
export const useIsLoading = () => useChatStore((state) => state.isLoading);

// Hook for accessing error state
export const useError = () => useChatStore((state) => state.error);

// Hook for accessing settings
export const useSettings = () => useChatStore((state) => state.settings);

// Hook for accessing message style settings
export const useMessageStyle = () => {
  const settings = useChatStore((state) => state.settings);
  return settings?.messageStyle;
};

// Hook for accessing chat actions
export const useChatActions = () => {
  const store = useChatStore();
  return {
    sendMessage: store.sendMessage,
    clearMessages: store.clearMessages,
    updateSettings: store.updateSettings,
    retryMessage: store.retryMessage,
    addMessage: store.addMessage,
    updateMessageStatus: store.updateMessageStatus,
    setLoading: store.setLoading,
    setError: store.setError,
  };
};

// Hook for accessing specific action
export const useSendMessage = () => useChatStore((state) => state.sendMessage);
export const useClearMessages = () =>
  useChatStore((state) => state.clearMessages);
export const useUpdateSettings = () =>
  useChatStore((state) => state.updateSettings);
export const useRetryMessage = () =>
  useChatStore((state) => state.retryMessage);
