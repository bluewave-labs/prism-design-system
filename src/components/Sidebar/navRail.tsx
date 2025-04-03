'use client';
import { Bell, Globe, Home, MonitorUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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

const DASHBOARD_URL = 'dashboard.uprock.com';

const products = [
  {
    icon: <MonitorUp className=" [&>svg]:size-6" />,
    name: 'UpTime',
    url: 'uptime.uprock.com',
  },
  {
    icon: <Globe className=" [&>svg]:size-6" />,
    name: 'RockScapper',
    url: 'scraper.uprock.com',
  },
];

const NavRail = () => {
  const [url, setUrl] = useState<string | null>(null);
  const { isMobile } = useSidebar();

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

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
            <Link href={`https://${DASHBOARD_URL}`} title="Dashboard">
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
                <Link href={`https://${product.url}`} title={product.name}>
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
                <Bell className="text-gray-10" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>Hi</DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center">
                  <Avatar>
                    <AvatarImage src="https://placecats.com/32/32" className="w-8 h-8 rounded-full" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className={`w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`}
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
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
