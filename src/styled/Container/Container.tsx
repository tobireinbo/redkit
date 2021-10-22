import { Common, Variant } from "../types";
import React from "react";

const Container: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { addClasses?: string } & Common
> = ({ children, size = "3", spacing = "2", addClasses = "", ...divProps }) => {
  return (
    <div className="w-max flx-jc">
      <div
        className={`w-max p-1 wmax-${size} _gapy-${spacing} ${addClasses}`}
        {...divProps}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
