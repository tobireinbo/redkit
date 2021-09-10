// Generated with util/create-component.js
import React from "react";
import Dropdown from "./Dropdown";
import { Option } from "./Dropdown.types";

export default {
  title: "Dropdown",
};

const options: Array<Option<string>> = [
  { title: "Cow", value: "cow" },
  { title: "Chicken", value: "chicken" },
];

export const withOptions = () => (
  <Dropdown
    options={options}
    styles={{ selection: { background: "lightgray" } }}
  />
);
