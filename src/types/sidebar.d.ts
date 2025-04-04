export type ItemNav = {
  title: string;
  url?: string;
  icon: ReactNode;
  children?: ItemNav[];
};

export type ItemsNav = {
  label?: string;
  items: ItemNav[];
}[];

export type SidebarProps = {
  product?: string;
  nav: ItemsNav;
  footer?: ReactNode;
  notifications?: ReactNode[];
};