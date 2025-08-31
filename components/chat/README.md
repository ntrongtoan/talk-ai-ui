# Chat AI UI Components

A comprehensive collection of React components for building AI-powered chat interfaces. These components provide a solid foundation with most of the essential chat logic already implemented, allowing developers to focus on enabling/disabling specific features and integrating their backend services.

## Components Overview

### 1. ChatWindow

The main container component that orchestrates the entire chat interface.

**Features:**

- Global state management
- Component coordination
- Layout management
- Session management
- Event handling

**Props:**

```typescript
interface ChatWindowProps {
  title?: string; // Chat window title
  className?: string; // Additional CSS classes
  showHeader?: boolean; // Show/hide header
  showSettings?: boolean; // Show/hide settings panel
}
```

### 2. ChatMessages

Renders and displays the conversation with support for different message types.

**Features:**

- Message rendering (user, AI, system)
- Date grouping and separators
- Auto-scrolling
- Loading states
- Accessibility support

**Props:**

```typescript
interface ChatMessagesProps {
  onRetry?: (messageId: string) => void;
}
```

### 3. ChatInput

Manages user interaction and message creation.

**Features:**

- Auto-resizing textarea
- File upload support
- Voice input ready
- Emoji picker
- Input validation
- Send functionality

**Props:**

```typescript
interface ChatInputProps {
  placeholder?: string;
  disabled?: boolean;
}
```

### 4. ChatMessage

Individual message component with different styles for user and AI messages.

**Features:**

- Role-based styling
- Status indicators
- Copy functionality
- Retry functionality
- Timestamp display

**Props:**

```typescript
interface ChatMessageProps {
  message: Message;
  onRetry?: (messageId: string) => void;
}
```

## Quick Start

### Basic Usage

```tsx
import { ChatWindow } from "@/components/chat";

function MyApp() {
  return (
    <ChatWindow title="My AI Assistant" showHeader={true} showSettings={true} />
  );
}
```

### Advanced Usage

```tsx
import { ChatWindow, useChatStore } from "@/components/chat";

function CustomChat() {
  const updateSettings = useChatStore((state) => state.updateSettings);

  useEffect(() => {
    // Custom styling
    updateSettings({
      messageStyle: {
        userBg: "#8b5cf6",
        aiBg: "#f1f5f9",
        borderRadius: "20px",
        padding: "16px",
      },
    });
  }, [updateSettings]);

  return (
    <ChatWindow title="Custom Chat" showHeader={true} showSettings={false} />
  );
}
```

## State Management

The chat system uses **Zustand** for state management, providing a lightweight and efficient solution for managing chat state globally.

### Store Structure

```typescript
interface ChatStore extends ChatState {
  // State
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  settings: ChatSettings;

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
```

### Using the Store

```typescript
import { useChatStore } from "@/components/chat";

function MyComponent() {
  // Access state
  const messages = useChatStore((state) => state.messages);
  const isLoading = useChatStore((state) => state.isLoading);

  // Access actions
  const sendMessage = useChatStore((state) => state.sendMessage);
  const clearMessages = useChatStore((state) => state.clearMessages);

  // Use in component...
}
```

### Available Actions

- `sendMessage(content: string)` - Send a new message
- `clearMessages()` - Clear all messages
- `updateSettings(settings)` - Update chat settings
- `retryMessage(messageId)` - Retry a failed message
- `addMessage(message)` - Add a custom message
- `updateMessageStatus(id, status)` - Update message status
- `setLoading(loading)` - Set loading state
- `setError(error)` - Set error state

## Customization

### Message Styling

```typescript
const customSettings = {
  messageStyle: {
    userBg: "#6366f1", // User message background
    aiBg: "#f3f4f6", // AI message background
    borderRadius: "12px", // Message border radius
    padding: "12px", // Message padding
  },
};

// Apply settings
updateSettings(customSettings);
```

### Features Configuration

```typescript
const features = {
  markdown: true, // Enable markdown support
  codeHighlighting: true, // Enable code highlighting
  fileUploads: true, // Enable file uploads
  streaming: true, // Enable streaming responses
};
```

## Message Types

### User Message

```typescript
{
  id: 'user-123',
  role: 'user',
  content: 'Hello, how are you?',
  timestamp: new Date(),
  status: 'sent'
}
```

### AI Message

```typescript
{
  id: 'ai-456',
  role: 'assistant',
  content: 'I\'m doing well, thank you for asking!',
  timestamp: new Date(),
  status: 'sent'
}
```

### System Message

```typescript
{
  id: 'system-789',
  role: 'system',
  content: 'User joined the chat',
  timestamp: new Date()
}
```

## Persistence

The chat store automatically persists messages and settings to localStorage using Zustand's persist middleware. This ensures that:

- Chat history is preserved across browser sessions
- User preferences are maintained
- Settings are automatically restored

## Accessibility Features

- Screen reader support
- Keyboard navigation
- ARIA labels
- Focus management
- High contrast support
- Semantic HTML structure

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Dependencies

- React 18+
- TypeScript 4.5+
- Tailwind CSS 3.0+
- Zustand 4.0+
- Lucide React (for icons)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
