export type BannerProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'destructive' | 'closeable';
  isOpen?: boolean;
  onClose?: () => void;
};
