import Button from "./Button";
import React from "react";

export default {
  title: "Button",
};

export const Variant1 = () => <Button variant="1">test</Button>;

export const Variant2 = () => (
  <Button variant="2" size="3">
    test
  </Button>
);

export const Accent1 = () => (
  <Button variant="acc-1" size="2">
    test
  </Button>
);
