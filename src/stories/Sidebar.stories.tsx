import type { Meta, StoryObj } from '@storybook/react';

import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';
import { AppSidebar, SidebarProvider } from '../components';
import '../style/globals.css';

const fallbackUser = async () => ({
  user_id: '1',
  full_name: 'John Doe',
  email: 'john.doe@email.com',
  image: '',
  username: 'john_doe',
});

const items_nav = [
  {
    title: 'Dashboard',
    url: '/',
    icon: <SquareTerminal />,
  },
  {
    title: 'Playground',
    url: '/playground',
    icon: <Bot />,
  },

  {
    title: 'Logs & data',
    url: '/logs-data',
    icon: <BookOpen />,
  },
  {
    title: 'Settings',
    icon: <Settings2 />,
    url: '/settings',
  },
];

const items_nav_collapsable = [
  {
    title: 'Dashboard',
    url: '/',
    icon: <SquareTerminal />,
  },
  {
    title: 'Playground',
    url: '/playground',
    icon: <Bot />,
  },

  {
    title: 'Sidebar',
    url: '/sidebar',
    icon: <BookOpen />,
  },
  {
    title: 'Settings',
    icon: <Settings2 />,
    children: [
      {
        title: 'General',
        url: '/settings/general',
        icon: <Settings2 />,
      },
      {
        title: 'Advanced',
        url: '/settings/advanced',
        icon: <Settings2 />,
      },
      {
        title: 'API',
        url: '/settings/api',
        icon: <Settings2 />,
      },
    ],
  },
];

const notifications = [
  <div key={1}>
    <p className="text-gray-0">New version available</p>
    <p className="text-gray-20 text-xs">v1.2.3</p>
  </div>,
  <div key={2}>
    <p className="text-gray-0">New feature available</p>
    <p className="text-gray-20 text-xs">AI Assistant</p>
  </div>,
  <div key={3}>
    <p className="text-gray-0">New feature available</p>
    <p className="text-gray-20 text-xs">AI Assistant</p>
  </div>,
];

const meta: Meta<typeof AppSidebar> = {
  title: 'Sidebar',
  component: AppSidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    product: {
      control: {
        accept: ['string'],
      },
      description: 'The name of the product.',
      table: {
        type: { summary: 'string' },
      },
    },
    nav: {
      control: 'object',
      description: 'The navigation items.',
      table: {
        type: { summary: 'Array<{ title: string, url: string, icon: ReactNode }>' },
        defaultValue: { summary: '[]' },
      },
    },
    footer: {
      control: 'object',
      description: 'The footer of the sidebar menu.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    notifications: {
      control: 'object',
      description: 'The notifications to be displayed in the NavRail.',
      table: {
        type: { summary: 'Array<ReactNode>' },
        defaultValue: { summary: '[]' },
      },
    },
  },
  args: {
    product: 'Product Name',
    nav: [
      {
        label: 'Label 1',
        items: items_nav,
      },
    ],
    notifications,
  },
  render: (args) => (
    <SidebarProvider>
      <AppSidebar fallbackUser={fallbackUser} {...args} />
    </SidebarProvider>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: 'Product Name',
    nav: [
      {
        label: 'Label 1',
        items: items_nav,
      },
    ],
    notifications,
  },
};

export const Collapsable: Story = {
  args: {
    ...Default.args,
    nav: [
      {
        label: 'Label 1',
        items: items_nav_collapsable,
      },
    ],
  },
};

export const NoLabel: Story = {
  args: {
    ...Default.args,
    nav: [
      {
        items: items_nav,
      },
    ],
  },
};
