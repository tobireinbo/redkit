// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import BurgerMenu from "./BurgerMenu";
import { BurgerMenuProps } from "./BurgerMenu.types";

describe("Test Component", () => {
  let props: BurgerMenuProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<BurgerMenu {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("BurgerMenu");

    expect(component).toHaveTextContent("harvey was here");
  });
});
