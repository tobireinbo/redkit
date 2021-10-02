import React from "react";
import Dropdown from "../../core/Dropdown/Dropdown";
import { DropdownProps } from "../../core/Dropdown/Dropdown.types";

const StyledDropdown: React.FC<DropdownProps> = (props) => {
  return (
    <Dropdown
      {...props}
      classNames={{
        selection: "bg-1 br-1 br-r-2 p-1 w-max t-3 flx-ac onFocus_br-acc-1",
        option: "p-1 w-max bg-1_hvr t-3",
        list: "br-rb-3 brr-1 brl-1 brb-1 w-max scrl-y hmax-1 sdw-1",
        clear: "bg-3_hvr pointer br-r-50 p-1",
        wrapper: "w-max",
      }}
    />
  );
};

export default StyledDropdown;
