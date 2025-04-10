export interface TabsProps {
  tabsList: {
    value: string;
    label: string;
    content: ReactNode;
  }[];
  defaultValue?: string;
  variant?: 'default' | 'pill';
  className?: string;
}
