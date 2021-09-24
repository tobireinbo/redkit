import { Variant } from "../types";
import React from "react";

const Container: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { variant?: Variant }
> = (props) => {
  const { children, ...divProps } = props;
  return (
    <div className="p-1 wmax-3 _gapy-3" {...divProps}>
      {children}
    </div>
  );
};

export default Container;
