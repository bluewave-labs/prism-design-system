'use client';
import AppSidebar, { SidebarProps } from '@/components/Sidebar';
import Footer from '@/components/Sidebar/footer';
import { cn } from '@/lib/utils';
import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';
import { useState } from 'react';

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
    title: 'Logs & data',
    url: '/logs-data',
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

type OptionsType = 'complete' | 'no-footer' | 'no-label' | 'no-collapsable' | 'more-categories';

const baseProps: SidebarProps = {
  product: 'RockScraper',
  nav: [
    {
      label: 'Platform',
      items: items_nav_collapsable,
    },
  ],
  footer: <Footer />,
};

const options: { option: OptionsType; text: string; prop: SidebarProps }[] = [
  {
    option: 'complete',
    text: 'Complete',
    prop: baseProps,
  },
  {
    option: 'no-footer',
    text: 'Without footer',
    prop: {
      ...baseProps,
      footer: undefined,
    },
  },
  {
    option: 'no-label',
    text: 'Without label',
    prop: {
      ...baseProps,
      nav: [{ items: items_nav_collapsable }],
    },
  },
  {
    option: 'no-collapsable',
    text: 'No collapsable item',
    prop: {
      ...baseProps,
      nav: [
        {
          label: 'Platform',
          items: items_nav,
        },
      ],
    },
  },
  {
    option: 'more-categories',
    text: 'More categories',
    prop: {
      ...baseProps,
      nav: [
        {
          label: 'Platform',
          items: items_nav_collapsable,
        },
        {
          label: 'Integrations',
          items: items_nav,
        },
      ],
    },
  },
];

export default function Home() {
  const [props, setProps] = useState<SidebarProps>(baseProps);
  const [selected, setSelected] = useState<OptionsType>(options[0].option);

  return (
    <div className="flex justify-center items-start gap-4 w-screen">
      <AppSidebar {...props} />
      <div className="flex flex-col gap-2 p-4 text-gray-0">
        {options.map((option) => (
          <button
            key={option.option}
            className={cn(
              'border border-gray-10 text-gray-10 px-4 py-2 rounded-3xl cursor-pointer',
              selected === option.option ? 'bg-gray-20 text-gray-90' : 'hover:bg-gray-0/12 hover:text-gray-10'
            )}
            onClick={() => {
              setSelected(option.option);
              setProps(option.prop);
            }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
