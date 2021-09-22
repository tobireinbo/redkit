// Generated with util/create-component.js
import React from "react";
import Dropdown from "./Dropdown";
import StyledDropdown from "./Dropdown.styled";
import { Option } from "./Dropdown.types";

export default {
  title: "Dropdown",
};

const options: Array<Option<string>> = [
  { title: "Cow", value: "dnln2j3bjk" },
  { title: "Chicken", value: "fnwjön3n32ln" },
];

export const withOptions = () => (
  <Dropdown
    options={options}
    styles={{ selection: { background: "lightgray" } }}
  />
);

export const styled = () => (
  <StyledDropdown options={options} onChange={(value) => console.log(value)} />
);
