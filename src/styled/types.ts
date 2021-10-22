export type Variant = "1" | "2" | "acc-1" | "warn-1" | "acc-1-grad";

export type Size = "1" | "2" | "3" | "4";

export type Common = {
  variant?: Variant;
  spacing?: Size;
  size?: Size;
  addClass?: string;
};
