type SelectProps = {
  selected: string;
  options: string[];
  onSelect: (val: string) => void;
  disabled?: boolean;
};

export type { SelectProps as S };
