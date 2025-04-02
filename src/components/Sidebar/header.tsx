import { SidebarHeader, SidebarTrigger, useSidebar } from '../ui/sidebar';

const Header = ({ product = 'Example' }: { product?: string }) => {
  const { open, isMobile, openMobile } = useSidebar();

  return (
    <SidebarHeader>
      {open || (isMobile && openMobile) ? <h1 className="flex items-center">{product}</h1> : null}
      <SidebarTrigger />
    </SidebarHeader>
  );
};

export default Header;
