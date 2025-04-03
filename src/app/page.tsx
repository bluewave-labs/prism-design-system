'use client';
import AppSidebar from '@/components/Sidebar';
import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';

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
  {
    title: 'Logs & data',
    url: '/logs-data',
    icon: <BookOpen />,
  },
];

export default function Home() {
  return <AppSidebar product="RockScraper" nav={[{ items: items_nav }]} />;
}
