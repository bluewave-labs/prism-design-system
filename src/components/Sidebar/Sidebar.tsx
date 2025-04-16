/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { SidebarProps } from '../../types';
import { Sidebar, SidebarFooter, SidebarTrigger, useSidebar } from '../ui/sidebar';
import Content from './content';
import Header from './header';
import NavRail from './navRail';

export const AppSidebar = ({ product = 'Example', nav, footer, notifications, logOut, user }: SidebarProps) => {
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathname]);

  return isMobile ? (
    <Sidebar
      suppressHydrationWarning
      header={
        <div
          className={cn(
            `sticky z-10 w-full flex items-center justify-start bg-blur border-b-[0.5px] border-gray-0/20 gap-2 p-2 text-gray-10 font-medium`
          )}
          id="mobile-header"
        >
          <SidebarTrigger />
          {nav.some((item) => item.items.some((i) => i.url === pathname)) ? (
            <h1 className="flex items-center">
              {
                nav.find((item) => item.items.some((i) => i.url === pathname))?.items.find((i) => i.url === pathname)
                  ?.title
              }
            </h1>
          ) : null}
        </div>
      }
    >
      <div className="flex">
        <NavRail notifications={notifications} logOut={logOut} user={user} />
        <div className="flex flex-col w-full bg-linear-180 from-blue-105/80 to-blue-115/80 backdrop-blur-xl">
          <Header product={product} />
          <Content nav={nav} />
          <SidebarFooter>{footer ?? null}</SidebarFooter>
        </div>
      </div>
    </Sidebar>
  ) : (
    <div className="flex" suppressHydrationWarning>
      <NavRail notifications={notifications} logOut={logOut} user={user} />
      <Sidebar collapsible="icon">
        <Header product={product} />
        <Content nav={nav} />
        <SidebarFooter>{footer ?? null}</SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
