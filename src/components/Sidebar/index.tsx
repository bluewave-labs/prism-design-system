'use client';
import { ReactElement } from 'react';
import { Sidebar, SidebarProvider } from '../ui/sidebar';
import Content from './content';
import Header from './header';

type ItemNav = {
  title: string;
  url?: string;
  icon: ReactElement;
  children?: ItemNav[];
};

export type ItemsNav = {
  label?: string;
  items: ItemNav[];
}[];

const AppSidebar = ({
  product = 'Example',
  nav,
  footer,
}: {
  product?: string;
  nav: ItemsNav;
  footer?: ReactElement;
}) => {
  return (
    <SidebarProvider>
      <div className="px-4 py-2 flex flex-col">
        <Sidebar collapsible="icon">
          <Header product={product} />
          <Content nav={nav} />
          {footer ?? null}
        </Sidebar>
      </div>
    </SidebarProvider>
  );
};

export default AppSidebar;
