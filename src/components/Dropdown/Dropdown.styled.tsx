import React from "react";
import Dropdown_ from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";
import "../../styled/main.css";

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <Dropdown_
      {...props}
      classNames={{
        selection: "bg-input br-r-2 p-1 w-max",
        option: "p-1 w-max bg-1_hvr",
        list: "br-r-3 br-1 w-max ovfl-h",
        clear: "bg-3_hvr pointer br-r-2",
        wrapper: "w-max",
      }}
    />
  );
};

export default Dropdown;
