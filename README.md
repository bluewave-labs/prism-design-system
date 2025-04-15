# Prism Design System

A comprehensive design system by [Uprock](https://uprock.com) that provides a set of reusable components, patterns, and guidelines for building consistent and accessible user interfaces.

## Features

- **Component Library**: A collection of pre-built, customizable UI components
- **Accessibility**: Built with WCAG compliance in mind
- **Documentation**: Comprehensive guides and examples

## Installation

```bash
npm install @bluewavelabs/prism-ui
# or
yarn add @bluewavelabs/prism-ui
```

## Usage

### Import Styles

First, import the styles in your application's entry file (e.g., `App.tsx`, `main.tsx`, or `index.tsx`).

```tsx
// Import complete styles
import '@bluewavelabs/prism-ui/style';
```

### Using Components

```tsx
import { Button, Card, Input } from '@bluewavelabs/prism-ui';

function App() {
  return (
    <Card>
      <Input label="Enter your name" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Available Components

- Button
- Card
- Input
- Select
- Radio
- Switch
- Table
- Tabs
- Modal
- Sidebar

## Documentation

For detailed documentation and examples, visit our [Storybook](https://bluewave-labs.github.io/prism-design-system/?path=/docs/configure-your-project--docs).

## Development

### Local Development

```bash
# Start Storybook
npm run storybook

# Build package
npm run build:pkg

```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
