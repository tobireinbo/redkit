import "../main.css";
import React from "react";
import { Variant } from "../types";

const Card: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { variant?: Variant; options?: { floating?: boolean } }
> = (props) => {
  const variant = props.variant ? props.variant : "1";

  let className = "flx-v rel _gapy-1 br-r-2 p-2";
  if (props.options?.floating) {
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
    <div className={className} {...props}>
      {props.children}
    </div>
  );
};

export default Card;
