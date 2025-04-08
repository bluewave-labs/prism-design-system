'use client';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ItemNav, ItemsNav } from '../../types';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';

const Content = ({ nav }: { nav?: ItemsNav }) => {
  const pathname = usePathname();
  return (
    <SidebarContent>
      {nav?.map((group, index: number) => (
        <SidebarGroup key={group.label ?? index}>
          {group.label && <SidebarGroupLabel className="uppercase">{group.label}</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {(group.items as ItemNav[]).map(({ title, url, icon, children }) =>
                children ? (
                  <Collapsible className="group/collapsible" key={title}>
                    <SidebarMenuButton asChild>
                      <CollapsibleTrigger className="cursor-pointer">
                        {icon}
                        <span>{title}</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </CollapsibleTrigger>
                    </SidebarMenuButton>
                    <CollapsibleContent>
                      <SidebarGroupContent>
                        {(children as ItemNav[]).map(({ title, url, icon }) => (
                          <SidebarMenuItem key={title}>
                            <SidebarMenuButton asChild isActive={pathname === url}>
                              <Link href={url ?? '#'}>
                                {icon}
                                <span>{title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild isActive={pathname === url}>
                      <Link href={url ?? '#'}>
                        {icon}
                        <span>{title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
};

export default Content;
