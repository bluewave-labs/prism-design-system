'use client';
import { SidebarProps } from '../../types';
import { Sidebar, SidebarFooter, SidebarProvider } from '../ui/sidebar';
import Content from './content';
import Header from './header';
import NavRail from './navRail';

export const AppSidebar = ({ product = 'Example', nav, footer, notifications }: SidebarProps) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <NavRail notifications={notifications} />
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
