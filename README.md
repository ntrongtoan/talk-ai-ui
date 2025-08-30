# **ChatUI – React UI Library for AI Chat Applications**

A modern, customizable **React UI library** for building AI-powered chat interfaces.  
Designed for **Next.js**, styled with **Tailwind CSS** and **shadcn/ui**, and optimized for AI use cases like **streaming responses**, **Markdown support**, and **custom themes**.

---

## **✨ Features**

- ✅ Built with **React + TypeScript**
- ✅ **Next.js** ready
- ✅ Styled with **Tailwind + shadcn/ui**
- ✅ **Markdown & code block** support
- ✅ **Streaming responses**
- ✅ **Dark/Light themes**
- ✅ **Customizable components** & hooks
- ✅ **Accessible & responsive**

---

## **📦 Installation**

```bash
# Using npm
npm install talk-ai-ui

# Using yarn
yarn add talk-ai-ui

# Using pnpm
pnpm add talk-ai-ui
```

---

## **⚡ Quick Start**

```tsx
import {
  ChatContainer,
  MessageList,
  MessageBubble,
  InputBar,
} from "talk-ai-ui";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, role: "user", content: "Hello!" },
    { id: 2, role: "assistant", content: "Hi! How can I help you today?" },
  ]);

  return (
    <ChatContainer>
      <MessageList>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role}>
            {msg.content}
          </MessageBubble>
        ))}
      </MessageList>
      <InputBar
        onSend={(text) =>
          setMessages([
            ...messages,
            { id: Date.now(), role: "user", content: text },
          ])
        }
      />
    </ChatContainer>
  );
}
```

---

## **🎨 Theming**

ChatUI uses **shadcn/ui tokens** and **Tailwind** for styling.  
To customize:

```tsx
import { ThemeProvider } from "talk-ai-ui";

<ThemeProvider theme="dark">
  <ChatContainer>{/* your chat UI */}</ChatContainer>
</ThemeProvider>;
```

---

## **📚 Documentation**

- [Full Component Docs](#) _(Coming soon)_
- [Next.js Example](#) _(Coming soon)_

---

## **🚀 Roadmap**

### **Phase 1: Core Components** ✅

- [x] `ChatContainer`
- [x] `MessageBubble`
- [x] `MessageList`
- [x] `InputBar`

### **Phase 2: Advanced Features** 🔄

- [ ] Markdown support
- [ ] Code highlighting
- [ ] Typing indicator
- [ ] Streaming responses

### **Phase 3: Customization & Theming**

- [ ] Theme provider
- [ ] shadcn-based tokens
- [ ] Icon customization

### **Phase 4: Examples & Docs**

- [ ] Storybook
- [ ] Next.js starter
- [ ] Integration guide with OpenAI API

---

## **🤝 Contributing**

We welcome contributions!

- Fork the repo
- Create a new branch
- Submit a pull request

---

## **📜 License**

[MIT](LICENSE)
