// Generated with util/create-component.js
import React from "react";
import Dropdown from "./Dropdown";
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
    initialSelection={"dnln2j3bjk"}
  />
);
