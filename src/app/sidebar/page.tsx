'use client';
import AppSidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Sidebar/footer';
import { cn } from '../../lib/utils';
import { SidebarProps } from '../../types';
import codeToHtml from '../../utils/codeToHtml';
import { BookOpen, Bot, Copy, Settings2, SquareTerminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';

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

type OptionsType = 'complete' | 'no-footer' | 'no-label' | 'no-collapsable' | 'more-categories' | 'no-notifications';

const baseProps: SidebarProps = {
  product: 'RockScraper',
  nav: [
    {
      label: 'Platform',
      items: items_nav_collapsable,
    },
  ],
  footer: <Footer />,
  notifications,
};

const options: { option: OptionsType; text: string; prop: (val: SidebarProps) => SidebarProps }[] = [
  {
    option: 'complete',
    text: 'Complete',
    prop: () => baseProps,
  },
  {
    option: 'no-footer',
    text: 'Without footer',
    prop: (prev) => ({
      ...prev,
      footer: prev.footer ? undefined : <Footer />,
    }),
  },
  {
    option: 'no-label',
    text: 'Without label',
    prop: (prev) => ({
      ...prev,
      nav: prev.nav.map((nav) => (nav.label ? { ...nav, label: undefined } : { ...nav, label: 'Platform' })),
    }),
  },
  {
    option: 'no-collapsable',
    text: 'No collapsable item',
    prop: (prev) => ({
      ...prev,
      nav: prev.nav.some((it) => it.items.some((item) => item.children))
        ? [
            {
              items: items_nav,
              label: 'Platform',
            },
          ]
        : [{ items: items_nav_collapsable, label: 'Platform' }],
    }),
  },
  {
    option: 'more-categories',
    text: 'More categories',
    prop: (prev) => ({
      ...prev,
      nav:
        prev.nav.length === 1
          ? [
              {
                label: 'Platform',
                items: items_nav_collapsable,
              },
              {
                label: 'Integrations',
                items: items_nav,
              },
            ]
          : [
              {
                label: 'Platform',
                items: items_nav_collapsable,
              },
            ],
    }),
  },
  {
    option: 'no-notifications',
    text: 'Without notifications',
    prop: (prev) => ({
      ...prev,
      notifications: prev.notifications ? undefined : notifications,
    }),
  },
];

const propTypes = `{
  product?: string;
  nav: {
    label?: string;
    items: {
      title: string;
      url?: string;
      icon: ReactNode;
      children?: {
        title: string;
        url?: string;
        icon: ReactNode;
      }[];
    }[];
  }[];
  footer?: ReactNode;
  notifications?: ReactNode[];
}`;

export default function Home() {
  const [props, setProps] = useState<SidebarProps>(baseProps);
  const [htmlProps, setHtmlProps] = useState<string>('');
  const [selected, setSelected] = useState<OptionsType[]>([options[0].option]);
  const [propType, setPropType] = useState<string>('');

  const buildHtmlProps = async () => {
    const sanitizedProps = {
      ...props,
      nav: props.nav.map((nav) => ({
        ...nav,
        items: nav.items.map((item) => ({
          ...item,
          icon: item.icon ? ReactDOMServer.renderToString(item.icon) : undefined,
          children: item.children
            ? item.children.map((child) => ({
                ...child,
                icon: child.icon ? ReactDOMServer.renderToString(child.icon) : undefined,
              }))
            : undefined,
        })),
      })),
      footer: props.footer ? ReactDOMServer.renderToString(props.footer) : undefined,
      notifications: props.notifications
        ? props.notifications.map((notification) => ReactDOMServer.renderToString(notification))
        : undefined,
    };
    const html = await codeToHtml(JSON.stringify(sanitizedProps, null, 2));
    setHtmlProps(html);
  };

  const buildPropTypes = async () => {
    const propToHtml = await codeToHtml(propTypes);
    setPropType(propToHtml);
  };

  useEffect(() => {
    buildHtmlProps();
  }, [props]);

  useEffect(() => {
    if (selected.length === 0) {
      setSelected([options[0].option]);
      setProps(baseProps);
    }
  }, [selected]);

  useEffect(() => {
    buildPropTypes();
  }, []);

  return (
    <div className="flex justify-end items-start gap-2 w-screen">
      <AppSidebar {...props} />
      <div className="flex flex-col items-center gap-2 p-4 text-gray-0 relative">
        <button
          className="text-gray-50 absolute top-82 right-8 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(propTypes);
          }}
          title="Copy props to clipboard"
        >
          <Copy />
        </button>
        {options.map((option) => (
          <button
            key={option.option}
            className={cn(
              'border border-gray-10 text-gray-10 px-4 py-2 rounded-3xl cursor-pointer w-50',
              selected.includes(option.option) ? 'bg-gray-20 text-gray-90' : 'hover:bg-gray-0/12 hover:text-gray-10'
            )}
            onClick={() => {
              if (option.option === options[0].option) {
                setSelected([option.option]);
              } else {
                const isSelected = selected.includes(option.option);
                const newList = selected.filter((it) => it !== options[0].option);
                setSelected(
                  isSelected ? newList.filter((item) => item !== option.option) : [...newList, option.option]
                );
              }
              setProps((prev) => option.prop(prev));
            }}
          >
            {option.text}
          </button>
        ))}
        <p
          className="flex flex-col w-[95%] mx-auto bg-gray-100 h-[40%] overflow-auto p-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(propType) }}
        />
      </div>
      <div className="w-[500px] h-screen p-4 relative">
        <button
          className="text-gray-50 absolute top-20 right-8 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(props, null, 2));
          }}
          title="Copy props to clipboard"
        >
          <Copy />
        </button>
        <h2 className="font-medium text-xl mb-4">Props</h2>
        <p
          className="flex flex-col w-full bg-gray-100 h-[90%] overflow-auto p-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlProps) }}
        />
      </div>
    </div>
  );
}
