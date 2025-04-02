'use client';
import { Sidebar, SidebarProvider } from '../ui/sidebar';
import Content from './content';
import Footer from './footer';
import Header from './header';

type ItemNav = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ItemsNav = {
  label?: string;
  items: ItemNav[];
}[];

const AppSidebar = ({ product = 'Example', nav }: { product?: string; nav: ItemsNav }) => {
  return (
    <SidebarProvider>
      <div className="px-4 py-2 flex flex-col">
        <Sidebar collapsible="icon">
          <Header product={product} />
          <Content nav={nav} />
          <Footer />
        </Sidebar>
      </div>
    </SidebarProvider>
  );
};

export default AppSidebar;
