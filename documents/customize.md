# Chat Window Customization

The chat components can be fully customized using CSS variables and global CSS. All styling options are configurable from a single CSS file, making it easy to maintain consistent theming across your application.

## CSS Variables

The chat system uses CSS custom properties (variables) that can be overridden in your global CSS file. Here are all the available variables:

### Message Styling

```css
:root {
  /* User Message Colors */
  --chat-user-bg: #6366f1;
  --chat-user-text: #ffffff;

  /* AI Message Colors */
  --chat-ai-bg: #f3f4f6;
  --chat-ai-text: #1f2937;

  /* System Message Colors */
  --chat-system-bg: #fef3c7;
  --chat-system-text: #92400e;

  /* Message Layout */
  --chat-border-radius: 12px;
  --chat-padding: 16px;
  --chat-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --chat-max-width: max-content;
  --chat-min-width: 200px;

  /* Message Spacing */
  --chat-message-margin: 24px;
  --chat-message-gap: 16px;
}
```

### Chat Window Styling

```css
:root {
  /* Window Container */
  --chat-window-bg: #ffffff;
  --chat-window-border-radius: 8px;
  --chat-window-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* Header Styling */
  --chat-header-bg: #f9fafb;
  --chat-header-border: #e5e7eb;
  --chat-header-text: #111827;
  --chat-header-subtext: #6b7280;

  /* Input Area */
  --chat-input-bg: #ffffff;
  --chat-input-border: #e5e7eb;
  --chat-input-focus-ring: #6366f1;

  /* Buttons */
  --chat-button-primary-bg: #6366f1;
  --chat-button-primary-hover: #4f46e5;
  --chat-button-primary-text: #ffffff;
  --chat-button-secondary-bg: #f3f4f6;
  --chat-button-secondary-hover: #e5e7eb;
  --chat-button-secondary-text: #6b7280;
}
```

### Dark Mode Support

```css
.dark {
  /* Dark Mode Overrides */
  --chat-window-bg: #1f2937;
  --chat-header-bg: #374151;
  --chat-header-border: #4b5563;
  --chat-header-text: #f9fafb;
  --chat-header-subtext: #d1d5db;

  --chat-ai-bg: #374151;
  --chat-ai-text: #f9fafb;

  --chat-input-bg: #374151;
  --chat-input-border: #4b5563;

  --chat-button-secondary-bg: #4b5563;
  --chat-button-secondary-hover: #6b7280;
  --chat-button-secondary-text: #d1d5db;
}
```

## Implementation

### 1. Add CSS Variables to Your Global CSS

Add these variables to your `app/globals.css` file:

```css
/* Chat Component Customization */
:root {
  /* Message Colors */
  --chat-user-bg: #6366f1;
  --chat-user-text: #ffffff;
  --chat-ai-bg: #f3f4f6;
  --chat-ai-text: #1f2937;
  --chat-system-bg: #fef3c7;
  --chat-system-text: #92400e;

  /* Layout */
  --chat-border-radius: 12px;
  --chat-padding: 16px;
  --chat-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --chat-max-width: max-content;
  --chat-min-width: 200px;

  /* Window */
  --chat-window-bg: #ffffff;
  --chat-window-border-radius: 8px;
  --chat-window-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  /* Header */
  --chat-header-bg: #f9fafb;
  --chat-header-border: #e5e7eb;
  --chat-header-text: #111827;
  --chat-header-subtext: #6b7280;

  /* Input */
  --chat-input-bg: #ffffff;
  --chat-input-border: #e5e7eb;
  --chat-input-focus-ring: #6366f1;

  /* Buttons */
  --chat-button-primary-bg: #6366f1;
  --chat-button-primary-hover: #4f46e5;
  --chat-button-primary-text: #ffffff;
  --chat-button-secondary-bg: #f3f4f6;
  --chat-button-secondary-hover: #e5e7eb;
  --chat-button-secondary-text: #6b7280;
}

.dark {
  --chat-window-bg: #1f2937;
  --chat-header-bg: #374151;
  --chat-header-border: #4b5563;
  --chat-header-text: #f9fafb;
  --chat-header-subtext: #d1d5db;
  --chat-ai-bg: #374151;
  --chat-ai-text: #f9fafb;
  --chat-input-bg: #374151;
  --chat-input-border: #4b5563;
  --chat-button-secondary-bg: #4b5563;
  --chat-button-secondary-hover: #6b7280;
  --chat-button-secondary-text: #d1d5db;
}
```

### 2. Update Component Styles

The components will automatically use these CSS variables. You can also override specific styles by targeting the component classes:

```css
/* Custom message bubble styles */
.chat-message {
  border-radius: var(--chat-border-radius);
  padding: var(--chat-padding);
  box-shadow: var(--chat-shadow);
}

/* Custom window styles */
.chat-window {
  background-color: var(--chat-window-bg);
  border-radius: var(--chat-window-border-radius);
  box-shadow: var(--chat-window-shadow);
}

/* Custom header styles */
.chat-header {
  background-color: var(--chat-header-bg);
  border-bottom: 1px solid var(--chat-header-border);
}
```

## Runtime Customization

In addition to CSS variables, you can customize the chat appearance at runtime using the settings panel:

### Available Settings

- **User Message Color**: Background color for user messages
- **AI Message Color**: Background color for AI messages
- **Border Radius**: Corner roundness for message bubbles
- **Padding**: Internal spacing within message bubbles

### Example Usage

```tsx
import { ChatWindow } from "@/components/chat";

export function CustomChat() {
  return (
    <ChatWindow
      title="Custom Chat"
      className="h-full"
      showHeader={true}
      showSettings={true} // Enable settings panel for runtime customization
    />
  );
}
```

## Advanced Customization

### Custom Message Styles

You can create completely custom message styles by extending the CSS:

```css
/* Custom message types */
.chat-message.user {
  background: linear-gradient(135deg, var(--chat-user-bg), #4f46e5);
  color: var(--chat-user-text);
}

.chat-message.ai {
  background: linear-gradient(135deg, var(--chat-ai-bg), #e5e7eb);
  color: var(--chat-ai-text);
}

/* Custom animations */
.chat-message {
  transition: all 0.3s ease;
}

.chat-message:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Responsive Design

The chat components are fully responsive and can be customized for different screen sizes:

```css
/* Mobile optimizations */
@media (max-width: 768px) {
  :root {
    --chat-padding: 12px;
    --chat-border-radius: 8px;
    --chat-min-width: 150px;
  }
}

/* Tablet optimizations */
@media (min-width: 769px) and (max-width: 1024px) {
  :root {
    --chat-padding: 14px;
    --chat-border-radius: 10px;
  }
}
```

## Theme Presets

You can create theme presets by defining multiple sets of CSS variables:

```css
/* Light Theme */
.theme-light {
  --chat-user-bg: #6366f1;
  --chat-ai-bg: #f3f4f6;
  --chat-window-bg: #ffffff;
}

/* Dark Theme */
.theme-dark {
  --chat-user-bg: #8b5cf6;
  --chat-ai-bg: #374151;
  --chat-window-bg: #1f2937;
}

/* High Contrast Theme */
.theme-high-contrast {
  --chat-user-bg: #000000;
  --chat-ai-bg: #ffffff;
  --chat-user-text: #ffffff;
  --chat-ai-text: #000000;
}
```

## Best Practices

1. **Use CSS Variables**: Always use CSS variables instead of hardcoded values for consistency
2. **Maintain Contrast**: Ensure text colors provide sufficient contrast with background colors
3. **Test Dark Mode**: Verify your customizations work well in both light and dark themes
4. **Performance**: Keep customizations lightweight to maintain smooth animations
5. **Accessibility**: Ensure color combinations meet WCAG contrast guidelines

## Troubleshooting

### Variables Not Working

- Ensure CSS variables are defined in `:root` or a parent selector
- Check that variable names match exactly (case-sensitive)
- Verify the CSS file is properly imported

### Styles Not Applying

- Check CSS specificity - you may need to use `!important` for overrides
- Ensure the component is using the correct CSS classes
- Verify that Tailwind CSS is not overriding your custom styles

### Dark Mode Issues

- Make sure dark mode variables are defined in `.dark` selector
- Check that your app properly toggles the `dark` class on the HTML element
- Verify that CSS variables are being applied in the correct order
