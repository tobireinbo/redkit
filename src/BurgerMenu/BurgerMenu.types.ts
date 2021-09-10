import { CSSProperties } from "react";

// Generated with util/create-component.js
export interface BurgerMenuProps {
  styles?: {
    burger?: CSSProperties;
    burgerBar?: CSSProperties;
    list?: CSSProperties;
  };
  classNames?: {
    burger?: string;
    burderBar?: string;
    list?: string;
  };
  links: Array<{ title: string; url: string }>;
}
