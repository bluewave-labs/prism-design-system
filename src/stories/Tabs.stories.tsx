import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, CardContent, CardFooter, CardHeader, Tabs } from '../components';
import '../style/globals.css';

const tabsList = [
  {
    label: 'Account',
    value: 'account',
    content: (
      <Card>
        <CardHeader>Account</CardHeader>
        <CardContent>Account content</CardContent>
        <CardFooter>
          <Button>Account action</Button>
        </CardFooter>
      </Card>
    ),
  },
  {
    label: 'Password',
    value: 'password',
    content: (
      <Card>
        <CardHeader>Password</CardHeader>
        <CardContent>Password content</CardContent>
        <CardFooter>
          <Button>Password action</Button>
        </CardFooter>
      </Card>
    ),
  },
  {
    label: 'Username',
    value: 'username',
    content: (
      <Card>
        <CardHeader>Username</CardHeader>
        <CardContent>Username content</CardContent>
        <CardFooter>
          <Button>Username action</Button>
        </CardFooter>
      </Card>
    ),
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pill', 'tab'],
      description: 'Variant of the tabs',
      table: {
        type: {
          summary: 'default | pill | tab',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    tabsList: {
      control: {
        type: 'object',
      },
      description: 'List of tabs',
      table: {
        type: {
          summary: 'Array<{ label: string; value: string; content: ReactNode }>',
        },
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
      description: 'Tab selected by default, selects the first tab if not provided',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'tabsList[0].value',
        }
      },
    },
    className: {
      control: {
        type: 'text',
      },
      description: 'Class name for the main tabs component',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    contentClassName: {
      control: {
        type: 'text',
      },
      description: 'Class name for the content of the tabs',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    tabsListClassName: {
      control: {
        type: 'text',
      },
      description: 'Class name for the tabs list',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  args: {
    variant: 'default',
    tabsList,
    defaultValue: 'account',
    className: 'w-[400px] mx-auto',
    contentClassName: undefined,
    tabsListClassName: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NestedTabs: Story = {
  args: {
    ...Default.args,
    variant: 'tab',
    tabsList: [
      {
        label: 'Account',
        value: 'account',
        content: <Tabs tabsList={tabsList} defaultValue="account" />,
      },
      {
        label: 'Password',
        value: 'password',
        content: <Tabs tabsList={tabsList} defaultValue="account" />,
      },
      {
        label: 'Username',
        value: 'username',
        content: <Tabs tabsList={tabsList} defaultValue="account" />,
      },
    ],
  },
};
