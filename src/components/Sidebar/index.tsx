'use client';
import { ReactElement } from 'react';
import { Sidebar, SidebarFooter, SidebarProvider } from '../ui/sidebar';
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

export type SidebarProps = {
  product?: string;
  nav: ItemsNav;
  footer?: ReactElement;
};

const AppSidebar = ({ product = 'Example', nav, footer }: SidebarProps) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <NavRail />
        <Sidebar collapsible="icon">
          <Header product={product} />
          <Content nav={nav} />
          <SidebarFooter>{footer ?? null}</SidebarFooter>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
};

export default AppSidebar;
