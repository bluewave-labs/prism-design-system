import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronsUpDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { SidebarMenu, SidebarMenuItem, useSidebar } from '../ui/sidebar';

const Footer = () => {
  const { open, isMobile, openMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-center gap-2 mt-4 p-2">
              <Avatar>
                <AvatarImage src="https://placecats.com/32/32" className="w-[32px] h-[32px] rounded-full" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {open || (isMobile && openMobile) ? (
                <>
                  <div className="grow">
                    <h3 className="text-sm font-medium text-gray-10">John Doe</h3>
                    <p className="text-xs font-light text-gray-30">john.doe@email.com</p>
                  </div>
                  <ChevronsUpDown size={16} />
                </>
              ) : null}
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
  );
};

export default Footer;
