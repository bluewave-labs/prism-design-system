# Prism Design System

A modern, accessible, and customizable React component library built with Tailwind CSS by [Uprock](https://uprock.com).


## Features

- 🎨 **Comprehensive Component Library**: Button, Card, Input, Modal, Radio, Select, Sidebar, Switch, Table, Tabs, and more
- 🎯 **Accessibility First**: Built with accessibility in mind using Radix UI primitives
- 🎨 **Themeable**: Customizable colors and styles
- 📦 **TypeScript Support**: Fully typed components
- 🎨 **Tailwind CSS**: Built with Tailwind for consistent styling
- 📚 **Storybook Documentation**: Interactive component documentation

## Installation

```bash
npm install @bluewavelabs/prism-ui
```

## Quick Start

1. Import the styles in your app's entry point (e.g., `App.tsx` or `main.tsx`):

```tsx
import '@bluewavelabs/prism-ui/style';
```

2. Use the components in your app:

```tsx
import { Button, Card, Input } from '@bluewavelabs/prism-ui';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Card>
        <Card.Title>Welcome</Card.Title>
        <Card.Content>This is a card</Card.Content>
      </Card>
      <Input label="Enter text" />
    </div>
  );
}
```

## Components

### Basic Components
- [Button](./src/components/Button) - Versatile button component with multiple variants
- [Card](./src/components/Card) - Flexible card component for content display
- [Input](./src/components/Input) - Form input component with validation support

### Form Components
- [Radio](./src/components/Radio) - Radio button component
- [Select](./src/components/Select) - Dropdown select component
- [Switch](./src/components/Switch) - Toggle switch component

### Layout Components
- [Modal](./src/components/Modal) - Dialog/modal component
- [Sidebar](./src/components/Sidebar) - Navigation sidebar
- [Table](./src/components/Table) - Data table component
- [Tabs](./src/components/Tabs) - Tabbed interface component

## Styling

Prism uses Tailwind CSS for styling. You can customize the theme by:

1. Extending the Tailwind config:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
}
```

2. Importing the base styles:
```js
import '@bluewavelabs/prism-ui/style';
```

## Development

### Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run storybook
```

### Building

```bash
npm run build
```

### Publishing

```bash
npm run release
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Uprock Prism](https://uprock.com/)