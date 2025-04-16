type User = {
  user_id: string;
  full_name: string;
  email: string;
  image?: string;
  username: string;
};

type ItemNav = {
  title: string;
  url?: string;
  icon: ReactNode;
  children?: ItemNav[];
};

type ItemsNav = {
  label?: string;
  items: ItemNav[];
}[];

type NavRailProps = {
  notifications?: ReactNode[];
  user?: User;
  logOut: () => void;
};

type SidebarProps = NavRailProps & {
  product?: string;
  nav: ItemsNav;
  footer?: ReactNode;
};

export type { ItemNav as I, NavRailProps as N, SidebarProps as S, ItemsNav as a };
