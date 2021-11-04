import { CSSProperties } from "react";

// Generated with util/create-component.js
export type Option<T> = { title: string; value: T };

export interface DropdownProps {
  options: Array<Option<any>>;
  initialSelection?: any;
  preferences?: {
    showSelectionInList?: boolean;
    searchable?: boolean;
    wipeSelectionOnClear?: boolean;
    clearButton?: boolean;
    throwErrorOnSelectionMismatch?: boolean;
  };
  classNames?: {
    list?: string;
    option?: string;
    selection?: string;
    clear?: string;
    wrapper?: string;
  };
  styles?: {
    list?: CSSProperties;
    option?: CSSProperties;
    selection?: CSSProperties;
    clear?: CSSProperties;
    wrapper?: CSSProperties;
  };
  activeStyles?: {
    option?: CSSProperties;
  };
  onChange?: (value: any) => void;
}
