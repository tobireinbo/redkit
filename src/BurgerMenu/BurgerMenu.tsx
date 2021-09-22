// Generated with util/create-component.js
import React, { CSSProperties, useRef, useState } from "react";
import { useOutsideClick } from "../util/hooks";

import { BurgerMenuProps } from "./BurgerMenu.types";

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
  /*
   *
   * defaults
   *
   */
  const classNames = { ...props.classNames };
  const styles: BurgerMenuProps["styles"] = {
    burger: {
      backgroundColor: "transparent",
      border: "none",
      ...props.styles?.burger,
    },
    list: {
      border: "1px solid lightgray",
      borderRadius: "4px",
      backgroundColor: "white",
      position: "absolute",
      ...props.styles?.list,
    },
    burgerBar: {
      padding: "2px",
      minWidth: "2em",
      background: "black",
      margin: "4px",
      borderRadius: "4px",
      ...props.styles?.burgerBar,
    },
  };
  const { links } = props;

  /*
   *
   * hooks
   *
   */
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setOpen(false));

  /*
   *
   * return
   *
   */
  const _Links = (
    <div className={classNames.list} style={styles.list}>
      {links.map((link) =>
        //@ts-ignore
        props.children(link)
      )}
    </div>
  );

  return (
    <div data-testid="BurgerMenu" ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={styles.burger}
        className={classNames.burger}
      >
        <div style={styles.burgerBar} className={classNames.burderBar} />
        <div style={styles.burgerBar} className={classNames.burderBar} />
        <div style={styles.burgerBar} className={classNames.burderBar} />
      </button>
      {open && _Links}
    </div>
  );
};

export default BurgerMenu;
