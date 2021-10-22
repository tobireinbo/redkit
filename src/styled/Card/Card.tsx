import React from "react";
import { Variant, Size, Common } from "../types";

const Card: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { options?: { floating?: boolean } } & Common
> = ({ variant = "1", spacing = "2", options, children, ...divProps }) => {
  let className = `p-${spacing} _gapy-${spacing} flx-v rel br-r-2`;
  if (options?.floating) {
    className += " sdw-1";
  }

  switch (variant) {
    case "1":
      className += " br-1 bg-1";
      break;
    case "2":
      className += " br-2 bg-2";
      break;
    case "acc-1":
      className += " br-acc-1 bg-acc-1";
      break;
    case "acc-1-grad":
      className += " bg-acc-1-grad";
      break;
    case "warn-1":
      className += " br-warn-1 bg-warn-1";
      break;
  }

  return (
    <div className={className} {...divProps}>
      {children}
    </div>
  );
};

export default Card;
