type User = {
  user_id: string;
  full_name: string;
  email: string;
  image?: string;
  username: string;
}

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

type SidebarProps = {
  product?: string;
  nav: ItemsNav;
  footer?: ReactNode;
  notifications?: ReactNode[];
  fallbackUser?: () => Promise<User>;
};

export type { ItemNav as I, SidebarProps as S, User as U, ItemsNav as a };
