import { Size, Variant } from "../types";
import React from "react";

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant?: Variant; size?: Size }
> = (props) => {
  const { variant, size, children, ...buttonProps } = props;

  let className = "br-r-2 py-1 px-2 pointer click";
  switch (variant) {
    case "1":
      className += " bg-1_hvr br-1";
      break;
    case "2":
      className += " bg-2_hvr";
      break;
    case "acc-1":
      className += " bg-acc-1_hvr";
      break;
    case "acc-1-grad":
      className += " bg-acc-1-grad_hvr";
      break;
    case "warn-1":
      className += " bg-warn-1_hvr";
      break;
  }

  className += ` t-${size ? size : 4}`;

  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
