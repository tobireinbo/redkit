// Generated with util/create-component.js
import React, { useEffect, useRef } from "react";
import { useOutsideClick } from "../../util/hooks";

import { ModalProps } from "./Modal.types";

const Modal: React.FC<ModalProps> = (props) => {
  //disable scrolling while active
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const innerRef = useRef(null);

  props.onOutsideClick && useOutsideClick(innerRef, props.onOutsideClick);

  return (
    <div
      data-testid="Modal"
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: props.backgroundColor || "rgba(0,0,0,0.3)",
        zIndex: props.zIndex || 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={innerRef}>{props.children}</div>
    </div>
  );
};

export default Modal;
