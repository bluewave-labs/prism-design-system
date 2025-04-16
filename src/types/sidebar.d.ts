export type User = {
  user_id: string;
  full_name: string;
  email: string;
  image?: string;
  username: string;
};

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

export type NavRailProps = {
  notifications?: ReactNode[];
  user?: User;
  logOut: () => void;
};

export type SidebarProps = NavRailProps & {
  product?: string;
  nav: ItemsNav;
  footer?: ReactNode;
};
