import React from "react";
import { CloseCircle } from "../../core/Dropdown/Dropdown";

const Frame: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { title: string; onClose: () => void; animate?: boolean }
> = (props) => {
  const { title, onClose, children, animate, ...divProps } = props;
  return (
    <div
      className={`br-2 br-r-2 ${animate ? "scale_blend_in" : ""}`}
      {...divProps}
    >
      <div className="p-1 brb-2 bg-2 flx-ac flx-btwn">
        <div className="flx-ac">
          <h3>{title}</h3>
        </div>
        <button className="p-1 br-r-50 bg-4_hvr pointer" onClick={onClose}>
          <div
            style={{
              clipPath: "var(--shape-x)",
              width: "10px",
              height: "10px",
              backgroundColor: "black",
            }}
          />
        </button>
      </div>
      <div className="p-2 flx-v rel _gapy-1">{children}</div>
    </div>
  );
};

export default Frame;
