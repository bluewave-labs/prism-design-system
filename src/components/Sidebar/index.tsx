'use client';
import { ReactElement } from 'react';
import { Sidebar, SidebarProvider } from '../ui/sidebar';
import Content from './content';
import Header from './header';
import NavRail from './navRail';

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
      <div className="flex">
        <NavRail />
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
