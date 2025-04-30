export type SelectProps = {
  selected: string;
  options: string[];
  onSelect: (val: string) => void;
  disabled?: boolean;
  className?: string;
};
