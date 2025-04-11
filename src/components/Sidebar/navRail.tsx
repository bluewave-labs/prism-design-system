'use client';
import { Bell, Globe, Home, MonitorUp } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { User } from '../../types/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from '../ui/sidebar';
import { getUser, logOut } from './server-functions';

const DASHBOARD_URL = 'https://prism.uprockstaging.com/console';

const products = [
  {
    icon: <MonitorUp className=" [&>svg]:size-6" />,
    name: 'UpTime',
    url: 'https://uptime.uprockstaging.com/uptime',
  },
  {
    icon: <Globe className=" [&>svg]:size-6" />,
    name: 'RockScapper',
    url: 'https://rockscraper.uprockstaging.com/dashboard',
  },
];

const NavRail = ({ notifications }: { notifications?: ReactNode[] }) => {
  const [url, setUrl] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const { isMobile } = useSidebar();

  const findUser = async () => {
    const cookieUser = await getUser();
    if (cookieUser) {
      setUser(cookieUser);
    } else {
      window.location.href = DASHBOARD_URL;
    }
  };

  useEffect(() => {
    setUrl(window.location.href);
    findUser();
  }, []);

  const hasNotifications = notifications?.length && notifications.length > 0;

  return (
    <SidebarRail>
      <SidebarHeader className="p-0 w-8 h-8 md:w-10 md:h-10 justify-center">
        {isMobile ? (
          <SidebarTrigger />
        ) : (
          <SidebarMenuButton
            asChild
            isActive={url?.includes(DASHBOARD_URL)}
            className="flex items-center justify-center h-10"
          >
            <Link href={DASHBOARD_URL} title="Dashboard">
              <Home className=" [&>svg]:size-6" />
            </Link>
          </SidebarMenuButton>
        )}
      </SidebarHeader>
      <SidebarContent className="grow">
        <SidebarMenu className="">
          {products.map((product) => (
            <SidebarMenuItem key={product.name}>
              <SidebarMenuButton
                asChild
                isActive={url?.includes(product.url)}
                className="flex items-center justify-center h-10"
              >
                <Link href={product.url} title={product.name}>
                  {product.icon}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-0 self-end">
        <SidebarMenu className="flex flex-col items-center justify-center gap-1">
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                <span
                  className={cn(
                    'relative',
                    hasNotifications
                      ? 'before:w-1.5 before:h-1.5 before:bg-[#FFB4AB] before:rounded-full before:-top-0.5 before:-right-0.5 before:absolute'
                      : ''
                  )}
                >
                  <Bell className="text-gray-10" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`}
              >
                {hasNotifications ? (
                  notifications.map((notification, index) => (
                    <DropdownMenuItem asChild key={index} className="max-w-64 flex flex-col gap-1 items-start">
                      {notification}
                    </DropdownMenuItem>
                  ))
                ) : (
                  <DropdownMenuItem className="max-w-64">
                    <span className="text-gray-40">No notifications</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center">
                  {user ? (
                    <Avatar>
                      <AvatarImage src={user.image} className="w-8 h-8 rounded-full" />
                      <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar>
                      <AvatarImage src="https://placecats.com/32/32" className="w-8 h-8 rounded-full" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className={`w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`}
              >
                <DropdownMenuItem
                  onClick={() => {
                    logOut().then(() => (window.location.href = `https://prism.uprockstaging.com/auth/register`));
                  }}
                >
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarRail>
  );
};

export default NavRail;
