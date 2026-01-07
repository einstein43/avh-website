# Component Structure Documentation

## Overview
This project follows a well-organized component structure to maintain a clean and scalable codebase.

## Directory Structure

```
components/
├── layout/           # Layout components (navigation, footer, etc.)
│   ├── Navigation.tsx
│   └── Footer.tsx
├── sections/         # Page section components
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── TechnologySection.tsx
│   ├── BlogSection.tsx
│   └── ContactSection.tsx
├── ui/              # Reusable UI components
│   ├── IconCard.tsx
│   ├── ServiceCard.tsx
│   └── TechCard.tsx
└── widgets/         # Interactive widgets
    └── N8nChatbot.tsx
```

## Component Categories

### Layout Components (`components/layout/`)
Components that define the overall layout structure:
- **Navigation.tsx**: Main navigation bar with mobile menu and language toggle
- **Footer.tsx**: Site footer with branding and copyright

### Section Components (`components/sections/`)
Full-page section components:
- **HeroSection.tsx**: Landing hero section with CTA buttons
- **ServicesSection.tsx**: Services showcase section
- **TechnologySection.tsx**: Technology stack display
- **BlogSection.tsx**: Blog section (coming soon)
- **ContactSection.tsx**: Contact information and form

### UI Components (`components/ui/`)
Reusable, generic UI components:
- **IconCard.tsx**: Card with icon and label
- **ServiceCard.tsx**: Service display card with features list
- **TechCard.tsx**: Technology stack card

### Widget Components (`components/widgets/`)
Standalone interactive features:
- **N8nChatbot.tsx**: Floating n8n chatbot widget

## N8n Chatbot Integration

The chatbot widget is a standalone component that can be easily configured:

### Setup
1. Open `app/page.tsx`
2. Find the `<N8nChatbot />` component
3. Replace `YOUR_N8N_WEBHOOK_URL_HERE` with your actual n8n webhook URL

### Configuration Options
```tsx
<N8nChatbot 
  webhookUrl="https://your-n8n-instance.com/webhook/your-id"
  botName="A-VH Assistant"      // Chatbot display name
  primaryColor="purple"           // Theme color
  position="bottom-right"         // Position on screen
/>
```

### Features
- Floating chat button
- Expandable chat window
- Message history
- Session persistence
- Loading states
- Error handling
- Responsive design
- Keyboard shortcuts (Enter to send)

### N8n Workflow Setup
Your n8n workflow should:
1. Accept POST requests with this structure:
   ```json
   {
     "message": "user message text",
     "sessionId": "unique session identifier"
   }
   ```
2. Return a response with this structure:
   ```json
   {
     "output": "bot response text"
   }
   ```
   or
   ```json
   {
     "message": "bot response text"
   }
   ```

## Usage Guidelines

### Adding New Components
1. Place components in the appropriate category folder
2. Use TypeScript for type safety
3. Follow the existing naming conventions
4. Export as default

### Component Props
- Use interfaces for prop definitions
- Keep props focused and minimal
- Document complex props with JSDoc comments

### Styling
- Use Tailwind CSS classes
- Maintain consistency with the design system
- Use the existing color palette (purple, blue, cyan, etc.)

## Best Practices

1. **Single Responsibility**: Each component should have one clear purpose
2. **Reusability**: Extract common patterns into UI components
3. **Type Safety**: Always define prop interfaces
4. **Performance**: Use React.memo() for expensive components if needed
5. **Accessibility**: Include proper ARIA labels and keyboard navigation

## Internationalization

All text content uses the translations system:
```tsx
import { translations, Language } from '@/lib/translations';

// In component
const t = translations[language];
{t.nav.home}
```

## Future Enhancements

- Add loading skeletons
- Implement error boundaries
- Add component unit tests
- Create Storybook documentation
- Add animation variants
